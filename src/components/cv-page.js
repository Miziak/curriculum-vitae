import CVComponent from './CVComponent';

class CVPage extends CVComponent {
  render(render) {
    return render`
      <style>
        :host {
          display: block;
          height: 297mm;
          width: 210mm;
        }

        footer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          font-size: 12px;
          color: #666;
          height: 5%;
        }
      </style>
      <slot></slot>
      <footer>
          I hereby give consent for my personal data included in my application to be processed for the
          purposes of the recruitment process under the Regulation (EU) 2016/679 of the European Parliament
          and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing
          of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
      </footer>
    `;
  }
}

customElements.define('cv-page', CVPage);
