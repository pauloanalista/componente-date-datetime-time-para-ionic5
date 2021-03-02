# Componente Date, DateTime, Time

Sabemos que o componente **ion-datetime** do **Ionic** é bem interessante, mas na web não é muito prático, então resolvi criar 3 componentes onde o usuário possa digitar a **data, data e hora ou somente a hora**.

O componente possui suporte a mascara automaticamente e validação.

Este componte possui uma dependencia do pacote **br-mask**, ou seja, é necessário instalar o componente através do npm.

# Como usar
Crie uma pasta chamada components no seu projeto e adicione os arquivos deste repositorio.

Para usar os componentes é bem simples

## Usando o componente app-time
```html
<ion-item>
	<ion-label  position="stacked">Horário inicio:</ion-label>
	<app-time  (onGetValue)="onGetValueHorarioInicio($event)"  required="true"  [value]="timeHoraInicio"></app-time>
</ion-item>
```
No TS setando a informação no formulário.
```js
onGetValueHorarioInicio(e){ 
	//Retorna o horario do componente
	this.formGroup.controls.horaInicio.setValue(e);
}
```

## Usando o componente app-date
```html
<ion-item>
	<ion-label  position="stacked">Data Agendamento</ion-label>
	<app-date  (onGetValue)="onGetValue($event)"  required="true"></app-date>
</ion-item>
```
No TS setando a informação no formulário.
```js
onGetValue(e){
	//Retorna a data do componente no formato Date do JS
	this.dataAgendamento = e;
}
```

## Usando o componente app-datetime
```html
<ion-item>
	<ion-label  position="stacked">Data Agendamento</ion-label>
	<app-datetime  (onGetValue)="onGetValue($event)"  required="true"></app-datetime>
</ion-item>
```
No TS setando a informação no formulário.
```js
onGetValue(e){
	//Retorna a data do componente no formato Date do JS
	this.dataAgendamento = e;
}
```
Fique a vontade para dar um Fork no repositório e testar conforme sua necessidade.

## Veja o componente em ação
![](https://github.com/pauloanalista/componente-date-datetime-time-para-ionic5/blob/main/tela.gif)

# VEJA TAMBÉM
## Grupo de Estudo no Telegram
- [Participe gratuitamente do grupo de estudo](https://t.me/blogilovecode)

## Cursos baratos!
- [Meus cursos na Udemy](https://olha.la/udemy)
- [Outros cursos](https://olha.la/cursos)

## Fique ligado, acesse!
- [Blog ILoveCode](https://ilovecode.com.br)

## Novidades, cupons de descontos e cursos gratuitos
https://olha.la/ilovecode-receber-cupons-novidades
