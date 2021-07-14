import React from "react";

export default function Floor() {
  const [display, setDisplay] = React.useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < 500) {
      setDisplay(false);
    }
    if (position > 680) {
      setDisplay(true);
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
          display
            ? "sticky top-12 sm:top-16 h-10 w-full"
            : "absolute bottom-0 left-0 h-10 w-full"
        }
      >
        <div className="flex h-full justify-end bg-gray-600 bg-opacity-40">
          <div className="flex flex-1 h-full justify-evenly items-center text-xs">
            <div>My Feed</div>
            <div>CoronaVirus</div>
            <div>Top Stories</div>
            <div>US</div>
            <div> Entertainment</div>
            <div>Sports</div>
          </div>
          <div className="w-1/6 text-center text-xs">Personalize</div>
          <div className="w-1/6 text-center text-xs">Headings Only</div>
        </div>
      </div>
    ),
    [display]
  );
}
