import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";
export default function Header(){
    return( 
        <header className="w-full pl-4 pr-4">
            <DesktopHeader/>
            <MobileHeader/>
        </header>
    );
}