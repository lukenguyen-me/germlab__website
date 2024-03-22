import CommingSoon from "@/app/[lng]/components/ComingSoon";
import classNames from "classnames";

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
