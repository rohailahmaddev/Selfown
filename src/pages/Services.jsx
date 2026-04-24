import { MessageSend } from "../components/Message";
import { OtherHeroSections } from "../components/OtherHeroSections";
import { SectionDivider } from "../components/SectionDivider";
import { ServicesCard } from "../components/ServiceCard";

export const Services = () => {
  return (
    <>
      <OtherHeroSections heading={"SERVICES"} />
      <SectionDivider
        top={`-top-5`}
        bg={"bg-transparent"}
        svg={
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="white"
            ></path>
          </svg>
        }
      />
      <ServicesCard display={false} bg="bg-white pb-25" />
      <MessageSend />
      <SectionDivider
        top={`-top-5`}
        bg={"bg-transparent"}
        svg={
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="rgb(23, 45, 82)"
            ></path>
          </svg>
        }
      />
    </>
  );
};
