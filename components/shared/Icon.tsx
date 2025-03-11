import { Color } from "@/types/theme/theme";

export default function Icon({
  name,
  size = "small",
  color,
  strokeWidth = 25,
}: {
  name: string;
  size?: "small" | "medium";
  color: Color;
  strokeWidth?: number;
}) {
  return (
    <span
      className={`material-icons-outlined ${
        size === "small" ? "text-[1.5rem]" : "text-[2.5rem]"
      } text-${color}`}
    >
      {name}
    </span>
  );
}
