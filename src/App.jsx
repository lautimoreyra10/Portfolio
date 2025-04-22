import { useState } from "react";
import About from "./pages/About";
import Navbar from "./components/Navbar";

export default function App() {
  const [page, setPage] = useState("about");

  return (
    <>
      <Navbar onNavigate={(dest) => setPage(dest)} />

      {page === "about" && <About />}
    </>
  );
}
