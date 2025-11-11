document.addEventListener('DOMContentLoaded', function(){
  const phone = '249963059222';
  const msg = encodeURIComponent('مرحبًا، أود الاستفسار عن خدمات الزروقابي للتقنية.');
  const contactBtns = document.querySelectorAll('#contactBtn, #contactBtn2');
  contactBtns.forEach(btn=>{
    btn.addEventListener('click', function(e){
      e.preventDefault();
      window.open(`https://wa.me/${phone}?text=${msg}`, '_blank', 'noopener');
    });
  });
});
