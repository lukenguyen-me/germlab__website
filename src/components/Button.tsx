import classNames from "classnames";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={classNames(
        "bg-primary rounded px-4 py-2 transition-all",
        "text-black font-medium",
        "hover:bg-primaryBold",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
