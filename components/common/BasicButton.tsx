import { classNames } from "../../helpers";
import LoadingIcon from "../../assets/loader.svg";
import { CSSProperties } from "react";

export interface BasicButtonProps {
  loading?: boolean;
  text?: string;
  onClick?: () => void;
  disabledAttribute?: boolean;
  overrideBgColors?: string;
  children?: any;
  className?: string;
  variant?: "outlined" | "contained" | "text";
  style?: CSSProperties;
}

export default function BasicButton({
  text,
  onClick,
  disabledAttribute,
  overrideBgColors,
  children,
  className = "",
  variant = "contained",
  loading,
  style,
}: BasicButtonProps) {
  const getButtonStyle = (variant: string) => {
    switch (variant) {
      case "outlined":
        return "bg-black border-white border-2 text-white font-semibold text-lg py-2 px-4 rounded-none";
      case "contained":
        return "bg-white text-black font-semibold text-lg py-2 px-4 rounded-none";
      case "text":
        return "text-white";
      default:
        return "bg-black border-white border-2 text-white font-semibold text-lg py-2 px-4 rounded-none";
    }
  };
  return (
    <button
      style={{
        minWidth: "95px",
        minHeight: "46px",
        ...style,
      }}
      onClick={() => {
        onClick ? onClick() : "";
      }}
      disabled={disabledAttribute || loading}
      className={classNames(getButtonStyle(variant), className, "relative ")}
    >
      {!loading && children ? children : text}
      {loading && (
        <div className="flex items-center justify-center">
          <LoadingIcon
            className="absolute"
            style={{
              color: variant === "outlined" ? "#fff" : "#000000",
            }}
          />
        </div>
      )}
    </button>
  );
}
