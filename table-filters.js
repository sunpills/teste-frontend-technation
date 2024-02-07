
//  Adicionar eventos de mudança aos dropdowns
const dropdownStatus = document.querySelectorAll('.filtroStatus');
dropdownStatus.forEach(dropdown => {
    dropdown.addEventListener('change', function () {
        const filtro = this.value;
        if (filtro === 'nota-emitida') {
            filtrarTabela("Nota Emitida");
        } else if (filtro === 'cobranca-realizada') {
            filtrarTabela("Cobrança Realizada");
        } else if (filtro === 'pagamento-atrasado') {
            filtrarTabela("Pagamento Atrasado");
        } else if (filtro === 'pagamento-realizado') {
            filtrarTabela("Pagamento Realizado");
        } 
    });
});


// Função para filtrar a tabela com base na opção selecionada
function filtrarTabela(filtro) {
    return fetch("data.json").then((response) => {
        response.json().then(dados => {
            if (filtro === 'todos') {
                mostrarValor(dados.usuarios);
            } else {
                const dadosfiltrados = dados.usuarios.filter(item => item.status === filtro);
                mostrarValor(dadosfiltrados);
            }
        });
    });


function mostrarValor(usuarios) {
        let divUsuarios = document.querySelector("#usuarios");
        divUsuarios.innerHTML = '';
        usuarios.forEach(usuario => {
            divUsuarios.innerHTML += `
                <tr>
                <th class="users-data">${usuario.name}</th>
                <th class="users-data">${usuario.id}</th>
                <th class="users-data">${usuario.created_date}</th>
                <th class="users-data">${usuario.charge_date}</th>
                <th class="users-data">${usuario.payment_date}</th>
                <th class="users-data">${usuario.value}</th>
                <th class="users-data">Documento</th>
                <th class="users-data">Boleto</th>
                <th class="users-data">${usuario.status}</th>
                <th class="users-data">Editar <i class='bx bx-edit-alt'></i>
                </th>
                </tr>
`
        });
    }
}