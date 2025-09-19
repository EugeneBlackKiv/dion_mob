export class MainTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .titlul_principal {
          color: var(--surface-on-surface, #FFF);
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h4, 24px);
          font-style: normal;
          font-weight: var(--weight-heading-primary, 400);
          line-height: var(--line-height-heading-h4, 28px); 
          opacity: var(--surface-on-surface-opa-quaternary, 0.48);
      }
      
      .sectiunea_titluri{
        display: flex;
        padding: 16px 0;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
      }
        
      </style>

      <div class="sectiunea_titluri">
      
        <div class="titlul_principal">
          My searches
        </div>
       
      </div>
    `;
  }

}

customElements.define('main-title', MainTitle);

