import { FaHeart } from "react-icons/fa6";

export const FooterStrip = () => {
  return (
    <section className="container footer_bg flex items-center justify-center">
      <div className="w-[85%] flex md:items-center md:flex-row justify-between py-5">
        <div className="col1 w-[60%] md:w-[30%] ">
          <p className="text-gray-400 w-full text-[10px] md:text-[20px] flex items-center gap-3">
            © 2026 Muhammad Hammid.
          </p>
        </div>
        <div className="col2">
          <a href="#">
            <p className="text-blue-500 text-[10px] md:text-[20px] hover:text-white cursor-pointer transition duration-300">
            - Terms & condition <span className="text-red-500">*</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
