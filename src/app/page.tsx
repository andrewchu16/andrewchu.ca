import ContactLinks from "@/components/ContactLinks";
import NavLinks from "@/components/NavLinks";

export default function Home() {
  return (
    <div className="font-sans h-screen w-screen flex flex-col">
      <header className="w-screen absolute top-4 left-0 flex justify-center"></header>
      <main className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-6xl font-bold mb-1">Andrew Chu</h1>
        <h2 className="text-3xl text-secondary mb-2.5">CS @ UWaterloo</h2>
        <ContactLinks />
      </main>
      <div className="w-screen absolute bottom-4 left-0 flex justify-center">
        <nav className="rounded-full shadow-lg border py-5 px-10 m-5 transition-colors">
          <NavLinks />
        </nav>
      </div>
    </div>
  );
}
