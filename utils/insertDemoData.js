const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Smart phone",
    price: 22,
    rating: 5,
    description: "This is smart phone description",
    mainImage: "product1.webp",
    slug: "smart-phone-demo",
    manufacturer: "Samsung",
    category: {
      connect: { name: "smart-phones" },
    },
    inStock: 0,
  },
  {
    id: "2",
    title: "SLR camera",
    price: 24,
    rating: 0,
    description: "This is slr description",
    mainImage: "product2.webp",
    slug: "slr-camera-demo",
    manufacturer: "Canon",
    category: {
      connect: { name: "cameras" },
    },
    inStock: 0,
  },
  {
    id: "3",
    title: "Mixer grinder",
    price: 25,
    rating: 4,
    description: "This is mixed grinder description",
    mainImage: "product3.webp",
    slug: "mixed-grinder-demo",
    manufacturer: "ZunVolt",
    category: { connect: { name: "mixer-grinders" } },
    inStock: 1,
  },
  {
    id: "4",
    title: "Phone gimbal",
    price: 21,
    rating: 5,
    description: "This is phone gimbal description",
    mainImage: "product4.webp",
    slug: "phone-gimbal-demo",
    manufacturer: "Samsung",
    category: { connect: { name: "phone-gimbals" } },
    inStock: 1,
  },
  {
    id: "5",
    title: "Tablet keyboard",
    price: 52,
    rating: 4,
    description: "This is tablet keyboard description",
    mainImage: "product5.webp",
    slug: "tablet-keyboard-demo",
    manufacturer: "Samsung",
    category: { connect: { name: "tablet-keyboards" } },
    inStock: 1,
  },
  {
    id: "6",
    title: "Wireless earbuds",
    price: 74,
    rating: 3,
    description: "This is earbuds description",
    mainImage: "product6.webp",
    slug: "wireless-earbuds-demo",
    manufacturer: "Samsung",
    category: { connect: { name: "earbuds" } },
    inStock: 1,
  },
  {
    id: "7",
    title: "Party speakers",
    price: 35,
    rating: 5,
    description: "This is party speakers description",
    mainImage: "product7.webp",
    slug: "party-speakers-demo",
    manufacturer: "SOWO",
    category: { connect: { name: "speakers" } },
    inStock: 1,
  },
  {
    id: "8",
    title: "Slow juicer",
    price: 69,
    rating: 5,
    description: "Slow juicer desc",
    mainImage: "product8.webp",
    slug: "slow-juicer-demo",
    manufacturer: "Bosch",
    category: { connect: { name: "juicers" } },
    inStock: 1,
  },
  {
    id: "9",
    title: "Wireless headphones",
    price: 89,
    rating: 3,
    description: "This is wireless headphones description",
    mainImage: "product9.webp",
    slug: "wireless-headphones-demo",
    manufacturer: "Sony",
    category: { connect: { name: "headphones" } },
    inStock: 1,
  },
  {
    id: "10",
    title: "Smart watch",
    price: 64,
    rating: 3,
    description: "This is smart watch description",
    mainImage: "product10.webp",
    slug: "smart-watch-demo",
    manufacturer: "Samsung",
    category: { connect: { name: "watches" } },
    inStock: 1,
  },
  {
    id: "11",
    title: "Notebook horizon",
    price: 52,
    rating: 5,
    description: "This is notebook description",
    mainImage: "product11.webp",
    slug: "notebook-horizon-demo",
    manufacturer: "HP",
    category: { connect: { name: "laptops" } },
    inStock: 1,
  },
  {
    id: "12",
    title: "Mens trimmer",
    price: 54,
    rating: 5,
    description: "This is trimmer description",
    mainImage: "product12.webp",
    slug: "mens-trimmer-demo",
    manufacturer: "Gillete",
    category: { connect: { name: "trimmers" } },
    inStock: 0,
  },
  {
    id: "13",
    title: "Sony Bluetooth Speaker",
    price: 100,
    rating: 5,
    description: "This is Sony Bluetooth Speaker",
    mainImage: "sony speaker image 1.jpg",
    slug: "sony-speaker-bluetooth",
    manufacturer: "Sony",
    category: { connect: { name: "speakers" } },
    inStock: 1,
  },
];

const demoProductImages = [
  {
    imageID: "1",
    productID: "13",
    image: "sony speaker image 1.jpg",
  },
  {
    imageID: "2",
    productID: "13",
    image: "sony speaker image 2.jpg",
  },
  {
    imageID: "3",
    productID: "13",
    image: "sony speaker image 3.jpg",
  },
  {
    imageID: "4",
    productID: "13",
    image: "sony speaker image 4.jpg",
  },
];

const demoCategories = [
  {
    name: "speakers",
  },
  {
    name: "trimmers",
  },
  {
    name: "laptops",
  },
  {
    name: "watches",
  },
  {
    name: "headphones",
  },
  {
    name: "juicers",
  },
  {
    name: "speakers",
  },
  {
    name: "earbuds",
  },
  {
    name: "tablet-keyboards",
  },
  {
    name: "phone-gimbals",
  },
  {
    name: "mixer-grinders",
  },
  {
    name: "cameras",
  },
  {
    name: "smart-phones",
  },
];
async function insertDemoData() {
  // Remove duplicate category names
  const uniqueCategories = Array.from(new Set(demoCategories.map(c => c.name))).map(name => ({ name }));

  for (const category of uniqueCategories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {}, // do nothing if exists
      create: category,
    });
  }
  console.log("Demo categories inserted successfully!");

  for (const product of demoProducts) {
  await prisma.product.upsert({
    where: { id: product.id },
    update: {}, // do nothing if exists
    create: product,
  });
}
console.log("Demo products inserted successfully!");

  for (const image of demoProductImages) {
    await prisma.image.create({
      data: image,
    });
  }
  console.log("Demo images inserted successfully!");
}
insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
