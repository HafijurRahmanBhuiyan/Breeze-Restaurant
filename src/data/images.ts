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

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food & Drink' | 'Interior' | 'Pizza' | 'Desserts' | 'Coffee' | 'Vibe';
  src: string;
  alt: string;
  caption: string;
  aspect?: string;
}

export const restaurantImages = {
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
