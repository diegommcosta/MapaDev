const partes = window.location.pathname.split("/"); 
const caminhoAtual = partes.pop(); //Seleciona o caminho atual.
const pastaAtual = partes.pop(); //Seleciona o caminho atual.

const dentroDeSrc = pastaAtual === "src"; //Informa se está no src

class Header extends HTMLElement {
    connectedCallback(){        
        const iniciante = [
            "iniciante.html",
            "iniciante-logica-programacao.html",
            "iniciante-html.html",
            "iniciante-css.html",
            "iniciante-javascript.html",
            "iniciante-git-github.html"
        ];
        const intermediario = [
            "intermediario.html",
            "intermediario-bootstrap.html",
            "intermediario-react.html", 
            "intermediario-node.html",  
            "intermediario-api.html",
            "intermediario-sql.html"

        ];
        const avancado = [
            "avancado.html", 
            "avancado-typescript.html", 
            "avancado-testes-automatizados.html", 
            "avancado-docker.html", 
            "avancado-arquitetura-software.html", 
            "avancado-cloud-computing.html"
        ];

        const base = dentroDeSrc ? "../" : "";

        const inicianteLink = `href="${base}src/iniciante.html"`;
        const intermediarioLink = `href="${base}src/intermediario.html"`;
        const avancadoLink = `href="${base}src/avancado.html"`;

         //data-bs-theme="light" estava travando o tema no "light"
         //troquei a class="logo-light" por class="logo-img" para trocar a logo caso tema 'dark'
        this.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg bg-secondary-subtle  py-2 px-sm-2 px-lg-5" style="background-color: #e3f2fd;" >
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                                  
                    <a class="navbar-brand mx-auto me-lg-auto ms-lg-0" href="${base}index.html">
                        <img src="${base}images/mapadev-logo-light.svg" alt="MapaDev" height="40" class="logo-img"> 
                    </a>

                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTopics" aria-controls="offcanvasTopics">
                        <i class="bi bi-three-dots-vertical fs-5"></i>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 nav-underline justify-content-center">
                            <li class="nav-item">
                            <a class="nav-link ${iniciante.includes(caminhoAtual) ? "active": ""} ${inicianteLink}>Iniciante</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link ${intermediario.includes(caminhoAtual) ? "active": ""} ${intermediarioLink}>Intermediário</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link ${avancado.includes(caminhoAtual) ? "active": ""} ${avancadoLink}>Avançado</a>
                            </li>
                        </ul>                       
                        
                        <button id="theme-toggle" type="button" class="btn btn-info rounded-circle ms-lg-2 mt-2 mt-lg-0">
                            <i class="theme-icon bi bi-moon-fill "></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header> `;
    }     
}

//adicionando um id="theme-toggle" no botão de mudança de tema e o ícone theme-icon


customElements.define('main-header', Header);