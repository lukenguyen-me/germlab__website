import { FontTektur } from "@/app/fonts";
import { i18NextT } from "@/i18n";
import classNames from "classnames";

interface ComingSoonProps {
  t: i18NextT;
}

export default function CommingSoonBase(props: ComingSoonProps) {
  const { t } = props;
  return (
    <div
      className={classNames(
        "w-full h-full flex-1 text-center",
        "flex flex-col items-center justify-center gap-4"
      )}
    >
      <div className="text-8xl">
        <ion-icon name="timer-outline" />
      </div>
      {/* Add the missing type declaration */}
      <h1
        className={classNames(
          "text-primary text-6xl mb-8",
          FontTektur.className
        )}
      >
        {t("Coming soon")}
      </h1>
      <p>{t("We are going to launch this page Very Soon")}.</p>
      <p>{t("Stay Tune")}.</p>
    </div>
  );
}
