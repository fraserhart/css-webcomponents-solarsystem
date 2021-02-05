class OrbitingPlanet extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="${this.getAttribute("name")} orbit">
        <div class="planet"></div>
      </div>`;
  }
}

customElements.define("orbiting-planet", OrbitingPlanet);
