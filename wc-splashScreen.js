/** 
 * Clase para el elemento título
**/
class splashScreen extends HTMLElement {

    constructor() {

        super();

        // Crear shadow root y establecer modo 'open'
        this.attachShadow({ mode: 'open' });

        // Crear elementos y establecer atributos
        const section = document.createElement('section');
        section.classList.add('splashScreen');

        const div = document.createElement('div');
        div.classList.add('divSlotted');
        section.appendChild(div);

        // Agregar hojas de estilo
        const styleReset  = document.createElement('link');
        styleReset .setAttribute('rel', 'stylesheet');
        styleReset .setAttribute('type', 'text/css');
        styleReset .setAttribute('href', '../wc_splashScreen/css/estilos_por_defecto.css');

        const style  = document.createElement('link');
        style .setAttribute('rel', 'stylesheet');
        style .setAttribute('type', 'text/css');
        style .setAttribute('href', '../wc_splashScreen/css/estilos.css');

        // Agregar elementos al shadow root
        this.shadowRoot.appendChild(styleReset);
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(section);

    }

    /** 
     * Esta función se ejecuta automáticamente cuando el elemento se agrega al DOM.
     * Se utiliza para realizar tareas específicas en el momento en que el componente se agrega al DOM, 
     * como establecer valores por defecto para los atributos o inicializar variables.
    **/
    connectedCallback() {

        // Valores por defecto de los atributos
        const DEFAULT_NUM_SLOTS = 1;
        const DEFAULT_TIME = 8;
        const DEFAULT_BACKGROUND = "black";
        const DEFAULT_WIDTH = "auto";

        // Establecer valores por defecto para los atributos si no se han establecido previamente
        this.slots = this.hasAttribute('slots') ? this.getAttribute('slots') : DEFAULT_NUM_SLOTS;
        this.time = this.hasAttribute('time') ? this.getAttribute('time') : DEFAULT_TIME;
        this.background = this.hasAttribute('background') ? this.getAttribute('background') : DEFAULT_BACKGROUND;
        this.width = this.hasAttribute('width') ? this.getAttribute('width') : DEFAULT_WIDTH;

        // Obtener el valor del atributo "time"
        const time = this.getAttribute("time");

        // Llamar a la función "removeSplashScreen" y pasar como argumentos "section" y "time"
        removeSplashScreen(this.shadowRoot.querySelector(".splashScreen"), time);

    }

    /** 
     * Esta función devuelve una lista con los nombres de los atributos que se deben observar. 
     * Cuando se produzca un cambio en uno de estos atributos, se llamará a "attributeChangedCallback".
    **/
    static get observedAttributes() {
        return ['slots', 'time', 'background', 'stars', 'width'];
    }

    /** 
     * Esta función  se activa cuando un atributo es modificado en tiempo de ejecución y está registrado en observedAttributes.
    **/
    attributeChangedCallback(attrName, oldVal, newVal) {

        // Obtener el shadowRoot y los elementos necesarios
        const shadowRoot = this.shadowRoot;
        const section = shadowRoot.querySelector(".splashScreen");
        const div = shadowRoot.querySelector(".divSlotted");

        // Evaluar el nombre del atributo y realizar la acción correspondiente
        switch (attrName) {
            case "time":
                removeSplashScreen(section, newVal);
                break;
            case "slots":
                createSlots(div, newVal);
                break;
            case "background":
                section.style.background = newVal;
                break;
            case "stars":
                addStars(section);
                break;
            case "width":
                div.style.width = newVal;
                break;
        }

    }

    /** 
     * Getter
    **/
    get slots() {
        return this.getAttribute('slots');
    }
    get time() {
        return this.getAttribute('time');
    }
    get background() {
        return this.getAttribute('background');
    }
    get width() {
        return this.getAttribute('width');
    }

    /** 
     * Setter
    **/
    set slots(val) {
        this.setAttribute('slots', val ? val : '');
    }
    set time(val) {
        this.setAttribute('time', val ? val : '');
    }
    set background(val) {
        this.setAttribute('background', val ? val : '');
    }
    set width(val) {
        this.setAttribute('width', val ? val : '');
    }

}

/** 
 * Esta función crea los slots donde se podrán añadir otros web components.
**/
function createSlots(container, numSlots) {

    for (let i = 1; i <= numSlots; i++) {

        const slot = document.createElement('slot');
        slot.setAttribute('name', 'elemento' + i);
        container.appendChild(slot);

    }

}

/** 
 * Esta función elimina el web component al finalizar el tiempo.
**/
function removeSplashScreen(section, time) {

    setTimeout(() => {
        section.style.transition = "all 1s ease";
        section.style.transform = "scale(1.2)";
        section.style.opacity = 0;
    }, time * 1000);

    setTimeout(() => {
        section.remove();
    }, time + 1000);

}

/** 
 * Esta función se encarga de añadir estrellas en caso de que se hayan establecido en el web component.
**/
function addStars(section) {

    // Crea un contenedor temporal de elementos
    const starContainer = document.createDocumentFragment();

    // Itera 10 veces para crear 10 elementos span con la clase "star"
    for (let i = 1; i <= 10; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        starContainer.appendChild(star);
    }

    // Itera 15 veces para crear 15 elementos span con la clase "dots"
    for (let e = 1; e <= 15; e++) {
        const dots = document.createElement('span');
        dots.classList.add('dots');
        starContainer.appendChild(dots);
    }

    // Agrega el contenedor temporal de elementos al elemento "section"
    section.appendChild(starContainer);

}

// Definir el nuevo elemento
customElements.define("wc-splashscreen", splashScreen);