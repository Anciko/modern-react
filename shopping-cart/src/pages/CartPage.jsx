import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart, updateQty } = useCart();

  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className="h-screen bg-gray-100 pt-20">
        <>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        {
          cart.length === 0 && (<p className="text-center">No Cart Items Found!</p>)
        }
      {
          !!cart.length && (
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            {/* Cart Items List */}
            <div className="rounded-lg md:w-2/3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h2>
                    </div>
                    <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
                      {/* Quantity Controls */}
                      <div className="flex items-center border-gray-100">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          -
                        </button>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={item.qty ?? 1}
                          onChange={(e) =>
                            updateQty(item.id, Number(e.target.value))
                          }
                          min="1"
                        />
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          +
                        </button>
                      </div>

                      {/* Price and Remove Button */}
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{item.qty} x ${item.price.toFixed(2)} = ${( item.qty * item.price).toFixed(2) }</p>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 transition duration-150 ease-in-out hover:text-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Price Summary */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-gray-900">Total Price</p>
                <div className="text-right">
                  <p className="text-xl font-extrabold text-blue-600">
                    $ {total}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">including VAT</p>
                </div>
              </div>
              <button
                type="button"
                onClick={clearCart}
                className="mt-6 w-full rounded-md bg-blue-500 py-2.5 font-semibold text-white shadow-sm transition duration-150 hover:bg-blue-600"
              >
                Clear Cart
              </button>
            </div>
          </div>
          )
      }
        </>
    </div>
  );
}

export default CartPage;
