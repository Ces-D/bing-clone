import React from "react";

export default function MicrosoftLogo() {
  return (
    <div className="flex h-full gap-x-2 items-center justify-center">
      <div className="h-17 w-17 grid grid-cols-2 grid-rows-2 gap-1">
        <div className="h-8 w-8 bg-purple-500" />
        <div className="h-8 w-8 bg-green-500" />
        <div className="h-8 w-8 bg-blue-500" />
        <div className="h-8 w-8 bg-red-300" />
      </div>
      <h1 className="text-4xl font-semibold">Microsift</h1>
    </div>
  );
}
