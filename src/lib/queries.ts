// lib/queries.ts
import { sanity } from './sanity';
import groq from 'groq';

export async function getMenuItems() {
  return await sanity.fetch(
    groq`*[_type == "menuItem"]{
      _id,
      name,
      description,
      price,
      "image": image.asset->url,
      category
    } | order(category asc)`
  );
}
