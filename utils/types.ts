type Product = {
  id: number;
  name: string;
  concentration: string;
  imagesUrl: string;
}

type ResponseData = {
  payload: [Product]
}

export type { ResponseData, Product};
