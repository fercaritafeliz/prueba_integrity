
const columnas = () => {
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
  return columnas
}

export default columnas