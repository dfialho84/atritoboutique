Feature: Registrar Usuário

  Como um novo usuário, quero me registrar na plataforma para que eu possa acessar recursos exclusivos.

  Scenario: O usuário não autenticado acessa a página de registro
    Given Eu visito a página "/"
    When Eu clico no link "Registrar"
    Then Eu sou redirecionado para a página de registro
    And Eu vejo o título "Criar sua conta"
    And eu clico no icone do Google para me registrar


  Scenario: O usuário acessa a página principal vê seu usuário no topo da tela
    Given o usuário está autenticado
    And Eu visito a página "/"
    Then eu vejo a foto to usuário no topo da tela