import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const now = await prisma.$queryRaw`SELECT NOW()`;
  console.log("Database is connected, current time: ", now);
};

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
