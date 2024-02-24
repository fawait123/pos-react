import { MenuListData } from "../Api/MenuData";
import { MenuListContext } from "../utils/contexts";
import SwitchButtonSideBar from "./SwitchButtonSideBar";
import { useContext, useState } from "react";

export default function SideBar() {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(true);
  const { menu, setMenu } = useContext(MenuListContext);

  return (
    <>
      <div
        className={`${
          sideBarIsVisible ? "col-span-2" : "col-span-1"
        } rounded-tr-md rounded-br-md transition-all duration-500 bg-[#2d2d2d] ${
          sideBarIsVisible ? "-translate-x-0" : "-translate-x-[1rem]"
        } duration-200 relative p-4 text-gray-500`}
      >
        <div
          className={`flex flex-col justify-between h-[680px] text-xs text-stone-100 font-bold ${
            sideBarIsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 items-center">
            {MenuListData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col space-y-1 items-center p-4 rounded-lg ${
                  menu === item.name ? "bg-[#f05756]" : ""
                } transition hover:opacity-80`}
                onClick={() => {
                  setMenu(item.name);
                }}
              >
                {item.icon}
                <span className="text-gray-500">{item.display_name}</span>
              </div>
            ))}
          </div>
          <div className="text-[9px] text-center">© 2024 POS</div>
        </div>
        <SwitchButtonSideBar
          onClick={() => setSideBarIsVisible(!sideBarIsVisible)}
        />
      </div>
    </>
  );
}
