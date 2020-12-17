/*
Vetores e objetos

Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }

Por exemplo:

const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};

Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

*/

const user = {
  nome: "Carlos",
  idade: 32,
  tecnologia: [
    {  nome: 'C++', especialidade: 'Desktop'},
    {  nome: 'Python', especialidade: 'Data Science'},
    {  nome: 'Javascript', especialidade: 'Web/Mobile'}
  ]
};

console.log(`O usuário ${user.nome} tem ${user.idade} anos e usa a tecnologia ${user.tecnologia[0].nome} com especialidade em ${user.tecnologia[0].especialidade}`)