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
                <th class="users-data"><i class='bx bxs-file-doc table-icons'> <strong>Visualizar</strong></i></th>
                <th class="users-data"><i class='bx bx-file table-icons'> <strong>Baixar</strong></i></th>
                <th class="users-data">${usuario.status}</th>
                <th class="users-data"><i class='bx bx-edit-alt table-icons'> <strong>Editar</strong></i>
                </th>
            </tr>
       `
        })
    })
})