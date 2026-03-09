import Navbar from "@/components/Navbar"

export default function Home(){

 return(

  <div>

   <Navbar/>

   <section className="h-screen flex flex-col justify-center items-center bg-green-700 text-white">

    <h1 className="text-6xl font-bold">
     Natural Farm Produce & Spices
    </h1>

    <p className="mt-4">
     Fresh organic products directly from farmers
    </p>

   </section>

  </div>
 )
}