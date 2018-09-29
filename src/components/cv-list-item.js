import CVComponent from './CVComponent';

class CVListItem extends CVComponent {
  static get observedAttributes() {
    return ['company', 'position', 'time'];
  }

  connectedCallback() {
    if (!this.hasAttribute('nocontent')) {
      this.setAttribute('style', 'grid-template-columns: .5fr 1fr;');
    }
  }

  render(render, { company, position, time }) {
    return render`
      <style>
        :host {
          display: grid;
        }

        .info > div {
          margin-top: 5px;
        }

        .company {
          color: var(--main-color);
          font-weight: bold;
        }

        .italic {
          font-style: italic;
        }
      </style>
      <div class="info">
        <div class="company">${company}</div>
        <div class="italic">${position}</div>
        <div class="italic">${time}</div>
      </div>
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('cv-list-item', CVListItem);
