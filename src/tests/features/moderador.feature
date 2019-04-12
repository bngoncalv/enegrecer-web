# language: pt
Funcionalidade: Gestao moderador
    Cenario: Visualizar denuncias
        Dado que O usuário moderador está na página painel moderador
        Quando O usuário clica no botão expandir retrair
        Entao O usuário visualiza os detalhes da denuncia

    Cenario: Realizar logout
        Dado que O usuário moderador está na página painel moderador
        Quando O usuário clica no botão de sair 
        Entao O usuário é redirecionado para página de login
