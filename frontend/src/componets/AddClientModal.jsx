import { useMutation } from '@apollo/client/react'
import React, { useState } from 'react'
import { ADD_CLIENT } from './mutations/clientMutation'
import { GET_CLIENTS } from './queries/clientQuery'

export default function AddClientModal() {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [phone, setPhone] = useState("")

 const [addClient]  = useMutation(ADD_CLIENT,{
    variables:{name, email,phone },
    refetchQueries:[{query: GET_CLIENTS}]
 })
const onSubmit = (e)=>{
    e.preventDefault()
    console.log("COLLDE FUNCTIOn")
    addClient(name, email, phone)
}
  return (
  <>
    <button  type="button"
     className='btn btn-primary'
     data-bs-toggle="nodal"
     data-bs-target ="addClientModal">

      Add Client 
    </button>
    <div>
        <form onSubmit={onSubmit}>
            <div className='mb-2'>
                <label className='form-label'>Name</label>
                <input type="text"  className='form-control'  value={name}  onChange={(e)=>setName(e.target.value)}/>
            </div>
             <div className='mb-2'>
                <label className='form-label'>Email</label>
                <input type="text"  className='form-control'  value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
             <div className='mb-2'>
                <label className='form-label'>Phone</label>
                <input type="text"  className='form-control'  value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
            </div>
           <button type='submit' className='btn btn-primary'> Add Client </button>
        </form>
    </div>
    <div id="addClientModal"
    className='modal fade'

    >
    
    </div></>
  )
}
