'use client'
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSelector() {
  let defaultLanguage = "DE";
  let availableLanguages = ["DE", "EN"]
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [showLanguageList, setShowLanguageList] = useState(false);
  const dropdownRef = useRef(null);

  function changeLanguage(selectedLanguage: string) {
    setSelectedLanguage(selectedLanguage);
    setShowLanguageList(false);
  }

  function toggleLanguageList() {
    setShowLanguageList(prev => !prev);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLanguageList(false);
      }
    }

    if (showLanguageList) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageList]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
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
      {showLanguageList &&
        <div
          className="
          absolute right-0 mt-2 
          rounded-xl shadow-lg
          bg-white
          min-w-20
          overflow-hidden  
        "
        >
          <ul className="text-sm border-(--default-border-color) border overflow-hidden ">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-black" onClick={() => changeLanguage("DE")}>
              DE
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-black" onClick={() => changeLanguage("EN")}>
              EN
            </li>
          </ul>
        </div>}
    </div>
  );
}
