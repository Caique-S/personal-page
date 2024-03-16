import React, {useState} from "react"; 
import {Link} from "react-router-dom"
import "./styles.scss"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from "../../services/firebase";

export const Register = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userRepeatPassword, setuserRepeatPassword] = useState("");
    const [alertPassword, setAlertPassword] = useState(true)

    const [createUserWithEmailAndPassword ,user ,loading ,error] = useCreateUserWithEmailAndPassword(auth)

    if(loading){
        return(
            <h2 style={{flex:1, justifyContent:"center",alignItems:"center"}}>Cadastrando...</h2>
        )
    }

    const handleUsernameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleUserEmailChange = (e) => {
        setUserEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    };

    const handleUserRepeatPasswordChange = (e) => {
        setuserRepeatPassword(e.target.value);
        if(userPassword === userRepeatPassword){
            setAlertPassword(true)
           }else{
            setAlertPassword(false)     
          }
    };

    const passwordCheck = () => {
        if(userPassword === userRepeatPassword){
            setAlertPassword(true)
           }else{
            setAlertPassword(false)     
          }
    }
  
    const handleRegisterSubmit = (e) => {
      e.preventDefault();
      if(alertPassword === true){
          createUserWithEmailAndPassword(userName,userPassword)
      }else{
        alert("Verifique as senhas digitadas")
      }
    };

    return(
        <div className="register-container">
            <h2>Registre-se</h2>
            <form onSubmit={handleRegisterSubmit}>
                <div>
                    <label htmlFor="userName">Nome</label>
                    <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={handleUsernameChange}>
                    </input>
                </div>
                <div>
                    <label htmlFor="userEmail">E-mail</label>
                    <input
                    type="text"
                    id="userEmail"
                    value={userEmail}
                    onChange={handleUserEmailChange}>
                    </input>
                </div>
                <div>
                    <label htmlFor="userPassword">Senha</label>
                    <input
                    type="password"
                    id="userPassword"
                    value={userPassword}
                    onChange={handlePasswordChange}>
                    </input>
                </div>
                <div>
                    <label htmlFor="userRepeatPassword">Confirme a Senha</label>
                    <input
                    type="password"
                    id="userRepeatPassword"
                    value={userRepeatPassword}
                    onChange={handleUserRepeatPasswordChange}
                    onKeyUp={passwordCheck}>
                    </input>
                </div>
                {alertPassword === false && (<p>As Senhas não conferem</p>)}
                <p>Já tem uma conta ? <Link to="/">Acesse sua conta</Link></p>
                <button className="registerUser" type="submit">Registrar</button>
            </form>
        </div>
    )
}