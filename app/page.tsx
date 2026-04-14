export default function Home(){
  return(
    <main className="bg=black text-white min-h-screen p-10">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Mariano Gonzalez Barrientos
        </h1>
        <p className="text-xl text-gray-400">
          Software Engineer building real-world systems and scalable solutions.
        </p>
      </section>
      {/* ABOUT */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-4">About me</h2>
        <p className="text-gray-400 max-w-2xl">
          I'm a Software Engineer focused on full stack development systems, architecture, security and automation. I was born
          in Mexico and graduated as a software engineer in the Polythecnic University of Pachuca on 2026 
        </p>
      </section>
      {/* PROJECTS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          
          <div className="border border-gray-700 p-5 rounded-xl">
            <h3 className="text-xl font-bold">TEYSAR System</h3>
            <p className="text-gray-400">
              Production and inventory management system built with Python and Flet.
            </p>
          </div>

          <div className="border border-gray-700 p-5 rounded-xl">
            <h3 className="text-xl font-bold">Condominios Amity</h3>
            <p className="text-gray-400">
              Full-stack Laravel system for ticket management and dashboards.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400">
          gonzalezbarrientosmariano@gmail.com
        </p>
      </section>
    </main>
  );
}
