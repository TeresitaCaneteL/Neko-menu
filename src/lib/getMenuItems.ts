/// lib/getMenuItems.ts
import { sanity } from "./sanity";

export async function getMenuItems() {
  return await sanity.fetch(`
    *[_type == "menuItem"]{
      _id,
      name,
      description,
      price,
      "image": image.asset->url,
      category->{name, slug}
    } | order(category.name asc)
  `);
}


