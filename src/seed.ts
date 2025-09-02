import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "vinicius@example.com" },
    update: {},
    create: { name: "Vinicius", email: "vinicius@example.com" },
  });
  console.log("Seed finished!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
