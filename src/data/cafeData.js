export const cafeInfo = {
  name: "The Brew House",
  tagline: "Crafted with care, served with love",
  address: "42 Baker Street, London, W1U 7AJ",
  phone: "+44 20 7946 0958",
  hours: "Mon-Fri 7:00-19:00 · Sat-Sun 8:00-18:00",
};

export const menuCategories = [
  { id: "coffee", label: "Coffee & Drinks", icon: "Coffee" },
  { id: "pastries", label: "Pastries & Bakes", icon: "Croissant" },
  { id: "breakfast", label: "Breakfast", icon: "EggFried" },
  { id: "specials", label: "Today's Specials", icon: "Star" },
];

export const menuItems = [
  // Coffee & Drinks
  {
    id: 1,
    category: "coffee",
    name: "Signature Espresso",
    description: "Double-shot Ethiopian Yirgacheffe with notes of blueberry and dark chocolate.",
    price: 3.50,
    tags: ["Popular", "Vegan"],
    image: null,
  },
  {
    id: 2,
    category: "coffee",
    name: "Flat White",
    description: "Velvety microfoam over a double ristretto. Our barista's favourite.",
    price: 4.20,
    tags: ["Popular"],
    image: null,
  },
  {
    id: 3,
    category: "coffee",
    name: "Iced Matcha Latte",
    description: "Ceremonial-grade Uji matcha whisked with oat milk over ice.",
    price: 4.80,
    tags: ["Vegan", "Cold"],
    image: null,
  },
  {
    id: 4,
    category: "coffee",
    name: "Chai Spiced Latte",
    description: "House-blend masala chai with steamed whole milk and a cinnamon dusting.",
    price: 4.50,
    tags: [],
    image: null,
  },
  {
    id: 5,
    category: "coffee",
    name: "Cold Brew",
    description: "24-hour steeped Colombian single-origin. Smooth, low acidity, bold.",
    price: 4.00,
    tags: ["Vegan", "Cold"],
    image: null,
  },

  // Pastries & Bakes
  {
    id: 6,
    category: "pastries",
    name: "Almond Croissant",
    description: "Twice-baked butter croissant filled with frangipane and toasted almonds.",
    price: 3.80,
    tags: ["Popular"],
    image: null,
  },
  {
    id: 7,
    category: "pastries",
    name: "Sourdough Cinnamon Roll",
    description: "Slow-fermented sourdough swirled with Ceylon cinnamon and cream cheese glaze.",
    price: 4.20,
    tags: [],
    image: null,
  },
  {
    id: 8,
    category: "pastries",
    name: "Banana Bread (GF)",
    description: "Gluten-free banana bread with walnuts and a drizzle of local honey.",
    price: 3.50,
    tags: ["Gluten-Free"],
    image: null,
  },
  {
    id: 9,
    category: "pastries",
    name: "Pain au Chocolat",
    description: "Flaky laminated pastry with two bars of 70% Valrhona dark chocolate.",
    price: 3.60,
    tags: [],
    image: null,
  },

  // Breakfast
  {
    id: 10,
    category: "breakfast",
    name: "Avocado Toast",
    description: "Smashed avocado on toasted sourdough with chilli flakes, lime, and poached egg.",
    price: 8.50,
    tags: ["Popular"],
    image: null,
  },
  {
    id: 11,
    category: "breakfast",
    name: "Full English",
    description: "Two eggs, bacon, sausage, beans, toast, grilled tomato, and hash brown.",
    price: 11.50,
    tags: [],
    image: null,
  },
  {
    id: 12,
    category: "breakfast",
    name: "Açaí Bowl",
    description: "Organic açaí blended with banana, topped with granola, coconut, and berries.",
    price: 9.00,
    tags: ["Vegan", "Gluten-Free"],
    image: null,
  },
  {
    id: 13,
    category: "breakfast",
    name: "Eggs Benedict",
    description: "Poached eggs and smoked ham on an English muffin with hollandaise.",
    price: 10.00,
    tags: [],
    image: null,
  },

  // Today's Specials
  {
    id: 14,
    category: "specials",
    name: "Truffle Mushroom Toastie",
    description: "Wild mushroom, gruyère, and truffle oil on artisan sourdough.",
    price: 9.50,
    tags: ["New"],
    image: null,
  },
  {
    id: 15,
    category: "specials",
    name: "Lavender Honey Latte",
    description: "Espresso with steamed milk, French lavender syrup, and wildflower honey.",
    price: 5.20,
    tags: ["New", "Limited"],
    image: null,
  },
  {
    id: 16,
    category: "specials",
    name: "Summer Berry Pavlova",
    description: "Crisp meringue with Chantilly cream, strawberries, blueberries, and passion fruit.",
    price: 6.50,
    tags: ["New", "Gluten-Free"],
    image: null,
  },
];

export const mockOrders = [
  {
    id: "ORD-001",
    table: 4,
    items: [
      { name: "Flat White", qty: 2, price: 4.20 },
      { name: "Almond Croissant", qty: 1, price: 3.80 },
    ],
    total: 12.20,
    status: "preparing",
    time: "2 min ago",
  },
  {
    id: "ORD-002",
    table: 7,
    items: [
      { name: "Avocado Toast", qty: 1, price: 8.50 },
      { name: "Iced Matcha Latte", qty: 1, price: 4.80 },
    ],
    total: 13.30,
    status: "pending",
    time: "Just now",
  },
  {
    id: "ORD-003",
    table: 2,
    items: [
      { name: "Full English", qty: 2, price: 11.50 },
      { name: "Signature Espresso", qty: 2, price: 3.50 },
    ],
    total: 30.00,
    status: "ready",
    time: "8 min ago",
  },
  {
    id: "ORD-004",
    table: 11,
    items: [
      { name: "Truffle Mushroom Toastie", qty: 1, price: 9.50 },
      { name: "Chai Spiced Latte", qty: 1, price: 4.50 },
      { name: "Summer Berry Pavlova", qty: 1, price: 6.50 },
    ],
    total: 20.50,
    status: "pending",
    time: "Just now",
  },
  {
    id: "ORD-005",
    table: 5,
    items: [
      { name: "Cold Brew", qty: 3, price: 4.00 },
      { name: "Banana Bread (GF)", qty: 2, price: 3.50 },
    ],
    total: 19.00,
    status: "preparing",
    time: "4 min ago",
  },
];

export const dailyStats = {
  totalOrders: 47,
  revenue: 623.40,
  avgOrderValue: 13.26,
  topItem: "Flat White",
  topItemCount: 23,
  hourlyOrders: [2, 5, 8, 12, 15, 11, 9, 7, 6, 4, 3, 2],
  hourLabels: ["7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"],
  categoryBreakdown: [
    { category: "Coffee & Drinks", percentage: 45, revenue: 280.53 },
    { category: "Breakfast", percentage: 28, revenue: 174.55 },
    { category: "Pastries & Bakes", percentage: 18, revenue: 112.21 },
    { category: "Today's Specials", percentage: 9, revenue: 56.11 },
  ],
};
