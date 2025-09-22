export class CerBlur extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>
      .container{
        height: 24px;
        width: 100%;
        z-index: -10;
        position: relative;
      }
        .blur_light {
          width: 343px;
          height: 343px;
          
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -80%);
          
          border-radius: 50%;
          background: var(--primary-primary, #805BFF);
          filter: blur(180px);
        }
      </style>
      
      <div class="container">
        <div class="blur_light"></div>       
      </div>
      
    `;
  }

  // connectedCallback() {
  // }

}

customElements.define('cer-blur', CerBlur);

