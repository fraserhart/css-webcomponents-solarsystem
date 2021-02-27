class OrbitingPlanet extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const planetFriendlyName = this.getAttribute("name");
    const planetName = planetFriendlyName.replaceAll(" ", "-").toLowerCase();
    const diameter = `${this.getAttribute("diameter")}px`;
    const orbitDiameter = `${this.getAttribute("orbitDiameter")}%`;
    const yearDuration = `${this.getAttribute("yearDuration")}s`;
    const colour = this.getAttribute("colour");
    this.innerHTML = `
      <style>
      
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }

        .planet:after,
        .orbit:after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }

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

        .planet-name{
          position: absolute;
          top: -10px;
          line-height: calc(0px + ${diameter});
          color: white;
          text-align: center;
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
        <div class="planet">
          <div class="planet-name">${planetFriendlyName}</div>
        </div>
      </div>`;
  }
}

customElements.define("orbiting-planet", OrbitingPlanet);
