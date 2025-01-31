export default async function FixedBackgroundSection({
  img,
  alt,
  color,
  children,
  className,
}: {
  img: string;
  alt: string;
  color: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-cover bg-center bg-${color} bg-blend-overlay bg-fixed ${className}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
    </div>
  );
}
