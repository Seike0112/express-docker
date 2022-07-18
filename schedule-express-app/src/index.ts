import express, { Application, Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const app: Application = express();
const PORT: string = process.env.PORT;
const prisma = new PrismaClient();

const allUserGet = async () => {
  const allUsers = await prisma.user.findMany({});
  console.dir(allUsers, {depth: null});
};

allUserGet()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'This is Schedule Application',
  });
});

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`)
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  };

};
