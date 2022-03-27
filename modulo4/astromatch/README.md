# Astromatch

Astromatch é um app de relacionamentos inspirado no tinder. Ele é o projeto que inicia o módulo sobre *React Avançado* no curso da **Labenu**.
Foi utilizada a API [Astromatch](https://documenter.getpostman.com/view/7549981/SW12yx56?version=latest) da mesma.

### O que funciona?
Todas as funcionalidades solicitadas funcionam conforme o esperado.
É possível:

 1. Ver uma opção de perfil para escolher.
 2. Escolher entre "Dar Match" (escolha positiva) ou Descartar sugestão (escolha negativa).
 3. Ir para tela de Matches.
 4. Olhar lista de perfis que "deram match".
 5. Resetar lista de matches.

### O que não funciona?
Conforme dito, tudo funciona conforme o esperado.
Funcionalidades extras como chat, cadastro de usuário ou cancelar match não foram implementadas neste projeto.

### Detalhes técnicos
Optei por estruturar o projeto como se fosse algo escalável (o que não é o caso). É o que eu utilizaria hoje em um contexto real. De qualquer forma, venho testando e me adaptando conforme ganho experiência e aprendo novas ferramentas.

![Estrutura de pastas](https://imgbox.com/Exau5DRA)

Ainda sobre a organização do projeto, dividi os componentes entre contextos. Existem os reutilizáveis na pasta *components* na raiz do *src*. E tem a pasta *components* no contexto da *Home*, dentro da *pasta* pages. Assim acredito ser mais fácil o entendimento do código.

Apesar de alguns componentes serem "reutilizáveis", por se tratar de um projeto pequeno e com fins de aprendizado, esses mesmos componentes estão imediatamente ligados ao objetivo do trabalho em questão. Sendo assim, sei que existem formas mais adequadas de se fazer um componente reutilizável.

A aplicação pode ser utilizada em dispositivos móveis, ainda que eu não a considere "responsiva". Vi muitas formas interessantes de se trabalhar com media queries e outros elementos para ajudar na responsividade e pretendo apresentar algumas dessas formar em projetos futuros.

### Tecnologias (e dependências) utilizadas

 - React (Hooks, Routes e Context)
 - Axios
 - Styled-Components
 - React-Icons
 - Sweetalert2

#### Deploy e Imagens
[brawny-boundary.surge.sh](https://brawny-boundary.surge.sh/)

![Home: Theme Dark](https://imgbox.com/U6JZt1kE)
![Matches: Theme Dark](https://imgbox.com/3D3NjBl0)
![Home: Theme Light](https://imgbox.com/EGKEr34d)
![Matches: Theme Light](https://imgbox.com/E5pyzZao)