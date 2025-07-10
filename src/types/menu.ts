export type MenuItem = {
  _id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: {
    name: string;
    slug: {
      current: string;
    };
  };
};

