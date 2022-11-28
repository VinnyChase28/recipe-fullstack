import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// app.post(`/signup`, async (req, res) => {
//   const { name, email, posts } = req.body;

//get all recipes
app.get("/recipes", async (req, res) => {
  //prisma query limit 10
  const recipeCount = await prisma.recipes.count();
  const skip = Math.floor(Math.random() * recipeCount);
  const recipes = await prisma.recipes.findMany({
    take: 5,
    skip: skip,
    orderBy: {
      recipe_id: "asc",
    },
  });
  res.json(recipes);
});

//   const postData = posts?.map((post: Prisma.PostCreateInput) => {
//     return { title: post?.title, content: post?.content };
//   });

//   const result = await prisma.user.create({
//     data: {
//       name,
//       email,
//       posts: {
//         create: postData,
//       },
//     },
//   });
//   res.json(result);
// });

// app.post(`/post`, async (req, res) => {
//   const { title, content, authorEmail } = req.body;
//   const result = await prisma.post.create({
//     data: {
//       title,
//       content,
//       author: { connect: { email: authorEmail } },
//     },
//   });
//   res.json(result);
// });

// app.put("/post/:id/views", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const post = await prisma.post.update({
//       where: { id: Number(id) },
//       data: {
//         viewCount: {
//           increment: 1,
//         },
//       },
//     });

//     res.json(post);
//   } catch (error) {
//     res.json({ error: `Post with ID ${id} does not exist in the database` });
//   }
// });

// app.put("/publish/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const postData = await prisma.post.findUnique({
//       where: { id: Number(id) },
//       select: {
//         published: true,
//       },
//     });

//     const updatedPost = await prisma.post.update({
//       where: { id: Number(id) || undefined },
//       data: { published: !postData?.published },
//     });
//     res.json(updatedPost);
//   } catch (error) {
//     res.json({ error: `Post with ID ${id} does not exist in the database` });
//   }
// });

// app.delete(`/post/:id`, async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.post.delete({
//     where: {
//       id: Number(id),
//     },
//   });
//   res.json(post);
// });

// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });

// app.get("/user/:id/drafts", async (req, res) => {
//   const { id } = req.params;

//   const drafts = await prisma.user
//     .findUnique({
//       where: {
//         id: Number(id),
//       },
//     })
//     .posts({
//       where: { published: false },
//     });

//   res.json(drafts);
// });

// app.get(`/post/:id`, async (req, res) => {
//   const { id }: { id?: string } = req.params;

//   const post = await prisma.post.findUnique({
//     where: { id: Number(id) },
//   });
//   res.json(post);
// });

// app.get("/feed", async (req, res) => {
//   const { searchString, skip, take, orderBy } = req.query;

//   const or: Prisma.PostWhereInput = searchString
//     ? {
//         OR: [
//           { title: { contains: searchString as string } },
//           { content: { contains: searchString as string } },
//         ],
//       }
//     : {};

//   const posts = await prisma.post.findMany({
//     where: {
//       published: true,
//       ...or,
//     },
//     include: { author: true },
//     take: Number(take) || undefined,
//     skip: Number(skip) || undefined,
//     orderBy: {
//       updatedAt: orderBy as Prisma.SortOrder,
//     },
//   });

//   res.json(posts);
// });

//create hello world in root route
app.get("/", (req, res) => {
  res.send("Welcome to the recipe API");
});

const port: any = process.env.PORT || 80;

const server = app.listen(port, "0.0.0.0", () =>
  console.log(`
🚀 Server ready!
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
