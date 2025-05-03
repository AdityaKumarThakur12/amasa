import { useState } from "react";

const Setting = () => {
    const [restaurent, setRestaurents] = useState('');
    const [toggle, setToogle] = useState(true)

    function handleState (){
           const res =  localStorage.getItem("restaurent");
            if(res){
                localStorage.setItem(res)
            }
       
    }
    return (
        <>
            <h1>Here are the Restaurents</h1>
            <div style={{display: "flex", flexDirection: "column", border: "1px solid red"}}>
                <div style={{display: "flex", alignItems:"center", justifyContent:"space-around", border:"1px solid gray", borderRadius:"10px"}}>
                    <h3>Resaturent 1</h3>
                    <button onClick={handleState} style={{padding:"5px"}}>{toggle ? 'on' : 'off'}</button>
                </div>
                <div style={{display: "flex", alignItems:"center", justifyContent:"space-around", border:"1px solid gray", borderRadius:"10px"}}>
                    <h3>Restaurent 2</h3>
                    <button onClick={handleState} style={{padding:"5px"}}>{toggle ? 'on' : 'off'}</button>
                </div>
                <div style={{display: "flex", alignItems:"center", justifyContent:"space-around", border:"1px solid gray", borderRadius:"10px"}}>
                    <h3>Restaurent 3</h3>
                    <button onClick={handleState} style={{padding:"5px"}}>{toggle ? 'on' : 'off'}</button>

                </div>
            </div>


        </>
    )
}

export default Setting