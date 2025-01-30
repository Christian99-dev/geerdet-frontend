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
    <section className="relative">
      <div
        className="absolute w-full h-full object-cover z-[-1] bg-fixed"
        style={{
          backgroundImage: `url(${img})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label={alt}
      />

      {/** Abdunklung des bildes */}
      <div className={`absolute inset-0 z-0 bg-${color}`} />

      <div className={`z-10 absolute top-0 left-0 w-full h-full  ${className}`}>{children}</div>
    </section>
  );
}
