import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="bg-gray-900 w-full h-screen text-white">{children}</div>;
}
