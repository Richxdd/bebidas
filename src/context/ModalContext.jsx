
import axios from "axios"
import { createContext,useEffect,useState } from "react"

export const ModalContext = createContext()

const ModalProvider = ({children}) => {

    const[idreceta,setIdReceta] = useState(null)
    const[info,setReceta] = useState({})

    useEffect(() => {
        
            const obtenerReceta = async()=>{

                if(!idreceta)return

                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
    
                const resultado = await axios(url)

                setReceta(resultado.data.drinks[0]);
            }
            obtenerReceta()
       
        
    }, [idreceta])


    return (
        <ModalContext.Provider
            value={{
                info,
                setIdReceta,
                setReceta
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
