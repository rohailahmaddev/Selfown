import authorImage from "../assets/author.png";
import HeroText from "./HeroSkillAnimation";

export const HeroSection = ({heroRef}) => {
  return (
    <section className="herocontainer flex items-center justify-center" ref={heroRef}>
      <div className="w-[100%] relative flex items-center justify-center">
        <div className="w-full flex items-center justify-end relative overflow-hidden flex-row">
          <div className="bg_overlay w-full h-[1000px] md:h-[600px] absolute top-0"></div>
          <div className="w-[50%] h-[1000px] md:h-[600px] z-[-1] ">
            <iframe
              className=" block md:w-[177.77%] md:h-[600px] top-[calc(1 / 2 * 23%)] MobileVideo md:top-1/2 left-110 md:-translate-y-1/2  md:left-300 md:-translate-x-1/2 absolute"
              src="https://www.youtube-nocookie.com/embed/LBNDfxjEYlA?si=a6y-Rc56wsFbYrkB&controls=0&rel=0&modestbranding=1&autoplay=1&loop=1&mute=1"
              allowFullScreen
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
        <div className="col-1 w-[85%] md:w-[80%] absolute top-10 md:-top-10 pt-15 md:pt-0 flex items-center justify-between flex-col md:flex-row">
          <div className="flex flex-col justify-center gap-7 w-full md:w-[80%]">
            <span className="text-2xl w-full text-center heroSmallText">
              Hi, I'm Muhammad Hamid
            </span>
            <h1 className=" text-4xl md:text-5xl font-semibold md:font-bold gap-4 md:w-full flex flex-col justify-center md:flex-row items-center herotext_color">
             <span> I'm a freelance</span><span className="w-[33%]"> <HeroText /> </span>{" "}
            </h1>
            <h1 className="text-5xl font-semibold md:font-bold herotext_color text-center">
              Developer
            </h1>
            <a
              href="../assets/Rohail Ahmad CV.pdf"
              download
              className="text-center"
            >
              <button className="button-bg rounded px-6 py-2 cursor-pointer text-white">
                Download CV
              </button>
            </a>
          </div>
          <div className="md:pt-10">
            <img src={authorImage} alt="Author image" className=" h-149 md:h-150" />
          </div>
        </div>
      </div>
    </section>
  );
};
