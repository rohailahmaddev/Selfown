export const SectionDivider = ({ type="header",svg, bg }) => {
  return (
    <section className={`${type==="footer"?"container":"hero_container"} relative`}>
      <div
        className={`overflow-hidden absolute -top-1 md:-top-5 left-0 -bottom-15 w-full ${bg}`}
      >
        {svg}
      </div>
    </section>
  );
};
