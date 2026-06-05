
export default function ExperienceCard({
  date,
  border,
  institute,
  iconBg,
  f_color,
  s_color,
  icon,
  pt="30px",
  pb="30px",
  left,
  duties,
  circleBg,
}) {
  return (
    <div class={`main-timeline`}>
      <div className={`timeline`}>
        <a href="#" className={`timeline-content border-2 border-dashed ${border}`}
            style={{"--theme-pt":pt,"--theme-pb":pb}}
        >
          <div className={`flex items-center justify-center border-2 ${border} p-2 timeline-icon`}
            style={left === "0px" ? { right: "auto", left: "10px" } : { left: "auto", right: "10px" }}
          >
            <p className={`${iconBg} p-10`}>{icon}</p>
          </div>
          <div className={`inner-content`}
          >
            <h3 className={`text-[18px] font-medium text-left`}>{institute}</h3>
            <p className={`text-[14px] text-left`}>
              {duties}
            </p>
          </div>
          <div className={`timeline-year ${circleBg}`}
            style={{
              ...(left === "0px"
                ? { left: "auto", right: "-119px" }
                : { right: "auto", left: "-119px" }
              ),
              "--first-color": f_color,
              "--second-color": s_color
            }}>
              <span>{date}</span></div>
        </a>
      </div>
    </div>
  );
}
