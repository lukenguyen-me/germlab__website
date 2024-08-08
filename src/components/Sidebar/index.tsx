"use client";

import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { useShallow } from "zustand/react/shallow";
import { usePathname, useRouter } from "next/navigation";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Menus } from "@/utils/navigation";
import MenuItem from "./MenuItem";
import { languages } from "@/i18n/settings";
import AppLogo from "../AppLogo";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { toggleSidebar, sidebarOpen } = useSidebarStore(
    useShallow((state) => ({
      toggleSidebar: state.toggleSidebar,
      sidebarOpen: state.open,
    }))
  );

  return (
    <div
      onClick={toggleSidebar}
      className={classNames(
        "sidebar-container transition duration-300 opacity-0 z-10",
        !sidebarOpen && "pointer-events-none",
        sidebarOpen && "opacity-100"
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          "sidebar flex flex-col",
          "h-full bg-black py-3",
          " transition duration-300",
          !sidebarOpen && "-translate-x-full md:translate-x-0",
          sidebarOpen && "translate-x-0 z-10 pointer-events-auto"
        )}
      >
        <AppLogo className="p-5" />
        <div className="flex flex-1 flex-col p-2">
          {Menus.map((e) => {
            const active =
              e.url === "/"
                ? languages.includes((pathname || "").replace("/", ""))
                : pathname
                ? pathname.includes(e.url)
                : false;
            return (
              <MenuItem
                key={e.label}
                text={e.label}
                active={!!active}
                onClick={() => {
                  router.push(e.url);
                  toggleSidebar();
                }}
              />
            );
          })}
        </div>
        <div className="p-5">© 2024 - Germlab</div>
      </div>
    </div>
  );
};

export default Sidebar;
