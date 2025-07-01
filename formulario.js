// Texto digitando automático com duas cores e cursor
const frase = "HELLO, I'M\nANA VICTORIO.";
const elemento = document.querySelector("#textoDigitado");

let i = 0;
let apagando = false;

function digitarApagar() {
  let texto = frase.substring(0, i);

  // Divide a frase digitada em duas linhas
  const linhas = texto.split("\n");
  let linha1 = "";
  let linha2 = "";

  if (linhas.length >= 1) {
    linha1 = `<span class="linha-laranja">${linhas[0]}</span>`;
  }

  if (linhas.length === 2) {
    linha2 = `<br><span class="linha-branca">${linhas[1]}</span>`;
  }

  // Atualiza o conteúdo com cores e cursor piscando
  elemento.innerHTML = linha1 + linha2 + '<span class="cursor"></span>';

  // Avança ou retrocede
  if (!apagando && i <= frase.length) {
    i++;
  } else if (apagando && i >= 0) {
    i--;
  }

  // Controla o tempo de pausa entre os ciclos
  if (i === frase.length + 1) {
    apagando = true;
    setTimeout(digitarApagar, 1000);
  } else if (i < 0) {
    apagando = false;
    setTimeout(digitarApagar, 500);
  } else {
    setTimeout(digitarApagar, 150);
  }
}

digitarApagar();

// -------------------------------------------
// Validação do formulário
const form = document.getElementById("form-contato");
const resposta = document.getElementById("resposta-formulario");

form.addEventListener("submit", function (e) {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    e.preventDefault();
    resposta.innerText = "Please fill in all required fields.";
    resposta.style.color = "red";
  } else {
    resposta.innerText = "Sending your message...";
    resposta.style.color = "#fa8a00";
  }
});

function revealOnScroll() {
  const elements = document.querySelectorAll(".hidden-on-load");
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      el.classList.add("show");
    } else {
      el.classList.remove("show"); // Remove ao sair da tela, para animar de novo
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

document.addEventListener('DOMContentLoaded', function() {
  const setaDireita = document.getElementById('seta-direita-projetos');
  const grupo1 = document.getElementById('grupo-projetos-1');
  const grupo2 = document.getElementById('grupo-projetos-2');
  let mostrandoGrupo1 = true;
  if(setaDireita && grupo1 && grupo2) {
    setaDireita.addEventListener('click', function() {
      if(mostrandoGrupo1) {
        grupo1.style.display = 'none';
        grupo2.style.display = 'flex';
      } else {
        grupo1.style.display = 'flex';
        grupo2.style.display = 'none';
      }
      mostrandoGrupo1 = !mostrandoGrupo1;
    });
  }
});

function reiniciarAnimacaoSobre() {
  const sobre = document.querySelector('.txt-sobre');
  if (sobre) {
    sobre.classList.remove('fade-up');
    // Força reflow para reiniciar a animação
    void sobre.offsetWidth;
    sobre.classList.add('fade-up');
  }
}

window.addEventListener('hashchange', function() {
  if (window.location.hash === '#sobre') {
    reiniciarAnimacaoSobre();
  }
});

window.addEventListener('scroll', function() {
  const sobre = document.querySelector('.txt-sobre');
  if (!sobre) return;
  const rect = sobre.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    reiniciarAnimacaoSobre();
  }
});
