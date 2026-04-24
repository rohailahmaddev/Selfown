export const SectionDivider = ({ svg, top, bg }) => {
  return (
    <section className="container relative">
      <div
        className={`overflow-hidden absolute ${top} left-0 -bottom-15 w-full ${bg}`}
      >
        {svg}
      </div>
    </section>
  );
};
