const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-8 text-center text-sm  bg-blend-overlay">
      <p className="font-semibold">
        © {new Date().getFullYear()} Coded with 💗 by{" "}
        <a
         href="https://www.linkedin.com/in/rora-alem"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-500"
        >
          Rora Alem
        </a>
      </p>
      <p className="mt-2 text-xs text-gray-500">Built with React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;
