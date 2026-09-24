/**
 * Authoritative business information and menu catalog for Breeze Restaurant.
 * Strictly adheres to verified information and user-supplied data.
 */

export interface MenuItem {
  id: string;
  name: string;
  banglaName?: string;
  category: 'Popular' | 'Mains' | 'Pizza' | 'Burgers & Sandwiches' | 'Appetizers & Soups' | 'Desserts' | 'Drinks';
  priceText?: string;
  description: string;
  highlight?: boolean;
  imageKey?: string;
}

export interface ReviewItem {
  id: string;
  reviewer: string;
  rating: number;
  timeContext: string;
  reviewText: string;
  highlightTag: string;
  verifiedVisit?: boolean;
}

export const businessInfo = {
  name: 'Breeze Restaurant',
  banglaName: 'ব্রীজ রেস্তোরাঁ',
  category: 'Fine Dining Restaurant',
  googleRating: 4.4,
  totalReviews: 951,
  priceRange: '৳200–1,200 per person',
  address: 'House# 1/C, 1/D, Road# 16, Dhaka 1229, Bangladesh',
  locatedIn: 'Star Thai Aluminium',
  phone: '01305-073888',
  phoneClean: '01305073888',
  plusCode: 'RCM9+J6 Dhaka',
  openingHours: {
    opens: '12:00 PM',
    closes: '11:00 PM',
    display: '12:00 PM – 11:00 PM',
    days: 'Daily (Monday – Sunday)',
  },
  services: [
    {
      id: 'dine-in',
      title: 'Dine-in',
      description: 'Enjoy the restaurant experience in person with comfortable seating and ambient dining.',
    },
    {
      id: 'drive-through',
      title: 'Drive-through',
      description: 'Drive-through service is available among the restaurant services for convenient pickup.',
    },
    {
      id: 'delivery',
      title: 'No-contact delivery',
      description: 'No-contact delivery is available to enjoy our dishes at your convenience.',
    },
  ],
  occasions: [
    {
      id: 'family',
      title: 'Family Gatherings',
      description: 'A welcoming setting for spending quality time with family over shared platters and heartwarming dishes.',
      detail: 'Spacious seating, gentle lighting, and generous group meal options.',
    },
    {
      id: 'couples',
      title: 'Date & Couples',
      description: 'A stylish atmosphere for relaxed conversations and memorable evenings together.',
      detail: 'Chic ambient lighting, romantic terrace seating, and handcrafted desserts.',
    },
    {
      id: 'friends',
      title: 'Friends & Get-Togethers',
      description: 'A comfortable environment for catching up over great food, drinks, and lively discussions.',
      detail: 'Sharing platters, gourmet burgers, pizza, and specialty frappes.',
    },
    {
      id: 'meetings',
      title: 'Casual Meetings',
      description: 'An inviting space suitable for informal meetings, creative discussions, and pleasant coffee breaks.',
      detail: 'Comfortable seating arrangements and fresh barista-brewed coffee.',
    },
  ],
};

