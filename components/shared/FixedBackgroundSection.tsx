export default async function FixedBackgroundSection({
  img,
  color,
  children,
  className,
}: {
  img: string;
  color: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`bg-cover bg-center bg-${color} bg-blend-overlay bg-fixed ${className}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
    </section>
  );
}
