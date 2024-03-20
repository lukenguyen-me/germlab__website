"use client";

import { FontTektur } from "@/app/fonts";
import { i18NextT } from "@/i18n";
import { languages } from "@/i18n/settings";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Menus } from "@/utils/navigation";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useShallow } from "zustand/react/shallow";

export interface HeaderProps {
  t: i18NextT;
}

const HeaderBase = (props: HeaderProps) => {
  const { t } = props;
  const toggleSidebar = useSidebarStore(
    useShallow((state) => state.toggleSidebar)
  );
  const pathname = usePathname();

  const prevScrollPos = useRef(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const header = document.getElementById("header");
    if (!header) return;
    if (currentScrollPos > prevScrollPos.current) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
    if (currentScrollPos === 0) {
      header.classList.add("atTop");
    } else {
      header.classList.remove("atTop");
    }
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={classNames(
        "flex items-center justify-between",
        "transition duration-300",
        "shadow-sm bg-black text-white px-4"
      )}
    >
      <div className="flex items-center gap-2">
        <button
          className="md:hidden rounded p-2 text-3xl"
          onClick={toggleSidebar}
        >
          <i className="bx bx-menu" />
        </button>
        <div className="flex items-center p-2 gap-4">
          <Image src="/images/logo.svg" alt="logo" width={30} height={30} />
          <div
            className={classNames(
              "flex items-center font-bold gap-1",
              FontTektur.className
            )}
          >
            <span>G</span>
            <span className="text-primary">E</span>
            <span>R</span>
            <span className="text-primary">M</span>
            <span>L</span>
            <span className="text-primary">A</span>
            <span>B</span>
          </div>
        </div>
        <div className="hidden md:flex items-center ml-10 gap-10">
          {Menus.map((e) => {
            const active =
              e.url === "/"
                ? languages.includes((pathname || "").replace("/", ""))
                : pathname
                ? pathname.includes(e.url)
                : false;
            return (
              <Link
                key={e.label}
                href={e.url}
                className={classNames(
                  "p-2",
                  "hover:font-medium hover:underline",
                  active && "text-primary font-semibold"
                )}
              >
                {t(e.label)}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-end text-sm"></div>
    </header>
  );
};

export default HeaderBase;
