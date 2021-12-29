import {useContext,useState} from 'react'
import {CategoriasContext} from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

  const {categorias} = useContext(CategoriasContext)

  const {buscarRecetas,setConsultar} = useContext(RecetasContext)

  const [busqueda,setBusqueda] = useState({

      nombre: '',
      categoria:''
  })

  const obtenerDatos = e =>{
    setBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    })
  }

    return (
        <form className='col-12' onSubmit={e=>{
            e.preventDefault()
            buscarRecetas(busqueda)
            setConsultar(true)
            }} >
            <fieldset className='text-center'>
                <legend>Busca bebidas por categoria o Ingrediente</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input name='nombre' className='form-control' type='text' placeholder='Buscar por Ingrediente'
                        onChange={obtenerDatos}
                    />
                </div>
                <div className='col-md-4 mt-3'>
                    <select className='form-control' name='categoria' 
                        onChange={obtenerDatos}
                    >
                        <option value=''>-- Selecciona Categoría --</option>
                        {categorias.map(categoria=>(
                            <option 
                            
                            key={categoria.strCategory} 
                            value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4 mt-3'>
                    <input type='submit' className='btn btn-block btn-primary' value='Buscar Bebidas' />
                </div>
            </div>
        </form>
    )
}

export default Formulario
