class OrbitingPlanet extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const planetName = this.getAttribute("name");
    const diameter = this.getAttribute("diameter");
    const orbitDiameter = this.getAttribute("orbitDiameter");
    const yearDuration = this.getAttribute("yearDuration");
    const colour = this.getAttribute("colour");
    this.innerHTML = `
      <style>
      
      .orbit {
        background: none;
        border: 1px dashed white;
        animation-name: rotation;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }

      .planet {
        position: absolute;
        right: 0;
      }

      .${planetName} {
        width: ${orbitDiameter};
        margin-left: calc(0px - ${orbitDiameter} / 2);
        margin-top: calc(0px - (${orbitDiameter} / 2));
        animation-duration: ${yearDuration};
      }

      .${planetName} .planet {
        margin-right: calc(0px - ${diameter} / 2);
        margin-top: calc(0px - ${diameter} / 2);
        width: ${diameter};
        background-color: ${colour};
      }
      </style>
      <div class="${planetName} orbit">
        <div class="planet"></div>
      </div>`;
  }
}

customElements.define("orbiting-planet", OrbitingPlanet);
