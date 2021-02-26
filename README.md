## SPA(single page application) para el consumo de una api que ofrezca los precios del bitcoin en peso mexicano

#### Introducción

Esta api te permitira mostrar el listado de los precios del bitcoin a lo largo de las últimas 24 horas, última semana, último mes, último año o en un rango de fechas especifico.

Nota: esta spa es la parte de frontend para la api que se encuentra en el siguiente link: https://github.com/josehuerta/apibtc.git 
y las peticiones las hace al servidor local en el puerto 8000 es decir a:  http://127.0.0.1:8000/ ,de querer hacer peticiones a otro servidor u otro puerto
se debe hacer esta modificacion en la constante URL que se encuentra definida en el componente MenuOpciones, hayado en la carpeta Inicio del proyecto.
Por default la constante URL esta definida como:
const URL="http://127.0.0.1:8000/api/precio-btc-mxn/"

#### Clonar el proyecto

Para clonar el proyecto ejecuta los siguientes comandos en tu terminal de comandos (en el orden que se mencionan):

`$ git clone https://github.com/josehuerta/spabtcmxn.git`

`$ cd spabtcmxn`

#### Instalación de dependencias

Para instalar las dependencias debes ubicarte dentro de tu carpeta spabtcmxn y ejecutar el siguiente comando:
`$ npm install`

#### Ejecutar el proyecto

Para poder ejecutar este proyecto necesitaras validar que tienes instalado Node>=6 y npm>=5.2, posteriormente dentro de tu carpeta spabtc, introduce el siguiente comando en tu terminal de comandos:

`$ npm start`

Por default la aplicacion se abrira en el puerto 3000 de estar ocupado este, te preguntara si deseas abrir la aplicacion en otro puerto

La url de inicio se encuentra en tu-host/home 


#### Documentacion

La documentacion podras encontrar en la pagina /documentacion de la aplicación


