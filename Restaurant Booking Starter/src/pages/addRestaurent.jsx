import { useState } from "react";

const Restaurent = ()=>{

    const [data, setData] = useState({
        Restaurent: "",
        flag : "",

    })

    function handleAdd(e){
        e.preventDefault();
        const store = localStorage.getItem('data')
        if(store){
            localStorage.setItem(store)
        }
       
       
    }

    return (
        <>
        <form onClick={handleAdd}>
            <input type="text" placeholder="Enter Restaurent name"  value={data.Restaurent} onChange={(e)=> setData(e.target.value)}/>
            <input type="text" placeholder="Status" value={data.flag} onChange={(e)=> setData(e.target.value)} />
            <button type="submit">Submit</button>
        </form>

     
        </>
    )
}

export default Restaurent;