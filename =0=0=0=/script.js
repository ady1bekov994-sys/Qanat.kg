// script.js
// Простая логика: данные, отрисовка, взаимодействие
const services = [
  {title:'Лендингтер', desc:'Жалгыз барак — максимум натыйжа.'},
  {title:'Сайт для бизнеса', desc:'Карта, отзывы, каталог — баары бир жерде.'},
  {title:'Онлайн дүкөн', desc:'Төлөм, корзина, заказ — сатууну старттайбыз.'},
  {title:'Дизайн', desc:'Аудиторияга цепляющий дизайн.'},
  {title:'Support', desc:'Запуск жана 24/7 колдоо (негизги).'},
  {title:'SEO начальный', desc:'Сайтты издөө үчүн оңдоп беребиз.'},
];

const projects = [
  {name:'Сайт — кафе', desc:'Лендинг + меню + бронь'},
  {name:'Онлайн дүкөн — электроника', desc:'Каталог, корзина, оплата'},
  {name:'Корпоративный сайт', desc:'Бренд сайт, контакты, отзывы'},
];

const steps = [
  {num:'1', title:'Кеңеш', desc:'Сиздин идеяны түшүнүп, планда төлчүлөштүрөбүз'},
  {num:'2', title:'Дизайн', desc:'Макет, түс, стиль — сиз макул болуңуз'},
  {num:'3', title:'Программалоо', desc:'Код жазабыз, тестим жүргүзөбүз'},
  {num:'4', title:'Запуск', desc:'Сайт өнүк, поддержка берүү'}
];

// Render services
const servicesGrid = document.getElementById('servicesGrid');
for(let i=0;i<services.length;i++){
  const s = services[i];
  const el = document.createElement('div');
  el.className = 'service';
  el.innerHTML = `<strong>${s.title}</strong><div class="muted" style="margin-top:6px">${s.desc}</div>`;
  servicesGrid.appendChild(el);
}

// Render projects
const projectList = document.getElementById('projectList');
projects.forEach((p, idx)=>{
  const el = document.createElement('div'); el.className='project';
  el.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><strong>${p.name}</strong><div class="muted">${p.desc}</div></div><button class="cta-free" data-idx="${idx}">Көрүү</button></div>`;
  projectList.appendChild(el);
});

// Render steps
const stepsContainer = document.getElementById('steps');
if(stepsContainer){
  steps.forEach(step => {
    const el = document.createElement('div');
    el.className = 'step';
    el.innerHTML = `<div style="font-size:24px;font-weight:700;color:var(--accent);margin-bottom:8px">${step.num}</div><strong>${step.title}</strong><div class="muted" style="margin-top:6px">${step.desc}</div>`;
    stepsContainer.appendChild(el);
  });
}

// Modal logic
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const projectBtn = document.getElementById('projectBtn');
const closeModalBtn = document.getElementById('closeModal');

if(projectBtn) projectBtn.addEventListener('click', openProjects);
if(closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

projectList.addEventListener('click', (e)=>{
  if(e.target.matches('button')){
    const idx = Number(e.target.dataset.idx);
    showProject(idx);
  }
});

function closeModal(){
  if(modal) modal.style.display='none';
}

function openProjects(){
  if(!modal) return;
  modalContent.innerHTML='';
  projects.forEach(p=>{
    const d = document.createElement('div');
    d.style.padding='10px'; d.style.borderRadius='8px'; d.style.background='rgba(255,255,255,0.02)';
    d.innerHTML = `<strong>${p.name}</strong><div class="muted">${p.desc}</div>`;
    modalContent.appendChild(d);
  });
  modal.style.display='flex';
}

function showProject(idx){
  if(!modal) return;
  modalContent.innerHTML = `<div style="padding:14px;"><h3>${projects[idx].name}</h3><p class="muted">${projects[idx].desc}</p><p class="muted">Тех: HTML/CSS/JS, админ панел (опция).</p></div>`;
  modal.style.display='flex';
}

// Contact form (no backend) — show fake confirmation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  if(!name || !phone){ alert('Сураныч, атыӊыз менен номерди киргизиңиз'); return; }
  
  if(modal && modalContent){
    modalContent.innerHTML = `<div style="padding:12px;"><strong>Рахмат, ${name}!</strong><div class="muted">Биз 24 сааттын ичинде байланышабыз. (Тел: ${phone})</div></div>`;
    modal.style.display='flex';
  }
  contactForm.reset();
});

// WhatsApp button — change number inside
const whatsappBtn = document.getElementById('whatsappBtn');
if(whatsappBtn){
  whatsappBtn.addEventListener('click', ()=>{
    const phoneNumber = '+996228921294'; // <-- change to real number
    window.open('https://wa.me/' + phoneNumber.replace(/[^0-9+]/g,''), '_blank');
  });
}

// Free consult button
const freeConsultBtn = document.getElementById('freeConsult');
if(freeConsultBtn){
  freeConsultBtn.addEventListener('click', ()=>{
    const nameInput = document.getElementById('name');
    const contactSection = document.getElementById('contact');
    if(nameInput) nameInput.focus();
    if(contactSection) window.scrollTo({top: contactSection.offsetTop - 40, behavior:'smooth'});
  });
}