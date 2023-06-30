import './Login.css'
import Block from "../../components/Block";
import Button from "../../components/Button";
import InputItem from "../../components/InputItem";
import { useNavigate } from 'react-router-dom';
import {useState} from "react"
import ax from "../../service/"

function Login(props) {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
 
  const navigate  = useNavigate()
 
  const enviarDados = (e) => {
    e.preventDefault()

    let user

    ax.get('/usuarios').then(async res => {
       user = res.data.find(user => user.login === login && user.pass === password)
        if(user){
          return navigate("/cadastra-teste")
        }else{
          return alert('usuario e/ou senha incorretos')
        }
       })
    
  }

  return (
    <Block>
      <form onSubmit={enviarDados} className="login">
        <InputItem valor={login} name={"login"} tipo={'text'} aoAlterado={valor => setLogin(valor)} />
        <InputItem valor={password} name={"password"} tipo={'password'} aoAlterado={valor => setPassword(valor)} />
        <Button name={"Enviar"} />
      </form>
    </Block>
  );
}

export default Login;


