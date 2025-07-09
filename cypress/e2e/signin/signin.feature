Feature: Login de Usuário

  Como um usuário já registrado, quero fazer login na plataforma para acessar meus recursos.

  Scenario: O usuário não autenticado acessa a página de login
    Given Eu visito a página "/"
    When Eu clico no link "Entrar / Registrar-se"
    Then Eu sou redirecionado para a página de login
    And Eu vejo o fomrulário de login

  Scenario: O usuário preenche o formulário de login com sucesso
    Given Eu visito a página "/signup"
    When Eu preencho o campo Email
    And Eu clico em continuar
    And Eu preencho o campo Senha
    And Eu clico em continuar
    Then Eu sou redirecionado para a página principal
    And Eu clico avatar no topo da tela
    And Eu vejo o meu nome