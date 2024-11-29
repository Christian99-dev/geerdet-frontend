const Button = ({
  text,
  variant = "default",
  size = "default",
  onClick,
}: {
  text: string;
  variant?: "default" | "primary";
  size?: "small" | "default" | "large";
  onClick?: () => void;
}) => {
  // Basis-Klassen
  const baseClasses =
    "w-min ease-default transition duration-default bg-transparent rounded border-2 border-white text-white cursor-pointer inline-flex items-center justify-center font-bold tracking-wide uppercase text-center whitespace-nowrap overflow-hidden truncate";

  // Größen-Klassen
  let sizeClasses = "";
  if (size === "small") {
    sizeClasses = "text-8 h-10 px-6";
  } else if (size === "large") {
    sizeClasses = "text-5 h-14 px-12";
  } else {
    sizeClasses = "text-8 h-12 px-8";
  }

  // Varianten-Klassen
  const variantClasses =
    variant === "primary"
      ? "!bg-primary border-primary hover:border-gray-50"
      : "hover:bg-gray-25 active:bg-gray-50";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;