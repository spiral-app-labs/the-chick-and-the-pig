export const SITE_LINKS = {
  toast: "https://order.toasttab.com/online/thechickandthepig",
  fullMenu:
    "https://www.toasttab.com/local/order/thechickandthepig/r-e567cf75-3e47-4542-875b-5ef03086c0d1",
  doorDash:
    "https://www.doordash.com/store/the-chick-and-the-pig-algonquin-30518131/",
  giftCards: "https://squareup.com/gift/MLM8SF7HNT4X0/order",
  facebook: "https://www.facebook.com/p/The-Chick-and-the-Pig-61563163378962/",
  directions: "https://www.google.com/maps/dir//1000+N+Main+St+Algonquin+IL",
} as const;

export const BUSINESS = {
  name: "The Chick and The Pig",
  phoneDisplay: "(224) 333-0301",
  phoneHref: "tel:+12243330301",
  addressLine1: "1000 N Main St",
  addressLine2: "Algonquin, IL 60102",
  email: "info@thechickandthepig.com",
  cateringEmail: "catering@thechickandthepig.com",
  heroImage:
    "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/8dedcc81-3f3e-4f3b-b601-fb7c4ae05be4.jpeg",
  note: "Fried chicken, smoked meats, weekly specials, and Chef Mat's sauce shelf.",
} as const;

export const HOURS = [
  { day: "Monday", time: "11am - 8pm" },
  { day: "Tuesday", time: "11am - 9:30pm" },
  { day: "Wednesday", time: "11am - 9:30pm" },
  { day: "Thursday", time: "11am - 9:30pm" },
  { day: "Friday", time: "11am - 11:30pm" },
  { day: "Saturday", time: "11am - 11:30pm" },
  { day: "Sunday", time: "11am - 8pm" },
] as const;

export const DAILY_SPECIALS = [
  { day: "Monday", item: "Pulled Pork Sandwich Meal", price: "$9" },
  { day: "Tuesday", item: "Fried Chicken Breast Sandwich Meal", price: "$7" },
  { day: "Wednesday", item: "Burger Meal", price: "$10" },
  { day: "Thursday", item: "2 Char Dogs Meal", price: "$7" },
  { day: "Friday", item: "Chopped Brisket Sandwich Meal", price: "$10" },
  { day: "Saturday", item: "6 Jumbo Chicken Wings Meal", price: "$8" },
  { day: "Sunday", item: "1/2 Slab Ribs Meal", price: "$18" },
] as const;

export const BEST_SELLERS = [
  {
    name: "4pc Fried Chicken Meal",
    price: "$16.50",
    tag: "DoorDash favorite",
    description:
      "Savory herbs and spices, two 8oz sides, biscuits, and honey butter.",
  },
  {
    name: "1/2 Slab Hickory Smoked Ribs",
    price: "$20.90",
    tag: "Pit classic",
    description:
      "Spice-rubbed, hickory smoked, and grilled to order with BBQ sauce.",
  },
  {
    name: "Texas Twinkies",
    price: "$15.40",
    tag: "Appetizer pick",
    description:
      "Jalapenos stuffed with brisket and cream cheese, wrapped in bacon.",
  },
  {
    name: "Banana Cream Pie in a Jar",
    price: "$11.00",
    tag: "Dessert",
    description:
      "Fresh bananas, vanilla wafers, and whipped cream served in a jar.",
  },
] as const;

export const MENU_CATEGORIES = [
  {
    name: "Appetizers",
    accent: "Smoked starters",
    items: [
      "Chicken & Waffle",
      "Texas Twinkies",
      "Wisconsin Cheese Curds",
      "Loaded Fries",
    ],
  },
  {
    name: "Chicken",
    accent: "Crispy and smoked",
    items: [
      "Hand Battered Chick Strips",
      "Smoked Chicken Wings",
      "Jumbo Chicken Wings",
      "Fried Chicken Meals",
    ],
  },
  {
    name: "Sandwiches & Meals",
    accent: "Toast + DoorDash staples",
    items: [
      "Pulled Pork Sandwich Meal",
      "Fried Chicken Breast Sandwich Meal",
      "Burger Meal",
      "Chopped Brisket Sandwich Meal",
    ],
  },
  {
    name: "BBQ by the Pound",
    accent: "Low and slow",
    items: [
      "1/2 Slab Ribs Meal",
      "1/2 Lb Meats",
      "Brats and sausage meals",
      "Sauces by the jar",
    ],
  },
  {
    name: "Sides & Kids",
    accent: "Comfort staples",
    items: [
      "Mac & Cheese",
      "Mashed Potatoes",
      "Baked Beans",
      "Kids meals",
    ],
  },
  {
    name: "Dessert & Drinks",
    accent: "Finish strong",
    items: [
      "Banana Cream Pie in a Jar",
      "Dessert menu",
      "Can/Bottle Beverages",
      "2 Liters",
    ],
  },
] as const;

export const SAUCES = [
  "Original BBQ",
  "Carolina BBQ",
  "Blueberry BBQ",
  "Raspberry BBQ",
  "Peach BBQ",
  "Bourbon Peach BBQ",
  "Atomic Cocktail",
  "House Ranch",
  "Bleu Cheese",
] as const;

export const REVIEWS = [
  {
    quote:
      "The portions were huge. The onion rings were very crispy and delicious. The brisket sandwich was perfectly cooked.",
    source: "DoorDash diner",
    date: "11/17/24",
  },
  {
    quote:
      "Full Slab Hickory Smoked Ribs were absolutely delicious and the Bourbon Peach BBQ is a fantastic sauce.",
    source: "DoorDash diner",
    date: "4/10/25",
  },
  {
    quote:
      "6pc Smoked Chicken Wings and 2pc Fried Chicken Dinner were both really good. Their mashed potatoes are heavenly.",
    source: "DoorDash diner",
    date: "2/18/25",
  },
  {
    quote:
      "The pulled pork sandwich, chopped brisket sandwich, and mac n cheese were all great. The sauces were on point.",
    source: "DoorDash diner",
    date: "10/31/24",
  },
] as const;
