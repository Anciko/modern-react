import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="mt-11 w-full  overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md ">
      <img
        className="h-48 w-full object-cover object-center"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {product.name}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-5">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </p>

          <button onClick={() => addToCart(product)} className="bg-blue-600 px-3 py-1 rounded-md text-white cursor-pointer">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;