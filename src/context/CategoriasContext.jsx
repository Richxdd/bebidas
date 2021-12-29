
import { createContext,useState,useEffect } from "react"
import axios from "axios" 

export const CategoriasContext = createContext()

const CategoriasProvider = ({children})=>{

    const [categorias,setCategorias] = useState([])

    useEffect(() => {
        
        const consultarApi= async()=>{

            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

            const resultado = await axios(url)

            setCategorias(resultado.data.drinks);
        }
        consultarApi()
    }, [])



    return (
        <CategoriasContext.Provider
            value={{categorias}}
        >
            {children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider