import React from "react";
import QuickLink from "./QuickLink";

//TODO: make the transition smooth and maybe you can make the opacity transition

// https://github.com/n8tb1t/use-scroll-position/blob/master/examples/navbar/src/pages/position.jsx

// interface IPosition {
//   x: number;
//   y: number;
// }

// interface IScrollProps {
//   prevPos: IPosition;
//   currPos: IPosition;
// }

// const PositionStore = () => {
//   let throttleTimeout = null;
//   const elementPosition = React.useRef<IPosition>({ x: 0, y: 0 });

//   const getPosition = (element: MutableRefObject<IPosition>, axis: "x" | "y") => {
//     Math.round(element.current[axis]);
//   };

//   const setDisplay = (element: MutableRefObject<IPosition>, pos: IPosition) => {
//     element.current = pos;
//   };

//   return {
//     getElementX: getPosition(elementPosition, "x"),
//     getElementY: getPosition(elementPosition, "y"),
//     setElementPosition: (position: IPosition) => {
//       setDisplay(elementPosition, position);
//     },
//   };
// };

export default function Carrot() {
  const [linkDisplay, setLinkDisplay] = React.useState(true);
  const [display, setDisplay] = React.useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < 230) {
      setDisplay(true);
    }
    if (position > 260) {
      setDisplay(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return React.useMemo(
    () => (
      <div className={display ? "w-full sm:w-3/4 md:w-3/5 mx-auto" : "hidden"}>
        <button
          onClick={() => setLinkDisplay(!linkDisplay)}
          className="relative rounded-full h-7 w-7 hover:bg-gray-500 hover:bg-opacity-30"
        >
          ^
        </button>
        <div className={linkDisplay ? "absolute top-20" : "hidden"}>
          <QuickLink />
        </div>
      </div>
    ),
    [display, linkDisplay]
  );
}
