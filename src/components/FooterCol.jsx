export const FooterCol = ({heading,array}) =>{
    return(
         <div className="col-2 w-[15%]">
                    <ul className="flex flex-col gap-5 w-full">
                        <li className="text-white">{heading}</li>
                        {
                            array.map((ele,i) => {
                                return (
                                    <li key={i}>
                                      <a href="#" className="text-gray-400 font-medium hover:text-white transition duration-300  cursor-pointer"> {ele} </a> 
                                    </li>
                                )
                            })
                        }
                    </ul>
        </div>
    )
}