import React from "react";
import CircleMenu from "./CircleMenu";
import Cog from "./Cog";
import UserCircle from "./UserCircle";

export default function Banner() {
  return (
    <div className="px-10 pt-3 h-20 flex justify-between items-center sm:sticky sm:top-0">
      <CircleMenu width={25} height={25} />
      <div className="flex gap-x-6">
        <div className="flex gap-x-2">
          <div>Points</div>
          <UserCircle height={25} width={25} />
        </div>
        <Cog height={25} width={25} />
      </div>
    </div>
  );
}
