

export default function ContentBody({items}){

  const clickHandler = ()=>{
    return(
      alert (`Unuudur:${new Date()}`)
    )
  }

   

    return(<>
            <tbody>
              <tr>
                {items.map((item)=>(
                  <td>{item.label}</td>
                ))}
                
                
                <td style={{ whiteSpace: "nowrap" }}>
                  <button className="btn btn-sm btn-outline-primary me-2">
                    edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={clickHandler}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            </>
    )
}