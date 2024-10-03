import { Produto } from "@/core";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props;
    return (
        <Link href={`/produto/${produto.id}`}
        className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]" 
        >
            <div className="h-48 w-full relative">
                <Image src={produto.imagem} alt={produto.nome} fill className="object-contain" />
            </div>
            <div className="flex-1 flex flex-col p-5 border-t border-white/10 gap-3">
                <span className="text-lg font-semibold">
                    {produto.nome}
                </span>
                <span className="text-sm border-b border-dashed self-start">
                    {produto.especificacoes.destaque}
                </span>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                <span className="text-sm text-gray-400 line-through">
                    de {produto.precoBase}
                </span>
                <span className="text-xl font-semibold text-emerald-400">
                    por {produto.precoPromocional}
                </span>
                </div>
                <button 
                onClick={(e) => {
                    e.preventDefault();
                    alert("Adicionado ao carrinho");
                }}
                className="bg-violet-700 hover:border-2 border-emerald-400 rounded-full flex justify-center h-8 items-center gap-2">
                    <IconShoppingCart size={20} color="white" />
                    <span>Adicionar</span>
                </button>
            </div>
            
        </Link>
    );
}