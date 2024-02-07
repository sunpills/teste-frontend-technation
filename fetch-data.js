let divUsuarios = document.querySelector("#usuarios");

fetch("data.json").then((response) => {
    response.json().then((dados) => {
        dados.usuarios.map((usuario) => {
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
                <th class="users-data"><strong>Editar</strong> <i class='bx bx-edit-alt'></i>
                </th>
            </tr>
       `
        })
    })
})