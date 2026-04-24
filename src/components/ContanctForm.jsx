import contactSvg from "../assets/contact.svg";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import image from "../assets/testi-pet.png";

export const ContactForm = ({ section = "section" }) => {
  return (
    <section
      className={`container flex items-center justify-center pt-25 pb-25 ${section}`}
    >
      <div className="w-[85%] bg-white shadow-md rounded flex">
        <div className="w-[70%] flex flex-col gap-6 p-5">
          <div className="flex flex-col gap-3 p-2 w-full">
            <h2 className="herotext_color text-4xl">Get in touch !</h2>
            <p className="herotext_colo w-[65%] text-[20px]">
              Always available for freelancing if the right project comes along,
              Feel free to contact me.
            </p>
          </div>
          <form className="flex flex-col w-full gap-6 px-2">
            <div className="flex items-center gap-10 w-full">
              <span className="flex flex-col w-full gap-2">
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  id="username"
                  className="p-2 outline-none rounded border border-blue-200 focus:border-black"
                  placeholder="Your Name"
                />
              </span>
              <span className="flex flex-col w-full gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="p-2 border outline-none rounded border-blue-200 focus:border-black"
                  placeholder="Your Email"
                />
              </span>
            </div>
            <div className="flex items-center gap-10 w-full">
              <span className="flex flex-col w-full gap-2">
                <label htmlFor="Subject">Subject</label>
                <input
                  type="text"
                  id="Subject"
                  className="p-2 rounded outline-none border border-blue-200 focus:border-black"
                  placeholder="Subject"
                />
              </span>
              <span className="flex flex-col  w-full gap-2">
                <label htmlFor="number">Contact no.</label>
                <input
                  type="tel"
                  maxLength={13}
                  id="number"
                  className="p-2 outline-none border border-blue-200 focus:border-black rounded"
                  placeholder="+9230000003232"
                />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="border p-2 border-blue-200 focus:border-black outline-none h-25 rounded"
                placeholder="Write message..."
              ></textarea>
            </div>
            <div className="w-[25%]">
              <button className="text-xl p-3 text-white cursor-pointer rounded bg-blue-950 w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div
          className="w-[30%] bg-bottom-right bg-no-repeat bg-size-[200px]  "
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className=" flex flex-col gap-5 p-5 w-full">
            <img src={contactSvg} alt="image" className="w-35" />
            <div>
              <div className="flex items-center gap-3 pb-5 border-b border-dashed border-blue-200">
                <span className="p-3 bg-gray-300 rounded">
                  <LuPhone />
                </span>
                <span className="flex flex-col">
                  <p>+1 234 567 89</p>
                  <p className="text-gray-500">9:00am to 7:00pm</p>
                </span>
              </div>
              <div className="flex items-center gap-3 pt-5">
                <span className="p-3 bg-gray-300 rounded">
                  <MdOutlineMailOutline />
                </span>
                <span className="flex flex-col">
                  <p>rohailrao07@gmail.com</p>
                  <p className="text-gray-500">Monday to Saturday</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
