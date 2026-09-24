/**
 * Centralized image configuration for Breeze Restaurant.
 * Real Breeze Restaurant photography can be placed in /src/assets/images
 * and easily referenced here without modifying component files.
 */

import heroRooftopImg from '../assets/images/breeze_hero_rooftop_1790269386317.jpg';
import platterImg from '../assets/images/breeze_fantasy_platter_menu_1790270652964.jpg';
import pizzaImg from '../assets/images/breeze_artisan_pizza_1790269420526.jpg';
import brownieImg from '../assets/images/breeze_sizzling_brownie_1790269433105.jpg';
import coffeeImg from '../assets/images/breeze_latte_art_1790269447060.jpg';
import riceBowlImg from '../assets/images/rice_bowl_chicken_1790279133193.jpg';
import spicyMushroomImg from '../assets/images/spicy_mushroom_dish_1790279153351.jpg';
import steakRiceImg from '../assets/images/steak_fried_rice_1790279187431.jpg';
import pastaAlfredoImg from '../assets/images/creamy_pasta_alfredo_1790279209401.jpg';
import sandwichImg from '../assets/images/triple_decker_club_sandwich_1790280770099.jpg';
import burgerImg from '../assets/images/breeze_beef_burger_1790279248155.jpg';
import wingsImg from '../assets/images/crispy_chicken_wings_1790279266847.jpg';
import mocktailImg from '../assets/images/island_breeze_lime_mojito_1790280631646.jpg';
import chocolateFrappeImg from '../assets/images/extreme_hot_chocolate_frappe_1790280523789.jpg';
import mangoLassiImg from '../assets/images/breeze_mango_lassi_1790279726892.jpg';
import mushroomSoupImg from '../assets/images/mushroom_soup_bowl_1790279302629.jpg';
import waffleImg from '../assets/images/belgian_waffle_dessert_1790279323166.jpg';
import sundaeImg from '../assets/images/icecream_sundae_parfait_1790279597346.jpg';
import wokNoodlesImg from '../assets/images/char_kway_teow_noodles_1790279881304.jpg';
import familyJumboImg from '../assets/images/family_jumbo_feast_platter_1790280045613.jpg';
import prawnTempuraImg from '../assets/images/crispy_tempura_prawns_1790279357610.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food & Drink' | 'Interior' | 'Pizza' | 'Desserts' | 'Coffee' | 'Vibe';
  src: string;
  alt: string;
  caption: string;
  aspect?: string;
}

