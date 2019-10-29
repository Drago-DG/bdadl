customElements.define("mi-footer", class extends HTMLElement {
    connectedCallback() {
      this.innerText = "Copyright © 2019 Carrillo Sánchez Adelcky IC51-M.";
    }
  }, { extends: "footer" });