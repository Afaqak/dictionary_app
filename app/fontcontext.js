import { createContext ,useState,useContext} from "react";
const FontContext = createContext();

const FontProvider = ({ children }) => {
    const [font, setFont] = useState('InterFont');
    const value = { font, setFont };

    return (
        <FontContext.Provider value={value}>
            {children}
        </FontContext.Provider>
    )
};

export { FontProvider, FontContext };