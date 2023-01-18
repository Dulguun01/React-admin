import {SlPencil,SlTrash} from 'react-icons/sl'


const ListItem =({items,index})=>{
  const DeleteItem =()=>{
    let statusCode;
    fetch('https://demo-api-one.vercel.app/api/categories',{
      method:'DELETE',
      headers:{
        "Content-Type":"aplication/json",
        Authorization:localStorage.getItem('token'),

      },
      body: JSON.stringify({id: items.id}),

    })
    .then((res)=>{
      statusCode= res.status;
      return res.json()

    })
    .then

  }


    return(
      <tr>
      <th scope="row">{index}</th>
      <td>{items.name}</td>
      <td>{items.description}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button className="btn btn-sm btn-outline-primary me-2">
          <SlPencil />
        </button>
        <button  className="btn btn-sm btn-outline-danger">
          <SlTrash />
        </button>
      </td>
    </tr>)}
    

export default function CategoryList ({items}) {
      return (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th width="1">#</th>
              <th>Name</th>
              <th>Description</th>
              <th width="1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, index) => (
              <ListItem items={item} index={index + 1} key={`list-item-${index}`} />
            ))}
          </tbody>
        </table>
      );
    }


     

      
