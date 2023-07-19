import React, { useState } from "react";

export default function App() {
  return (
    <>
      <NavBar />
    </>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img"> 🍿</span>
      <h1 className="text-2xl text-white font-bold">usePopcorn</h1>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Search movies"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
