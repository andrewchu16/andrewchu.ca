import DarkModeToggle from "./components/DarkModeToggle";
import NavLinks from "./components/NavLinks";

export default function Navbar() {
  return (
    <nav className="rounded-full shadow-lg border py-5 px-9 m-5 transition-colors flex gap-4 items-center justify-center bg-background">
      <NavLinks />
      <DarkModeToggle />
    </nav>
  );
}
