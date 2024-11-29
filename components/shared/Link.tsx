const Link = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      className="text-9 ease-default transition duration-default text-gray-50 border-b-[2px] border-dotted hover:text-white hover:border-b-transparent"
      href={href}
    >
      {text}
    </a>
  );
};

export default Link;