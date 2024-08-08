import { FontTektur } from "@/fonts";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function AppLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={classNames("flex items-center gap-4", className)}>
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
    </Link>
  );
}
