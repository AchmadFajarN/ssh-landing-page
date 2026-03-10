import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [hide, setHide] = useState(false);
  const scrollTimeout = useRef(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current) {
        setHide(true);
      }

      lastScroll.current = currentScroll;
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setHide(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-[135vw] md:w-[120vw] xl:w-[100vw] left-0 bg-transparent z-44 py-2 transition-transform duration-300 flex justify-center items-center ${ hide ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="bg-gray-100 shadow-md flex items-center mt-4 px-6 py-2 font-poppins gap-4 xl:gap-20 rounded-[22px]">
            <h1 className="font-bold px-4 xl:text-2xl font-raleway rounded-[12px] text-black/80">SSH</h1>
            <nav>
              <ul className="flex items-center gap-2 text-xs md:text-[16px] xl:gap-4 text-black/80">
                <li className="bg-black/80 text-white px-4 py-2 rounded-[12px]">Home</li>
                <li className=" px-4 py-2 rounded-[12px]">Portfolio</li>
                <li className=" px-4 py-2 rounded-[12px]">Blog</li>
                <li className="px-4 py-2 rounded-[12px] bg-orange-300 text-black/80">Buat Projek</li>
              </ul>
            </nav>
        </div>
    </header>
  );
}