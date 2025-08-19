const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  // Laptops
  {
    id: "1",
    title: "MacBook Pro 16-inch M3 Max",
    price: 2499,
    oldPrice: 2699,
    rating: 5,
    description: "Powerful laptop with M3 Max chip, 36GB RAM, 1TB SSD. Perfect for professional video editing and development.",
    mainImage: "product1.webp",
    slug: "macbook-pro-16-m3-max",
    manufacturer: "Apple",
    categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
    inStock: 15,
    isNew: true,
  },
  {
    id: "2",
    title: "Dell XPS 15 OLED",
    price: 1899,
    rating: 4,
    description: "Premium Windows laptop with Intel i7, 32GB RAM, RTX 4060. Stunning OLED display for creative work.",
    mainImage: "product2.webp",
    slug: "dell-xps-15-oled",
    manufacturer: "Dell",
    categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
    inStock: 8,
  },
  {
    id: "3",
    title: "ThinkPad X1 Carbon Gen 11",
    price: 1649,
    rating: 5,
    description: "Business ultrabook with Intel i7, 16GB RAM, 512GB SSD. Ultra-lightweight and durable design.",
    mainImage: "product3.webp",
    slug: "thinkpad-x1-carbon-gen11",
    manufacturer: "Lenovo",
    categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
    inStock: 12,
  },
  {
    id: "4",
    title: "MacBook Air 15-inch M2",
    price: 1299,
    oldPrice: 1399,
    rating: 5,
    description: "Thin and light laptop with M2 chip, 8GB RAM, 256GB SSD. Perfect balance of performance and portability.",
    mainImage: "product4.webp",
    slug: "macbook-air-15-m2",
    manufacturer: "Apple",
    categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
    inStock: 25,
  },

  // Desktop PCs
  {
    id: "5",
    title: "Gaming PC RTX 4080 Build",
    price: 2299,
    rating: 5,
    description: "High-end gaming desktop with RTX 4080, AMD Ryzen 7 7800X3D, 32GB DDR5, 1TB NVMe SSD.",
    mainImage: "product5.webp",
    slug: "gaming-pc-rtx-4080",
    manufacturer: "Custom Build",
    categoryId: "ss6412b4-22fd-4fbb-9741-d77580dfdcd2",
    inStock: 5,
    isNew: true,
  },
  {
    id: "6",
    title: "Mac Studio M2 Ultra",
    price: 3999,
    rating: 5,
    description: "Professional desktop with M2 Ultra chip, 64GB RAM, 1TB SSD. Ultimate performance for creative professionals.",
    mainImage: "product6.webp",
    slug: "mac-studio-m2-ultra",
    manufacturer: "Apple",
    categoryId: "ss6412b4-22fd-4fbb-9741-d77580dfdcd2",
    inStock: 3,
  },
  {
    id: "7",
    title: "Dell OptiPlex 7000 SFF",
    price: 899,
    rating: 4,
    description: "Compact business desktop with Intel i5, 16GB RAM, 512GB SSD. Perfect for office environments.",
    mainImage: "product7.webp",
    slug: "dell-optiplex-7000-sff",
    manufacturer: "Dell",
    categoryId: "ss6412b4-22fd-4fbb-9741-d77580dfdcd2",
    inStock: 20,
  },

  // Monitors
  {
    id: "8",
    title: "LG UltraWide 34WP65C-B 34-inch",
    price: 349,
    oldPrice: 449,
    rating: 4,
    description: "34-inch curved ultrawide monitor, 3440x1440 resolution, USB-C connectivity, perfect for productivity.",
    mainImage: "product8.webp",
    slug: "lg-ultrawide-34wp65c",
    manufacturer: "LG",
    categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    inStock: 18,
  },
  {
    id: "9",
    title: "Apple Studio Display 27-inch",
    price: 1599,
    rating: 5,
    description: "27-inch 5K Retina display with Thunderbolt 3, built-in camera and speakers. Perfect Mac companion.",
    mainImage: "product9.webp",
    slug: "apple-studio-display-27",
    manufacturer: "Apple",
    categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    inStock: 7,
  },
  {
    id: "10",
    title: "ASUS ROG Swift PG279QM 27-inch",
    price: 699,
    rating: 5,
    description: "27-inch gaming monitor, 1440p, 240Hz, G-Sync compatible. Ultimate gaming experience.",
    mainImage: "product10.webp",
    slug: "asus-rog-swift-pg279qm",
    manufacturer: "ASUS",
    categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    inStock: 12,
  },
  {
    id: "11",
    title: "Samsung Odyssey G9 49-inch",
    price: 1299,
    oldPrice: 1599,
    rating: 4,
    description: "49-inch super ultrawide curved gaming monitor, 5120x1440, 240Hz. Immersive gaming experience.",
    mainImage: "product11.webp",
    slug: "samsung-odyssey-g9-49",
    manufacturer: "Samsung",
    categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    inStock: 4,
  },

  // Accessories
  {
    id: "12",
    title: "Logitech MX Master 3S Mouse",
    price: 99,
    rating: 5,
    description: "Premium wireless mouse with ultra-fast scrolling, customizable buttons, and multi-device connectivity.",
    mainImage: "product12.webp",
    slug: "logitech-mx-master-3s",
    manufacturer: "Logitech",
    categoryId: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
    inStock: 35,
  },
  {
    id: "13",
    title: "Apple Magic Keyboard with Touch ID",
    price: 179,
    rating: 4,
    description: "Wireless keyboard with Touch ID, scissor mechanism, and rechargeable battery. Perfect for Mac users.",
    mainImage: "product1.webp",
    slug: "apple-magic-keyboard-touch-id",
    manufacturer: "Apple",
    categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    inStock: 22,
  },
  {
    id: "14",
    title: "Sony WH-1000XM5 Headphones",
    price: 399,
    oldPrice: 449,
    rating: 5,
    description: "Industry-leading noise canceling wireless headphones with 30-hour battery life and premium sound quality.",
    mainImage: "product2.webp",
    slug: "sony-wh-1000xm5",
    manufacturer: "Sony",
    categoryId: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    inStock: 28,
  },
  {
    id: "15",
    title: "HP LaserJet Pro M404n Printer",
    price: 229,
    rating: 4,
    description: "Fast monochrome laser printer with network connectivity, perfect for home office and small business use.",
    mainImage: "product3.webp",
    slug: "hp-laserjet-pro-m404n",
    manufacturer: "HP",
    categoryId: "fs6412b4-22fd-4fbb-9741-d77512dfdfa3",
    inStock: 15,
  },
  {
    id: "16",
    title: "Anker PowerCore 26800 Power Bank",
    price: 65,
    rating: 5,
    description: "High-capacity portable charger with 26800mAh capacity, fast charging, and multiple USB ports.",
    mainImage: "product4.webp",
    slug: "anker-powercore-26800",
    manufacturer: "Anker",
    categoryId: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    inStock: 45,
  },
  {
    id: "17",
    title: "Razer DeathAdder V3 Gaming Mouse",
    price: 89,
    rating: 5,
    description: "Ergonomic gaming mouse with Focus Pro 30K sensor, 90-hour battery life, and customizable RGB lighting.",
    mainImage: "product5.webp",
    slug: "razer-deathadder-v3",
    manufacturer: "Razer",
    categoryId: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
    inStock: 18,
  },
  {
    id: "18",
    title: "Corsair K95 RGB Platinum XT",
    price: 199,
    oldPrice: 229,
    rating: 5,
    description: "Premium mechanical gaming keyboard with Cherry MX switches, RGB backlighting, and dedicated macro keys.",
    mainImage: "product6.webp",
    slug: "corsair-k95-rgb-platinum-xt",
    manufacturer: "Corsair",
    categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    inStock: 12,
  },

  // Legacy products (keeping some for variety)
  {
    id: "19",
    title: "Canon EOS R5 Camera",
    price: 3899,
    rating: 5,
    description: "Professional mirrorless camera with 45MP sensor, 8K video recording, and advanced autofocus system.",
    mainImage: "product7.webp",
    slug: "canon-eos-r5",
    manufacturer: "Canon",
    categoryId: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    inStock: 6,
  },
  {
    id: "20",
    title: "JBL Charge 5 Bluetooth Speaker",
    price: 179,
    rating: 4,
    description: "Portable waterproof speaker with powerful sound, 20-hour playtime, and power bank functionality.",
    mainImage: "product8.webp",
    slug: "jbl-charge-5",
    manufacturer: "JBL",
    categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
    inStock: 32,
  }
];


const demoCategories = [
  {
    id: "782e7829-806b-489f-8c3a-2689548d7153",
    name: "laptops",
  },
  {
    id: "ss6412b4-22fd-4fbb-9741-d77580dfdcd2",
    name: "computers",
  },
  {
    id: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    name: "monitors",
  },
  {
    id: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
    name: "mice",
  },
  {
    id: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    name: "keyboards",
  },
  {
    id: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    name: "headphones",
  },
  {
    id: "fs6412b4-22fd-4fbb-9741-d77512dfdfa3",
    name: "printers",
  },
  {
    id: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    name: "accessories",
  },
  {
    id: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    name: "cameras",
  },
  {
    id: "7a241318-624f-48f7-9921-1818f6c20d85",
    name: "speakers",
  },
  // Legacy categories (keeping for backward compatibility)
  {
    id: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
    name: "smart-phones",
  },
  {
    id: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    name: "watches",
  },
  {
    id: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
    name: "personal-care",
  },
  {
    id: "d30b85e2-e544-4f48-8434-33fe0b591579",
    name: "mobile-accessories",
  },
  {
    id: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
    name: "home-appliances",
  }
];

async function insertDemoData() {
  
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
  
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
