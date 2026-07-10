'use client'

import {useState} from "react"


export default function PasswordReset(){

const [password,setPassword] = useState("")
const [message,setMessage] = useState("")


async function changer(e){

e.preventDefault()


// À adapter avec ton endpoint API
const response = await fetch(
"http://localhost:5000/reset-password",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
password
})
}
)


const data = await response.json()

setMessage(data.message || "Mot de passe modifié")

}


return (

<div className="min-h-screen flex items-center justify-center bg-gray-100">


<form 
onSubmit={changer}
className="bg-white p-8 rounded-xl shadow space-y-4"
>


<h1 className="text-2xl font-bold">
Nouveau mot de passe
</h1>


<input
type="password"
placeholder="Nouveau mot de passe"
className="border p-2"
onChange={(e)=>setPassword(e.target.value)}
/>


<button
className="bg-blue-600 text-white px-4 py-2 rounded"
>
Modifier
</button>


<p>
{message}
</p>


</form>


</div>

)

}