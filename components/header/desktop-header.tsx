import LanguageSelector from "../selector/language-selector/language-selector"
export default function DesktopHeader() {
    return (
        <div className="h-container w-full border-b-(--default-border-color) border-b hidden lg:flex">
            <div className="content flex justify-center items-center w-full gap-8">
                <div className="logo-container max-w-fit select-none h-full "><a href="/" className="logo decoration-0 hover:decoration-0 block">M</a></div>
                <div className="link-item h-full">
                    <ul className="flex gap-8 items-stretch h-full">
                        <li className="flex h-full items-center"><a href="#" className="flex h-full items-center  font-black hover:text-(--blue-hover)">Home</a></li>
                        <li className=" flex h-full"><a href="#" className="flex h-full   items-center  font-black hover:text-(--blue-hover)">Library</a></li>
                        <li className="group flex h-full  items-center cursor-pointer"><LanguageSelector /></li>
                        <li className="flex items-center"><a href="" className="  text-white bg-(--blue) hover:bg-(--blue-hover) focus:ring-4 focus:ring-blue-200 font-black rounded-lg text-sm px-5 py-2.5 focus:outline-none ">Get Started</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}