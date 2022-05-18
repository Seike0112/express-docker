import express, { Application, Request, Response } from "express"
import { User } from "./entity/User"
import { AppDataSource } from "./config/data-source"

// MySQLコンテナへ接続
AppDataSource.initialize()
  .then(() => {
    console.log("From /src/index.ts：　【起動log】DB接続と初期化が完了しました！")
  })
  .catch((err) => {
    console.error("From /src/index.ts：　【起動log】DB接続と初期化に失敗しました。\n" + "エラー内容：", err)
    console.log("AppDataSource", AppDataSource)
  })

const app: Application = express()
const PORT: string = process.env.PORT



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello World!!!!',
  })
})

try {
  app.listen(PORT, () => {
    console.log(`From /src/index.ts：　【起動log】起動したよ～ん: http://localhost:${PORT}/`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error("From /src/index.ts：　【起動log】" + e.message)
  }
}