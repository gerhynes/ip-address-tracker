import React from "react";
import arrowIcon from "./images/icon-arrow.svg";

export default function Form({ ipAddress, setIpAddress, handleSubmit }) {
  return (
    <form
      action="#"
      className="w-custom max-w-xl mx-auto flex"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-auto py-3.5 px-6 rounded-l-xl text-lg text-gray-700"
        type="text"
        placeholder="Search for any IP address or domain"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />
      <button
        className="bg-black rounded-r-xl px-4 hover:bg-gray-700"
        aria-label="Search for IP Address"
      >
        <img src={arrowIcon} alt="" />
      </button>
    </form>
  );
}
