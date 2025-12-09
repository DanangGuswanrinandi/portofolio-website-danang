export default function ComponentName() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* 1️⃣ Hero Section */}
      <section className="h-screen bg-red-500 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Section 1 — Hero</h1>
      </section>

      {/* 2️⃣ About Section */}
      <section className="h-screen bg-orange-500 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Section 2 — About</h1>
      </section>

      {/* 3️⃣ Services / Skills */}
      <section className="h-screen bg-yellow-500 flex items-center justify-center text-gray-900">
        <h1 className="text-5xl font-bold">Section 3 — Services</h1>
      </section>

      {/* 4️⃣ Portfolio / Projects */}
      <section className="h-screen bg-green-500 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Section 4 — Portfolio</h1>
      </section>

      {/* 5️⃣ Testimonials */}
      <section className="h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Section 5 — Testimonials</h1>
      </section>

      {/* 6️⃣ Contact / Call to Action */}
      <section className="h-screen bg-indigo-500 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Section 6 — Contact</h1>
      </section>

      {/* 7️⃣ Footer */}
      <section className="h-screen bg-purple-600 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Section 7 — Footer</h1>
      </section>
    </div>
  );
}