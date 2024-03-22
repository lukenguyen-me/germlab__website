import classNames from "classnames";
import { Metadata } from "next";
import CommingSoon from "@/app/[lng]/components/ComingSoon";

export const metadata: Metadata = {
  title: "Germlab - Product",
};

export default async function PageProduct({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <main
      className={classNames(
        "flex min-h-screen flex-col items-center justify-between",
        "padding-header bg-black p-8"
      )}
    >
      <CommingSoon lng={lng} />
    </main>
  );
}
