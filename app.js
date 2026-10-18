projectPhotos["connector"] = [{"file": "te-report-assembly.webp", "title": "The connector architecture", "caption": "The assembled MQS connector studied during the internship. The redesign focused on the locking function within this existing architecture.", "width": 1600, "height": 729}, {"file": "te-report-exploded.webp", "title": "Understanding the interfaces", "caption": "The exploded view separates the carrier, terminal module, terminal and cover. This helped identify where the locking function could be integrated.", "width": 847, "height": 573}, {"file": "te-report-fea.webp", "title": "Checking the concept numerically", "caption": "ANSYS Static Structural view showing normal elastic strain. The numerical work supported preliminary stiffness assessment; it does not establish final insertion, retention or durability performance.", "width": 1292, "height": 683}, {"file": "te-report-prototype.webp", "title": "Preparing a prototype", "caption": "Sliced toolpaths for the module prototype. This is preparation for geometric and assembly assessment, not evidence of completed physical validation.", "width": 1317, "height": 406}];
projectPhotos["aerospace"] = [{"file": "fuselage-cad.webp", "title": "Fuselage-section CAD", "caption": "The team’s fuselage-section model, showing the outer skin and internal structure. The CAD model was the basis for the structural study.", "width": 721, "height": 580}, {"file": "fuselage-stress.webp", "title": "Static stress analysis", "caption": "Equivalent (von Mises) stress distribution for the displayed static model. The plot helped examine how the modeled structure carried load; a stress contour alone does not establish a safety margin.", "width": 967, "height": 562}, {"file": "fuselage-modal.webp", "title": "A closer look at a vibration mode", "caption": "Still from the supplied modal-analysis animation, displaying a mode at 9.0564 Hz. The deformation illustrates the mode shape, not an operating displacement.", "width": 1132, "height": 460}];
const siteRoot = new URL('.', document.currentScript.src);
const photoRoot = new URL('assets/photos/', siteRoot).href;
const groups = {powder:'industrial', valve:'industrial', connector:'industrial', flyson:'industrial', robotics:'freelance'};
const highlights = {
 powder:'CAD, CAM & a fabricated test bench', aerospace:'Six-student team · 2nd among external teams',
 connector:'Locking concepts, calculations & FEA', implant:'Scan geometry, implant interfaces & a split mold',
 valve:'150+ component assemblies & CAD automation', flyson:'60% reduction in mission-preparation time',
 robotics:'Walking robot, water wheel & hands-on kits', exchanger:'Thermal sizing & an Excel calculation tool',
 bender:'Mechanism architecture & frame design', airfoil:'A numerical comparison in MATLAB',
 moody:'Turbulent-flow equations & fixed-point iteration', stirling:'CAD & theoretical P–V-cycle analysis'
};
const caseUrl = p => new URL(`projects/${p.id}/index.html`, siteRoot).href;
function projectVisual(p) {
 if (['robotics','connector','aerospace'].includes(p.id)) {
  const i = projectPhotos[p.id][0];
  return `<img class="project-photo" src="${photoRoot+i.file}" alt="${i.title}" width="${i.width}" height="${i.height}" loading="lazy"><span class="image-label">${p.id === 'robotics' ? 'PROJECT PROTOTYPE' : 'PROJECT CAD'}</span>`;
 }
 return `${drawing(p)}<span class="image-label">CONCEPTUAL ILLUSTRATION</span>`;
}
function projectCard(p) {
 return `<a class="project-card" href="${caseUrl(p)}" aria-label="Explore project: ${p.name}"><span class="project-image">${projectVisual(p)}<span class="project-overlay" aria-hidden="true">Explore project ↗</span></span><span class="card-content"><span class="card-category">${p.org}</span><span class="card-title">${p.name}<span aria-hidden="true">↗</span></span><span class="card-outcome">${highlights[p.id]}</span></span></a>`;
}
const grid = document.querySelector('#projects');
function renderProjects(filter='all') {
 if (!grid) return;
 let selected=projects.filter(p=>filter === 'all' || (groups[p.id] || 'academic') === filter);
 grid.innerHTML=selected.map(projectCard).join('');
 const count=document.querySelector('#project-count');
 if(count) count.textContent=`${selected.length} ${selected.length === 1 ? 'project' : 'projects'}`;
}
renderProjects();
const featured=document.querySelector('#featured-projects');
if(featured) featured.innerHTML=['robotics','aerospace','powder','connector','implant','flyson'].map(id=>projectCard(projects.find(p=>p.id===id))).join('');
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 renderProjects(button.dataset.filter);
}));
const experiences=[
 {id:'valve',company:'Guide Valve Limited',role:'Mechanical Designer',date:'Feb 2026–Present',location:'Remote',symbol:'GV',summary:'I design industrial valve assemblies and prepare drawings, GD&T and bills of materials. Excel-linked models and VBA support size-specific configurations.'},
 {id:'connector',company:'TE Connectivity',role:'Product Engineering Intern',date:'Jul–Sep 2026',location:'Tangier, Morocco',symbol:'TE',summary:'I worked on MQS connector locking concepts, mechanical calculations and ANSYS Mechanical FEA, then prepared a prototype validation plan.'},
 {id:'robotics',company:'MOBDIE',role:'Freelance STEM Product Designer',date:'Mar–Jun 2026',location:'Fès, Morocco',symbol:'M',summary:'I took educational kits from concept to functional prototypes, including a walking robot, electric water wheel and Arduino project box.'},
 {id:'flyson',company:'Flyson',role:'Process Optimization Intern',date:'Aug–Sep 2025',location:'Nouaceur, Casablanca',symbol:'F',summary:'I followed spraying operations in the field, helped standardize preparation with checklists and built Odoo tracking. The internship recorded 60% less mission-preparation time.'},
 {id:'powder',company:'UEMF Advanced Manufacturing Lab',role:'Design & Manufacturing Intern',date:'Feb–Jul 2025',location:'Fès, Morocco',symbol:'U',summary:'I worked on machining, molds, additive manufacturing and workshop maintenance. The powder-flowability tester was one assignment within this placement.'}
];
const timeline=document.querySelector('#experience-list');
if(timeline) timeline.innerHTML=experiences.map(e=>{
 const p=projects.find(p=>p.id===e.id);
 const visual=e.id==='powder'?`<img class="project-photo" src="${photoRoot}uemf-machined-part.jpeg" alt="Related UEMF machining work" loading="lazy" width="899" height="1599"><span class="image-label">RELATED LABORATORY WORK</span>`:projectVisual(p);
 return `<article class="timeline-row"><div class="timeline-date"><b>${e.date}</b><span>${e.location}</span></div><span class="timeline-icon" aria-hidden="true">${e.symbol}</span><div class="timeline-card"><div class="timeline-card-heading"><h3>${e.company}</h3><p>${e.role}</p></div><a class="timeline-image" href="${caseUrl(p)}" aria-label="Explore ${p.name}">${visual}</a><div class="timeline-card-body"><p>${e.summary}</p><a class="text-link" href="${caseUrl(p)}">Explore the work →</a></div></div></article>`;
}).join('');
function renderCourses(query='') {
 const host=document.querySelector('#coursework');if(!host)return;
 const q=query.toLocaleLowerCase();let matches=0;
 host.innerHTML=courses.map(c=>{
  const modules=c.modules.filter(m=>`${m} ${c.year} ${c.title}`.toLocaleLowerCase().includes(q));matches+=modules.length;
  return modules.length?`<details class="course-year" ${q?'open':''}><summary><span>${c.title}<small>${c.year} · ${c.status}</small></span></summary><ul class="module-list">${modules.map(m=>`<li>${m}</li>`).join('')}</ul></details>`:'';
 }).join('');
 document.querySelector('#no-courses').hidden=matches>0;
}
renderCourses();
document.querySelector('#course-search')?.addEventListener('input',e=>renderCourses(e.target.value.trim()));
document.querySelector('#year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-toggle');
menu.addEventListener('click',()=>{
 const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));
 document.querySelector('#main-nav').classList.toggle('open',open);
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');document.querySelector('#main-nav').classList.remove('open');}});
const form=document.querySelector('#contact-form');
form?.addEventListener('submit',e=>{
 e.preventDefault();const name=form.elements.name.value.trim(),email=form.elements.email.value.trim(),message=form.elements.message.value.trim();
 if(!name||!message)return;
 const subject=encodeURIComponent(`Portfolio enquiry from ${name}`);
 const body=encodeURIComponent(`${message}\n\nFrom: ${name}\nReply email: ${email}`);
 document.querySelector('#contact-status').textContent='Your email app should open with a draft. You can also use the direct email link above.';
 window.open(`mailto:slimanimohmed160@gmail.com?subject=${subject}&body=${body}`,'_blank','noopener');
});
document.querySelector('#copy-email')?.addEventListener('click',async()=>{
 const status=document.querySelector('#copy-status');
 try{await navigator.clipboard.writeText('slimanimohmed160@gmail.com');status.textContent='Email address copied.';}
 catch{status.textContent='Select and copy: slimanimohmed160@gmail.com';}
});
// Preserve links shared before projects gained their own pages.
if(location.hash.startsWith('#project-')){
 const p=projects.find(p=>p.id===location.hash.slice(9));if(p)location.replace(caseUrl(p));
}

