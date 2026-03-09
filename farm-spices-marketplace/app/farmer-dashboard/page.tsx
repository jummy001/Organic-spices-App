import Link from "next/link"

export default function Dashboard() {

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Farmer Dashboard
      </h1>

      <div className="flex gap-6">

        <Link
          href="/dashboard/products"
          className="bg-green-600 text-white p-4 rounded"
        >
          Manage Products
        </Link>

        <Link
          href="/dashboard/orders"
          className="bg-blue-600 text-white p-4 rounded"
        >
          View Orders
        </Link>

      </div>

    </div>
  )
}