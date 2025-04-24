import { useEffect, useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard"

const URL = "https://fakestoreapi.com/products"

export const MainContainer = () => {
  const [products, setProducts] = useState([])

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
    <main className="min-h-screen bg-gray-100 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <section className="flex flex-wrap justify-center gap-6 mt-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>
      </div>
    </main>
  )
}
