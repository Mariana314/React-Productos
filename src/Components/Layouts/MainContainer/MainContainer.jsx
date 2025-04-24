import { useEffect, useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import { SearchBar } from "../SearchBar/SearchBar"

const URL = "https://fakestoreapi.com/products"

export const MainContainer = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gray-100 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <section className="flex flex-wrap justify-center gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>
      </div>
    </main>
  )
}