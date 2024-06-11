import { faker } from "@faker-js/faker";

const generateFakeReviews = (numReviews: number) => {
  const reviews = [];
  for (let i = 0; i < numReviews; i++) {
    reviews.push({
      name: faker.name.fullName(),
      username: `@${faker.internet.userName()}`,
      body: faker.lorem.sentence(),
      img: faker.image.avatar(),
    });
  }
  return reviews;
};

export const reviews = generateFakeReviews(6); // Génère 6 avis factices
