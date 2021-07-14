import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="bg-gray-900 h-full text-white">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
