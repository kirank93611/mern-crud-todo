import { title } from "process";

export function CreateTodo(props) {
    return <div>
        <input id="title" type="text" placeholder="value" onChange={function(e) {
            const value=e.target.value;
            setTitle(e.target.value);
        }}></input><br />

        <input type="desc" placeholder="value"></input><br />
        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
         
            headers:{
                "Content-type":"application/JSON"
            }
        })
            .then(async function(res) {
                const json=await res.json();
                alert("Todo added")
            })
        }}></button>
    </div>
}