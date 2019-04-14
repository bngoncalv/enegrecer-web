# language: pt
Funcionalidade: Denúncia
    Cenario: Realizar o cadastro de uma denúncia
        Dado O usuário acessa a página de cadastrar denúncia
        Quando O usuário preenche os campos para o cadastro da denúncia
        E O usuário confirma o cadastro da denúncia
        Entao A denúncia é salva com sucesso e o usuário é redirecionado para página "depois-denuncia"
        