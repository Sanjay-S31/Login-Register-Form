import { useState } from "react"
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

export default function Login(){

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const history = useNavigate()

    async function submit(event){
        event.preventDefault()
        try{
            await axios.post("http://localhost:8000/" , {
                email,pass // sending the data to app.js that is backend
            })
            .then(response => {
                if(response.data === "Exist"){
                    history('/home',{state:{id:email}})
                }
                else if(response.data === "Not Exists"){
                    alert("User not signup ")
                }
            })
            .catch(error => {
                alert("Wrong Details")
                console.log("Wrong Details ", error)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form action="POST">
                <label>Enter Email </label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value) } 
                />
                <br/><br/>
                <label>Enter password </label>
                <input 
                    type="password" 
                    value={pass}
                    onChange={(event) => setPass(event.target.value) } 
                />
                <br/><br/>
                <input type="submit" onClick={submit}></input>
            </form>
            
            <p>OR</p>
            
            <Link to="/register">SignUp</Link>
        </div>
    )
}