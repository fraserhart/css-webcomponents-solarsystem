class OrbitingPlanet extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const planetFriendlyName = this.getAttribute("name");
    const planetName = planetFriendlyName.replaceAll(" ", "-").toLowerCase();
    const diameterRaw = this.getAttribute("diameter");
    const diameter = `${diameterRaw}px`;
    const ringDiameterRaw = diameterRaw * 1.4;
    const ringDiameter = `${ringDiameterRaw}px`;
    const orbitDiameter = `${this.getAttribute("orbitDiameter")}%`;
    const yearDuration = `${this.getAttribute("yearDuration")}s`;
    const colour = this.getAttribute("colour");
    const ringOffsetRaw = (ringDiameterRaw - diameterRaw) / 2;
    const ringOffset = `-${ringOffsetRaw}px`;
    const rings = this.getAttribute("rings") ? "<div class='ring'></div>" : "";

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

        .${planetName} .ring {

          position: absolute;
          margin-left: ${ringOffset};
          margin-top: ${ringOffset};
          width: ${ringDiameter};
          height: ${ringDiameter};
          border: 1px solid brown;
          border-radius: 100%
        }

      </style>
      <div class="${planetName} orbit">
        <div class="planet">
          ${rings}
          <div class="planet-name">${planetFriendlyName}</div>
        </div>
      </div>`;
  }
}

customElements.define("orbiting-planet", OrbitingPlanet);
