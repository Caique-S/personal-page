import React, {useState} from "react"; 
import "./styles.scss"

export const Register = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userRepeatPassword, setuserRepeatPassword] = useState("");
    // const [disableButton, setDisableButton] = useState(true)

    function validarSenhas () {
       if(userPassword === userRepeatPassword){
        console.log("As senhas são iguais")
       }else{
        console.log("Senhas diferentes")
       }
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
    };
  
    const handleRegisterSubmit = (e) => {
      e.preventDefault();
      validarSenhas()
      console.log("Username:", userName);
      console.log("Password:", userPassword);
    };

    return(
        <div className="register-container">
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
                    onChange={handleUserRepeatPasswordChange}>
                    </input>
                </div>
                <button className="registerUser" type="submit">Registrar</button>
            </form>
        </div>
    )
}