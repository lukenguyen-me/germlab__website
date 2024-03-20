import { useTranslation } from "@/i18n";
import CommingSoonBase from "./ComingSoonBase";

export default async function ComingSoon({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "footer");
  return <CommingSoonBase t={t} />;
}
