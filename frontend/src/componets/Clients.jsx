import { useQuery } from "@apollo/client/react"
import { GET_CLIENTS } from "./queries/clientQuery"
import ClientRow from "./ClientRow";
export default function Clients() {

    const {loading, error, data} = useQuery(GET_CLIENTS);
     if(loading)  return <p> LODING ....</p>
     if(error  )  return  <p> ERROR HAPPEN</p>
  return (
    
     <>{
        !loading && !error && (
            <table className="table table-hover mt-4">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </thead>
                <tbody>
                   {data.clients.map((client)=>(
                     <ClientRow   key={client.id}  client={client} />
                   ))}
                </tbody>
            </table>
        )
     }
     </>
  )
}
