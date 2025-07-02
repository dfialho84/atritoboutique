Feature: Registrar Usuário

  Como um novo usuário, quero me registrar na plataforma para que eu possa acessar recursos exclusivos.

  Scenario: O usuário acessa a página de registro
    Given Eu visito a página "/"
    When Eu clico no link "Registrar"
    Then Eu sou redirecionado para a página de registro
    And Eu vejo o título "Registrar"
    And Eu vejo o formulário de registro

  # Scenario: O usuário preenche o formulário de registro com dados válidos
  #   Given Eu estou na página de registro
  #   When Eu preencho o campo "Nome" com "João Silva"
  #   And Eu preencho o campo "Email" com "