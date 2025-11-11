class InicianteNavDireita extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `       
        <div class="sticky-top pt-3 d-none d-lg-block">
            <h5 class="fw-bold mb-0">Subtópicos</h5>
            <p class="text-muted small">Nesta página</p>
            <ul id="nav-subtopics" class="nav flex-column nav-underline">
                <li class="nav-item"><a class="nav-link text-muted" href="#iniciante-videos">Vídeos</a></li>
                <li class="nav-item"><a class="nav-link text-muted" href="#iniciante-cursos">Cursos, plataformas, playlists</a></li>
                <li class="nav-item"><a class="nav-link text-muted" href="#iniciante-artigos">Artigos, guias, tutoriais</a></li>
                <li class="nav-item"><a class="nav-link text-muted" href="#iniciante-doc">Documentação</a></li>
            </ul>
        </div>
        `;
    }    
}

customElements.define('iniciante-nav-direita', InicianteNavDireita);