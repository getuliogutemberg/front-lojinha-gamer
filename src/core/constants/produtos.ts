import Produto from "../produto/Produto";

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Xbox Series X",
        descricao: "Jogue mais de 100 jogos em um console",
        marca: "Microsoft",
        modelo: "Xbox Series X",
        imagem: "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png",
        videoReview: "",
        nota: 5,
        tags: ["Xbox", "Series X"],
        especificacoes: {
            destaque: "Jogue mais de 100 jogos em um console",
            detalhes: "Jogue mais de 100 jogos em um console"
        },
        
            precoBase: 4999.99,
            precoPromocional: 4999.99,
            menorPreco: 4999.99,
            maiorPreco: 4999.99,
            precoMedio: 4999.99
        
    },
    {
        id: 2,
        nome: "Xbox Series S",
        descricao: "Jogue mais de 100 jogos em um console",
        marca: "Microsoft",
        modelo: "Xbox Series S",
        imagem: "https://cms-assets.xboxservices.com/assets/c9/a2/c9a2613a-9ccb-4644-ba2f-87afeaf488b4.png?n=389964_Hero-Gallery-0_A3_857x676.png",
        videoReview: "",
        nota: 5,
        tags: ["Xbox", "Series S"],
        especificacoes: {
            destaque: "Jogue mais de 100 jogos em um console",
            detalhes: "Jogue mais de 100 jogos em um console"
        },
        
            precoBase: 2999.99,
            precoPromocional: 2999.99,
            menorPreco: 2999.99,
            maiorPreco: 2999.99,
            precoMedio: 2999.99
        
    },
    {
        id: 3,
        nome: "Xbox One",
        descricao: "Jogue mais de 100 jogos em um console",
        marca: "Microsoft",
        modelo: "Xbox One",
        imagem: "https://www.pngarts.com/files/3/Xbox-Transparent.png",
        videoReview: "",
        nota: 5,
        tags: ["Xbox", "One"],
        especificacoes: {
            destaque: "Jogue mais de 100 jogos em um console",
            detalhes: "Jogue mais de 100 jogos em um console"
        },
       
            precoBase: 1999.99,
            precoPromocional: 1999.99,
            menorPreco: 1999.99,
            maiorPreco: 1999.99,
            precoMedio: 1999.99 
        
    },
   
];

export default produtos