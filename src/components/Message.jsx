import image from "../assets/testi-pet.png"


export const MessageSend = () => {
    return(
        <section className="container section flex items-center justify-center bg-right bg-no-repeat bg-size-[350px]  h-70"
         style={{backgroundImage:`url(${image})`}}
        >
            <div className="w-[85%] flex items-center justify-between">
                <div className="col-1 w-[50%] flex flex-col gap-4">
                    <h2 className="text-3xl herotext_color">I Am Available For Freelancer.</h2>
                    <p className="herotext_color text-xl">Browse hundreds of job offers and find the bestsuitable position.</p>
                </div>
                <div 
                className="col-2 w-[45%] flex items-center justify-center">
                    <form className="w-full">
                        <div className="bg-white rounded-xl  p-1 w-full shadow-md flex items-center justify-between">
                            <input type="email" placeholder="Email Address" className="text-xl herotext_color outline-none border-0 px-2"/>
                            <button type="submit" className="text-xl p-3 text-white cursor-pointer rounded bg-blue-950">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}