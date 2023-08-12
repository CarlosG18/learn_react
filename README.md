# learn_react
estundando o exemplo do tic-tac-toe do site oficial do react

para iniciarmos uma aplicação em react usamos o seguinte comando

```bash
$ npx create-react-app [nome_do_aplicação]
```

para executar nossa aplicação e ve-lá em ação usamos o seguinte comando: 

```bash
$ npm start
```

isso irá rodar um servidor no localhost onde você poderá ver sua aplicação rodando.

# componentes

componentes são elementos que compoem uma interface de usuario. na prática ela é uma função em javascript que retorna um html. Uma boa prática é usar os nomes dos compomentes com a primeira letra mauscula enquanto tags html com a primeira letra minuscula.

- a palavra chave `export` é usada para tornar a função, class ou arquivo acessivel em outros arquivos.

- o `return` dos componemtes devem apenas um elemento JSX. se você quiser retornar mais de um elemento devemos usar o fragments -> `<> </>`.

- para guardar o estado de um componemte usamos o `useState`.