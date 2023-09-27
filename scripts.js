// Lista de produtos alimentícios fictícios
const produtos = [
    { nome: "Café", preco: 5.00 },
    { nome: "Bolos", preco: 3.50 },
    { nome: "Sanduíches", preco: 8.00 },
    // Adicione mais produtos aqui conforme necessário
];

// Função para calcular o total dos produtos alimentícios
function calcularTotal() {
    let totalProdutos = 0;
    produtos.forEach((produto, index) => {
        const quantidade = parseInt(document.getElementById(`quantidade_${index}`).value);
        const total = quantidade * produto.preco;
        totalProdutos += total;
        document.getElementById(`total_${index}`).textContent = `R$ ${total.toFixed(2)}`;
    });

    // Obter os valores dos itens de divulgação
    const banners = parseFloat(document.getElementById("banners").value) || 0;
    const crachas = parseFloat(document.getElementById("crachas").value) || 0;
    const camisetas = parseFloat(document.getElementById("camisetas").value) || 0;

    // Calcular o total geral
    const totalGeral = totalProdutos + (banners + crachas + camisetas);

    document.getElementById("total").textContent = `R$ ${totalGeral.toFixed(2)}`;
}

// Cria as linhas da tabela com os produtos
produtos.forEach((produto, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${produto.nome}</td>
        <td><input type="number" id="quantidade_${index}" min="0" value="0" onchange="calcularTotal()"></td>
        <td>R$ ${produto.preco.toFixed(2)}</td>
        <td id="total_${index}">R$ 0.00</td>
    `;
    document.getElementById("produtoTable").appendChild(row);
});