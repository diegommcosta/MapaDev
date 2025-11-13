const caminhoAtual = window.location.pathname.split("/").pop(); //Seleciona o caminho atual.

class Header extends HTMLElement {
    connectedCallback(){
        const iniciante = [
            "iniciante.html"
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
                                  
                    <a class="navbar-brand mx-auto me-lg-auto ms-lg-0" href="index.html">
                        <img src="/images/mapadev-logo-light.svg" alt="MapaDev" height="40" class="logo-img"> 
                    </a>

                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTopics" aria-controls="offcanvasTopics">
                        <i class="bi bi-three-dots-vertical fs-5"></i>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 nav-underline justify-content-center">
                            <li class="nav-item">
                            <a class="nav-link ${iniciante.includes(caminhoAtual) ? "active": ""}" href="iniciante.html">Iniciante</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link ${intermediario.includes(caminhoAtual) ? "active": ""}" href="intermediario.html">Intermediário</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link ${avancado.includes(caminhoAtual) ? "active": ""}" href="avancado.html">Avançado</a>
                            </li>
                        </ul>

                        <form class="d-flex mb-2 mb-lg-0" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-secondary d-flex align-items-center justify-content-center" type="submit">
                                <svg style="vertical-align: middle;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </form>
                        
                        
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