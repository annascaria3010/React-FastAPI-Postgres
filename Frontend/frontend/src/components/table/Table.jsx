export default function Table({TableData}) {
    return (
        <table className='table'>
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Active</th>     
      </tr>

        {TableData.map((data)=>{
          console.log(data)
          return(
          <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.active ? 'Yes' : 'No' }</td>
          </tr>
          )
            
        })}
        

      </table>
    )
}