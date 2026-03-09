export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl text-center mb-8">
          CONTACT US
        </h1>

        <form className="flex flex-col gap-4">

          <input
            placeholder="Enter your name"
            className="p-3 rounded text-black"
          />

          <input
            placeholder="Enter your email"
            className="p-3 rounded text-black"
          />

          <textarea
            placeholder="Enter your message"
            className="p-3 rounded text-black"
          />

          <button className="bg-green-600 p-3 rounded">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}