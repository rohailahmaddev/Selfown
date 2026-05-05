import { FaHeart } from "react-icons/fa6";

export const FooterStrip = () => {
  return (
    <section className="container footer_bg flex items-center justify-center">
      <div className="w-[85%] flex md:items-center flex-col md:flex-row justify-between py-5">
        <div className="col1 w-full">
          <p className="text-gray-400 w-full text-[12px] md:text-[20px] flex items-center gap-3">
            © 2026 Selfown. Created with <FaHeart className="text-red-600" /> by
            Mannatthemes
          </p>
        </div>
        <div className="col2">
          <a href="#">
            <p className="text-blue-500 text-[12px] md:text-[20px] hover:text-white cursor-pointer transition duration-300">
            - Terms & condition <span className="text-red-500">*</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
