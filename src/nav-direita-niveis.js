class NavDireitaNiveis extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `       
        <div class="sticky-top pt-3 d-none d-lg-block">
            <h5 class="fw-bold mb-0">Subtópicos</h5>
            <p class="text-muted small">Nesta página</p>
            <ul id="nav-subtopics" class="nav flex-column nav-underline">
                <li class="nav-item"><a class="nav-link text-muted" href="#sobre">Sobre</a></li>
                <li class="nav-item"><a class="nav-link text-muted" href="#topicos-principais">Tópicos Principais</a></li>
                <li class="nav-item"><a class="nav-link text-muted" href="#recursos-disponiveis">Recursos Disponíveis</a></li>
                <li class="nav-item"><a class="nav-link text-muted" href="#proximos-passos">Próximos Passos</a></li>
            </ul>
        </div>
        `;
    }    
}

customElements.define('nav-direita-niveis', NavDireitaNiveis);