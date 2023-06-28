import Block from "../../components/Block";
import Button from "../../components/Button";
import InputItem from "../../components/InputItem";
import './Login.css'

import axios from "axios"

function Login() {

  const enviarDados = (e) => {
    e.preventDefault()
    // console.log(e)
    axios.get('http://localhost:3003/').then((res) => res.data)

  }

  return (
    <Block>
      <form onSubmit={enviarDados} className="login">
        <InputItem name={"Login"}/>
        <InputItem name={"Password"}/>
        <Button name={"Enviar"} />
      </form>
    </Block>
  );
}

export default Login;
