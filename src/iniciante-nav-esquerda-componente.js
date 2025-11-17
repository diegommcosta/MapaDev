class InicianteNavEsquerda extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `       
        <div class="sticky-top pt-3">
            <h5 class="fw-bold mb-4">Tópicos</h5>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "iniciante.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="iniciante.html">Iniciante</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "iniciante-logica-programacao.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="iniciante-logica-programacao.html">Logicade Programaçao</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "iniciante-html.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="iniciante-html.html">HTML</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "iniciante-css.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="iniciante-css.html">CSS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "iniciante-javascript.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="iniciante-javascript.html">JavaScript</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "iniciante-git-github.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="iniciante-git-github.html">Git/GitHub</a>
                </li>
            </ul>
        </div>
        `;
    }    
}

customElements.define('iniciante-nav-esquerda', InicianteNavEsquerda);