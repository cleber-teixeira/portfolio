const zerarCartela = () => {
  const cartela = document.querySelectorAll('#cartela tr td');
  return cartela.forEach(element => element.classList.add('no'));
}

const sorteado = () => {
  const input = document.querySelector('#input-bingo');
  const btn = document.querySelector('#btn-sorteado');
  btn.addEventListener('click', () => {
    const cartela = document.querySelectorAll('#cartela tr td');
    const letra = document.querySelector('#letra');
    const sorteado = document.querySelector('#sorteado');
    letra.style.fontSize = '13vw';
    sorteado.style.fontSize = '12vw';
    let bolinha;
    if (input.value.length === 1 && input.value !== '') {
      bolinha = `0${input.value}`;
    } else if (input.value.length > 2) {
      input.value = '';
    } else {
      bolinha = input.value;
    }
    cartela.forEach(element => {
      if (element.innerText === bolinha) {
        element.classList.remove('no');
      }
    });
    if (!bolinha) {
      letra.innerText = '';
      sorteado.innerText = '';
    } else if (bolinha < 16) {
      letra.innerText = 'B';
      sorteado.innerText = bolinha;
      input.value = '';
    } else if (bolinha < 31) {
      letra.innerText = 'I';
      sorteado.innerText = bolinha;
      input.value = '';
    } else if (bolinha < 46) {
      letra.innerText = 'N';
      sorteado.innerText = bolinha;
      input.value = '';
    } else if (bolinha < 61) {
      letra.innerText = 'G';
      sorteado.innerText = bolinha;
      input.value = '';
    } else {
      letra.innerText = 'O';
      sorteado.innerText = bolinha;
      input.value = '';
    }
  });
}

const bingo = (parametro) => {
  const bolinha = parametro;
  const letra = document.querySelector('#letra');
  const sorteado = document.querySelector('#sorteado');
    if (!bolinha) {
      letra.innerText = '';
      sorteado.innerText = '';
    } else if (bolinha < 16) {
      letra.innerText = 'B';
      sorteado.innerText = bolinha;
    } else if (bolinha < 31) {
      letra.innerText = 'I';
      sorteado.innerText = bolinha;
    } else if (bolinha < 46) {
      letra.innerText = 'N';
      sorteado.innerText = bolinha;
    } else if (bolinha < 61) {
      letra.innerText = 'G';
      sorteado.innerText = bolinha;
    } else {
      letra.innerText = 'O';
      sorteado.innerText = bolinha;
    }
}

const sortear = () => {
  const cartela = document.querySelectorAll('#cartela tr td');
  let bolinha = Math.round(Math.random() * 74 + 1);
  if (bolinha < 10) {
    bolinha = `0${bolinha}`;
  }
  cartela.forEach(element => {
    if (element.innerText === `${bolinha}`) {
      if (element.classList.contains('no')) {
        element.classList.remove('no');
        bingo(bolinha);
      } else {
        sortear();
      }
    }
  });
}

const misturar = () => {
  const sorteado = document.querySelector('#sorteado');
  const num = Math.round(Math.random() * 74 + 1);
  sorteado.innerText = num;
}

const aleatorio = () => {
  const btn = document.querySelector('#eletronico');
  btn.addEventListener('click', () => {
    const input = document.querySelector('#input-bingo');
    const letra = document.querySelector('#letra');
    const sorteado = document.querySelector('#sorteado');
    const sorteando = document.querySelector('.sorteando');
    const img = document.createElement('img');
    let tempo;
    if (input.value === '') {
      tempo = 5000;
    } else {
      tempo = parseInt(input.value * 1000);
    }
    img.src = 'img/sorteando.png';
    img.style.width = '70%';
    letra.innerText = '';
    letra.style.fontSize = '13vw';
    sorteado.style.fontSize = '12vw';
    sorteando.innerText = 'Sorteando o próximo número...';
    letra.appendChild(img);
    setTimeout(() => sorteando.innerText = '', tempo);
    let sorteio = setInterval(misturar, 200);
    setTimeout(() => clearInterval(sorteio), tempo);
    setTimeout(() => sortear(), tempo);
  });
}

const limpar = () => {
  const btn = document.querySelector('#btn-limpar');
  btn.addEventListener('click', () => {
    window.location.reload();
  });
}

