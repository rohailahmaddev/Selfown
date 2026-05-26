import { NavLink, useLocation } from "react-router-dom";

export const FooterCol = ({ heading, array }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const disabledClass = "text-gray-600 font-medium cursor-not-allowed opacity-50";
  return (
    <div className="col-2 w-full md:w-[15%]">
      <ul className="flex flex-col gap-5 w-full">
        <li className="text-white">{heading}</li>
        {array.map((ele, i) => (
          <li key={i}>
            {ele.path ? (
              <NavLink to={ele.path} className="text-gray-400 font-medium hover:text-white transition duration-300 cursor-pointer">
                {ele.name}
              </NavLink>
            ) :
              (ele.name === "Client Say" ?
                (isHome ?
                  <a href={`#${ele.id}`} className="text-gray-400 font-medium hover:text-white transition duration-300 cursor-pointer">
                    {ele.name}
                  </a>
                  :
                  <a href={`#${ele.id}`} className={`${disabledClass}`}>
                    {ele.name}
                  </a>)
                :
                <a href={`#${ele.id}`} className="text-gray-400 font-medium hover:text-white transition duration-300 cursor-pointer">
                  {ele.name}
                </a>)
            }
          </li>
        ))}
      </ul>
    </div>
  );
};
