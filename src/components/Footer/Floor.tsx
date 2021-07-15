import React from "react";
import DotsMenu from "./DotsMenu";

const ExampleTabs = [
  "Sports",
  "ESports",
  "Lifestyle",
  "Money",
  "Celebrities",
  "Travel",
  "Autos",
  "Politics",
  "Health and Fitness",
];

export default function Floor() {
  const [displaySticky, setDisplaySticky] = React.useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < 500) {
      setDisplaySticky(false);
    }
    if (position > 680) {
      setDisplaySticky(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return React.useMemo(
    () => (
      <div
        className={
          displaySticky
            ? "sticky top-14 sm:top-16 h-10 w-full"
            : "absolute bottom-0 left-0 h-10 w-full"
        }
      >
        <div className="flex h-full justify-between items-center gap-x-2">
          <div className="flex flex-1 h-full justify-between text-xs overflow-x-auto items-center">
            <div className="w-full h-full p-2 hover:bg-gray-500">My Feed</div>
            <div className="w-full h-full p-2 hover:bg-gray-500">Coronavirus</div>
            <div className="w-full h-full p-2 hover:bg-gray-500">Top Stories</div>
            <div className="w-full h-full p-2 hover:bg-gray-500">US</div>
            <div className="w-full h-full p-2 hover:bg-gray-500">Entertainment</div>
          </div>
          <DotsMenu tabs={ExampleTabs} topPosition={displaySticky} />
          <button className="w-1/6 py-2 text-center text-xs border border-solid border-opacity-30">
            Personalize
          </button>
          <button className="w-1/6 py-2 text-center text-xs border border-solid border-opacity-30">
            Headings Only
          </button>
        </div>
      </div>
    ),
    [displaySticky]
  );
}
