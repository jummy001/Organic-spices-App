export default function About() {
  return (
    <section
      id="about"
      className="bg-pink-500 text-white py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <img
          src="/images/logo.png"
          className="w-full"
        />

        <div>
          <h1 className="text-4xl font-bold mb-6">
            ABOUT US
          </h1>

          <p className="mb-4">
            At RA Enterprise, we bring nature’s best to your table. We specialize in supplying clean, organic farm produce and dry foods.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            🌿 Mission
          </h2>

          <p>
            Provide high-quality organic farm produce that promotes healthy living.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            🌿 Vision
          </h2>

          <p>
            Become a leading supplier of natural food products.
          </p>
        </div>

      </div>
    </section>
  );
}