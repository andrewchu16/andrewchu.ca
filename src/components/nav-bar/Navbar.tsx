import DarkModeToggle from "./components/DarkModeToggle";
import NavLinks from "./components/NavLinks";

export default function Navbar() {
  return (
    <nav className="rounded-full shadow-lg border py-5 px-10 m-5 transition-colors flex gap-4 items-center justify-center">
      <NavLinks />
      <DarkModeToggle />
    </nav>
  );
}
