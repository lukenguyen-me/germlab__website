"use client";

import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import CommingSoonBase from "./ComingSoonBase";
import { fallbackLng } from "@/i18n/settings";

export default function ComingSoon() {
  const params = useParams<{ lng: string }>();
  const { t } = useTranslation(params?.lng || fallbackLng);
  return <CommingSoonBase t={t} />;
}
