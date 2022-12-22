const pegarObjeto = (id, mensagemDeErro) => {
    let objeto = document.getElementById(id);
    if (objeto === null) throw mensagemDeErro;
    return objeto;
}

const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Deu certo')
})

let cursos = ['InformÃ¡tica', 'EdificaÃ§Ãµes', 'MecÃ¢nica'];
let mensagens = ['', '<a href="https://youtu.be/QJJYpsA5tv8">Clique aqui</a>', 'https://youtu.be/dQw4w9WgXcQ', 'https://youtu.be/dQw4w9WgXcQ']

let addMensagem = () => {
    let botao = pegarObjeto('btn', 'Elemento botÃ£o nÃ£o encontrado!');
    let mensagem = pegarObjeto('texto', 'Elemento texto nÃ£o encontrado!');

    botao.addEventListener('click', () => {
        var select = document.querySelector(".form-select");
        for (let i = 0; i < select.options.length; i++) {
            if (select.selectedIndex == i && select.selectedIndex != 0) {
                document.querySelector('.caixa-de-mensagem').style.display = 'flex';
                mensagem.innerHTML = mensagens[i];
            }

        }
    })

}

addMensagem();
