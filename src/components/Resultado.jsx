import '../css/global.css'
import '../css/resultado.css'
import TabelaImc from './TabaleImc'


//destruct-(desestruturação)-acessa propriedades de outro componente
function Resultado({resultado}){
    return(
        <div>
            <div className="resultado">
                <h2>
                    Seu IMC é de: <span className="imcSpan">{resultado}</span>
                </h2>
            </div>

            <table className="tabela">
                <thead className="tabelaHeader">
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody className="tabelaBody">
                    <tr>{TabelaImc(resultado)}</tr>
                </tbody>
            </table>
        </div>
    )
}

export default Resultado