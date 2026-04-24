import image from "../assets/Aboutbg.png";

export const OtherHeroSections = ({ heading }) => {
  return (
    <section
      className="container flex items-center justify-center bg-no-repeat bg-center bg-cover margint bg-black! h-100"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-[85%] flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <h2
            className="text-4xl flex items-center justify-center text_blur relative"
            style={{ "--heading-content": `"${heading}"` }}
          ></h2>
        </div>
      </div>
    </section>
  );
};
