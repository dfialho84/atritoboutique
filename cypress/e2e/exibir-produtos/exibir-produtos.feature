Feature: Exibir Produtos

  Como um comprador, quero ver os produtos disponíveis na loja para que eu possa escolher o que comprar.
 
  Scenario: O usuário acessa a página principal para ver os produtos
    Given Eu visito a página "/"
    Then Eu vejo alguns produtos  
