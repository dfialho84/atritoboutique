Feature: Login de Usuário

  Como um usuário já registrado, quero fazer login na plataforma para acessar meus recursos.

  Scenario: O usuário não autenticado acessa a página de login
    Given Eu visito a página "/"
    When Eu clico no link "Entrar"
    Then Eu sou redirecionado para a página de login
    And Eu vejo o título "Entrar na sua conta"

  Scenario: O usuário preenche o formulário de login com sucesso
    Given Eu visito a página "/login"
    When Eu preencho o campo Email
    And Eu preencho o campo Senha
    And Eu clico no botão "Entrar"
    Then Eu sou redirecionado para a página principal
    And Eu vejo o título "Bem-vindo de volta"

  Scenario: O usuário acessa a página principal e vê seu usuário no topo da tela
    Given o usuário está autenticado
    And Eu visito a página "/"
    Then eu vejo a foto do usuário no topo da tela