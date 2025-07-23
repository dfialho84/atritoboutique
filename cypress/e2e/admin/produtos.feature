Feature: Produtos

    Como um administrador, quero gerenciar produtos na seção administrativa.

    Background:
        Given Eu estou autenticado como um administrador
        And Eu acesso a seção administrativa a partir da página principal

    Scenario: O administrador acessa a seção de produtos
        When Eu acesso a seção de produtos na área administrativa
        Then Eu vejo o título "Gerenciar Produtos"
        And Eu vejo a lista de produtos cadastrados