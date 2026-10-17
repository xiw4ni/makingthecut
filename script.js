document.documentElement.classList.add('js');
const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeNDCsfON2vS3zewNAnqyQ_srBWBVgUf7uUXdsxNw6_orBiqg/viewform?usp=publish-editor"; // registration form

const data = {
  gap:[["Beyond Qualifications","Understand what makes a candidate stand out beyond academic scores."],
       ["Industry Expectations","Discover the signals that hiring teams notice."],
       ["Professional Presence","Learn how to communicate your value with confidence."]],
  learn:[["Career Direction","Identify roles that fit your strengths and where the industry is heading."],
         ["Professional Identity","Shape a clear, credible story of who you are and what you offer."],
         ["Interview Confidence","Prepare to answer well and handle pressure with composure."],
         ["Job Search Strategy","Search with purpose instead of applying everywhere."],
         ["Workplace Readiness","Know the habits and communication that teams expect from day one."],
         ["Career Growth","Plan how to keep building skills and opportunities after you're hired."]],
  take:[["Career Clarity","A sharper view of the path you want to pursue."],
        ["Confidence","Practical tools for speaking about your strengths."],
        ["Stronger Positioning","A clearer way to present yourself against other candidates."],
        ["Professional Presence","Better habits for how you show up and communicate."],
        ["Workplace Readiness","An understanding of what employers expect."],
        ["Action Plan","Concrete next steps you can start on right away."]],
  steps:[["LEARN","Understand industry expectations."],["POSITION","Communicate your strengths."],
         ["PRESENT","Build a compelling professional story."],["PERFORM","Improve interview and workplace communication."],
         ["GROW","Turn insights into practical next steps."]],
  quotes:["[Placeholder testimonial. Replace with genuine feedback from a past attendee.]",
          "[Placeholder testimonial. Replace with genuine feedback from a past attendee.]",
          "[Placeholder testimonial. Replace with genuine feedback from a past attendee.]"],
  faq:[["What is this masterclass about?","MAKING THE CUT: What Industry Leaders Search For is an interactive masterclass on the skills, mindset and professional signals that help emerging talent get selected."],
       ["Who should attend?","Students, aspiring professionals and early-career talent who want to understand what hiring teams look for."],
       ["What will I learn?","How to build career direction, present your professional story, perform in interviews, and prepare for the workplace. See the full list under What You'll Learn."],
       ["What is the date and time?","31 October 2026 at 5:00 PM."],
       ["What is the format?","An interactive masterclass."],
       ["How can I register?","Use any Reserve Your Seat button on this page. The registration link will be confirmed before the event."]]
};
const $ = id => document.getElementById(id);
const card = (t,d,i,num) => `<article class="card rv">${num?`<div class="ico">${String(i+1).padStart(2,'0')}</div>`:''}<h3>${t}</h3><p>${d}</p></article>`;
$('gap').innerHTML = data.gap.map((c,i)=>card(c[0],c[1],i)).join('');
$('learnGrid').innerHTML = data.learn.map((c,i)=>card(c[0],c[1],i,1)).join('');
$('take').innerHTML = data.take.map((c,i)=>card(c[0],c[1],i)).join('');
$('steps').innerHTML = data.steps.map(s=>`<li class="rv"><div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div></li>`).join('');
$('quotes').innerHTML = data.quotes.map(q=>`<figure class="card quote rv"><p>${q}</p><cite>[Attendee name, course]</cite></figure>`).join('');
$('faqList').innerHTML = data.faq.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
document.querySelectorAll('[data-reg]').forEach(a=>{a.href=REGISTER_URL;a.target='_blank';a.rel='noopener'});

// size hero to exactly fill the first screen
const fit=()=>document.documentElement.style.setProperty('--chrome',(document.querySelector('.top').offsetHeight+document.querySelector('nav.main').offsetHeight)+'px');
fit();addEventListener('resize',fit);

// mobile menu
const b=$('burger'), m=$('menu');
const setMenu=o=>{m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')};
b.onclick=()=>setMenu(!m.classList.contains('open'));
m.querySelectorAll('a').forEach(a=>a.onclick=()=>setMenu(false));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});

// reveal on scroll
const els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  els.forEach(el=>io.observe(el));
}else els.forEach(el=>el.classList.add('in'));