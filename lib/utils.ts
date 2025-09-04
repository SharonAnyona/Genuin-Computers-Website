// TypeScript interfaces for categories
interface Subcategory {
  name: string;
  href: string;
  slug: string;
}

interface CategoryItem {
  id: number;
  title: string;
  src: string;
  href: string;
  slug: string;
  subcategories: Subcategory[];
}

export const categoryMenuList: CategoryItem[] = [
  {
    id: 1,
    title: "Smart Phones",
    src: "/smart phone icon.png",
    href: "/shop/smart-phones",
    slug: "smart-phones",
    subcategories: [
      { name: "iPhone", href: "/shop/smart-phones/iphone", slug: "iphone" },
      { name: "Samsung", href: "/shop/smart-phones/samsung", slug: "samsung" },
      { name: "Huawei", href: "/shop/smart-phones/huawei", slug: "huawei" },
      { name: "Xiaomi", href: "/shop/smart-phones/xiaomi", slug: "xiaomi" },
      { name: "OnePlus", href: "/shop/smart-phones/oneplus", slug: "oneplus" },
      { name: "Google Pixel", href: "/shop/smart-phones/google-pixel", slug: "google-pixel" }
    ]
  },
  {
    id: 2,
    title: "Tablets",
    src: "/tablet icon.png",
    href: "/shop/tablets",
    slug: "tablets",
    subcategories: [
      { name: "iPad", href: "/shop/tablets/ipad", slug: "ipad" },
      { name: "Samsung Galaxy Tab", href: "/shop/tablets/samsung-galaxy-tab", slug: "samsung-galaxy-tab" },
      { name: "Huawei MatePad", href: "/shop/tablets/huawei-matepad", slug: "huawei-matepad" },
      { name: "Lenovo Tab", href: "/shop/tablets/lenovo-tab", slug: "lenovo-tab" },
      { name: "Amazon Fire", href: "/shop/tablets/amazon-fire", slug: "amazon-fire" }
    ]
  },
  {
    id: 3,
    title: "Mouses",
    src: "/mouse icon.png",
    href: "/shop/mouses",
    slug: "mouses",
    subcategories: [
      { name: "Gaming Mice", href: "/shop/mouses/gaming", slug: "gaming" },
      { name: "Wireless Mice", href: "/shop/mouses/wireless", slug: "wireless" },
      { name: "Bluetooth Mice", href: "/shop/mouses/bluetooth", slug: "bluetooth" },
      { name: "Ergonomic Mice", href: "/shop/mouses/ergonomic", slug: "ergonomic" },
      { name: "Logitech", href: "/shop/mouses/logitech", slug: "logitech" },
      { name: "Razer", href: "/shop/mouses/razer", slug: "razer" }
    ]
  },
  {
    id: 4,
    title: "Cameras",
    src: "/camera icon.png",
    href: "/shop/cameras",
    slug: "cameras",
    subcategories: [
      { name: "DSLR Cameras", href: "/shop/cameras/dslr", slug: "dslr" },
      { name: "Mirrorless Cameras", href: "/shop/cameras/mirrorless", slug: "mirrorless" },
      { name: "Action Cameras", href: "/shop/cameras/action", slug: "action" },
      { name: "Canon", href: "/shop/cameras/canon", slug: "canon" },
      { name: "Nikon", href: "/shop/cameras/nikon", slug: "nikon" },
      { name: "Sony", href: "/shop/cameras/sony", slug: "sony" },
      { name: "GoPro", href: "/shop/cameras/gopro", slug: "gopro" }
    ]
  },
  {
    id: 5,
    title: "Smart Watches",
    src: "/smart watch.png",
    href: "/shop/watches",
    slug: "watches",
    subcategories: [
      { name: "Apple Watch", href: "/shop/watches/apple-watch", slug: "apple-watch" },
      { name: "Samsung Galaxy Watch", href: "/shop/watches/samsung-galaxy-watch", slug: "samsung-galaxy-watch" },
      { name: "Fitbit", href: "/shop/watches/fitbit", slug: "fitbit" },
      { name: "Garmin", href: "/shop/watches/garmin", slug: "garmin" },
      { name: "Huawei Watch", href: "/shop/watches/huawei-watch", slug: "huawei-watch" },
      { name: "Fitness Trackers", href: "/shop/watches/fitness-trackers", slug: "fitness-trackers" }
    ]
  },
  {
    id: 6,
    title: "Laptops",
    src: "/laptop icon.png",
    href: "/shop/laptops",
    slug: "laptops",
    subcategories: [
      { name: "HP", href: "/shop/laptops/hp", slug: "hp" },
      { name: "Lenovo ThinkPad", href: "/shop/laptops/lenovo-thinkpad", slug: "lenovo-thinkpad" },
      { name: "Dell", href: "/shop/laptops/dell", slug: "dell" },
      { name: "MacBook", href: "/shop/laptops/macbook", slug: "macbook" },
      { name: "ASUS", href: "/shop/laptops/asus", slug: "asus" },
      { name: "Acer", href: "/shop/laptops/acer", slug: "acer" },
      { name: "Gaming Laptops", href: "/shop/laptops/gaming", slug: "gaming" },
      { name: "Business Laptops", href: "/shop/laptops/business", slug: "business" }
    ]
  },
  {
    id: 7,
    title: "PCs",
    src: "/pc icon.png",
    href: "/shop/computers",
    slug: "computers",
    subcategories: [
      { name: "HP Desktop", href: "/shop/computers/hp", slug: "hp" },
      { name: "Lenovo ThinkCentre", href: "/shop/computers/lenovo-thinkcentre", slug: "lenovo-thinkcentre" },
      { name: "Dell OptiPlex", href: "/shop/computers/dell-optiplex", slug: "dell-optiplex" },
      { name: "iMac", href: "/shop/computers/imac", slug: "imac" },
      { name: "Gaming PCs", href: "/shop/computers/gaming", slug: "gaming" },
      { name: "Workstations", href: "/shop/computers/workstations", slug: "workstations" },
      { name: "All-in-One PCs", href: "/shop/computers/all-in-one", slug: "all-in-one" }
    ]
  },
  {
    id: 8,
    title: "Printers",
    src: "/printers icon.png",
    href: "/shop/printers",
    slug: "printers",
    subcategories: [
      { name: "HP Printers", href: "/shop/printers/hp", slug: "hp" },
      { name: "Canon Printers", href: "/shop/printers/canon", slug: "canon" },
      { name: "Epson Printers", href: "/shop/printers/epson", slug: "epson" },
      { name: "Brother Printers", href: "/shop/printers/brother", slug: "brother" },
      { name: "Laser Printers", href: "/shop/printers/laser", slug: "laser" },
      { name: "Inkjet Printers", href: "/shop/printers/inkjet", slug: "inkjet" },
      { name: "All-in-One Printers", href: "/shop/printers/all-in-one", slug: "all-in-one" }
    ]
  },
  {
    id: 9,
    title: "Earbuds",
    src: "/ear buds icon.png",
    href: "/shop/earbuds",
    slug: "earbuds",
    subcategories: [
      { name: "AirPods", href: "/shop/earbuds/airpods", slug: "airpods" },
      { name: "Samsung Galaxy Buds", href: "/shop/earbuds/samsung-galaxy-buds", slug: "samsung-galaxy-buds" },
      { name: "Sony WF", href: "/shop/earbuds/sony-wf", slug: "sony-wf" },
      { name: "Jabra", href: "/shop/earbuds/jabra", slug: "jabra" },
      { name: "Wireless Earbuds", href: "/shop/earbuds/wireless", slug: "wireless" },
      { name: "Noise Cancelling", href: "/shop/earbuds/noise-cancelling", slug: "noise-cancelling" }
    ]
  },
  {
    id: 10,
    title: "Head Phones",
    src: "/headphone icon.png",
    href: "/shop/headphones",
    slug: "headphones",
    subcategories: [
      { name: "Sony WH", href: "/shop/headphones/sony-wh", slug: "sony-wh" },
      { name: "Bose", href: "/shop/headphones/bose", slug: "bose" },
      { name: "Sennheiser", href: "/shop/headphones/sennheiser", slug: "sennheiser" },
      { name: "Audio-Technica", href: "/shop/headphones/audio-technica", slug: "audio-technica" },
      { name: "Wireless Headphones", href: "/shop/headphones/wireless", slug: "wireless" },
      { name: "Noise Cancelling", href: "/shop/headphones/noise-cancelling", slug: "noise-cancelling" },
      { name: "Gaming Headphones", href: "/shop/headphones/gaming", slug: "gaming" }
    ]
  }
];

export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our support is working all day and night to answer any question you have.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Discounts", href: "#" },
    { name: "News", href: "#" },
    { name: "Register Discounts", href: "#" },
  ],
  about: [
    { name: "About Singitronic", href: "#" },
    { name: "Work With Us", href: "#" },
    { name: "Company Profile", href: "#" },
  ],
  buy: [
    { name: "Singitronic Loyalty Card", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Complaints", href: "#" },
    { name: "Partners", href: "#" },
  ],
  help: [
    { name: "Contact", href: "#" },
    { name: "How to Buy at Singitronic", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
};

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
