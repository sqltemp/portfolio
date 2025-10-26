
(function(){
  const key='sq-theme';
  const btn=document.getElementById('themeToggle');
  const saved=localStorage.getItem(key);
  if(saved==='light'){document.body.classList.remove('theme-dark');document.body.classList.add('theme-light');}
  btn?.addEventListener('click',()=>{
    const light=document.body.classList.toggle('theme-light');
    if(light){localStorage.setItem(key,'light');}else{localStorage.removeItem(key);}
  });

  // simple client-side filter for lists
  const input=document.querySelector('.search-input');
  if(input){
    input.addEventListener('input', e=>{
      const q=e.target.value.toLowerCase();
      document.querySelectorAll('[data-filter-item]').forEach(el=>{
        const t=el.dataset.filterItem.toLowerCase();
        el.style.display = t.includes(q) ? '' : 'none';
      });
    });
  }
})();
