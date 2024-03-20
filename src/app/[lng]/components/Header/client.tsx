"use client";

import { useTranslation } from "@/i18n/client";
import HeaderBase from "./HeaderBase";
import { useParams } from "next/navigation";
import { fallbackLng } from "@/i18n/settings";

export default function Header() {
  const params = useParams<{ lng: string }>();
  const { t } = useTranslation(params?.lng || fallbackLng);
  return <HeaderBase t={t} />;
}
