/**TODO
 * size
 */

// Icons
import Book from "@/svg/book.svg";
import Bunny from "@/svg/bunny.svg";
import Drop from "@/svg/drop.svg";
import Egg from "@/svg/egg.svg";
import Landscape from "@/svg/landscape.svg";
import Nature from "@/svg/nature.svg";
import Nature_people from "@/svg/nature_people.svg";
import Park from "@/svg/park.svg";
import Spa from "@/svg/spa.svg";
import ArrowDown from "@/svg/arrow-down.svg";

// Theme parameters
import { Color, IconKey } from "@/types/theme";

// all possible icons
const iconMap: Record<
  IconKey,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  book: Book,
  bunny: Bunny,
  drop: Drop,
  egg: Egg,
  landscape: Landscape,
  nature: Nature,
  nature_people: Nature_people,
  park: Park,
  spa: Spa,
  arrowDown: ArrowDown
};

export default function Icon({
  name,
  size = "small",
  color,
  strokeWidth = 25,
}: {
  name: IconKey;
  size?: "small" | "medium";
  color: Color;
  strokeWidth?: number;
}) {
  // get icon
  const SvgIcon = iconMap[name];

  return (
    <SvgIcon
      className={`
    ${size === "small" ? "size-9" : "size-12"}
    fill-${color} 
  `}
      strokeWidth={strokeWidth}
    />
  );
}
