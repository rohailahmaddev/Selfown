export const SectionDivider = ({ top="-top-5", type = "header", svg, bg }) => {
  return (
    <section className={`${type === "footer" ? "container" : "hero_container"} relative`}>
      <div
        className={`overflow-hidden absolute -top-2 md:${top} left-0 -bottom-15 w-full ${bg}`}
      >
        {svg}
      </div>
    </section>
  );
};
