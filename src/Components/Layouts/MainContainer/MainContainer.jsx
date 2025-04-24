import { useEffect, useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard"

const URL = "https://fakestoreapi.com/products";

export const MainContainer = () => {
  const [products, setProducts] = useState([]);

  const handleGetProducts = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al traer los productos:", error);
    }
  }

  useEffect(() => {
    handleGetProducts();
  }, [])

  return (
    <>
      <section className="flex flex-col gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </>
  )
}


