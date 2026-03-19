import ProductCard from "@/components/ProductCard"

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store"
  })

  return res.json()
}

export default async function ProductsPage() {

  const products = await getProducts()

  return (

    <div className="grid grid-cols-4 gap-6 p-10">

      {products.map((product:any) => (

        <ProductCard
          key={product._id}
          product={product}
        />

      ))}

    </div>

  )
}