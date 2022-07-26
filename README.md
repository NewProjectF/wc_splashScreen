# wc_splashScreen

wc_splashScreen es un componente de JS que se puede aplicar a un proyecto para simular una Splash Screen.

[![image](https://user-images.githubusercontent.com/78848226/179373819-3dc23b02-7bc4-4bfa-ae18-65466a2a4ddb.png)](https://newprojectf.github.io/)

## COMO USARLO 💻

1. Descargarse el Web Component.
2. Agregue el Web Component a su proyecto.
3. Enlace el JS del Web Component al archivo HTML de su proyecto. **\<script src="wc-splashScreen.js"\>\</script\>**.
4. Añada la etiqueta **\<wc-splashscreen\>\</wc-splashscreen\>** en el apartado del HTML donde lo quiera usar.
5. Dentro de la etiqueta de Splash Screen, podrá añadir etiquetas **\<span\>\</span\>**, las cuales contengan el atributo **slot** con el valor **elemento(nº)**, para poder añadir otras etiquetas o componentes dentro de este. Ej: **\<span slot="elemento1"\>\<p\>Etiqueta 1\</p\>\</span\>**
6. Adicionalmente puede añadir los atributos abajo mencionados para cambiar el comportamiento del componente.

## ATRIBUTOS ADMITIDOS 👍

* **"slots"**: Los slots permiten añadir otras etiquetas dentro del componente de Splash Screen. Por ello existe este atributo, para modificar el número de slots que se van a utilizar. Ej: *3*.  
* **"time"**: Cambia el tiempo de duración de la Splash Screen ("s"). Ej: *8*.  
* **"background"**: Cambia el color de fondo del componente. Ej: *black*.  
* **"width"**: Cambia el ancho del contenedor de los elementos dentro del componente. Ej: *auto*.  
* **"stars"**: Si se menciona este atributo dentro de la etiqueta de Splash Screen se añadirán unas estrellas al fondo del componente.

## AGRADECIMIENTOS 🎁

Gracias a [eduardofierropro](https://github.com/eduardofierropro) por su [Reset-CSS](https://github.com/eduardofierropro/Reset-CSS/blob/main/css/app.css).   
Gracias a [Online Tutorials](https://www.youtube.com/c/OnlineTutorials4Designers) por sus animaciones.
