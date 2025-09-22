export class ActiveLoad extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>
      .container{
        display: flex;
        width: 204px;
        align-items: center;
        gap: 2px;
        /*border-radius: 8px;*/
        /*overflow: hidden;*/
      }
      .point{
        width: 204px;
        height: 4px;
        border-radius: 8px;
        background: linear-gradient(90deg, rgba(128, 91, 255, 0.00) 0%, var(--primary-primary, #805BFF) 100%);
        transform-origin: left center; 
        animation: point 3s linear infinite;
      }
      @keyframes point {
        0% {
          transform: translateX(0px) scaleX(0.02); 
          opacity: 0;
        }
        16% {
          opacity: 1;
        }
        50% {
          transform: translateX(0px) scaleX(1); 
        }
        64% {
          opacity: 1;
        }
        100% {
          transform: translateX(200px) scaleX(0.02); 
          opacity: 0;
        }
      }
      
      .point_sec{
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background: var(--primary-primary, #805BFF);
        filter: blur(2px);

        animation: point-sec-anim 3s linear infinite;
      }
      
      @keyframes point-sec-anim {
        0% {
        transform: translateX(4px);
          opacity: 0;
        }
        
        16% {
          opacity: 1;
        }
        25%{
        transform: translateX(100px) scale(2); 
        }
        
        50% {
          transform: translateX(200px); 
        }
        
        84% {
          opacity: 1;
        }
        
        100% {
          transform: translateX(206px); 
          opacity: 0;
        }
      }

      



      </style>
      
      <div class="container">
        <div class="point_sec"></div>
        <div class="point"></div>
      </div>
      
    `;
  }

  // connectedCallback() {
  // }

}

customElements.define('active-load', ActiveLoad);

