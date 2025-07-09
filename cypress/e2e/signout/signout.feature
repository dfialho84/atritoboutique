Feature: Logout de Usuário

  Como um usuário autenticado, quero fazer logout da plataforma para encerrar minha sessão.

  Background:
    Given Eu faço o login no sistema

  Scenario: O usuário autenticado acessa a página de logout
    When Eu clico no meu avatar no topo da tela
    And Eu clico no link Sair
    Then Eu sou redirecionado para a página inicial
    And Eu vejo o link "Entrar / Registrar-se"