import CVComponent from './CVComponent';

class CVDocument extends CVComponent {
  async render(render) {
    const data = await fetch('./data.json').then(resp => resp.json());
    return render`
      <style>
        :host {
          display: block;
          height: 297mm;
          width: 210mm;
          --main-color: #6293a5;
        }

        header {
          display: grid;
          grid-template-columns: 75% 25%;
          grid-template-rows: repeat(2, 1fr);
          height: 20%;
          color: white;
          background-color: var(--main-color);
          padding: 0 40px;
        }

        .text--vcenter {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .name {
          justify-content: flex-end;
          font-weight: bold;
          font-size: 60px;
          padding-bottom: 20px;
        }

        .position {
          grid-column: 1;
          grid-row: 2;
          font-size: 25px;
        }

        .contact {
          grid-column: 2;
          grid-row: 2;
        }

        .contact > ul {
          text-align: right;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        main {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 10px;
          box-sizing: border-box;
          height: 75%;
          padding: 0.5cm;
        }

        footer {
          overflow: hidden;
          text-align: center;
          font-size: 12px;
          color: #666;
          height: 5%;
        }
        
        cv-section[title="Important"] {
          grid-column: 1 / span 3;
          grid-row: 1;
        }

        cv-section[title="Experience"] {
          grid-column: 1 / span 3;
          grid-row: 2;
        }
        
        cv-section[title="Education"] {
          grid-row: 3;
        }

        cv-section[title="Languages and Technologies"] {
          grid-column: 2 / span 3;
          grid-row: 3;
        }

        cv-list-item {
          margin-top: 10px;
        }
      </style>
      <header>
        <div class="name text--vcenter">
          ${data.personalData.name}
        </div>
        <div class="position">
          ${data.personalData.position}
        </div>
        <div class="contact">
          <ul>
            <li>${data.personalData.phone}</li>
            <li>${data.personalData.email}</li>
            <li>${data.personalData.street}</li>
            <li>${data.personalData.city}</li>
          </ul>
        </div>
      </header>
      <main>
        <cv-section title="Important" icon="info">
          This documnent was created in newest web technologies such as HTML5, CSS(css grid e.g.) and JavaScript(some ES6 features and custom elements API).
          Source code can be found in my GitHub: [tubędzielink]
        </cv-section>
        <cv-section title="Experience" icon="work">
          ${data.experience.map(it => `
            <cv-list-item
              company="${it.company}"
              position="${it.position}"
              time="${it.time}"
            >
              ${it.description.join('\n')}
            </cv-list-item>
          `)}
        </cv-section>
        <cv-section title="Education" icon="book">
          ${data.education.map(it => `
            <cv-list-item
              company="${it.university}"
              position="${it.title}"
              time="${it.time}"
              nocontent
            ></cv-list-item>
          `)}
        </cv-section>
        <cv-section title="Languages and Technologies" icon="keyboard">
          <ul>
            <li>
              JavaScript(ES6 & ES7), HTML5, CSS, React, FlowType, TypeScript, Webpack, ESLint, Angular, Bootstrap, Node.js, Java
            </li>
            <li>
              Visual Studio Code, Git, Linux
            </li>
          </ul>
        </cv-section>
      </main>
      <footer class="text--vcenter">
          I hereby give consent for my personal data included in my application to be processed for the
          purposes of the recruitment process under the Regulation (EU) 2016/679 of the European Parliament
          and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing
          of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
      </footer>
    `;
  }
}
customElements.define('cv-document', CVDocument);
