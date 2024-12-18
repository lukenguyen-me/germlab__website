import FormSupport from "@/components/FormSupport/client";
import { useTranslation } from "@/i18n";
import classNames from "classnames";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Germlab - Support",
};

export default async function PageSupport() {
  const { t } = await useTranslation("en");

  return (
    <main className="padding-header min-h-screen px-8">
      <div
        className={classNames(
          "flex flex-col justify-around md:flex-row",
          "container mx-auto gap-8 pt-0 md:pt-20",
        )}
      >
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <ion-icon name="mail-outline" style={{ fontSize: 200 }} />
          <h1 className="text-center text-4xl text-primary md:text-left">
            {t("Need help? Send us")}
          </h1>
          <div className="w-full" style={{ maxWidth: 400 }}>
            <p>{t("Fill in the form with your question.")}</p>
            <p>{t("We will response ASAP at our  best!")}</p>
          </div>
        </div>
        <div className="md:min-w-96">
          <FormSupport />
        </div>
      </div>
    </main>
  );
}
