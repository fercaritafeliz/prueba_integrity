import './App.css';
import DataTable from 'react-data-table-component';
import 'styled-components';





const tablaCereales = [
  {id:0,	name:"100% Bran",	                calories:70,	protein:4,  	vitamins:25, rating:68.402973},
  {id:1,	name:"100% Natural Bran",	        calories:120,	protein:3,  	vitamins:0,  rating:33.983679},
  {id:2,	name:"All-Bran",	                calories:70,	protein:4,  	vitamins:25, rating:59.425505},
  {id:3,	name:"All-Bran with Extra Fiber",	calories:50,	protein:4,  	vitamins:25, rating:93.704912},
  {id:4,	name:"Almond Delight",	          calories:110,	protein:2,  	vitamins:25, rating:34.384843},
  {id:5,	name:"Apple Cinnamon Cheerios",	  calories:110,	protein:2,  	vitamins:25, rating:29.509541},
  {id:6,	name:"Apple Jacks",	              calories:110,	protein:2,	  vitamins:25, rating:33.174094},
  {id:7,	name:"Basic 4",	                  calories:130, protein:3,	  vitamins:25, rating:37.038562},
  {id:8,	name:"Bran Chex",	                calories:90,	protein:2,	  vitamins:25, rating:49.120253},
  {id:9,	name:"Bran Flakes",             	calories:90,	protein:3,  	vitamins:25, rating:53.313813}
  ];
  
const columnas = [
    {
      name:'ID',
      selector:'id',
      sortable:true
    },
    {
      name:'Name',
      selector:'name',
      sortable:true,
      filter:true
    },
    {
      name:'Calories',
      selector:'calories',
      sortable:true
    },
    {
      name:'Protein',
      selector:'protein',
      sortable:true
    },
    {
      name:'Vitamins',
      selector:"vitamins",
      sortable:true
    },
    {
      name:'Rating',
      selector:'rating',
      sortable:true
    }
   ];

   

function App() {

  return (
    <div className="App">
      <h1>Prueba Integrity</h1>

      <DataTable
      title="Tabla de cereales"
      columns={columnas}
      data={tablaCereales}
      pagination
			selectableRows
			
      />
    </div>
  );
}

export default App;
