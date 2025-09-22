import './active_search_animation.js'
import './active_loading.js'

export class MobSearchCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .lista_carduri{
        display: flex;
        padding: 8px 16px 32px 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        align-self: stretch;
        }
        .container_card{
          position: relative;
          display: flex;
          padding: 16px;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          align-self: stretch;
          
          border-radius: 16px;
          border: 1px solid var(--outline-outline-variant, #393939);
          background: var(--blur-2, rgba(48, 48, 48, 0.24));
          box-shadow: 0 6px 24px 0 var(--shadow-card-2, #1B1B1B);
          backdrop-filter: blur(4px);
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .container_card:hover {
          transform: scale(0.95); 
          box-shadow: 0 3px 16px 0 var(--shadow-card-2, #1B1B1B);
        }
                .header_card{
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }
        .from_to{
          display: flex;
          align-items: center;
          gap: 16px;
          
          color: var(--surface-on-surface, #FFF);

          /* s1/sec */
          font-family: var(--family-subtitle-primary, Jost);
          font-size: var(--size-subtitle-s1, 18px);
          font-style: normal;
          font-weight: var(--weight-subtitle-secondary, 500);
          line-height: var(--line-height-subtitle-s1, 22px); /* 122.222% */
        }
        .date_travelers{
          display: flex;
          align-items: center;
          gap: 8px;
          align-self: stretch;
        }
        .fly_date{
          display: flex;
          align-items: flex-start;
          gap: 4px;
          opacity: var(--surface-on-surface-opa-secondary, 0.72);
          
          color: var(--surface-on-surface, #FFF);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */
        }
        .divider{
          width: 3px;
          height: 3px;
          
          border-radius: 4px;
          opacity: var(--surface-on-surface-opa-secondary, 0.72);
          background: var(--surface-on-surface, #FFF);
        }
        .adult{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 4px;
          color: var(--surface-on-surface, #FFF);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */
          
        }
        .adult_icon{
          fill: var(--surface-on-surface, #FFF);
        }
        .search_status{
          display: flex;
          padding: 8px 0;
          align-items: center;
          gap: 6px;
          align-self: stretch;
          
          color: var(--primary-primary, #805BFF);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */
        }
        
        .search_status_monitor{
          display: flex;
          padding: 2px 0;
          align-items: center;
          gap: 24px;
          align-self: stretch;
          
          color: var(--primary-primary, #805BFF);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */
        }
           
        .search_status_active{
          display: flex;display: flex;
          padding: 8px 0;
          align-items: center;
          gap: 24px;
          align-self: stretch;
          
          color: var(--primary-primary, #805BFF);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */
        }                                                                                    
        .load_container {
          height: 18px;
          width: 18px;
          position: relative;
        }
        .load{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: spin 6s infinite linear;
        }
        @keyframes spin {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .load_logo{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -60%);
        }
        .search_status_new{
          display: flex;
          padding: 8px 0;
          align-items: center;
          gap: 6px;
          align-self: stretch;
          
          color: var(--tertiary-tertiary, #62AB03);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */
        }
        .badge{
          position: absolute;
          width: 16px;
          height: 16px;
          left: -1px;
          top: -1px;
          }
        .badge-center{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .badge_light{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: light 2s infinite linear ;
        }
        @keyframes light {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
        .cerc_blur{
          width: 343px;
          height: 343px;
          aspect-ratio: 1/1;
  
          position: absolute;
          left: 23px;
          bottom: -171px;
          
          border-radius: 343px;
          background: var(--primary-primary, #805BFF);
          filter: blur(200px);
        }
      </style>
      
      <div class="lista_carduri">
<!--        <div class="cerc_blur"></div>-->
        <div class="container_card">
          <div class="header_card">
            <div class="from_to">
              <div>Los Angeles </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path class="adult_icon" d="M5.77846 15.3333L4.65651 15.3333L6.52642 9.15782L2.4126 8.77186L0.916668 11.0876H0.168701L0.916668 7.99993L0.168701 4.91221H0.916669L2.4126 7.228L6.52642 6.84203L4.65651 0.666596L5.77846 0.666595L9.51829 6.84203L11.7622 6.84203C12.383 6.84203 15.502 6.98677 15.502 7.99993C15.502 9.01309 12.383 9.15782 11.7622 9.15782L9.51829 9.15782L5.77846 15.3333Z" fill="white"/>
              </svg>
              <div>Singapore</div>
            </div>
          </div>
          <div class="date_travelers">
            <div class="fly_date">
              Apr 17
              -
              Apr 24
            </div>
            <div class="divider">
            </div>
            <div class="adult">
              <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path class="adult_icon" d="M7.00098 8.40039C10.5503 8.40039 13.0522 10.5525 13.5859 12.8652L12.416 13.1348C12.0265 11.4475 10.0789 9.59961 7.00098 9.59961C3.92301 9.59961 1.97543 11.4475 1.58594 13.1348L0.416016 12.8652C0.949719 10.5525 3.45165 8.40039 7.00098 8.40039Z" fill="white"/>
                <path class="adult_icon" fill-rule="evenodd" clip-rule="evenodd" d="M6.99805 0.400391C8.98627 0.400391 10.5977 2.01177 10.5977 4C10.5977 5.98822 8.98627 7.59961 6.99805 7.59961C5.00982 7.59961 3.39844 5.98822 3.39844 4C3.39844 2.01177 5.00982 0.400391 6.99805 0.400391ZM6.99805 1.59961C5.67256 1.59961 4.59766 2.67452 4.59766 4C4.59766 5.32548 5.67256 6.40039 6.99805 6.40039C8.32353 6.40039 9.39844 5.32548 9.39844 4C9.39844 2.67452 8.32353 1.59961 6.99805 1.59961Z" fill="white"/>
              </svg>
              
              1 Adult
              
            </div>
          </div>
          <div class="search_status_active">
            Active search
            <active-load></active-load>
          </div>
        </div>
        <div class="container_card">
          <div class="header_card">
            <div class="from_to">
              <div>Los Angeles </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path class="adult_icon" d="M5.77846 15.3333L4.65651 15.3333L6.52642 9.15782L2.4126 8.77186L0.916668 11.0876H0.168701L0.916668 7.99993L0.168701 4.91221H0.916669L2.4126 7.228L6.52642 6.84203L4.65651 0.666596L5.77846 0.666595L9.51829 6.84203L11.7622 6.84203C12.383 6.84203 15.502 6.98677 15.502 7.99993C15.502 9.01309 12.383 9.15782 11.7622 9.15782L9.51829 9.15782L5.77846 15.3333Z" fill="white"/>
              </svg>
              <div>Singapore</div>
            </div>
          </div>
          <div class="date_travelers">
            <div class="fly_date">
              Apr 17
              -
              Apr 24
            </div>
            <div class="divider">
            </div>
            <div class="adult">
              <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path class="adult_icon" d="M7.00098 8.40039C10.5503 8.40039 13.0522 10.5525 13.5859 12.8652L12.416 13.1348C12.0265 11.4475 10.0789 9.59961 7.00098 9.59961C3.92301 9.59961 1.97543 11.4475 1.58594 13.1348L0.416016 12.8652C0.949719 10.5525 3.45165 8.40039 7.00098 8.40039Z" fill="white"/>
                <path class="adult_icon" fill-rule="evenodd" clip-rule="evenodd" d="M6.99805 0.400391C8.98627 0.400391 10.5977 2.01177 10.5977 4C10.5977 5.98822 8.98627 7.59961 6.99805 7.59961C5.00982 7.59961 3.39844 5.98822 3.39844 4C3.39844 2.01177 5.00982 0.400391 6.99805 0.400391ZM6.99805 1.59961C5.67256 1.59961 4.59766 2.67452 4.59766 4C4.59766 5.32548 5.67256 6.40039 6.99805 6.40039C8.32353 6.40039 9.39844 5.32548 9.39844 4C9.39844 2.67452 8.32353 1.59961 6.99805 1.59961Z" fill="white"/>
              </svg>
              
              1 Adult
              
            </div>
          </div>
          <div class="search_status_active">
            Active search
            <active-load></active-load>
          </div>
        </div>
        <div class="container_card">
          <div class="badge">
            <svg class="badge-center" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 0L9.53427 4.46573L14 7L9.53427 9.53427L7 14L4.46573 9.53427L0 7L4.46573 4.46573L7 0Z" fill="#62AB03"/>
            </svg>
           <svg class="badge_light" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path opacity="0.64" d="M11 0L14.9824 7.01757L22 11L14.9824 14.9824L11 22L7.01757 14.9824L0 11L7.01757 7.01757L11 0Z" fill="#62AB03"/>
           </svg>  
          </div>
          <div class="header_card">
            <div class="from_to">
              <div>Los Angeles </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path class="adult_icon" d="M5.77846 15.3333L4.65651 15.3333L6.52642 9.15782L2.4126 8.77186L0.916668 11.0876H0.168701L0.916668 7.99993L0.168701 4.91221H0.916669L2.4126 7.228L6.52642 6.84203L4.65651 0.666596L5.77846 0.666595L9.51829 6.84203L11.7622 6.84203C12.383 6.84203 15.502 6.98677 15.502 7.99993C15.502 9.01309 12.383 9.15782 11.7622 9.15782L9.51829 9.15782L5.77846 15.3333Z" fill="white"/>
              </svg>
              <div>Singapore</div>
            </div>
          </div>
          <div class="date_travelers">
            <div class="fly_date">
              Apr 17
              -
              Apr 24
            </div>
            <div class="divider">
            </div>
            <div class="adult">
              <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path class="adult_icon" d="M7.00098 8.40039C10.5503 8.40039 13.0522 10.5525 13.5859 12.8652L12.416 13.1348C12.0265 11.4475 10.0789 9.59961 7.00098 9.59961C3.92301 9.59961 1.97543 11.4475 1.58594 13.1348L0.416016 12.8652C0.949719 10.5525 3.45165 8.40039 7.00098 8.40039Z" fill="white"/>
                <path class="adult_icon" fill-rule="evenodd" clip-rule="evenodd" d="M6.99805 0.400391C8.98627 0.400391 10.5977 2.01177 10.5977 4C10.5977 5.98822 8.98627 7.59961 6.99805 7.59961C5.00982 7.59961 3.39844 5.98822 3.39844 4C3.39844 2.01177 5.00982 0.400391 6.99805 0.400391ZM6.99805 1.59961C5.67256 1.59961 4.59766 2.67452 4.59766 4C4.59766 5.32548 5.67256 6.40039 6.99805 6.40039C8.32353 6.40039 9.39844 5.32548 9.39844 4C9.39844 2.67452 8.32353 1.59961 6.99805 1.59961Z" fill="white"/>
              </svg>
              
              1 Adult
              
            </div>
          </div>
          <div class="search_status_new">          
            Found something new
          </div>
        </div>
        <div class="container_card">
          <div class="header_card">
            <div class="from_to">
              <div>Los Angeles </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path class="adult_icon" d="M5.77846 15.3333L4.65651 15.3333L6.52642 9.15782L2.4126 8.77186L0.916668 11.0876H0.168701L0.916668 7.99993L0.168701 4.91221H0.916669L2.4126 7.228L6.52642 6.84203L4.65651 0.666596L5.77846 0.666595L9.51829 6.84203L11.7622 6.84203C12.383 6.84203 15.502 6.98677 15.502 7.99993C15.502 9.01309 12.383 9.15782 11.7622 9.15782L9.51829 9.15782L5.77846 15.3333Z" fill="white"/>
              </svg>
              <div>Singapore</div>
            </div>
          </div>
          <div class="date_travelers">
            <div class="fly_date">
              Apr 17
              -
              Apr 24
            </div>
            <div class="divider">
            </div>
            <div class="adult">
              <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path class="adult_icon" d="M7.00098 8.40039C10.5503 8.40039 13.0522 10.5525 13.5859 12.8652L12.416 13.1348C12.0265 11.4475 10.0789 9.59961 7.00098 9.59961C3.92301 9.59961 1.97543 11.4475 1.58594 13.1348L0.416016 12.8652C0.949719 10.5525 3.45165 8.40039 7.00098 8.40039Z" fill="white"/>
                <path class="adult_icon" fill-rule="evenodd" clip-rule="evenodd" d="M6.99805 0.400391C8.98627 0.400391 10.5977 2.01177 10.5977 4C10.5977 5.98822 8.98627 7.59961 6.99805 7.59961C5.00982 7.59961 3.39844 5.98822 3.39844 4C3.39844 2.01177 5.00982 0.400391 6.99805 0.400391ZM6.99805 1.59961C5.67256 1.59961 4.59766 2.67452 4.59766 4C4.59766 5.32548 5.67256 6.40039 6.99805 6.40039C8.32353 6.40039 9.39844 5.32548 9.39844 4C9.39844 2.67452 8.32353 1.59961 6.99805 1.59961Z" fill="white"/>
              </svg>
              
              1 Adult
              
            </div>
          </div>
          <div class="search_status_monitor"> 
            Continue <br>
            monitoring...
             <active-search></active-search>
          </div>
        </div>
        <div class="container_card">
          <div class="header_card">
            <div class="from_to">
              <div>Los Angeles </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path class="adult_icon" d="M5.77846 15.3333L4.65651 15.3333L6.52642 9.15782L2.4126 8.77186L0.916668 11.0876H0.168701L0.916668 7.99993L0.168701 4.91221H0.916669L2.4126 7.228L6.52642 6.84203L4.65651 0.666596L5.77846 0.666595L9.51829 6.84203L11.7622 6.84203C12.383 6.84203 15.502 6.98677 15.502 7.99993C15.502 9.01309 12.383 9.15782 11.7622 9.15782L9.51829 9.15782L5.77846 15.3333Z" fill="white"/>
              </svg>
              <div>Singapore</div>
            </div>
          </div>
          <div class="date_travelers">
            <div class="fly_date">
              Apr 17
              -
              Apr 24
            </div>
            <div class="divider">
            </div>
            <div class="adult">
              <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path class="adult_icon" d="M7.00098 8.40039C10.5503 8.40039 13.0522 10.5525 13.5859 12.8652L12.416 13.1348C12.0265 11.4475 10.0789 9.59961 7.00098 9.59961C3.92301 9.59961 1.97543 11.4475 1.58594 13.1348L0.416016 12.8652C0.949719 10.5525 3.45165 8.40039 7.00098 8.40039Z" fill="white"/>
                <path class="adult_icon" fill-rule="evenodd" clip-rule="evenodd" d="M6.99805 0.400391C8.98627 0.400391 10.5977 2.01177 10.5977 4C10.5977 5.98822 8.98627 7.59961 6.99805 7.59961C5.00982 7.59961 3.39844 5.98822 3.39844 4C3.39844 2.01177 5.00982 0.400391 6.99805 0.400391ZM6.99805 1.59961C5.67256 1.59961 4.59766 2.67452 4.59766 4C4.59766 5.32548 5.67256 6.40039 6.99805 6.40039C8.32353 6.40039 9.39844 5.32548 9.39844 4C9.39844 2.67452 8.32353 1.59961 6.99805 1.59961Z" fill="white"/>
              </svg>
              
              1 Adult
              
            </div>
          </div>
          <div class="search_status_monitor"> 
            Continue <br>
            monitoring...
             <active-search></active-search>
          </div>
        </div>          
      </div>


    `;
  }

  connectedCallback() {
    // const dropdown = this.shadowRoot.querySelector('.StyleClassName');
  }
}

customElements.define('mobsearch-card', MobSearchCard);

