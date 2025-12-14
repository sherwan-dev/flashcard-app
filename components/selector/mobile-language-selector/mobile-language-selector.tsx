'use client'
import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MobileLanguageSelector() {
    let defaultLanguage = "DE";
    let availableLanguages = ["DE", "EN"]
    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
    const [showLanguageList, setShowLanguageList] = useState(false);
    function changeLanguage(selectedLanguage: string) {
        setSelectedLanguage(selectedLanguage);
    }

    function toggleLanguageList() {
        setShowLanguageList(prev => !prev);
    }

    return (
        <div className="relative w-full">
            <button
                type="button"
                className="
                flex items-center gap-2
                font-medium
                text-sm
                cursor-pointer
                "
                onClick={toggleLanguageList}
            >
                <Globe size={18} />
                <span className="font-black">{selectedLanguage}</span>
                <ChevronDown
                    size={16}
                    className={` transition-transform duration-200 ${showLanguageList && 'rotate-180'} `}
                />
            </button>
            {/* Dropdown */}
            {showLanguageList && <div
                className="
                right-0 mt-2 group  
                bg-white
                min-w-20
                overflow-hidden  
                w-full
                "
            >
                <ul className="text-sm overflow-hidden w-full ">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-black w-full" onClick={() => changeLanguage("DE")}>
                        Deutsch
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-black w-full" onClick={() => changeLanguage("EN")}>
                        English
                    </li>
                </ul>
            </div>}
        </div>
    );
}
