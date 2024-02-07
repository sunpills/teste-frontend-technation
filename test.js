// Adicionar eventos de mudança aos dropdowns
document.getElementById('filtroStatus').addEventListener('change', filtrarTabela);
document.getElementById('filtroMes').addEventListener('change', filtrarTabela);

// Função para filtrar a tabela com base nas opções selecionadas
function filtrarTabela() {
  const filtroStatus = document.getElementById('filtroStatus').value;
  const filtroMes = document.getElementById('filtroMes').value;

  return fetch("data.json").then((response) => {
    response.json().then(dados => {
      let dadosFiltrados = dados.usuarios;

      if (filtroStatus !== 'todos') {
        dadosFiltrados = dadosFiltrados.filter(item => item.status === filtroStatus);
      }

      if (filtroMes !== 'todos') {
        dadosFiltrados = dadosFiltrados.filter(item => {
          const mesCriacao = new Date(item.created_date).getMonth() + 1;
          const mesCobranca = new Date(item.charge_date).getMonth() + 1;
          const mesPagamento = new Date(item.payment_date).getMonth() + 1;
          return mesCriacao.toString() === filtroMes || mesCobranca.toString() === filtroMes || mesPagamento.toString() === filtroMes;
        });
      }

      mostrarValor(dadosFiltrados);
    });
  });
}