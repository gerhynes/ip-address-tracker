import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 mt-auto text-center bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 text-white">
      Challenge by{" "}
      <a
        className="text-blue-100"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-blue-100"
        href="https://github.com/GK-Hynes"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gerard Hynes
      </a>
      .
    </footer>
  );
}
