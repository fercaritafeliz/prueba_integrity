import React from 'react'
import datos from '../datos'
import columnas from '../columnas'
import { useState, useEffect} from 'react'
import DataTable from 'react-data-table-component';



const Filtros = () => {
  //se settea los hooks
  const [ users , setUsers ]=useState([])
  const [ search, setSearch ] = useState("")

  // función para traer los datos de la API
  const showData = async ()=> {
    console.log(datos())
    setUsers(datos())
  }
  //función de busqueda
  const searcher = (e) =>{
    setSearch(e.target.value)
    //console.log(e.target.value)
  } 


  // metodo de filtrado
  let resultados=[]
  if(!search){
    resultados=users
  }
  else{
    resultados=users.filter((dato)=>
    dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

  }


  useEffect(()=>{
    showData() 
  },[])
  // se renderiza la vista
  
  return (
    <div>
      <input value={search} onChange={searcher} type='text' placeholder='Filtra por nombre' className='form-control'/>
      <DataTable
      title="Tabla de cereales"
      columns={columnas()}
      data={resultados}
      pagination
			selectableRows
      />
      
    </div>
  )
}

export default Filtros