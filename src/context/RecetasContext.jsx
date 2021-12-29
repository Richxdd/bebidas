
import axios from "axios"
import { createContext,useState,useEffect } from "react"

export const RecetasContext = createContext()

const RecetasProvider = ({children}) => {

    const [recetas,guardarRecetas] = useState([])

    const [buscar,buscarRecetas] = useState({
        nombre: '',
        categoria: ''

    })

    const [consultar,setConsultar] = useState(false)

    const { nombre,categoria} = buscar

    useEffect(() => {

        if(consultar)
        {
            const consultarApi= async()=>{

                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
    
                const resultado = await axios(url)

                guardarRecetas(resultado.data.drinks);
            }
            consultarApi()
        }
        
        
        
    }, [buscar])
   

    return (
        <RecetasContext.Provider
            value={{
                recetas,
                buscarRecetas,
                setConsultar
            }}
        >
            {children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider
