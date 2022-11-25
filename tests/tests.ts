import { prismaMock } from "./singleton";

test("should create new user ", async () => {
  const user = {
    id: 1,
    name: "Rich",
    email: "hello@prisma.io",
    acceptTermsAndConditions: true,
  };

  prismaMock.user.create.mockResolvedValue(user);

  await expect(createUser(user)).resolves.toEqual({
    id: 1,
    name: "Rich",
    email: "hello@prisma.io",
    acceptTermsAndConditions: true,
  });
});

