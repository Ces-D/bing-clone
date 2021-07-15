import React from "react";
import Dots from "./Dots";
import ClickButton from "../Generics/ClickButton";

type Props = {
  tabs: string[];
  topPosition: boolean;
};

export default function DotsMenu({ tabs, topPosition }: Props) {
  const buttonElement = <Dots width={15} height={15} />;

  const dropDownElement = (
    <ul>
      {tabs.map((tab) => (
        <li className="py-1 px-4 text-center hover:bg-gray-200">{tab}</li>
      ))}
    </ul>
  );

  return (
    <ClickButton
      dropDownElement={dropDownElement}
      buttonElement={buttonElement}
      dropDownClass={topPosition ? "top-8 left-0" : "bottom-8 right-0"}
      buttonClass="hover:bg-gray-200"
    />
  );
}
