const toggleFavorite = function(event) {

    const icon = event.currentTarget;

    icon.classList.toggle('favorited');



    if (icon.classList.contains('favorited')) {

        icon.innerHTML = '&#9829;';

        console.log(`${icon.dataset.id} favoritado!`);

    } else {

        icon.innerHTML = '&#9825;';

        console.log(`${icon.dataset.id} desfavoritado.`);

    }

};



const SetCreateCard = function (dados, index) { 

    const container = document.getElementById('cardProdutos');

    if (!container) return;



    if (!dados.name || !dados.photoUrl) {

        return;

    }



    const divCaixaProduto = document.createElement('div');

    const headerWrapper = document.createElement('div');

    const h2CaixaTitulo = document.createElement('h2');

    const figureCaixaImagem = document.createElement('img');

    const h3TextoProduto = document.createElement('h3');

    const favoriteIcon = document.createElement('span');



    divCaixaProduto.className = 'caixa_produto card-hidden'; 

    headerWrapper.className = 'card-header-wrapper';

    figureCaixaImagem.className = 'card-image';

    favoriteIcon.className = 'favorite-icon';



    h2CaixaTitulo.textContent = dados.name.toUpperCase();



    favoriteIcon.innerHTML = '&#9825;';

    favoriteIcon.dataset.id = dados.name;

    favoriteIcon.addEventListener('click', toggleFavorite);



    figureCaixaImagem.src = dados.photoUrl || 'https://via.placeholder.com/150/007bff?text=Sem+Foto';

    figureCaixaImagem.alt = 'Imagem do Personagem ' + dados.name;



    const afil = dados.affiliation ?? 'N/A';

    h3TextoProduto.textContent = `Afiliação: ${afil}`;



    headerWrapper.append(h2CaixaTitulo, favoriteIcon);



    divCaixaProduto.appendChild(headerWrapper);

    divCaixaProduto.appendChild(figureCaixaImagem);

    divCaixaProduto.appendChild(h3TextoProduto);



    container.appendChild(divCaixaProduto);



  

    setTimeout(() => {

        divCaixaProduto.classList.remove('card-hidden');

        divCaixaProduto.classList.add('card-fade-in');

    }, index * 100); 

};



const GetDadosAPI = async function () {

    try {

        const url = 'https://last-airbender-api.fly.dev/api/v1/characters';

        const response = await fetch(url);

       

        if (!response.ok) {

            throw new Error(`Erro de rede ao buscar a lista: ${response.status}`);

        }

       

        const personagens = await response.json();



        const container = document.getElementById('cardProdutos');

        if (!container) return;

        container.innerHTML = '';




        personagens.forEach((personagem, index) => SetCreateCard(personagem, index));

       

    } catch (error) {

        console.error("Erro fatal na aplicação de Avatar:", error);

        document.getElementById('cardProdutos').innerHTML =

            '<p style="color: red; text-align: center;">Erro ao carregar os personagens de Avatar. Verifique o console.</p>';

    }

};



GetDadosAPI();

