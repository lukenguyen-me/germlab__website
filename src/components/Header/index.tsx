import { useTranslation } from "@/i18n";
import HeaderBase from "./HeaderBase";

export default async function Header({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);
  return <HeaderBase t={t} />;
}
