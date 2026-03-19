import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Product from "@/models/Product"

export async function GET() {
  try {
    await connectDB()

    const products = await Product.find().populate("farmer").lean()

    return NextResponse.json(products)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Database error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    if (!body.name || !body.price) {
      return NextResponse.json(
        { error: "Name and price required" },
        { status: 400 }
      )
    }

    const product = await Product.create(body)

    return NextResponse.json(product)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Create failed" }, { status: 500 })
  }
}