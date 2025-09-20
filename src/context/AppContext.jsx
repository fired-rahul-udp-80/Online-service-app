
import { createContext,useState} from "react";
import { navbarContent } from "../data";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    // write here all state variable you want to use it
    const [navbar, setNavbar] = useState(navbarContent);


    const value = {
        // Add your context values here
        navbar,
        setNavbar
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}