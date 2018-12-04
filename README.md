# Buscacep

Projeto desenvolvido como teste para uma vaga de desenvolvedor front end, seguindo as especificações do recrutador que são:

**Tarefa:**
Criar uma página web que registra/lista os últimos 10 endereços consultados pelo
usuário utilizando Angular 4~6.X.

**Requisitos:**
Consultar um endereço somente pelo CEP;
Ver uma lista com os últimos 10 endereços
consultados(bairro,cidade,estado,logradouro,complemento,cep);
O input deve possuir uma mascara de CEP;
O CEP de cada região deve ter uma cor de fundo diferente. Seguindo o padrão:

  Norte: #A1FFAD
  Sul: #33B7FF
  Sudeste: #EEEEEE
  Centro-oeste: #FFBA3D
  Nordeste: #FFB4D5

Obs.: Para obter os dados completo do endereço, você deve utilizar a API
https://api.postmon.com.br/v1/cep/numerodocep.


## SOBRE O PROJETO

**Design e Layout**
Por não ter recebido nenhum arquivo ou informações de Ui e Ux Design, foi criado um layout baseado nos conceitos do Material Design da Google com o frameword Materialize com a técnica de design in code.

**Programação**
Para programar o app, foi utilizado o Angular 6 + Jquery. Com uma estrutura orientada a objetos, foram aplicadas várias técnicas e codigos específicos como Interface, Filtros, Services, Classes, entre outros.

**Comunicação JSON**
Para se comunicar com a api, foi utilizada a biblioteca http do Angular com manipulação de JSON.

**Histórico de Buscas**
Para salvar as últimas consultas executadas, foi utilizado o Local Storange do navegador do usuário.

## INFORMAÇÕES TÉCNICAS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

**Development server**

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


**Build**

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
