import MoviesList from "@/sections/MoviesList";
import Navbar from "@/sections/Navbar";

export default async function Home() {

  return (
    <main>
      <section className="padding-x py-4">
        <Navbar />
      </section>
      <section className="padding-x ">
        <MoviesList />
      </section>
    </main>
  );
}
