# Frontend para comparação de notas de livros
Esse repositório é um teste técnico. Usamos ele em nosso processo seletivo para entendermos um pouco mais sobre o modo de trabalho das pessoas participantes. Nesse repositório, você terá a descrição do problema, assim como os requerimentos funcionais e técnicos esperados.

## O problema
Você foi incumbido de criar um webapp que faça análise comparativa entre as notas que os associados da TAG deram, pelo aplicativo atual do clube, com as avaliações que as pessoas fizeram aos mesmos livros no site GoodReads. O escopo do webapp é meramente avaliativo, não pretendemos utilizá-lo em lugar algum.

Os dados do aplicativo da TAG podem ser simulados através do json disponível no reposiório (livros.json), eliminando a necessidade de consumir nossa API. Já o mesmo não acontece com a GoodReads, é preciso consumir a API, e para facilitar nós fornecemos um servidor http proxy para evitar problemas de comunicação, vide a pasta no repositório. O campo a ser utilizado para comparar um livro entre TAG e GoodReads deve ser o ISBN, cujo valor pode não conferir e o livro não existir na API do GoodReads. Esses casos devem ser tratados pelo seu webapp.

O webapp deverá exibir, de forma escolhida pelo candidato(a), as comparações entre as médias de avaliações TAG e médias GoodReads, ordenadas com base no campo edition do livros.json, que contém dados na forma “Mês de Ano” em ordem descendente (mês mais recente primeiro). Ao clicar em cada comparação de livro, o webapp deverá navegar para uma tela de detalhes que exibe: título do livro, capa, autor(a), mês/ano edição, curador(a), número de páginas, total de avaliações TAG e total de avaliações GoodReads. A ordem dos campos pode ser escolhida por você, que poderá repeti-los entre as duas telas se quiser (ex: exibir a capa na listagem de comparações e também no detalhe).

A estrutura da aplicação, entendimento de React e Redux, componentização, forma de apresentação dos dados e o entendimento da API da GoodReads fazem parte da avaliação. 

### Requerimentos
* Habilitar a comparação entre livros:
    * Exibir comparação entre livros e seus detalhes.
    * O campo ISBN deve ser obrigatório para pesquisa e comparação.
    * Realizar tratar de exceções e livros inexistentes. 
* Implementar testes de UI.
    
### Limitações técnicas:
* Utilizar [React](https://pt-br.reactjs.org/) (16.8 ou superior) ou [Gatsby](https://www.gatsbyjs.org/) (v2).
* Utilizar [Context API](https://pt-br.reactjs.org/docs/context.html) ou [Redux](https://redux.js.org/) (4.4.x ou superior).
* Utilizar variáveis de ambiente para armazenar valores fixos da aplicação.
* Utilizar [Jest](https://jestjs.io/) para implementar suas rotinas de teste de UI.
    * <i>Adicionalmente, você pode utilizar [StoryShots](https://storybook.js.org/docs/testing/structural-testing/) do [Storybook](https://storybook.js.org/) com Jest.</i> 
* Não utilize bibliotecas, rotinas prontas, códigos existentes na linguagem JavaScript para fazer a ordenação dos livros. Você deve escrever o algoritmo, uma vez que isso faz parte da avaliação.
* Para realizar a comunicação com a API do GoodReads, utilize o servidor proxy que está no mesmo diretório deste documento;
* Adicionalmente você pode entregar o webapp rodando em um container Docker, fornecendo o dockerfile e/ou docker-compose. 
    
### Expectativa:
* Como mencionado anteriormente, o resultado esperado é um webapp onde seja possível executar os requerimentos.
* Atualizar este README com orientações para iniciar a aplicação.
* A organização dos componentes, semântica do HTML5, organização do CSS, a estrutura das pastas e JavaScript fazem parte do escopo do teste.
* Mostrar familiaridade com consumo de APIs.
* Mostrar familiaridade com testes de interface.
* Mostrar familiaridade com linters, qualidade e padrões de código.
* Qualidade de software é uma das atribuições de uma pessoa desenvolvedora de software, e portanto, também será avaliado como parte do escopo do teste.

### Resultados
* Assim que o prazo de 7 dias acabar a TAG irá removê-lo do repositório.
