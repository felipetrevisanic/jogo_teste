import Block from "../../components/Block"
import { useEffect, useState } from "react"
import ax from "../../service"
import { useNavigate ,useParams } from "react-router-dom"



const Teste = ({ nome }) => {

    let _id = useParams()
    console.log(_id)

  const navigate = useNavigate()

    const [teste,setTeste] = useState(null)


    useEffect(() => {

//         console.log(typeof(_id))

        const buscarDadosDaAPI = async () => {
            try {
                
                

              const response = await ax.get(`/testes/${_id}`); 
              setTeste(response.data);

            } catch (error) {
              console.error(error);
            }
          };
          
          buscarDadosDaAPI();
        }, [_id])
        
//         const navegar = () => {
//           {teste?.map((item) => (navigate(`/teste/${item._id}`)))}
    // }

    return(
        <div>
            <Block>
                <h1>{nome}</h1>
                <ul>
                 
                    {/* {teste?.map((item) => (item.nome))} */}
                
                </ul>
            </Block>
        </div>
    )
}

export default Teste