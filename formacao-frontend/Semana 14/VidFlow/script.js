const containerVideos = document.querySelector(".videos__container");

async function buscarMostrarVideos() {
    try {
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();

        videos.forEach(video => {
            if (video.categoria == "") {
                throw new Error("Um dos vídeos não tem categoria.");
            }

            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                    <p class="categoria" hidden>${video.categoria}</p>
                </div>
            </li>`;
        });
    } catch (error) {
        containerVideos.innerHTML += `<p>Houve um erro ao carregar vídeos: ${error}.</p>`;
    } finally {
        console.log("Isso sempre acontece.");
    }
}

buscarMostrarVideos();

const barraPesquisa = document.querySelector(".pesquisar__input");
barraPesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item");

    if (barraPesquisa.value != "") {
        for (let video of videos) {
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraPesquisa.value.toLowerCase();

            if (!titulo.includes(valorFiltro)) {
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }
        }
    } else {
        video.style.display = "block"
    }
}

const botaoCategoria = document.querySelectorAll(".superior__item");
botaoCategoria.forEach((botaoCategoria) => {
    let nomeCategoria = botaoCategoria.getAttribute("name");
    botaoCategoria.addEventListener("click", () => filtrarCategoria(nomeCategoria));
});

function filtrarCategoria(nomeCategoria) {
    const videos = document.querySelectorAll(".videos__item");
    for (let video of videos) {
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = nomeCategoria.toLowerCase();

        if (!categoria.includes(valorFiltro) && valorFiltro !== "tudo") {
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    }
}