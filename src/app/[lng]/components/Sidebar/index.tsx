"use client";

import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { useShallow } from "zustand/react/shallow";
import { usePathname, useRouter } from "next/navigation";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Menus } from "@/utils/navigation";
import MenuItem from "./MenuItem";

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
        "sidebar-container transition duration-300 opacity-0",
        !sidebarOpen && "pointer-events-none",
        sidebarOpen && "opacity-100"
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          "sidebar flex flex-col",
          "h-full bg-primary py-3 pointer-events-auto",
          " transition duration-300",
          !sidebarOpen && "-translate-x-full md:translate-x-0",
          sidebarOpen && "translate-x-0 z-10"
        )}
      >
        <div className="flex items-center gap-2 p-5">
          <Image width={25} height={25} alt="" src="/images/logo.svg" />
          <span className="text-white text-2xl font-medium">VESO</span>
        </div>
        <div className="flex flex-1 flex-col p-2">
          {Menus.map((e) => {
            const active = pathname === e.url;
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
        <div className="p-5">
          <MenuItem
            text={
              <div className="flex items-center gap-2">
                <i className="bx bx-log-out" />
                Logout
              </div>
            }
            onClick={() => null}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
