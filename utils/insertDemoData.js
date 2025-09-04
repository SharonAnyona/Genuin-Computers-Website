require("dotenv").config({ path: ".env.local" });
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Starting to seed database...");

  // Create Categories
  const categories = [
    { name: "Smart Phones", slug: "smart-phones" },
    { name: "Tablets", slug: "tablets" },
    { name: "Mouses", slug: "mouses" },
    { name: "Cameras", slug: "cameras" },
    { name: "Smart Watches", slug: "watches" },
    { name: "Laptops", slug: "laptops" },
    { name: "PCs", slug: "computers" },
    { name: "Printers", slug: "printers" },
    { name: "Earbuds", slug: "earbuds" },
    { name: "Head Phones", slug: "headphones" },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  // Create Subcategories
  const subcategories = [
    // Smart Phones
    { name: "iPhone", slug: "iphone", categorySlug: "smart-phones" },
    { name: "Samsung", slug: "samsung", categorySlug: "smart-phones" },
    { name: "Huawei", slug: "huawei", categorySlug: "smart-phones" },
    { name: "Xiaomi", slug: "xiaomi", categorySlug: "smart-phones" },
    { name: "OnePlus", slug: "oneplus", categorySlug: "smart-phones" },
    {
      name: "Google Pixel",
      slug: "google-pixel",
      categorySlug: "smart-phones",
    },

    // Tablets
    { name: "iPad", slug: "ipad", categorySlug: "tablets" },
    {
      name: "Samsung Galaxy Tab",
      slug: "samsung-galaxy-tab",
      categorySlug: "tablets",
    },
    { name: "Huawei MatePad", slug: "huawei-matepad", categorySlug: "tablets" },
    { name: "Lenovo Tab", slug: "lenovo-tab", categorySlug: "tablets" },
    { name: "Amazon Fire", slug: "amazon-fire", categorySlug: "tablets" },

    // Mouses
    { name: "Gaming Mice", slug: "gaming", categorySlug: "mouses" },
    { name: "Wireless Mice", slug: "wireless", categorySlug: "mouses" },
    { name: "Bluetooth Mice", slug: "bluetooth", categorySlug: "mouses" },
    { name: "Ergonomic Mice", slug: "ergonomic", categorySlug: "mouses" },
    { name: "Logitech", slug: "logitech", categorySlug: "mouses" },
    { name: "Razer", slug: "razer", categorySlug: "mouses" },

    // Cameras
    { name: "DSLR Cameras", slug: "dslr", categorySlug: "cameras" },
    { name: "Mirrorless Cameras", slug: "mirrorless", categorySlug: "cameras" },
    { name: "Action Cameras", slug: "action", categorySlug: "cameras" },
    { name: "Canon", slug: "canon", categorySlug: "cameras" },
    { name: "Nikon", slug: "nikon", categorySlug: "cameras" },
    { name: "Sony", slug: "sony", categorySlug: "cameras" },
    { name: "GoPro", slug: "gopro", categorySlug: "cameras" },

    // Smart Watches
    { name: "Apple Watch", slug: "apple-watch", categorySlug: "watches" },
    {
      name: "Samsung Galaxy Watch",
      slug: "samsung-galaxy-watch",
      categorySlug: "watches",
    },
    { name: "Fitbit", slug: "fitbit", categorySlug: "watches" },
    { name: "Garmin", slug: "garmin", categorySlug: "watches" },
    { name: "Huawei Watch", slug: "huawei-watch", categorySlug: "watches" },
    {
      name: "Fitness Trackers",
      slug: "fitness-trackers",
      categorySlug: "watches",
    },

    // Laptops
    { name: "HP", slug: "hp", categorySlug: "laptops" },
    {
      name: "Lenovo ThinkPad",
      slug: "lenovo-thinkpad",
      categorySlug: "laptops",
    },
    { name: "Dell", slug: "dell", categorySlug: "laptops" },
    { name: "MacBook", slug: "macbook", categorySlug: "laptops" },
    { name: "ASUS", slug: "asus", categorySlug: "laptops" },
    { name: "Acer", slug: "acer", categorySlug: "laptops" },
    { name: "Gaming Laptops", slug: "gaming", categorySlug: "laptops" },
    { name: "Business Laptops", slug: "business", categorySlug: "laptops" },

    // PCs
    { name: "HP Desktop", slug: "hp", categorySlug: "computers" },
    {
      name: "Lenovo ThinkCentre",
      slug: "lenovo-thinkcentre",
      categorySlug: "computers",
    },
    { name: "Dell OptiPlex", slug: "dell-optiplex", categorySlug: "computers" },
    { name: "iMac", slug: "imac", categorySlug: "computers" },
    { name: "Gaming PCs", slug: "gaming", categorySlug: "computers" },
    { name: "Workstations", slug: "workstations", categorySlug: "computers" },
    { name: "All-in-One PCs", slug: "all-in-one", categorySlug: "computers" },

    // Printers
    { name: "HP Printers", slug: "hp", categorySlug: "printers" },
    { name: "Canon Printers", slug: "canon", categorySlug: "printers" },
    { name: "Epson Printers", slug: "epson", categorySlug: "printers" },
    { name: "Brother Printers", slug: "brother", categorySlug: "printers" },
    { name: "Laser Printers", slug: "laser", categorySlug: "printers" },
    { name: "Inkjet Printers", slug: "inkjet", categorySlug: "printers" },
    {
      name: "All-in-One Printers",
      slug: "all-in-one",
      categorySlug: "printers",
    },

    // Earbuds
    { name: "AirPods", slug: "airpods", categorySlug: "earbuds" },
    {
      name: "Samsung Galaxy Buds",
      slug: "samsung-galaxy-buds",
      categorySlug: "earbuds",
    },
    { name: "Sony WF", slug: "sony-wf", categorySlug: "earbuds" },
    { name: "Jabra", slug: "jabra", categorySlug: "earbuds" },
    { name: "Wireless Earbuds", slug: "wireless", categorySlug: "earbuds" },
    {
      name: "Noise Cancelling",
      slug: "noise-cancelling",
      categorySlug: "earbuds",
    },

    // Headphones
    { name: "Sony WH", slug: "sony-wh", categorySlug: "headphones" },
    { name: "Bose", slug: "bose", categorySlug: "headphones" },
    { name: "Sennheiser", slug: "sennheiser", categorySlug: "headphones" },
    {
      name: "Audio-Technica",
      slug: "audio-technica",
      categorySlug: "headphones",
    },
    {
      name: "Wireless Headphones",
      slug: "wireless",
      categorySlug: "headphones",
    },
    {
      name: "Noise Cancelling",
      slug: "noise-cancelling",
      categorySlug: "headphones",
    },
    { name: "Gaming Headphones", slug: "gaming", categorySlug: "headphones" },
  ];

  for (const subcategory of subcategories) {
    const category = await prisma.category.findUnique({
      where: { slug: subcategory.categorySlug },
    });

    if (category) {
      await prisma.subcategory.upsert({
        where: { slug: subcategory.slug },
        update: {},
        create: {
          name: subcategory.name,
          slug: subcategory.slug,
          categoryId: category.id,
        },
      });
    }
  }

  // Create Products
  const products = [
    // Smart Phones
    {
      slug: "iphone-14-pro",
      title: "iPhone 14 Pro",
      mainImage: "/phone.png",
      price: 119900,
      oldPrice: 129900,
      rating: 5,
      description: "Apple iPhone 14 Pro with A16 Bionic and ProMotion display.",
      manufacturer: "Apple",
      inStock: 25,
      isNew: false,
      categorySlug: "smart-phones",
      subcategorySlug: "iphone",
    },
    {
      slug: "samsung-galaxy-s23",
      title: "Samsung Galaxy S23",
      mainImage: "/phone1.png",
      price: 99900,
      oldPrice: 109900,
      rating: 4,
      description:
        "Samsung Galaxy S23 with Dynamic AMOLED display and triple camera.",
      manufacturer: "Samsung",
      inStock: 40,
      isNew: true,
      categorySlug: "smart-phones",
      subcategorySlug: "samsung",
    },

    // Tablets
    {
      slug: "ipad-air-5",
      title: "iPad Air (5th Gen)",
      mainImage: "/tablet 2 1.png",
      price: 69900,
      oldPrice: 74900,
      rating: 5,
      description:
        "Apple iPad Air with M1 chip and 10.9-inch Liquid Retina display.",
      manufacturer: "Apple",
      inStock: 30,
      isNew: false,
      categorySlug: "tablets",
      subcategorySlug: "ipad",
    },
    {
      slug: "galaxy-tab-s8",
      title: "Samsung Galaxy Tab S8",
      mainImage: "/tablet 3 1.png",
      price: 79900,
      oldPrice: 84900,
      rating: 4,
      description: "Samsung Galaxy Tab S8 with S Pen and 11-inch LCD display.",
      manufacturer: "Samsung",
      inStock: 18,
      isNew: false,
      categorySlug: "tablets",
      subcategorySlug: "samsung-galaxy-tab",
    },

    // Laptops
    {
      slug: "macbook-pro-14-m2",
      title: 'MacBook Pro 14" (M2)',
      mainImage: "/laptop 1.webp",
      price: 199900,
      oldPrice: 219900,
      rating: 5,
      description:
        "Apple MacBook Pro 14-inch with M2 Pro chip and Liquid Retina XDR.",
      manufacturer: "Apple",
      inStock: 12,
      isNew: true,
      categorySlug: "laptops",
      subcategorySlug: "macbook",
    },
    {
      slug: "dell-xps-13",
      title: "Dell XPS 13",
      mainImage: "/laptop 2.webp",
      price: 149900,
      oldPrice: 159900,
      rating: 4,
      description:
        "Dell XPS 13 with InfinityEdge display and 12th Gen Intel Core.",
      manufacturer: "Dell",
      inStock: 15,
      isNew: false,
      categorySlug: "laptops",
      subcategorySlug: "dell",
    },
    {
      slug: "hp-spectre-x360",
      title: "HP Spectre x360",
      mainImage: "/laptop 3.webp",
      price: 139900,
      oldPrice: 149900,
      rating: 4,
      description:
        "HP Spectre x360 convertible with OLED display and long battery life.",
      manufacturer: "HP",
      inStock: 20,
      isNew: false,
      categorySlug: "laptops",
      subcategorySlug: "hp",
    },
    {
      slug: "thinkpad-x1-carbon",
      title: "Lenovo ThinkPad X1 Carbon",
      mainImage: "/laptop 4.webp",
      price: 169900,
      oldPrice: 179900,
      rating: 5,
      description:
        "Lenovo ThinkPad X1 Carbon business ultrabook with robust build.",
      manufacturer: "Lenovo",
      inStock: 10,
      isNew: false,
      categorySlug: "laptops",
      subcategorySlug: "lenovo-thinkpad",
    },

    // PCs
    {
      slug: "gaming-pc-rtx-4070",
      title: "Gaming PC RTX 4070",
      mainImage: "/pc 1.png",
      price: 189900,
      oldPrice: 199900,
      rating: 5,
      description: "High-performance gaming PC with RTX 4070 and Ryzen 7.",
      manufacturer: "Custom",
      inStock: 8,
      isNew: true,
      categorySlug: "computers",
      subcategorySlug: "gaming",
    },
    {
      slug: "imac-24-m1",
      title: 'iMac 24" (M1)',
      mainImage: "/pc 2.png",
      price: 159900,
      oldPrice: 169900,
      rating: 4,
      description: "Apple iMac 24-inch with M1 chip and 4.5K Retina display.",
      manufacturer: "Apple",
      inStock: 6,
      isNew: false,
      categorySlug: "computers",
      subcategorySlug: "imac",
    },

    // Cameras
    {
      slug: "canon-eos-r6",
      title: "Canon EOS R6",
      mainImage: "/camera 2.png",
      price: 229900,
      oldPrice: 239900,
      rating: 5,
      description: "Canon EOS R6 full-frame mirrorless camera.",
      manufacturer: "Canon",
      inStock: 9,
      isNew: false,
      categorySlug: "cameras",
      subcategorySlug: "mirrorless",
    },
    {
      slug: "nikon-d7500",
      title: "Nikon D7500",
      mainImage: "/camera 3.png",
      price: 129900,
      oldPrice: 139900,
      rating: 4,
      description: "Nikon D7500 DSLR camera with 20.9MP sensor.",
      manufacturer: "Nikon",
      inStock: 11,
      isNew: false,
      categorySlug: "cameras",
      subcategorySlug: "dslr",
    },
    {
      slug: "gopro-hero11",
      title: "GoPro HERO11",
      mainImage: "/camera 1.png",
      price: 49900,
      oldPrice: 54900,
      rating: 4,
      description: "GoPro HERO11 action camera with HyperSmooth stabilization.",
      manufacturer: "GoPro",
      inStock: 22,
      isNew: false,
      categorySlug: "cameras",
      subcategorySlug: "gopro",
    },

    // Mouses
    {
      slug: "logitech-mx-master-3s",
      title: "Logitech MX Master 3S",
      mainImage: "/mouse 1.png",
      price: 12900,
      oldPrice: 14900,
      rating: 5,
      description: "Ergonomic wireless mouse with MagSpeed scroll wheel.",
      manufacturer: "Logitech",
      inStock: 45,
      isNew: false,
      categorySlug: "mouses",
      subcategorySlug: "logitech",
    },
    {
      slug: "razer-deathadder-v3",
      title: "Razer DeathAdder V3",
      mainImage: "/mouse 2 1.png",
      price: 9990,
      oldPrice: 12990,
      rating: 4,
      description:
        "Lightweight gaming mouse with Focus Pro 30K Optical Sensor.",
      manufacturer: "Razer",
      inStock: 38,
      isNew: true,
      categorySlug: "mouses",
      subcategorySlug: "razer",
    },

    // Printers
    {
      slug: "hp-laserjet-pro",
      title: "HP LaserJet Pro",
      mainImage: "/printer 1.png",
      price: 19900,
      oldPrice: 21900,
      rating: 4,
      description:
        "Compact monochrome laser printer with fast printing speeds.",
      manufacturer: "HP",
      inStock: 26,
      isNew: false,
      categorySlug: "printers",
      subcategorySlug: "hp",
    },
    {
      slug: "epson-ecotank-l3150",
      title: "Epson EcoTank L3150",
      mainImage: "/printer 2.png",
      price: 24900,
      oldPrice: 26900,
      rating: 4,
      description: "All-in-one ink tank printer with ultra-low-cost printing.",
      manufacturer: "Epson",
      inStock: 14,
      isNew: false,
      categorySlug: "printers",
      subcategorySlug: "epson",
    },

    // Earbuds
    {
      slug: "airpods-pro-2",
      title: "AirPods Pro (2nd Gen)",
      mainImage: "/earbuds 1.png",
      price: 26900,
      oldPrice: 28900,
      rating: 5,
      description: "Apple AirPods Pro with Active Noise Cancellation.",
      manufacturer: "Apple",
      inStock: 50,
      isNew: true,
      categorySlug: "earbuds",
      subcategorySlug: "airpods",
    },
    {
      slug: "jabra-elite-85t",
      title: "Jabra Elite 85t",
      mainImage: "/earbuds 2.png",
      price: 19900,
      oldPrice: 21900,
      rating: 4,
      description:
        "Jabra Elite 85t with adjustable ANC and great call quality.",
      manufacturer: "Jabra",
      inStock: 34,
      isNew: false,
      categorySlug: "earbuds",
      subcategorySlug: "jabra",
    },

    // Headphones
    {
      slug: "sony-wh-1000xm5",
      title: "Sony WH-1000XM5",
      mainImage: "/headphones 1.png",
      price: 34900,
      oldPrice: 37900,
      rating: 5,
      description: "Industry-leading noise cancelling over-ear headphones.",
      manufacturer: "Sony",
      inStock: 28,
      isNew: false,
      categorySlug: "headphones",
      subcategorySlug: "sony-wh",
    },
    {
      slug: "bose-qc45",
      title: "Bose QuietComfort 45",
      mainImage: "/headphones 2.png",
      price: 32900,
      oldPrice: 34900,
      rating: 4,
      description:
        "Comfortable noise cancelling headphones with balanced sound.",
      manufacturer: "Bose",
      inStock: 19,
      isNew: false,
      categorySlug: "headphones",
      subcategorySlug: "bose",
    },
  ];

  for (const product of products) {
    const category = await prisma.category.findUnique({
      where: { slug: product.categorySlug },
    });
    const subcategory = product.subcategorySlug
      ? await prisma.subcategory.findUnique({
          where: { slug: product.subcategorySlug },
        })
      : null;

    if (!category) continue;
    const normalizedImage = (product.mainImage || "").replace(/^\/+/, "");

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        mainImage: normalizedImage,
      },
      create: {
        slug: product.slug,
        title: product.title,
        mainImage: normalizedImage,
        price: product.price,
        oldPrice: product.oldPrice ?? null,
        rating: product.rating,
        description: product.description,
        manufacturer: product.manufacturer,
        inStock: product.inStock,
        isNew: product.isNew ?? false,
        categoryId: category.id,
        subcategoryId: subcategory ? subcategory.id : null,
      },
    });
  }

  console.log("Database seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
