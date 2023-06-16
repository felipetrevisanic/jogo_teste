import Block from "../../components/Block";
import Button from "../../components/Button";
import InputItem from "../../components/InputItem";
import './Login.css'

function Login() {

  const enviarDados = (e) => {
    e.preventDefault()
    console.log(e)
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
