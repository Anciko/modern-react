import { useContext } from "react";
import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/products");

        if (!res.ok) {
          throw new Error(`Failed to fetch products. Status: ${res.status}`);
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading, error }}>
      { children }
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext)
}
