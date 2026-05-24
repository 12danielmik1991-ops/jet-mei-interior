// BRSP cluster overrides — loaded by index.html after main script
// This file customizes the panel for JET MEI Interior without changing the main code
(function(){
  // Wait for DOMContentLoaded so main script has run
  function applyBRSPConfig(){
    // 1. Override Gist ID
    window.GIST_ID_OVERRIDE = '60691ee9e29682c97ebf3cdf829d230d';
    
    // 2. Override CITIES list
    window.CITIES_OVERRIDE = ['SO','CP','CJ','SJ'];
    
    // 3. Override city names
    window.CITY_NAMES_OVERRIDE = {
      SO: 'Sorocaba',
      CP: 'Campinas',
      CJ: 'Campo do Jordão',
      SJ: 'São José dos Campos'
    };
    
    // 4. Override password
    window.PASSWORD_OVERRIDE = 'interior2026';
    
    // 5. Default language PT
    if(!localStorage.getItem('jet_lang')){
      localStorage.setItem('jet_lang','pt');
    }
    
    // 6. Override page titles
    document.title = 'JET MEI Interior';
    
    // 7. Patch headers DOM
    document.querySelectorAll('.auth-title, .logo-text').forEach(el => {
      if(el.textContent.includes('Litoral')){
        el.textContent = el.textContent.replace('Litoral', 'Interior');
      }
    });
    document.querySelectorAll('.auth-sub, .logo-sub').forEach(el => {
      if(el.textContent.includes('LITORAL')){
        el.textContent = el.textContent.replace('LITORAL', 'INTERIOR').replace('BRSPL', 'BRSP');
      }
    });
    
    console.log('[BRSP override] Applied:', {
      gist: window.GIST_ID_OVERRIDE,
      cities: window.CITIES_OVERRIDE,
      lang: localStorage.getItem('jet_lang')
    });
  }
  
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', applyBRSPConfig);
  } else {
    applyBRSPConfig();
  }
})();