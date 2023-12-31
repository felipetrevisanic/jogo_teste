import Block from "../../components/Block"
import { useEffect, useState } from "react"
import ax from "../../service"
import { useNavigate ,useParams } from "react-router-dom"
import './Jogo.css'



const Jogo = ({ nome }) => {

  const navigate = useNavigate()

    const [teste,setTeste] = useState(null)


    useEffect(() => {
        const buscarDadosDaAPI = async () => {
            try {
              const response = await ax.get(`/testes`); 
              setTeste(response.data);

            } catch (error) {
              console.error(error);
            }
          };
          
          buscarDadosDaAPI();
        }, [nome])
        
        const navegar = () => {
          {teste?.map((item) => (navigate(`/teste/${item._id}`)))}
        }

    return(
        <div>
            <Block>
                <h1>{nome}</h1>
                <ul>
                 
                    {teste?.map((item) => (<div className="testes"><li onClick={navegar}>{item.nome}</li></div>))}
                
                </ul>
            </Block>
        </div>
    )
}

export default Jogo