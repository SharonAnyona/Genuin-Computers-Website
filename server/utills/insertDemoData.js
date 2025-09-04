require("dotenv").config({ path: ".env.local" });
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Starting to seed server database...");

  // Create Categories
  const categories = [
    { name: "Laptops", slug: "laptops" },
    { name: "PCs", slug: "computers" },
    { name: "Tablets", slug: "tablets" },
    { name: "Mouses", slug: "mouses" },
    { name: "Cameras", slug: "cameras" },
    { name: "Smart Watches", slug: "watches" },
    { name: "Printers", slug: "printers" },
    { name: "Earbuds", slug: "earbuds" },
    { name: "Smart Phones", slug: "smart-phones" },
    { name: "Head Phones", slug: "headphones" },
    // Demo categories for CategorySectionsPage
    { name: "Flash Sale", slug: "flash-sale" },
    { name: "Monitors", slug: "monitors" },
    { name: "MacBook", slug: "macbook" },
    { name: "Desktop Computers", slug: "desktop-computers" },
    { name: "Gaming Laptops", slug: "gaming-laptops" },
    { name: "Accessories", slug: "accessories" },
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
    // Add demo subcategories for all categories
    { name: "Demo Subcat 1", slug: "demo-subcat-1", categorySlug: "laptops" },
    { name: "Demo Subcat 2", slug: "demo-subcat-2", categorySlug: "laptops" },
    { name: "Demo Subcat 1", slug: "demo-subcat-1", categorySlug: "computers" },
    { name: "Demo Subcat 2", slug: "demo-subcat-2", categorySlug: "computers" },
    { name: "Demo Subcat 1", slug: "demo-subcat-1", categorySlug: "tablets" },
    { name: "Demo Subcat 2", slug: "demo-subcat-2", categorySlug: "tablets" },
    { name: "Demo Subcat 1", slug: "demo-subcat-1", categorySlug: "mouses" },
    { name: "Demo Subcat 2", slug: "demo-subcat-2", categorySlug: "mouses" },
    { name: "Demo Subcat 1", slug: "demo-subcat-1", categorySlug: "cameras" },
    { name: "Demo Subcat 2", slug: "demo-subcat-2", categorySlug: "cameras" },
    { name: "Demo Subcat 1", slug: "demo-subcat-1", categorySlug: "watches" },
    { name: "Demo Subcat 2", slug: "demo-subcat-2", categorySlug: "watches" },
    { name: "Demo Subcat 1", slug: "demo-subcat-1", categorySlug: "printers" },
    { name: "Demo Subcat 2", slug: "demo-subcat-2", categorySlug: "printers" },
    { name: "Demo Subcat 1", slug: "demo-subcat-1", categorySlug: "earbuds" },
    { name: "Demo Subcat 2", slug: "demo-subcat-2", categorySlug: "earbuds" },
    {
      name: "Demo Subcat 1",
      slug: "demo-subcat-1",
      categorySlug: "smart-phones",
    },
    {
      name: "Demo Subcat 2",
      slug: "demo-subcat-2",
      categorySlug: "smart-phones",
    },
    {
      name: "Demo Subcat 1",
      slug: "demo-subcat-1",
      categorySlug: "headphones",
    },
    {
      name: "Demo Subcat 2",
      slug: "demo-subcat-2",
      categorySlug: "headphones",
    },
    {
      name: "Demo Subcat 1",
      slug: "demo-subcat-1",
      categorySlug: "flash-sale",
    },
    {
      name: "Demo Subcat 2",
      slug: "demo-subcat-2",
      categorySlug: "flash-sale",
    },
    { name: "Demo Subcat 1", slug: "demo-subcat-1", categorySlug: "monitors" },
    { name: "Demo Subcat 2", slug: "demo-subcat-2", categorySlug: "monitors" },
    { name: "Demo Subcat 1", slug: "demo-subcat-1", categorySlug: "macbook" },
    { name: "Demo Subcat 2", slug: "demo-subcat-2", categorySlug: "macbook" },
    {
      name: "Demo Subcat 1",
      slug: "demo-subcat-1",
      categorySlug: "desktop-computers",
    },
    {
      name: "Demo Subcat 2",
      slug: "demo-subcat-2",
      categorySlug: "desktop-computers",
    },
    {
      name: "Demo Subcat 1",
      slug: "demo-subcat-1",
      categorySlug: "gaming-laptops",
    },
    {
      name: "Demo Subcat 2",
      slug: "demo-subcat-2",
      categorySlug: "gaming-laptops",
    },
    {
      name: "Demo Subcat 1",
      slug: "demo-subcat-1",
      categorySlug: "accessories",
    },
    {
      name: "Demo Subcat 2",
      slug: "demo-subcat-2",
      categorySlug: "accessories",
    },
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
    // Flash Sale
    {
      slug: "flash-sale-monitor-1",
      title: "Flash Sale Monitor",
      mainImage: "/monitor1Banner.png",
      price: 19999,
      rating: 5,
      description: "Special flash sale monitor.",
      manufacturer: "SaleBrand",
      inStock: 10,
      categorySlug: "flash-sale",
    },
    // Monitors
    {
      slug: "monitor-1",
      title: "UltraSharp Monitor",
      mainImage: "/monitor2Banner.png",
      price: 29999,
      rating: 4,
      description: "High quality monitor for work and play.",
      manufacturer: "Dell",
      inStock: 15,
      categorySlug: "monitors",
    },
    // MacBook
    {
      slug: "macbook-pro-demo",
      title: "MacBook Pro Demo",
      mainImage: "/macbook1Banner.png",
      price: 249999,
      rating: 5,
      description: "Demo MacBook Pro for showcase.",
      manufacturer: "Apple",
      inStock: 5,
      categorySlug: "macbook",
    },
    // Desktop Computers
    {
      slug: "desktop-computer-1",
      title: "Desktop Computer Demo",
      mainImage: "/pc 1.png",
      price: 89999,
      rating: 4,
      description: "Demo desktop computer for office and home.",
      manufacturer: "HP",
      inStock: 8,
      categorySlug: "desktop-computers",
    },
    // Gaming Laptops
    {
      slug: "gaming-laptop-1",
      title: "Gaming Laptop Demo",
      mainImage: "/laptop 1.webp",
      price: 159999,
      rating: 5,
      description: "Demo gaming laptop for high performance.",
      manufacturer: "ASUS",
      inStock: 6,
      categorySlug: "gaming-laptops",
    },
    // Accessories
    {
      slug: "accessory-1",
      title: "Accessory Demo",
      mainImage: "/earbuds 1.png",
      price: 2999,
      rating: 4,
      description: "Demo accessory for your devices.",
      manufacturer: "AccessoryBrand",
      inStock: 20,
      categorySlug: "accessories",
    },
    // Smart Phones
    {
      slug: "iphone-14-pro",
      title: "iPhone 14 Pro",
      mainImage: "/phone.png",
      price: 119900,
      rating: 5,
      description: "Apple iPhone 14 Pro with A16 Bionic and ProMotion display.",
      manufacturer: "Apple",
      inStock: 25,
      categorySlug: "smart-phones",
      subcategorySlug: "iphone",
    },
    {
      slug: "samsung-galaxy-s23",
      title: "Samsung Galaxy S23",
      mainImage: "/phone1.png",
      price: 99900,
      rating: 4,
      description:
        "Samsung Galaxy S23 with Dynamic AMOLED display and triple camera.",
      manufacturer: "Samsung",
      inStock: 40,
      categorySlug: "smart-phones",
      subcategorySlug: "samsung",
    },

    // Tablets
    {
      slug: "ipad-air-5",
      title: "iPad Air (5th Gen)",
      mainImage: "/tablet 2 1.png",
      price: 69900,
      rating: 5,
      description:
        "Apple iPad Air with M1 chip and 10.9-inch Liquid Retina display.",
      manufacturer: "Apple",
      inStock: 30,
      categorySlug: "tablets",
      subcategorySlug: "ipad",
    },
    {
      slug: "galaxy-tab-s8",
      title: "Samsung Galaxy Tab S8",
      mainImage: "/tablet 3 1.png",
      price: 79900,
      rating: 4,
      description: "Samsung Galaxy Tab S8 with S Pen and 11-inch LCD display.",
      manufacturer: "Samsung",
      inStock: 18,
      categorySlug: "tablets",
      subcategorySlug: "samsung-galaxy-tab",
    },

    // Laptops
    {
      slug: "macbook-pro-14-m2",
      title: 'MacBook Pro 14" (M2)',
      mainImage: "/laptop 1.webp",
      price: 199900,
      rating: 5,
      description:
        "Apple MacBook Pro 14-inch with M2 Pro chip and Liquid Retina XDR.",
      manufacturer: "Apple",
      inStock: 12,
      categorySlug: "laptops",
      subcategorySlug: "macbook",
    },
    {
      slug: "dell-xps-13",
      title: "Dell XPS 13",
      mainImage: "/laptop 2.webp",
      price: 149900,
      rating: 4,
      description:
        "Dell XPS 13 with InfinityEdge display and 12th Gen Intel Core.",
      manufacturer: "Dell",
      inStock: 15,
      categorySlug: "laptops",
      subcategorySlug: "dell",
    },
    {
      slug: "hp-spectre-x360",
      title: "HP Spectre x360",
      mainImage: "/laptop 3.webp",
      price: 139900,
      rating: 4,
      description:
        "HP Spectre x360 convertible with OLED display and long battery life.",
      manufacturer: "HP",
      inStock: 20,
      categorySlug: "laptops",
      subcategorySlug: "hp",
    },
    {
      slug: "thinkpad-x1-carbon",
      title: "Lenovo ThinkPad X1 Carbon",
      mainImage: "/laptop 4.webp",
      price: 169900,
      rating: 5,
      description:
        "Lenovo ThinkPad X1 Carbon business ultrabook with robust build.",
      manufacturer: "Lenovo",
      inStock: 10,
      categorySlug: "laptops",
      subcategorySlug: "lenovo-thinkpad",
    },

    // PCs
    {
      slug: "gaming-pc-rtx-4070",
      title: "Gaming PC RTX 4070",
      mainImage: "/pc 1.png",
      price: 189900,
      rating: 5,
      description: "High-performance gaming PC with RTX 4070 and Ryzen 7.",
      manufacturer: "Custom",
      inStock: 8,
      categorySlug: "computers",
      subcategorySlug: "gaming",
    },
    {
      slug: "imac-24-m1",
      title: 'iMac 24" (M1)',
      mainImage: "/pc 2.png",
      price: 159900,
      rating: 4,
      description: "Apple iMac 24-inch with M1 chip and 4.5K Retina display.",
      manufacturer: "Apple",
      inStock: 6,
      categorySlug: "computers",
      subcategorySlug: "imac",
    },

    // Cameras
    {
      slug: "canon-eos-r6",
      title: "Canon EOS R6",
      mainImage: "/camera 2.png",
      price: 229900,
      rating: 5,
      description: "Canon EOS R6 full-frame mirrorless camera.",
      manufacturer: "Canon",
      inStock: 9,
      categorySlug: "cameras",
      subcategorySlug: "mirrorless",
    },
    {
      slug: "nikon-d7500",
      title: "Nikon D7500",
      mainImage: "/camera 3.png",
      price: 129900,
      rating: 4,
      description: "Nikon D7500 DSLR camera with 20.9MP sensor.",
      manufacturer: "Nikon",
      inStock: 11,
      categorySlug: "cameras",
      subcategorySlug: "dslr",
    },
    {
      slug: "gopro-hero11",
      title: "GoPro HERO11",
      mainImage: "/camera 1.png",
      price: 49900,
      rating: 4,
      description: "GoPro HERO11 action camera with HyperSmooth stabilization.",
      manufacturer: "GoPro",
      inStock: 22,
      categorySlug: "cameras",
      subcategorySlug: "gopro",
    },

    // Mouses
    {
      slug: "logitech-mx-master-3s",
      title: "Logitech MX Master 3S",
      mainImage: "/mouse 1.png",
      price: 12900,
      rating: 5,
      description: "Ergonomic wireless mouse with MagSpeed scroll wheel.",
      manufacturer: "Logitech",
      inStock: 45,
      categorySlug: "mouses",
      subcategorySlug: "logitech",
    },
    {
      slug: "razer-deathadder-v3",
      title: "Razer DeathAdder V3",
      mainImage: "/mouse 2 1.png",
      price: 9990,
      rating: 4,
      description:
        "Lightweight gaming mouse with Focus Pro 30K Optical Sensor.",
      manufacturer: "Razer",
      inStock: 38,
      categorySlug: "mouses",
      subcategorySlug: "razer",
    },

    // Printers
    {
      slug: "hp-laserjet-pro",
      title: "HP LaserJet Pro",
      mainImage: "/printer 1.png",
      price: 19900,
      rating: 4,
      description:
        "Compact monochrome laser printer with fast printing speeds.",
      manufacturer: "HP",
      inStock: 26,
      categorySlug: "printers",
      subcategorySlug: "hp",
    },
    {
      slug: "epson-ecotank-l3150",
      title: "Epson EcoTank L3150",
      mainImage: "/printer 2.png",
      price: 24900,
      rating: 4,
      description: "All-in-one ink tank printer with ultra-low-cost printing.",
      manufacturer: "Epson",
      inStock: 14,
      categorySlug: "printers",
      subcategorySlug: "epson",
    },

    // Earbuds
    {
      slug: "airpods-pro-2",
      title: "AirPods Pro (2nd Gen)",
      mainImage: "/earbuds 1.png",
      price: 26900,
      rating: 5,
      description: "Apple AirPods Pro with Active Noise Cancellation.",
      manufacturer: "Apple",
      inStock: 50,
      categorySlug: "earbuds",
      subcategorySlug: "airpods",
    },
    {
      slug: "jabra-elite-85t",
      title: "Jabra Elite 85t",
      mainImage: "/earbuds 2.png",
      price: 19900,
      rating: 4,
      description:
        "Jabra Elite 85t with adjustable ANC and great call quality.",
      manufacturer: "Jabra",
      inStock: 34,
      categorySlug: "earbuds",
      subcategorySlug: "jabra",
    },

    // Headphones
    {
      slug: "sony-wh-1000xm5",
      title: "Sony WH-1000XM5",
      mainImage: "/headphones 1.png",
      price: 34900,
      rating: 5,
      description: "Industry-leading noise cancelling over-ear headphones.",
      manufacturer: "Sony",
      inStock: 28,
      categorySlug: "headphones",
      subcategorySlug: "sony-wh",
    },
    {
      slug: "bose-qc45",
      title: "Bose QuietComfort 45",
      mainImage: "/headphones 2.png",
      price: 32900,
      rating: 4,
      description:
        "Comfortable noise cancelling headphones with balanced sound.",
      manufacturer: "Bose",
      inStock: 19,
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
        description: product.description,
        manufacturer: product.manufacturer,
        inStock: product.inStock,
        categoryId: category.id,
        subcategoryId: subcategory ? subcategory.id : null,
      },
    });
  }

  console.log("Server database seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
