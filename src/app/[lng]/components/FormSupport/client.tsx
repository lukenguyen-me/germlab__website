"use client";

import { useTranslation } from "@/i18n/client";
import FormSupportBase from "./FormSupportBase";
import { useParams } from "next/navigation";
import { fallbackLng } from "@/i18n/settings";

export default function FormSupport() {
  const params = useParams<{ lng: string }>();
  const { t } = useTranslation(params?.lng || fallbackLng);
  return <FormSupportBase t={t} />;
}
