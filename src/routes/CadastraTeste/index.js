import { useEffect, useState } from "react";
import Block from "../../components/Block";
import ax from "../../service";
import "./SelecionaTeste.css"
import { AiFillRightCircle } from "react-icons/ai";
import { Link } from "react-router-dom"
import InputItem from "../../components/InputItem";
import Button from "../../components/Button";

export const CadastraTeste = (props) => {

    const [testes, setTestes] = useState([])
    const [item, setItem] = useState('')

    useEffect(() => {
        const buscarDadosDaAPI = async () => {
            try {
                const response = await ax.get(`/testes`);
                setTestes(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        buscarDadosDaAPI();
    }, [])


    const enviarDados = async (e) => {

        const dado = {
            nome: item
        }
        try {
            const response = await ax.post(`/testes`, dado);
            setTestes(response.data);

            console.log(item.toJSON)
        } catch (error) {
            console.error(error);
        }
      }

    return (
        <div className="pag__teste">
            <h1>Selecione o teste</h1>
            <Block>
                <ul>
                    {testes?.map((teste) => (
                        <div key={teste._id} className="teste" >
                            <AiFillRightCircle style={{ width: '20px', height: '30px', alignItems: 'center', cursor: 'pointer' }} />
                            <Link to={`/cadastra-pergunta/${teste._id}`}>{teste.nome}</Link>
                        </div>))}
                </ul>
            </Block>
            <Block>
                <h2>Insira um novo testes: </h2>
                <form className="login " onSubmit={enviarDados}>
                    <InputItem valor={item} name={"Teste"} aoAlterado={valor => setItem(valor)} />
                    <Button name={"Enviar"} />
                </form>
            </Block>
        </div>
    );
};

export default CadastraTeste