export const restaurantImages: Record<string, { src: string; alt: string; label: string }> = {
  hero: {
    src: heroRooftopImg,
    alt: 'Breeze Restaurant ambient dining terrace at twilight in Dhaka',
    label: 'Atmospheric Dining',
  },
  platter: {
    src: platterImg,
    alt: 'Breeze Fantasy Platter featuring grilled chicken, aromatic rice, wings, and sides',
    label: 'Platters & Feasts',
  },
  familyJumbo: {
    src: familyJumboImg,
    alt: 'Breeze Family Jumbo Platter featuring grand assortment of grilled meats, kebabs, chops, fresh salads, and flatbreads',
    label: 'Family Feasts',
  },
  pizza: {
    src: pizzaImg,
    alt: 'Freshly baked artisanal pizza with melted cheese and savory toppings',
    label: 'Artisan Pizza',
  },
  brownie: {
    src: brownieImg,
    alt: 'Warm chocolate fudge brownie served with vanilla ice-cream and chocolate glaze',
    label: 'Signature Desserts',
  },
  coffee: {
    src: coffeeImg,
    alt: 'Artisan cappuccino with intricate floral latte art in a matte black cup',
    label: 'Artisan Coffee',
  },
  riceBowl: {
    src: riceBowlImg,
    alt: 'Crispy chicken tender rice bowl with savory glaze and scallions',
    label: 'Rice Bowls',
  },
  spicyMushroom: {
    src: spicyMushroomImg,
    alt: 'Sizzling spicy sauteed garlic mushrooms with chili and fresh herbs',
    label: 'Appetizers',
  },
  steakRice: {
    src: steakRiceImg,
    alt: 'Grilled chicken steak served with egg fried rice and vegetables',
    label: 'Chef Steaks',
  },
  pasta: {
    src: pastaAlfredoImg,
    alt: 'Creamy chicken fettuccine alfredo with parmesan and fresh herbs',
    label: 'Pasta & Noodles',
  },
  sandwich: {
    src: sandwichImg,
    alt: 'Golden toasted triple-decker club sandwich cut into triangles served with creamy house dipping sauce in a tray',
    label: 'Club Sandwiches',
  },
  burger: {
    src: burgerImg,
    alt: 'Gourmet flame-grilled beef burger with melted cheese and golden fries',
    label: 'Burgers',
  },
  wings: {
    src: wingsImg,
    alt: 'Crispy glazed chicken wings with savory seasonings and dip',
    label: 'Wings & Starters',
  },
  mocktail: {
    src: mocktailImg,
    alt: 'Crisp refreshing Island Breeze lime mojito mocktail with fresh mint, lime wheels, and crushed ice',
    label: 'Signature Mojito',
  },
  mangoLassi: {
    src: mangoLassiImg,
    alt: 'Creamy refreshing Mango Lassi served chilled with fresh mango slices and straw',
    label: 'Chilled Lassi',
  },
  chocolateFrappe: {
    src: chocolateFrappeImg,
    alt: 'Decadent Extreme Chocolate Frappe with whipped cream dripping and marshmallows',
    label: 'Signature Chocolate',
  },
  soup: {
    src: mushroomSoupImg,
    alt: 'Rich cream of wild mushroom soup with fresh herbs and baguette',
    label: 'Soups',
  },
  waffle: {
    src: waffleImg,
    alt: 'Golden Belgian waffle served with ice cream and warm maple syrup',
    label: 'Desserts',
  },
  sundae: {
    src: sundaeImg,
    alt: 'Classic cherry chocolate ice cream sundae parfait with whipped cream',
    label: 'Sundae Desserts',
  },
  wokNoodles: {
    src: wokNoodlesImg,
    alt: 'Sizzling wok-tossed Char Kway Teow noodles with prawns and vegetables',
    label: 'Wok Noodles',
  },
  tempura: {
    src: prawnTempuraImg,
    alt: 'Crispy golden battered prawn tempura with dipping sauce',
    label: 'Seafood Appetizers',
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Breeze Dining Atmosphere',
    category: 'Vibe',
    src: heroRooftopImg,
    alt: 'Elegant ambient dining atmosphere with warm illumination',
    caption: 'Chic, comfortable seating curated for romantic dates, social evenings, and family dinners.',
    aspect: 'aspect-video',
  },
  {
    id: 'gal-2',
    title: 'Breeze Fantasy Platter',
    category: 'Food & Drink',
    src: platterImg,
    alt: 'Delicious assortment of treats and grilled specialties',
    caption: 'A lavish sharing platter crafted for family gatherings and celebrations.',
    aspect: 'aspect-4/3',
  },
  {
    id: 'gal-3',
    title: 'Freshly Baked Pizza',
    category: 'Pizza',
    src: pizzaImg,
    alt: 'Gourmet pizza with golden crust and savory toppings',
    caption: 'Handcrafted pizza baked with savory toppings and melted mozzarella cheese.',
    aspect: 'aspect-square',
  },
  {
    id: 'gal-4',
    title: 'Sizzling Chocolate Brownie',
    category: 'Desserts',
    src: brownieImg,
    alt: 'Decadent chocolate brownie topped with vanilla ice cream',
    caption: 'Warm chocolate brownie served with velvety vanilla ice cream and hot chocolate drizzle.',
    aspect: 'aspect-4/3',
  },
  {
    id: 'gal-5',
    title: 'Barista Cappuccino Art',
    category: 'Coffee',
    src: coffeeImg,
    alt: 'Cappuccino with delicate rosette latte art',
    caption: 'Freshly brewed specialty coffee crafted with artistic latte presentation.',
    aspect: 'aspect-square',
  },
  {
    id: 'gal-6',
    title: 'Evening Ambiance & Lighting',
    category: 'Interior',
    src: heroRooftopImg,
    alt: 'Warm lighting and lush decor at Breeze Restaurant',
    caption: 'Inviting space designed for casual meetings, friends, and family.',
    aspect: 'aspect-video',
  },
];
