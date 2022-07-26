// Crea una clase para el elemento titulo
class splashScreen extends HTMLElement {

    constructor() {

        // Llamar siempre a super primero en el constructor
        super();

        // Crear una shadow root
        var shadowRoot = this.attachShadow({ mode: 'open' });


        // -- CREACION DE ELEMENTOS --
        // Crear section splash screen
        var section = document.createElement('section');
        section.setAttribute('class', 'splashScreen');
        // Crear div que envuelva a los slotted
        var div = document.createElement('div');
        div.setAttribute('class', 'divSlotted');


        // -- CREACION DE ESTILOS EXTERNOS --
        // Aplicar estilos por defecto externos al shadow dom
        const linkElemReset = document.createElement('link');
        linkElemReset.setAttribute('rel', 'stylesheet');
        linkElemReset.setAttribute('href', 'wc_splashScreen/css/estilos_por_defecto.css');
        // Aplicar estilos personalizados externos al shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'wc_splashScreen/css/estilos.css');


        // adjuntar los elementos creados al shadow DOM
        this.shadowRoot.appendChild(linkElem);
        section.appendChild(div);
        this.shadowRoot.appendChild(section);

    }

    // Se ejecuta cada vez que el elemento se agrega al DOM
    connectedCallback() {

        var shadowRoot = this.shadowRoot;

        if (!this.hasAttribute('slots')) { this.slots = 3; }
        if (!this.hasAttribute('time')) { this.time = 8; }
        if (!this.hasAttribute('background')) { this.background = "black"; }
        if (!this.hasAttribute('width')) { this.width = "auto"; }

        var section = shadowRoot.querySelector(".splashScreen");
        var time = this.getAttribute("time");
        removeWebComponent(section, time);

    }

    // Se especifican los atributos observados para que "attributeChangedCallback" funcione
    static get observedAttributes() {
        return ['slots', 'time', 'background', 'stars', 'width'];
    }

    // Se ejecuta cada vez que uno de los atributos del elemento cambia de alguna manera
    // Produce cambios dependiendo de los atributos utilizados en la etiqueta
    attributeChangedCallback(attrName, oldVal, newVal) {

        var shadowRoot = this.shadowRoot;
        var section = shadowRoot.querySelector(".splashScreen");
        var div = shadowRoot.querySelector(".divSlotted");

        switch (attrName) {
            case "time":
                removeWebComponent(section, newVal);
                break;
            case "slots":
                numSlots(div, newVal);
                break;
            case "background":
                section.style.background = newVal;
                break;
            case "stars":
                var section = shadowRoot.querySelector(".splashScreen");
                addStars(section);
                break;
            case "width":
                shadowRoot.querySelector('.divSlotted').style.width = newVal;
                break;
        }

    }

    //Getter
    get slots() {
        return this.hasAttribute('slots');
    }
    get time() {
        return this.hasAttribute('time');
    }
    get background() {
        return this.hasAttribute('background');
    }
    get width() {
        return this.hasAttribute('width');
    }

    //Setter
    set slots(val) {
        if (val) {
            this.setAttribute('slots', val);
        } else {
            this.removeAttribute('slots');
        }
    }
    set time(val) {
        if (val) {
            this.setAttribute('time', val);
        } else {
            this.removeAttribute('time');
        }
    }
    set background(val) {
        if (val) {
            this.setAttribute('background', val);
        } else {
            this.removeAttribute('background');
        }
    }
    set width(val) {
        if (val) {
            this.setAttribute('width', val);
        } else {
            this.removeAttribute('width');
        }
    }

}


// Funcion que crea los slots
function numSlots(div, slots) {

    for (let i = 1; i <= slots; i++) {

        var slot = document.createElement('slot');
        slot.setAttribute('name', 'elemento' + i);

        div.appendChild(slot);

    }

}

// Funcion que elimina el web component
function removeWebComponent(section, time) {

    timeForAnimation = (parseInt(time) + 1) * 1000;
    time = time * 1000;

    setTimeout(function() {
        section.style.transition = "all 1s ease";
        section.style.transform = "scale(1.2)";
        section.style.opacity = 0;
    }, time);

    setTimeout(function() {
        section.remove();
    }, timeForAnimation);


}

// Funcion añade estrellas
function addStars(section) {

    for (let i = 1; i <= 10; i++) {

        var star = document.createElement('span');
        star.setAttribute('class', 'star');

        section.appendChild(star);

    }

    for (let e = 1; e <= 15; e++) {

        var dots = document.createElement('span');
        dots.setAttribute('class', 'dots');

        section.appendChild(dots);

    }

}


// Definir el nuevo elemento
customElements.define("wc-splashscreen", splashScreen);