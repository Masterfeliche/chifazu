// app/catalog/page.tsx  (or pages/catalog.tsx)
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Cool Hoodie",
    price: "$35",
    image: "/MERCH/VISA.png",
  },
  {
    id: 2,
    name: "hoodie",
    price: "$12",
    image: "/MERCH/WYM.png",
  },
  {
    id: 3,
    name: "CropTop",
    price: "$20",
    image: "/MERCH/PRETTY MUCH.png",
  },
];

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-gray-800 p-10">
      <h1 className="text-3xl font-bold mb-6">Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-xl"
            />
            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
