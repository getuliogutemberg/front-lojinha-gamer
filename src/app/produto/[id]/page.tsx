import { produtos } from "@/core"

export default function PaginaProduto( props: { params: { id: string } } ) {
    const id = +props.params.id
    const produto = produtos.find(produto => produto.id === id)
    return produto ?
        <div>
            <h1>{produto?.nome}</h1>
            <p>{produto?.descricao}</p>
        </div>

        :
        <div>   
            <h1>Produto não encontrado</h1>
        </div>
}