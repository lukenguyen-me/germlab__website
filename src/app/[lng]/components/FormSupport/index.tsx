import { useTranslation } from "@/i18n";
import FormSupportBase from "./FormSupportBase";

export default async function FormSupport({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);
  return <FormSupportBase t={t} />;
}
