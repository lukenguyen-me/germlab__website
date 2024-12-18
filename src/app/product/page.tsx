import CommingSoon from "@/components/ComingSoon";
import classNames from "classnames";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Germlab - Product",
};

export default async function PageProduct() {
  return (
    <main
      className={classNames(
        "flex min-h-screen flex-col items-center justify-between",
        "padding-header bg-black p-8",
      )}
    >
      <CommingSoon lng={"en"} />
    </main>
  );
}