export const menuItems: MenuItem[] = [
  // Popular Highlights
  {
    id: 'm1',
    name: 'Chicken Tender Rice Bowl',
    category: 'Popular',
    description: "A satisfying rice-bowl selection highlighted among the restaurant's popular dishes.",
    highlight: true,
  },
  {
    id: 'm2',
    name: 'Spicy Mushroom',
    category: 'Popular',
    priceText: '৳295',
    description: "A flavorful mushroom selection featured among the restaurant's popular menu highlights.",
    highlight: true,
  },
  {
    id: 'm3',
    name: 'Breeze Fantasy Platter',
    category: 'Popular',
    description: 'A generous assortment of treats featuring grilled chicken steaks, aromatic fried rice, crispy wings, potato wedges, and seasoned vegetables.',
    highlight: true,
    imageKey: 'platter',
  },
  {
    id: 'm4',
    name: 'Family Jumbo Platter',
    category: 'Popular',
    description: 'A signature sharing platter crafted for family gatherings and group dining.',
    highlight: true,
  },

  // Mains & Platters
  {
    id: 'm5',
    name: 'Char Kway Teow',
    category: 'Mains',
    description: 'Wok-tossed noodles prepared with seafood, savory sauces, and aromatic herbs.',
  },
  {
    id: 'm6',
    name: 'Chicken Steak with Fried Rice',
    category: 'Mains',
    description: 'Tender seasoned chicken steak served with aromatic rice, sauteed butter vegetables, and golden fries.',
  },
  {
    id: 'm7',
    name: 'Chicken Alfredo',
    category: 'Mains',
    priceText: '৳425',
    description: 'Classic creamy pasta tossed with savory parmesan sauce and tender chicken pieces.',
  },
  {
    id: 'm8',
    name: 'Mix Chow Mein',
    category: 'Mains',
    priceText: '৳390',
    description: 'Wok-fried egg noodles tossed with fresh vegetables and seasoned savory chicken.',
  },
  {
    id: 'm9',
    name: 'Oven Baked Pasta',
    category: 'Mains',
    priceText: '৳450',
    description: 'Baked pasta layered with savory sauce and a golden melted cheese crust.',
  },

  // Pizza
  {
    id: 'm10',
    name: 'BBQ Chicken Pizza',
    category: 'Pizza',
    priceText: '৳850',
    description: 'Artisanal pizza baked with tender barbecue chicken, rich sauce, and melted mozzarella (price noted before applicable tax/service).',
    imageKey: 'pizza',
  },
  {
    id: 'm11',
    name: 'Artisan Cheesy Pizza',
    category: 'Pizza',
    description: 'Freshly baked oven pizza generously layered with melted cheese and savory toppings.',
  },

  // Burgers & Sandwiches
  {
    id: 'm12',
    name: 'Grill Chicken Sandwich',
    category: 'Burgers & Sandwiches',
    priceText: '৳375',
    description: 'Golden grilled sandwich stuffed with seasoned chicken and cheese, served with crispy french fries and dipping sauce.',
  },
  {
    id: 'm13',
    name: 'Breeze Special Club Sandwich',
    category: 'Burgers & Sandwiches',
    priceText: '৳450',
    description: 'Multi-layer toasted club sandwich loaded with premium fillings and accompanied by golden fries.',
  },
  {
    id: 'm14',
    name: 'Hunter Beef Sandwich',
    category: 'Burgers & Sandwiches',
    priceText: '৳415',
    description: 'Savory cured beef sandwich served warm in toasted artisanal bread.',
  },
  {
    id: 'm15',
    name: 'Chicken Burger',
    category: 'Burgers & Sandwiches',
    priceText: '৳350',
    description: 'Tender seasoned chicken patty stacked with fresh crisp lettuce and house dressing in a soft bun.',
  },
  {
    id: 'm16',
    name: 'Beef Burger',
    category: 'Burgers & Sandwiches',
    priceText: '৳395',
    description: 'Juicy grilled beef patty topped with savory garnishes and house burger sauce.',
  },

  // Appetizers & Soups
  {
    id: 'm17',
    name: 'Chicken Wings (6pcs)',
    category: 'Appetizers & Soups',
    priceText: '৳425',
    description: 'Crispy glazed chicken wings tossed with rich house seasoning.',
  },
  {
    id: 'm18',
    name: 'Prawn Tempura (6pcs)',
    category: 'Appetizers & Soups',
    priceText: '৳499',
    description: 'Crisp golden battered prawns served with a delicate dipping sauce.',
  },
  {
    id: 'm19',
    name: 'Garlic Creamy Mushroom',
    category: 'Appetizers & Soups',
    priceText: '৳295',
    description: 'Tender mushrooms sauteed in a rich garlic butter cream sauce.',
  },
  {
    id: 'm20',
    name: 'Cream of Mushroom Soup',
    category: 'Appetizers & Soups',
    priceText: '৳390',
    description: 'Smooth and comforting warm mushroom soup blended with cream and herbs.',
  },
  {
    id: 'm21',
    name: 'Thai Tom Yum Soup',
    category: 'Appetizers & Soups',
    priceText: '৳350',
    description: 'Fragrant spicy and sour Thai soup infused with lemongrass and herbs.',
  },

  // Desserts
  {
    id: 'm22',
    name: 'Chocolate Brownie with Ice-Cream',
    category: 'Desserts',
    priceText: '৳450',
    description: 'Warm chocolate fudge brownie served with a scoop of creamy vanilla ice-cream and chocolate glaze.',
    imageKey: 'brownie',
  },
  {
    id: 'm23',
    name: 'Waffle Served with Ice-Cream',
    category: 'Desserts',
    priceText: '৳350',
    description: 'Crisp Belgian-style waffle served warm alongside rich vanilla ice cream.',
  },
  {
    id: 'm24',
    name: 'Ice-Cream Sundae',
    category: 'Desserts',
    priceText: '৳375',
    description: 'Chilled dessert sundae with assorted scoops, sweet drizzle, and toppings.',
  },

  // Drinks
  {
    id: 'm25',
    name: 'Cappuccino with Latte Art',
    category: 'Drinks',
    description: 'Freshly extracted espresso with velvety steamed milk and intricate floral barista art.',
    imageKey: 'coffee',
  },
  {
    id: 'm26',
    name: 'Island Breeze Mocktail',
    category: 'Drinks',
    priceText: '৳310',
    description: 'Cooling house-signature tropical mocktail crafted for warm Dhaka afternoons.',
  },
  {
    id: 'm27',
    name: 'Extreme Chocolate Frappe',
    category: 'Drinks',
    priceText: '৳380',
    description: 'Blended iced chocolate drink crowned with rich chocolate drizzle.',
  },
  {
    id: 'm28',
    name: 'Mango Lassi',
    category: 'Drinks',
    description: 'Smooth, refreshing traditional chilled yogurt beverage flavored with sweet mango.',
  },
  {
    id: 'm29',
    name: 'Virgin Mojito',
    category: 'Drinks',
    priceText: '৳260',
    description: 'Classic zesty mocktail made with fresh crushed mint, lime, and sparkling soda.',
  },
];