const botao = (parametro) => {
  const param = parametro;
  const input = document.querySelector('#input-bingo');
  const campo = document.querySelector(`#${parametro}`);
  const btn = document.querySelector(`#btn-${parametro}`);
  btn.addEventListener('click', () => {
    if (param === 'valor') {
      newInput = input.value.replace(',', '.');
      campo.innerText = parseFloat(newInput).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
      input.value = '';  
    } else {
      campo.innerText = input.value;
      input.value = '';
    }
  });
}

const corrigir = () => {
  const input = document.querySelector('#input-bingo');
  const btn = document.querySelector('#btn-corrigir');
  btn.addEventListener('click', () => {
    const cartela = document.querySelectorAll('#cartela tr td');
    let bolinha;
    if (input.value.length === 1 && input.value !== '') {
      bolinha = `0${input.value}`;
    } else {
      bolinha = input.value;
    }
    cartela.forEach(element => {
      element.innerText === bolinha ? element.classList.add('no') : false;
      input.value = '';
      document.querySelector('#letra').innerText = '';
      document.querySelector('#sorteado').innerText = '';
    });
  });
}

const msg = () => {
  const msg = document.querySelector('main');
  const div = document.createElement('div');
  div.className = 'msg';
  const btn = document.querySelector('#bingo');
  btn.addEventListener('click', () => {
    const h1 = document.createElement('h1');
    h1.className = 'bingo';
    h1.innerText = 'BINGO !!!';
    div.appendChild(h1);
    const bingo = document.querySelector('.msg');
    if (bingo === null) {
      msg.appendChild(div);
    } else {
      msg.removeChild(bingo);
    }
  });
}

const numeroDaCartela = () => {
  const input = document.querySelector('#input-bingo');
  const sorteado = document.querySelector('#sorteado');
  sorteado.style.fontSize = '8vw';
  if(!input.value) {
    const num = Math.round(Math.random() * 74 + 1);
    sorteado.innerText = num;
  } else {
    const num = Math.round(Math.random() * (input.value - 1) + 1);
    sorteado.innerText = num;
  }
}

const conferir = () => {
  const numSorteado = document.querySelector('#sorteado').innerText;
  const lista = document.querySelector('#list');
  const linhas = document.querySelectorAll('li');
  let sorteios = lista.childElementCount;
  if (sorteios === 0) {
      const li = document.createElement('li');
      li.innerText = numSorteado;
      lista.appendChild(li);
      sessionStorage.setItem(`${sorteios}`, `${numSorteado}`);
  } else {
    let result = false;
    for (let index = 0; index < sorteios; index += 1) {
      if (numSorteado === linhas[index].innerText) {
        result = true;
      }
    }
    if (result) {
      sortearCartela();
    } else {
      const li = document.createElement('li');
      li.innerText = numSorteado;
      lista.appendChild(li);
      sessionStorage.setItem(`${sorteios}`, `${numSorteado}`);  
    }
  }
}

const sortearCartela = () => {
  const sorteando = document.querySelector('.sorteando');
  const letra = document.querySelector('#letra');
  const img = document.createElement('img');
  img.src = 'img/cartela.png';
  img.style.width = '90%';
  letra.innerText = '';
  letra.style.fontSize = '3vw';
  sorteando.innerText = 'Sorteando o número da cartela...';
  letra.appendChild(img);
  setTimeout(() => sorteando.innerText = '', 10000);
  let sorteio = setInterval(numeroDaCartela, 200);
  setTimeout(() => clearInterval(sorteio), 10000);
  setTimeout(() => letra.innerText = 'Cartela Sorteada', 10000);
  setTimeout(() => conferir(), 10000);
}

const cartela = () => {
  const btn = document.querySelector('#btn-cartela');
  btn.addEventListener('click', sortearCartela);
}

const rodada = () => botao('rodada');

const valor = () => botao('valor');

const premio = () => botao('premio');

const ganhador = () => botao('ganhador');

const recuperar = () => {
  const result = sessionStorage.length;
  const list = document.querySelector('#list');
  let cartela;
  for (let index = 0; index < result; index += 1) {
    cartela = sessionStorage.getItem(index);
    if(cartela !== null) {
      const li = document.createElement('li');
      li.innerText = cartela;
      list.appendChild(li);
    }
  }
}

window.onload = () => {
  zerarCartela();
  sorteado();
  limpar();
  rodada();
  valor();
  premio();
  aleatorio();
  ganhador();
  corrigir();
  msg();
  cartela();
  recuperar();
};
