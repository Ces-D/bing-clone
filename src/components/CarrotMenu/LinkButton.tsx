import React from "react";

export default function LinkButton() {
  return (
    <div className="flex p-2 h-25 w-34 flex-col items-center hover:bg-black hover:bg-opacity-70">
      <div className="rounded-sm h-11 w-11 bg-gray-400 bg-opacity-50">Logo</div>
      <h4>YouTube</h4>
    </div>
  );
}
