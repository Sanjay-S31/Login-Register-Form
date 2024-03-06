import { useState } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register(){

    const history = useNavigate()
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('')

    async function submit(event){
        event.preventDefault()
        try{
            await axios.post("http://localhost:8000/signup" , {
                email,pass // sending the data to app.js that is backend
            })
            .then(response => {
                if(response.data === "Exist"){
                    alert("User already exists. Try logging in")
                }
                else if(response.data === "Not Exists"){
                    history('/home',{state:{id:email}})
                }
            })
            .catch(error => {
                alert("Wrong Details")
                console.log("Wrong Details")
            })
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
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

            <Link to="/">Login</Link>
        </div>
    )
}