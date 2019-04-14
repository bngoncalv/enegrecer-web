# language: pt
Funcionalidade: Gestão Moderador
    Cenario: Visualizar denúncias
        Dado que o usuário moderador está na página painel moderador
        Quando o usuário clica no botão expandir retrair
        Entao o usuário visualiza os detalhes da denuncia

    Cenario: Realizar logout
        Dado que o usuário moderador está na página painel moderador
        Quando o usuário clica no botão de sair 
        Entao o usuário é redirecionado para página de login
