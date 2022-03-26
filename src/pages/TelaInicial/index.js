import React , {useState} from "react";
import "./home.css"
import Header from '../../header'
import {  IoIosListBox} from "react-icons/io";
import { GiPayMoney,GiReceiveMoney} from "react-icons/gi";
import { HiEye, HiEyeOff } from "react-icons/hi"


function TelaInicial(){
    
    const [password, setPassword] = useState("")

    const [show, setShow] = useState(false)
 
    const handleClick = (e) => {
       e.preventDefault()
       setShow(!show);
    }
 
    return(
         <div>
                <Header></Header> 
                <h1 className="titulo">Saldo</h1>
                 <div className="saldo">
                        <div className="loginInputSaldo">
                        <div className="cifrao">R$</div>
                        <input 
                        placeholder="Digite sua senha"
                        type={show ? "text" : "password"}
                        value="0,00"
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
                 </div>
                

                <div className="divCards">
                    <main class="cards">
                        <section class="card contact">
                            <div class="icon">
                                <GiPayMoney  style={{width:"100%" ,height:"90px",color:"#9F66FF"}}/>
                            </div>
                            <h3>Transferência</h3>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            <button>Transferir</button>
                        </section>
                        <section class="card shop">
                            <div class="icon">
                                <GiReceiveMoney style={{width:"100%" ,height:"90px",color:"#3E8AFF"}}/>
                            </div>
                            <h3>Receber</h3>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            <button>Receber</button>
                        </section>
                        <section class="card about">
                            <div class="icon">
                                <IoIosListBox style={{width:"100%" ,height:"90px",color:"#FE5F8F"}}/>
                            </div>
                            <h3>Extrato</h3>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            <button>Extrato</button>
                        </section>
                    </main>
                </div>
                
         </div>
          
    )
}

export default TelaInicial;