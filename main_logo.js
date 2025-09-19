export class MainLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .logo_section{
           margin-top: 24px;
           display: flex;
           justify-content: center;
        }
        .logo{
          display: flex;
          width: 64px;
          height: 64px;
          padding: 1.5px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          
          border-radius: 999px;
          border: 1px solid var(--primary-primary, #805BFF);
          position: relative;
        }
        
        .positionare_video{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          border-radius: 80px;
          width: 63px;
          height: 63px;
        }
        
        .masca_fundal{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          
          width: 63px;
          height: 63px;
          
          border-radius: 94px;
          background: radial-gradient(91.06% 91.06% at 26.06% 75%, rgba(255, 255, 255, 0.00) 41.58%, #FFF 100%);
        }
        
        .container-logo {
          width: 40px;
          height: 40px;
          position: relative;
        }
        .triangle_1{
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -10%);
        }
        

      </style>
      
      <div class="logo_section">
      
        <div class="logo">
          <div class="container-logo">
            <svg class="triangle_1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M34.7675 35.7299H5.23328L19.9999 6.19568L34.7675 35.7299Z" stroke="white" stroke-width="6.84864"/>
            </svg>       
          </div>
          <div class="masca_fundal"></div>
          <video class="positionare_video" autoplay muted loop>
            <source src="./video_logo_2.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        
      </div>
    `;
  }

}

customElements.define('main-logo', MainLogo);

