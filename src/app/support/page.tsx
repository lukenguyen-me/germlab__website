import classNames from "classnames";
import { Metadata } from "next";
import { useTranslation } from "@/i18n";
import FormSupport from "@/components/FormSupport/client";

export const metadata: Metadata = {
  title: "Germlab - Support",
};

export default async function PageSupport({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <main className="min-h-screen padding-header px-8">
      <div
        className={classNames(
          "flex flex-col md:flex-row justify-around",
          "container mx-auto pt-0 md:pt-20 gap-8"
        )}
      >
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <ion-icon name="mail-outline" style={{ fontSize: 200 }} />
          <h1 className="text-primary text-4xl text-center md:text-left">
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
