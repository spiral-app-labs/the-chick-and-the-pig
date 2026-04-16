export const SITE_LINKS = {
  toast: "https://order.toasttab.com/online/thechickandthepig",
  fullMenu:
    "https://www.toasttab.com/local/order/thechickandthepig/r-e567cf75-3e47-4542-875b-5ef03086c0d1",
  doorDash:
    "https://www.doordash.com/store/the-chick-and-the-pig-algonquin-30518131/",
  giftCards: "https://squareup.com/gift/MLM8SF7HNT4X0/order",
  facebook: "https://www.facebook.com/p/The-Chick-and-the-Pig-61563163378962/",
  directions: "https://www.google.com/maps/dir//1000+N+Main+St+Algonquin+IL",
  cateringInquiry:
    "mailto:catering@thechickandthepig.com?subject=Catering%20Inquiry%20for%20The%20Chick%20and%20The%20Pig",
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
    "https://lirp.cdn-website.com/74a6dcdb/dms3rep/multi/opt/1pj0mv7pQHe0mq4wpiMA_bbq-and-fried-chicken.v2.0000000-1920w.jpg",
  note: "Fried chicken, smoked meats, weekly specials, and Chef Mat's sauce shelf.",
} as const;

export const GALLERY_IMAGES = [
  {
    src: "https://lirp.cdn-website.com/74a6dcdb/dms3rep/multi/opt/1pj0mv7pQHe0mq4wpiMA_bbq-and-fried-chicken.v2.0000000-1920w.jpg",
    alt: "Fried chicken and smoked barbecue from The Chick and The Pig",
    label: "Chicken and barbecue",
  },
  {
    src: "https://lirp.cdn-website.com/74a6dcdb/dms3rep/multi/opt/i64Td4DCRVCsIcjFrkSb_bbq-ribs.v2.0000000-1920w.jpg",
    alt: "Hickory smoked ribs from The Chick and The Pig",
    label: "Hickory smoked ribs",
  },
] as const;

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
  { day: "Monday", item: "Pulled Pork Sandwich Meal" },
  { day: "Tuesday", item: "Fried Chicken Breast Sandwich Meal" },
  { day: "Wednesday", item: "Burger Meal" },
  { day: "Thursday", item: "2 Char Dogs Meal" },
  { day: "Friday", item: "Chopped Brisket Sandwich Meal" },
  { day: "Saturday", item: "6 Jumbo Chicken Wings Meal" },
  { day: "Sunday", item: "1/2 Slab Ribs Meal" },
] as const;

export const BEST_SELLERS = [
  {
    name: "4pc Fried Chicken Meal",
    price: "$16.50",
    tag: "Chicken favorite",
    description:
      "Savory herbs and spices, two 8oz sides, biscuits, and honey butter.",
  },
  {
    name: "1/2 Slab Hickory Smoked Ribs",
    price: "$20.90",
    tag: "Smokehouse pick",
    description:
      "Spice-rubbed, hickory smoked, and grilled to order with BBQ sauce.",
  },
  {
    name: "Texas Twinkies",
    price: "$15.40",
    tag: "Starter to share",
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
    accent: "Start with the smoke",
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
      "Boneless Strips",
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
      "Brisket Sandwich",
      "Pulled Chicken Sandwich",
    ],
  },
  {
    name: "Smokehouse",
    accent: "Low and slow",
    items: [
      "1/2 Slab Ribs Meal",
      "Full Slab Hickory Smoked Ribs",
      "1/2 Lb Meats",
      "Brats and Sausage Meals",
      "Smoked Meat Plates",
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
  {
    name: "Sauces & Extras",
    accent: "Bring the sauce shelf home",
    items: [
      "Original BBQ",
      "Bourbon Peach BBQ",
      "Blueberry BBQ",
      "Ranch and Bleu Cheese",
      "Take-home jars and add-ons",
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
