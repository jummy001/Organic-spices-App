import ProductCard from "@/components/ProductCard"

async function getProducts() {

  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store"
  })

  if (!res.ok) {
    console.error("Failed to fetch products")
    return []
  }

  const data = await res.json()
  return data
}

export default async function ProductsPage() {

  const products = await getProducts()

  return (
    <div className="grid grid-cols-4 gap-6 p-10">

      {products.length === 0 && (
        <p className="text-gray-500">No products found</p>
      )}

      {products.map((product:any) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}

    </div>
  )
}