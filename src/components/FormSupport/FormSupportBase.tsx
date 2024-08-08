"use client";

import axios from "axios";
import classNames from "classnames";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import { toast } from "react-toastify";

import { i18NextT } from "@/i18n";
import Spinner from "@/components/common/Spinner";

const animatedComponents = makeAnimated();

const Applications = [
  {
    name: "Flashnote",
    image:
      "https://germlab.s3.ap-southeast-1.amazonaws.com/public/logo_flashnote.png",
  },
  {
    name: "Veso",
    image:
      "https://germlab.s3.ap-southeast-1.amazonaws.com/public/logo_veso.png",
  },
  {
    name: "Cavo",
    image:
      "https://germlab.s3.ap-southeast-1.amazonaws.com/public/logo_cavo.png",
  },
];

interface FormSupportProps {
  t: i18NextT;
}

export default function PageSupport(props: FormSupportProps) {
  const { t } = props;
  const [app, setApp] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const reset = () => {
    setSubject("");
    setContent("");
    setApp("");
  };

  const onSubmit = async () => {
    if (!app) return toast.error("Please select an application");
    if (!subject) return toast.error("Please enter a subject");
    if (!content) return toast.error("Please enter content");
    try {
      await axios.post("https://api.germlab.dev/support", {
        app,
        subject,
        content,
      });
      toast.success("Support request submitted");
      reset();
    } catch (err) {
      toast.error("Failed to submit support request");
    } finally {
      setSubmitting(false);
    }
  };

  const options = Applications.map((e) => ({
    value: e.name,
    label: e.name,
  }));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label>Application</label>
        {/* <div className="flex gap-2">
        {Applications.map((e) => (
          <div
            key={e.name}
            className={classNames(
              "flex flex-1 items-center justify-center gap-2 p-2 rounded transition-all",
              e.name !== app && "opacity-80 border border-white cursor-pointer",
              e.name === app &&
                "opacity-100 border border-primary text-primary",
              "hover:opacity-100"
            )}
            onClick={() => setApp(e.name)}
          >
            <Image src={e.image} alt={e.name} width={24} height={20} />
            {e.name}
          </div>
        ))}
      </div> */}
        <Select
          styles={{
            control: (styles) => ({
              ...styles,
              backgroundColor: "black",
            }),
            singleValue: (styles) => ({ ...styles, color: "white" }),
            menu: (styles) => ({
              ...styles,
              backgroundColor: "#333333",
            }),
            option: (styles, { isSelected, isFocused }) => ({
              ...styles,
              color: isSelected ? "#333333" : "white",
              backgroundColor: isSelected
                ? "#00FBF4"
                : isFocused
                ? "black"
                : "#333333",
            }),
          }}
          components={animatedComponents}
          options={options}
          value={options.find((e) => e.value === app) || null}
          onChange={(e: any) => setApp(e.value)}
        />
      </div>
      <input
        className="text-lg p-4"
        placeholder={t("What is it about?")}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        rows={10}
        className="p-4"
        placeholder={t("Please describe more here...")}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={onSubmit}
        className={classNames(
          "flex items-center justify-center gap-4",
          "rounded p-4 border transition-all",
          "border-primary text-primary",
          "hover:bg-primary hover:text-black hover:font-bold"
        )}
      >
        {submitting && <Spinner className="w-6" />}
        {t("Submit")}
      </button>
    </div>
  );
}
