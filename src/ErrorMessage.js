import React from "react";

export default function ErrorMessage() {
  return (
    <div>
      <p className="text-center font-medium bg-red-100 text-red-700 py-4 z-30">
        Something went wrong. Please try again with a different IP address or
        domain.
      </p>
    </div>
  );
}
