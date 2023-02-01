# wc_splashScreen

Un componente web para mostrar una pantalla de bienvenida animada, que se puede personalizar con diferentes elementos y tiempos de espera.

[![image](https://user-images.githubusercontent.com/78848226/181117521-640d9169-6e71-4b85-ada3-8520523eb9c2.png)](https://newprojectf.github.io/)

## ♦️ CARACTERÍSTICAS

* Muestra una pantalla de bienvenida en la aplicación.
* Permite añadir otros componentes dentro de la pantalla de bienvenida a través de los slots.
* Permite definir un tiempo para eliminar el componente automáticamente de forma suave con una transición de escalada y opacidad antes de ser eliminado completamente.
* Permite agregar estrellas y puntos animados para hacer más atractivo el componente.
* Los elementos agregados en los slots se muestran centrados tanto vertical como horizontalmente

## 💻 ¿COMO USARLO?

**1.** Descárguese el Web Component.  

**2.** Agregue el Web Component a su proyecto.  

**3.** Debes enlazar el archivo JavaScript en el encabezado de tu HTML:     
`<script type="text/javascript" src="wc-splashScreen.js"\>\</script\>`.  

**4.** Para agregar el componente a su HTML añada la etiqueta:    
`<wc-splashscreen></wc-splashscreen>`.  

**5.** Dentro de la etiqueta de Splash Screen, podrá añadir etiquetas **\<span\>\</span\>**, las cuales contengan el atributo **slot** con el valor **elemento(nº)**, para poder añadir otras etiquetas o componentes dentro de este. Ej:    
`<wc-splashscreen>`    
`<span slot="elemento1"><p>Bienvenido a mi aplicación</p></span>`    
`<span slot="elemento2"><p>Este es un ejemplo de uso del componente WC-Splashscreen</p></span>`   
`</wc-splashscreen>`  

**6.** Adicionalmente puede añadir los atributos abajo mencionados para cambiar el comportamiento del componente.  

## 👍 ATRIBUTOS ADMITIDOS

Este Web Component soporta los siguientes atributos:

* **"slots"**: Los slots permiten añadir otras etiquetas dentro del componente de Splash Screen. Por ello existe este atributo, para modificar el número de slots que se van a utilizar. Ej: *3*.  

* **"time"**: Cambia el tiempo de duración de la Splash Screen ("s"). Ej: *8*.  

* **"background"**: Cambia el color de fondo del componente. Ej: *black*.  

* **"width"**: Cambia el ancho del contenedor de los elementos dentro del componente. Ej: *auto*.  

* **"stars"**: Si se menciona este atributo dentro de la etiqueta de Splash Screen se añadirán unas estrellas al fondo del componente.

## 🖌️ COMO CONTRIBUIR

Si desea contribuir al desarrollo de este web component, siga los siguientes pasos:

* Haga una copia del repositorio en tu máquina local.  
* Cree una rama con un nombre descriptivo para la característica o arreglo que desea aportar.  
* Realice las modificaciones necesarias y asegúrese de que cumplan con los estándares de calidad y estilo de código.  
* Realice pruebas exhaustivas en diferentes navegadores y plataformas.  
* Realice un pull request a la rama principal con una descripción clara y detallada de sus cambios.  
* Una vez que el pull request sea revisado y aceptado, su cambio será incorporado a la rama principal y publicado en el repositorio.  
* Agradecemos cualquier contribución para mejorar este web component

## 📋 LICENCIA

Este componente web está disponible bajo la licencia MIT.


## 🎁 AGRADECIMIENTOS 

Gracias a [eduardofierropro](https://github.com/eduardofierropro) por su [Reset-CSS](https://github.com/eduardofierropro/Reset-CSS/blob/main/css/app.css).   
Gracias a [Online Tutorials](https://www.youtube.com/c/OnlineTutorials4Designers) por sus animaciones.
