class IntermediarioNavEsquerda extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `       
        <div class="sticky-top pt-3">
            <h5 class="fw-bold mb-4">Tópicos</h5>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "intermediario-bootstrap.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="intermediario-bootstrap.html">Bootstrap</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "intermediario-react.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="intermediario-react.html">React</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "intermediario-node.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="intermediario-node.html">NodeJs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "intermediario-api.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="intermediario-api.html">Api</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${caminhoAtual === "intermediario-sql.html" ? "active text-dark fw-medium bg-info rounded-3" : "text-muted"}" href="intermediario-sql.html">SQL</a>
                </li>
            </ul>
        </div>
        `;
    }    
}

customElements.define('intermediario-nav-esquerda', IntermediarioNavEsquerda);