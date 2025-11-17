class AvancadoNavEsquerda extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `       
        <div class="sticky-top pt-3">
            <h5 class="fw-bold mb-4">Tópicos</h5>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "avancado.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="avancado.html">Avançado</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "avancado-typescript.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="avancado-typescript.html">TypeScript</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "avancado-arquitetura-software.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="avancado-arquitetura-software.html">Arquitetura de Software</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "avancado-testes-automatizados.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="avancado-testes-automatizados.html">Testes Automatizados</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "avancado-docker.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="avancado-docker.html">Docker</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "avancado-cloud-computing.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="avancado-cloud-computing.html">Cloud Computing</a>
                </li>
            </ul>
        </div>
        `;
    }    
}

customElements.define('avancado-nav-esquerda', AvancadoNavEsquerda);