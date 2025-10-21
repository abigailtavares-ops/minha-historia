const avanca = document.querySelectorAll('.btn-proximo')

avanca.forEach (button => {
    button.addEventListener ('click', function())
    const atual = 'passo-' + this.getComputedStyle ('data-proximo')

    atual.classList.remove('ativo')
    document.getElementById(proximopasso).classList.add('ativo')
  })



