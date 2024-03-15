import Banners from "@/components/banner/Banners";
import { LaptopList } from "./components/LaptopListSection";
import { PhoneList } from "./components/PhoneListSection";
import type { Metadata } from "next";

const BANNER_CONTENT = [
  {
    field: "sub",
    id: "0",
    image:
      "https://i.pinimg.com/564x/c0/7c/df/c07cdf905cb30fd912be1919031b5bbf.jpg",
  },
  {
    field: "sub",
    id: "1",
    image:
      "https://i.pinimg.com/564x/11/62/de/1162de01bbdd6f8da5822198285f7a64.jpg",
  },
  {
    field: "sub",
    id: "2",
    image:
      "https://i.pinimg.com/564x/34/e8/58/34e85832ea9502395f3a5ab138596457.jpg",
  },
  {
    field: "main",
    id: "4",
    image:
      "https://i.pinimg.com/564x/6a/4a/92/6a4a9250679050818495017601ae0d63.jpg",
  },
  {
    field: "main",
    id: "5",
    image:
      "https://i.pinimg.com/564x/95/74/b3/9574b3f0e516fb91bda569afcb052788.jpg",
  },
  {
    field: "main",
    id: "6",
    image:
      "https://i.pinimg.com/564x/fc/ba/e5/fcbae5e02653dba533d39dfd3b891a28.jpg",
  },
];

const laptopsToShow = [
  {
    id: "1",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/d7/47/d1/d747d1ca901acf7ed3561ffcd79a0720.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "2",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/75/b0/7f/75b07fe969f16e508bebf5addc4d6a62.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "3",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/f7/29/8a/f7298a9abb9a0f0550f9d50e8e3ba517.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "4",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/59/9e/82/599e82478d4c9a53166027e677537d85.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "5",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/02/1a/d0/021ad0d74c29cb8b55029d50b9b3f6a4.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "6",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/5b/7e/65/5b7e6571e6a6a8a9c65d48b9ae8f7af6.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "7",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/42/83/af/4283afecd1dc5a3d284569442cfea444.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "8",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/08/fa/da/08fada83ff885fc63fa3b54dbf6ec16a.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "9",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/7d/7d/2b/7d7d2b64ced23e1f67f89fe5657568fb.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "10",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/20/20/6d/20206dd0b6b1340a80f80c4db9e51ee0.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
];

const smartphonesToShow = [
  {
    id: "1",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/a4/cf/db/a4cfdb1d7745e89403bcaa19f14f0b94.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "2",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/e0/eb/d4/e0ebd4e55daa313af9212ebd0f9d9b54.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "3",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/de/96/48/de96480db2031a103b0142eeca8d2eb0.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "4",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/48/cc/5e/48cc5ec28b35c58e356e464d3cf8480a.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "5",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/16/02/a7/1602a7cf55e95881be4f721888a1e5b8.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "6",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/dc/d9/47/dcd94712e4e122ea3135cffb82e55deb.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "7",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/736x/8f/a1/d3/8fa1d33e9f5b1c03241ccfd26cdccd7b.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "8",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/b2/dd/a1/b2dda12c71f7d92f8f7630cc0e99fb8c.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "9",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/03/4f/0b/034f0b29036d5bca6b173c475442d244.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "10",
    name: "Laptop 1",
    media: [
      "https://i.pinimg.com/564x/12/c8/6d/12c86d981e68fb3aa7274b9e7d1f98c6.jpg",
    ],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
];

export const metadata: Metadata = {
  title: "HCI Shop  - High-Quality Laptops Suitable for All Needs",
  description:
    "Welcome to HCI Shop - specializing in providing high-quality laptops. Let us help you find the most suitable laptop for your work and entertainment needs from our diverse collection of laptop",
  openGraph: {
    title: "HCI Shop",
    description:
      "Welcome to HCI Shop - specializing in providing high-quality  laptops. Let us help you find the most suitable laptop  for your work and entertainment needs from our diverse collection of laptop",
    type: "website",
    url: "https://hci-shop.dev2001.site/",
    images: [
      "https://i.pinimg.com/564x/d7/47/d1/d747d1ca901acf7ed3561ffcd79a0720.jpg",
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <main
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <Banners banners={BANNER_CONTENT} />
        <LaptopList products={laptopsToShow} />
        <PhoneList products={smartphonesToShow} />
      </main>
    </>
  );
}
