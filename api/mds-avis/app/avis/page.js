'use client'

import {useEffect, useState} from "react"

export default function Avis(){

const [avis,setAvis] = useState([])


useEffect(()=>{

fetch("http://localhost:5000/avis")
.then(res=>res.json())
.then(data=>setAvis(data))

},[])


return (

<div className="min-h-screen bg-gray-100 p-10">

<h1 className="text-3xl font-bold mb-6">
Les avis
</h1>


<div className="grid gap-5">


{
avis.map((item)=>(

<div 
key={item.id}
className="bg-white p-5 rounded-xl shadow"
>

<h2 className="font-bold">
{item.name}
</h2>

<p>
Note : {item.rating}/5
</p>

<p>
{item.description}
</p>


</div>

))
}


</div>

</div>

)

}