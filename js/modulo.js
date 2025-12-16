
const typing = document.getElementById('typing');

if (typing) {
  const textos = [
    'Desenvolvedor Full Stack',
    'Focado em Back-end',
    'Criador de Soluções Modernas'
  ];

  let index = 0;
  let char = 0;

  function escrever() {
    if (char < textos[index].length) {
      typing.textContent += textos[index].charAt(char);
      char++;
      setTimeout(escrever, 80);
    } else {
      setTimeout(apagar, 2000);
    }
  }

  function apagar() {
    if (char > 0) {
      typing.textContent = textos[index].substring(0, char - 1);
      char--;
      setTimeout(apagar, 40);
    } else {
      index = (index + 1) % textos.length;
      setTimeout(escrever, 400);
    }
  }

  escrever();
}

/* GITHUB CHART*/
const chartCanvas = document.getElementById('langChart');

if (chartCanvas) {
  fetch('http://localhost:3000/github-langs')
    .then(res => res.json())
    .then(data => {
      new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: Object.keys(data),
          datasets: [{
            data: Object.values(data),
            backgroundColor: '#9b5cff'
          }]
        },
        options: {
          plugins: {
            legend: { display: false }
          }
        }
      });
    })
    .catch(err => console.error('Erro GitHub:', err));
}

//* PROJETOS *//

const track = document.getElementById('projectsTrack');

if (track) {
  const projetos = [
    {
      titulo: 'Sistema Web de Divulgação Para um AgroNegócio - Agro Malandrin',
      desc: 'Aplicação moderna e performática para empresa. (Projeto desenvolvido anteriormente, atualmente fora do ar)',
      img: 'img/projeto2.png',
      link: 'https://github.com/VictorH131/Projeto_AgroMalandrin_new'
    },
    {
      titulo: 'Site Institucional Para Divulgação de Um País - Volta ao Mundo',
      desc: 'Layout profissional e responsivo de representação de um país.',
      img: 'img/projeto1.png',
      link: 'https://victorh131.github.io/Volta_aoMundo/index.html'
    },
    {
      titulo: 'Site Institucional Para Sistema de Votação – Vortex',
      desc: 'Site institucional desenvolvido para a empresa fictícia Vortex, com foco em apresentação institucional, organização de informações e identidade visual profissional.',
      img: 'img/projeto3.png',
      link: 'https://vortexweb.page.gd/'
    },
    {
      titulo: 'Player de Música Web - ',
      desc: 'Player de música web, pensado para navegação fluida e imersiva, com layout moderno, responsivo e foco em experiência do usuário.',
      img: 'img/projeto4.png',
      link: ''
    }
  ];

  const MIN_CAROUSEL = 5;
  const usarCarrossel = projetos.length >= MIN_CAROUSEL;

  const listaFinal = usarCarrossel
    ? [...projetos, ...projetos] // loop 
    : projetos;

  listaFinal.forEach(p => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = p.link;
    card.target = '_blank';

    card.innerHTML = `
      <img src="${p.img}" alt="${p.titulo}">
      <div class="card-info">
        <h3>${p.titulo}</h3>
        <p>${p.desc}</p>
      </div>
    `;

    track.appendChild(card);
  });


  // 🔥 ativa animação SOMENTE se tiver projetos suficientes
  if (usarCarrossel) {
    track.classList.add('carousel-auto');
  }
}


//* TEMA *//
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');

// carrega tema salvo (IGUAL AO SEU)
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'claro') {
  body.classList.add('light');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
} else {
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');

  if (body.classList.contains('light')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('tema', 'claro');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('tema', 'escuro');
  }
});



