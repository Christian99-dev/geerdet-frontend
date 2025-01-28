import Navbar from "@/components/shared/Navbar";

export default function StandardLayout({
  title,
  img,
  children,
}: {
  title: string;
  img: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <img src={img} alt={title} />
        <h1>{title}</h1>
      </div>
      {children}
    </>
  );
}
