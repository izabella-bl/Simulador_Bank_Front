import React, { useState }from 'react';
import './cadastro.css';
import { MdOutlineMail } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import {  MdLock  } from "react-icons/md";



const Cadastro = () =>{

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
 
    const handleClick = (e) => {
       e.preventDefault()
       setShow(!show);
    }

    return(
        <div>
                <div className="cadastro">
                    <div className='div-formulario'>
                        <h1>Cadastrar</h1> 
                        <label className='LabelCadastro'>Nome</label>
                        <div className="Input">
                                <input type="text" 
                                placeholder="Nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                                ></input>
                            
                            </div>

                            <label className='LabelCadastro'>Sobrenome</label>
                            <div className="Input ">
                                <input type="text" 
                                placeholder="Sobrenome"
                                value={sobrenome}
                                onChange={e => setSobrenome(e.target.value)}
                                ></input>
                            
                            </div>
                    
                            <label className='LabelCadastro'>Email</label>
                            <div className="Input ">
                                <MdOutlineMail/>
                                <input type="text" 
                                placeholder="Ex:Aline@gmail.com"
                                value={sobrenome}
                                onChange={e => setSobrenome(e.target.value)}
                                ></input>
                            </div>

                            <label className='LabelCadastro'>CPF</label>
                            <div className="Input ">
                                <input type="text" 
                                placeholder="Ex:000.000.000-00"
                                value={sobrenome}
                                onChange={e => setSobrenome(e.target.value)}
                                ></input>
                            </div>

                            <label className='LabelCadastro'>Senha</label>
                            <div className="Input">
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
                            
                            <button type="submit">Cadastrar</button>
                    </div>
                
            </div>

        </div>
       
    );
};


export default Cadastro;