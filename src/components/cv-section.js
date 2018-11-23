import CVComponent from './CVComponent';

class CVSection extends CVComponent {
  static get observedAttributes() {
    return ['title', 'icon'];
  }

  render(render, { title, icon }) {
    return render`
      <style>
        :host {
          display: block;
        }
        
        section {
          display: grid;
          grid-template-columns: 42px auto;
          grid-template-rows: 32px auto;
        }
        
        .icon > i {
          font-size: 32px;
          color: var(--main-color);
        }

        .title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          font-size: 16px;
          font-weight: bold;
          border-bottom: 3px solid var(--main-color);
          color: var(--main-color);
          padding-bottom: 5px;
        }

        .content {
          padding-top: 10px;
          grid-column: 2;
          grid-row: 2;
        }
      </style>
      <link rel="stylesheet" href="./fonts/material-icons.css">
      <section>
        <div class="icon">
          <i class="material-icons">${icon}</i>
        </div>
        <div class="title">
          ${title.toUpperCase()}
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </section>
    `;
  }
}

customElements.define('cv-section', CVSection);
