export default function ExperienceCard({
  date,
  border,
  institute,
  iconBg,
  f_color,
  class_w,
  right,
  s_color,
  icon,
  pt = "30px",
  pb = "30px",
  left,
  duties,
  circleBg,
}) {
  return (
    <div class={`main-timeline`}>
      <div className={`timeline`}>
        <a href="#" className={`timeline-content border-2 border-dashed ${border}`}
          style={{ "--theme-pt": pt, "--theme-pb": pb }}
        >
          <div className={`flex items-center justify-center border-2 ${border} p-2 timeline-icon`}
            style={left === "0px" ? { right: "auto", left: "10px" } : { left: "auto", right: "10px" }}
          >
            <p className={`${iconBg} p-10`}>{icon}</p>
          </div>
          <div className={`inner-content`}
          >
            <h3 className={`text-[18px] font-medium text-left`}
              style={left === "0px" ? { textAlign: "right" } : { textAlign: "left" }}
            >{institute}</h3>
            <p className={`text-[14px] ${class_w === "timeline-education" ? "text-right text-lg/10" : "text-justify"}`}
            >
              {duties}
            </p>
          </div>
          <div
            className={`${class_w === "timeline-education" ? "timeline-education" : "timeline-year"} ${circleBg}`}
            style={{
              ...(left === "0px"
                ? { left: "auto", right: right }
                : { right: "auto", left: "-105px" }
              ),
              "--first-color": f_color,
              "--second-color": s_color,
              boxShadow: `0 0 0 15px rgba(0,0,0,0.03)`,
              outline: `3px solid white`,
            }}
          >
            <span className="[text-shadow:1px_1px_2px_rgba(0,0,0,0.1)]">{date}</span>
          </div>
        </a>
      </div>
    </div>
  );
}
