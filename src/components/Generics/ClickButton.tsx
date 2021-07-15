import React from "react";
type Props = {
  dropDownElement: React.ReactNode;
  buttonElement: React.ReactNode;
  buttonClass: string;
  dropDownClass: string;
};

export default function ClickButton({
  dropDownElement,
  buttonElement,
  buttonClass,
  dropDownClass,
}: Props) {
  const [display, setDisplay] = React.useState(false);

  return (
    <div className="relative">
      <button
        className={`hover:bg-gray-500 h-7 w-7 rounded-sm flex justify-center items-center ${buttonClass}`}
        onClick={() => setDisplay(!display)}
      >
        {buttonElement}
      </button>
      <div
        className={
          display ? `bg-gray-700 rounded-md absolute ${dropDownClass}` : "hidden"
        }
      >
        {dropDownElement}
      </div>
    </div>
  );
}
