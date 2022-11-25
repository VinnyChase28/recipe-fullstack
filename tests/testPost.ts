import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function execute() {
  const result = await prisma.post.create({
    data: {
      title: "Join the lasalalla",
      content: "https://slack.prisma.io",
      author: { connect: { email: "alice@prisma.io" } },
    },
  });
  console.log(result);
}

execute();
