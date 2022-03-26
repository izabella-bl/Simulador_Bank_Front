import React,{ useState } from "react";
import './login.css';
import {  MdLock  } from "react-icons/md";
import { RiUserLine} from "react-icons/ri";
import { HiEye, HiEyeOff } from "react-icons/hi"



const Login = () =>{

    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
 
    const handleClick = (e) => {
       e.preventDefault()
       setShow(!show);
    }
 
    return(
        <div className="login">
            <div className="login-logo">
                <h1 className="titulo">Bem vindo(a) ao Bank!</h1>
                <h4 className="subtitulo">Crie sua conta já</h4>
                <img src="https://github.com/izabella-bl/Quiz_de_Filme_API/blob/main/cenarios/pngwing.com%20(1).png?raw=true"
               alt="MdLockLogin App"></img>
            </div>

            <div className="login-right">
                 <h1>Acessar App</h1>
                 
                 
                 <div className="loginInputCPF">
                    <RiUserLine/>
                     <input type="text" 
                     placeholder="Digite o seu CPF"
                     value={cpf}
                     onChange={e => setCpf(e.target.value)}
                     ></input>

                 </div>

                 <div className="loginInputSenha">
                     <MdLock/>
                     <input 
                     placeholder="Digite sua senha"
                     type={show ? "text" : "password"}
                     value={password}
                     onChange={e => setPassword(e.target.value)}></input>

                   <div className="login-eye">
                    {show ? (
                        <HiEye
                            size={20}
                            onClick={handleClick}
                        />
                        ) : (
                            <HiEyeOff
                            size={20}
                            onClick={handleClick}
                            />
                    )}
                   </div>
                 </div>
                 
                 <button type="submit">Entrar</button>

                 <h4>Não tenho conta!</h4>

                 <a  href="/cadastro">Cadastrar</a>
            </div>
            
        </div>
    );
};

export default Login;