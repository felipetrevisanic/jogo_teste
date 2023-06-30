import { useEffect, useState } from "react";
import Block from "../../components/Block";
import InputItem from "../../components/InputItem";
import Button from "../../components/Button";
import './CadastraPergunta.css'
import ax from "../../service";
import { useParams } from "react-router-dom";

const CadastraPergunta = (props) => {

    const [opcaoA, setOpcaoA] = useState('')
    const [opcaoB, setOpcaoB] = useState('')
    const [opcaoC, setOpcaoC] = useState('')
    const [opcaoD, setOpcaoD] = useState('')
    const [opcaoE, setOpcaoE] = useState('')
    const [pergunta, setPergunta] = useState('')
    const [resposta, setResposta] = useState('')

    let { _id } = useParams();
    console.log(_id)

    const enviarDados = (e) => {
        e.preventDefault()

        const dado = {
            pergunta: pergunta,
            opcaoA: opcaoA,
            opcaoB: opcaoB,
            opcaoC: opcaoC,
            opcaoD: opcaoD,
            opcaoE: opcaoE,
            resposta: resposta
        }

        let perguntaId = 0

        
        ax.post('/perguntas', dado)
        .then((res) => {
            perguntaId = res.data._id
            console.log(perguntaId)
            
            const testeUrl = {
                perguntas: [perguntaId]
            }
            
            ax.post(`/testes/${_id}`, testeUrl).then((res) => console.log(res.data)).catch((error) => console.error(error))
        })
        .catch((error) => console.error(error))
        
    }

    // useEffect(() => {
        // 649f2f0526d5d3317c2b6e09
        // const retornaID = async (e) => {
           
        //     try {
        //         const dado = await ax.get('/perguntas').then(res => {
        //             res.map(item => console.log(item.pergunta))
        //         })
        //     } catch (error) {
                
        //     }
            
    //     }

    //     retornaID()
    // },[])

    return (
        <div>
            <Block>
                <form onSubmit={enviarDados} className="login">
                    <InputItem valor={pergunta} name={"Pergunta"} aoAlterado={valor => setPergunta(valor)} />
                    <InputItem valor={opcaoA} name={"Opcao A"} aoAlterado={valor => setOpcaoA(valor)} />
                    <InputItem valor={opcaoB} name={"Opcao B"} aoAlterado={valor => setOpcaoB(valor)} />
                    <InputItem valor={opcaoC} name={"Opcao C"} aoAlterado={valor => setOpcaoC(valor)} />
                    <InputItem valor={opcaoD} name={"Opcao D"} aoAlterado={valor => setOpcaoD(valor)} />
                    <InputItem valor={opcaoE} name={"Opcao E"} aoAlterado={valor => setOpcaoE(valor)} />
                    <InputItem valor={resposta} name={"Resposta"} aoAlterado={valor => setResposta(valor)} />
                    <Button name={"Enviar"} />
                </form>
            </Block>
        </div>
    );
};

export default CadastraPergunta;