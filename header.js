export class LandingHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
      .button_section {
        display: flex;
        gap: 20px;
        justify-content: flex-end;
        padding: 16px 16px 0px 16px;
      }
      .button{
        display: inline-flex;
        padding: 4px;
        align-items: center;
        gap: 10px;
        
        border-radius: 32px;
        border: 1px solid var(--surface-on-surface, #000);
        cursor: pointer;
        transition: 0.4s all cubic-bezier(0.3, 0, 0, 1);
        opacity: 0.3;
      }
      .button:hover{
        border: 1px solid var(--surface-on-surface, #000);
        background: var(--secondary-secondary-h, #E7E7E7);
      }
      .icon_color{
      fill: var(--surface-on-surface, #000);
      }
      </style>
      
      <div class="button_section">
        <div class="button" id="theme-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path class="icon_color" d="M7.83199 6.66667C7.83199 5.28087 8.34485 4.01464 9.19023 3.04769C5.70496 3.44841 2.99801 6.40738 2.99801 10C2.99801 13.866 6.13234 17.0003 9.99833 17.0003C13.5915 17.0003 16.5498 14.2925 16.9498 10.8065C15.9832 11.6522 14.7178 12.1663 13.3317 12.1663C10.2941 12.1663 7.83199 9.70423 7.83199 6.66667ZM8.83134 6.66667C8.83134 9.15195 10.8464 11.167 13.3317 11.167C14.7105 11.167 15.9438 10.5467 16.77 9.56869C16.9712 9.33045 17.2737 9.27802 17.513 9.35059C17.7595 9.42536 17.998 9.65555 17.998 10C17.998 14.4183 14.4166 17.9997 9.99833 17.9997C5.58005 17.9997 1.99866 14.4183 1.99866 10C1.99866 5.58172 5.58005 2.00033 9.99833 2.00033C10.3416 2.00033 10.5726 2.23758 10.6477 2.48454C10.7205 2.72413 10.6672 3.02589 10.4296 3.22673C9.45159 4.05298 8.83134 5.28741 8.83134 6.66667Z" fill="black"/>
          </svg>
        </div>
        
      </div>
    `;
  }

  connectedCallback() {

    const button = this.shadowRoot.getElementById('theme-toggle');
    const body = document.body;

// 1. Set theme based on user's system preference if no manual choice yet
    if (!body.hasAttribute('data-theme')) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      body.setAttribute('data-theme', prefersDark ? 'Dark Theme' : 'Light Theme');
    }

// 2. Toggle between themes on click
    button.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      if (currentTheme === 'Dark Theme') {
        body.setAttribute('data-theme', 'Light Theme');
      } else {
        body.setAttribute('data-theme', 'Dark Theme');
      }
    });



  }

}

customElements.define('landing-header', LandingHeader);

