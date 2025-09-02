import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Vinicius", email: "vinicius@example.com" },
      { name: "Maria", email: "maria@example.com" },
    ],
  });

  console.log("Seed finalizado!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