export const guestReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    reviewer: 'Customer Review',
    rating: 5,
    timeContext: 'Verified Guest Feedback',
    highlightTag: 'Ambiance & Gatherings',
    reviewText: 'Praised the restaurant’s interior, presentation, family/friendly gathering suitability, and food quality. The environment makes it a great spot to bring guests and spend unhurried hours together.',
  },
  {
    id: 'rev-2',
    reviewer: 'Customer Review',
    rating: 4,
    timeContext: 'Verified Guest Feedback',
    highlightTag: 'Decor & Service',
    reviewText: 'Described the décor and seating as attractive, staff as welcoming, and the restaurant as suitable for couples and casual meetings, while noting that prices felt somewhat on the higher side.',
  },
  {
    id: 'rev-3',
    reviewer: 'Customer Review',
    rating: 3,
    timeContext: 'Verified Guest Feedback',
    highlightTag: 'Menu Feedback',
    reviewText: 'A customer criticized the BBQ Chicken Pizza, mentioning they had a very poor experience with that particular pizza and noting a price of 850 TK before tax/service charges, while acknowledging the pleasant setting.',
  },
  {
    id: 'rev-4',
    reviewer: 'Customer Review',
    rating: 5,
    timeContext: 'Verified Guest Feedback',
    highlightTag: 'Popular Dishes',
    reviewText: 'Highlighted positive impressions of the Chicken Tender Rice Bowl and the Spicy Mushroom appetizer, remarking on the cozy atmosphere and comfortable dining seating.',
  },
];
