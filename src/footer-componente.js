class Footer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer class="container-fluid text-center text-light p-2" style="background-color: #050c15ff;">
            <p class="mt-3">&copy; 2025 MapaDev. Todos os direitos reservados.</p>
        </footer>
        `;
    }    
}

customElements.define('main-footer', Footer);