Feature: Seção Administrativa

    Como um administrador, quero acessar a seção administrativa para gerenciar usuários e configurações.

    Rule: A seção administrativa é exclusiva para usuários com permissão de administrador.
    Usuários não autenticados não podem acessar a seção administrativa.    

        Scenario: o link para a area administrativa não deve estar dispinivel
            Given Eu estou na página principal
            Then Eu não vejo o link para a seção administrativa
        
        Scenario: O usuário não autenticado tenta acessar a seção administrativa
            Given Eu visito a página Administrativa
            Then Eu sou redirecionado para a página Principal
            And Eu vejo uma mensagem de erro informando que preciso estar autenticado e ser um administrador

    Rule: Usuários autenticados sem permissão de administrador não podem acessar a seção administrativa.

        Background:
            Given Eu estou autenticado como um usuário sem permissão de administrador

        Scenario: o link para a area administrativa não deve estar dispinivel
            Then Eu não vejo o link para a seção administrativa

        Scenario: O usuário autenticado sem permissão tenta acessar a seção administrativa
            When Eu visito a página Administrativa
            Then Eu sou redirecionado para a página Principal
            And Eu vejo uma mensagem de erro informando que preciso estar autenticado e ser um administrador

    Rule: Usuários autenticados com permissão de administrador podem acessar a seção administrativa.

        Background:
            Given Eu estou autenticado como um administrador

        Scenario: O usuário autenticado com permissão de administrador acessa a seção administrativa
            Given Eu aceeo a seção administrativa a partir da página principal
            Then Eu vejo o título "Administração"