// DADOS DAS ATRAÇÕES (NOSSA "BASE DE DADOS")
const dadosAtracoes = [
  {
    "id": 1,
    "titulo": "Praça do Papa",
    "descricao": "Uma vista deslumbrante da cidade e das montanhas, perfeita para um pôr do sol.",
    "imagem": "images/papa.jpg",
    "conteudo": "Localizada no alto do bairro Mangabeiras, a Praça Governador Israel Pinheiro, mais conhecida como Praça do Papa, é um dos cartões-postais de Belo Horizonte. O nome popular surgiu após a visita do Papa João Paulo II em 1980, que celebrou uma missa campal no local e proferiu a famosa frase: 'Que belo horizonte!'. Além da vista panorâmica da cidade, a praça é um espaço de lazer para famílias, com áreas verdes e monumentos.",
    "categoria": "Mirante"
  },
  {
    "id": 2,
    "titulo": "Mercado Central",
    "descricao": "Sabores e tradição em um dos pontos mais animados da cidade.",
    "imagem": "images/mercado.jpg",
    "conteudo": "O Mercado Central é o coração pulsante de Belo Horizonte. Fundado em 1929, o espaço reúne mais de 400 lojas que vendem de tudo um pouco: queijos artesanais, doces mineiros, cachaças, ervas medicinais, artesanato e os famosos petiscos de fígado com jiló. É um labirinto de cores, aromas e sabores que representa a cultura e a gastronomia de Minas Gerais.",
    "categoria": "Gastronomia"
  },
  {
    "id": 3,
    "titulo": "Lagoa da Pampulha",
    "descricao": "Obras de Oscar Niemeyer e um belo cartão-postal para caminhadas.",
    "imagem": "images/Lp.jpg", // Nome do arquivo corrigido
    "conteudo": "O Conjunto Arquitetônico da Pampulha, Patrimônio Cultural da Humanidade pela UNESCO, é uma obra-prima do modernismo brasileiro, projetada por Oscar Niemeyer. Às margens da lagoa, encontram-se a Igreja de São Francisco de Assis, o Museu de Arte da Pampulha (antigo cassino), a Casa do Baile e o Iate Tênis Clube. A orla de 18 km é um convite para atividades ao ar livre.",
    "categoria": "Arquitetura"
  }
];

// FUNÇÃO PARA MOSTRAR A TELA DE DETALHES E ESCONDER A HOME
function mostrarDetalhes(atracao) {
    document.getElementById('home-view').classList.add('d-none');
    document.getElementById('detalhe-view').classList.remove('d-none');
    document.getElementById('detalhe-titulo').textContent = atracao.titulo;
    document.getElementById('detalhe-imagem').src = atracao.imagem;
    document.getElementById('detalhe-imagem').alt = atracao.titulo;
    document.getElementById('detalhe-texto').innerHTML = `<p>${atracao.conteudo.replace(/\n/g, '<br>')}</p>`;
}

// FUNÇÃO PARA MOSTRAR A TELA HOME COM OS CARDS
function mostrarHome() {
    document.getElementById('home-view').classList.remove('d-none');
    document.getElementById('detalhe-view').classList.add('d-none');
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    dadosAtracoes.forEach(atracao => {
        const cardHTML = `
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${atracao.imagem}" class="card-img-top" alt="${atracao.titulo}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${atracao.titulo}</h5>
                        <p class="card-text">${atracao.descricao}</p>
                        <a href="index.html?id=${atracao.id}" class="btn btn-primary mt-auto">Ver Detalhes</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ROTEADOR: decide qual função chamar com base na URL
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const atracaoId = params.get('id');
    if (atracaoId) {
        const atracao = dadosAtracoes.find(item => item.id == atracaoId);
        if (atracao) {
            mostrarDetalhes(atracao);
        } else {
            mostrarHome();
        }
    } else {
        mostrarHome();
    }
});