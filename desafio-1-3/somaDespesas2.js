const usuarios = [
    { 
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9],
    }
];
// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:
function calculaSaldo(receitas, despesas) {
  const somaReceitas = somaNumeros(receitas)
  const somaDespesas = somaNumeros(despesas)
  return somaReceitas - somaDespesas
};

function somaNumeros(numeros) {
  let soma = 0
  for (let numero of numeros)
}