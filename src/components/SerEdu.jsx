export const SerEdu = ({btn_text, heading, para}) =>{
    return (
        <div className="flex items-center flex-col w-[55%] gap-5">
                <span className="bg-gray-300 text-green-400 py-1 px-2 rounded">{btn_text}</span>
                <h2 className="herotext_color text-3xl font-medium">{heading}</h2>
                <p className="herotext_color text-xl w-full text-center">{para}</p>
        </div>
    )
}