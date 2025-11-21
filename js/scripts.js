// Estudiante: Jessica Stefany Garzón Jove


document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener el elemento del menú de experiencias
    const menuExperiencias = document.querySelector('nav ul li:nth-child(3)');
    
    if (menuExperiencias) {
        // Crear el submenú desplegable
        const submenu = document.createElement('ul');
        submenu.className = 'submenu';
        submenu.innerHTML = `
            <li><a href="#gastronomia">Gastronomía Local</a></li>
            <li><a href="#artesanos">Talleres Artesanos</a></li>
            <li><a href="#tradiciones">Tradiciones</a></li>
            <li><a href="#naturaleza">Naturaleza</a></li>
        `;
        
        // Añadir el submenú al elemento del menú
        menuExperiencias.appendChild(submenu);
        
        // Eventos mouseover y mouseout
        menuExperiencias.addEventListener('mouseover', function() {
            submenu.style.display = 'block';
            submenu.style.opacity = '1';
        });
        
        menuExperiencias.addEventListener('mouseout', function() {
            submenu.style.display = 'none';
            submenu.style.opacity = '0';
        });
    }
});

// 1 SLIDER DE IMÁGENES AUTOMÁTICO


class SliderImagenes {
    constructor(contenedorId) {
        this.contenedor = document.getElementById(contenedorId);
        this.imagenes = [
            {
                src: 'image/sean-sweeney-HC338Uz4zGc-unsplash.jpg',
                alt: 'Canal de Venecia con góndolas',
                titulo: 'Venecia Romántica',
                descripcion: 'Descubre los canales mágicos'
            },
            {
                src: 'image/federico-di-dio-photography-imDFBYDnqI0-unsplash.jpg',
                alt: 'Viñedos de la Toscana',
                titulo: 'Toscana Encantadora',
                descripcion: 'Vinos y paisajes de ensueño'
            },
            {
                src: 'image/daniele-levis-pelusi-jTknOGI18us-unsplash.jpg',
                alt: 'Costa Amalfitana',
                titulo: 'Costa Amalfitana',
                descripcion: 'El paraíso mediterráneo'
            }
        ];
        this.indiceActual = 0;
        this.intervalo = null;
        
        this.inicializar();
    }
    
    inicializar() {
        if (!this.contenedor) return;
        
        // Crear estructura del slider
        this.contenedor.innerHTML = `
            <div class="slider-contenido">
                <button class="slider-btn prev" aria-label="Imagen anterior">&#10094;</button>
                <div class="slider-imagen-container">
                    <img src="" alt="" class="slider-imagen">
                    <div class="slider-info">
                        <h3 class="slider-titulo"></h3>
                        <p class="slider-descripcion"></p>
                    </div>
                </div>
                <button class="slider-btn next" aria-label="Siguiente imagen">&#10095;</button>
            </div>
            <div class="slider-indicadores"></div>
        `;
        
        // Referencias a elementos
        this.imgElement = this.contenedor.querySelector('.slider-imagen');
        this.tituloElement = this.contenedor.querySelector('.slider-titulo');
        this.descripcionElement = this.contenedor.querySelector('.slider-descripcion');
        this.indicadoresContainer = this.contenedor.querySelector('.slider-indicadores');
        
        // Crear indicadores
        this.crearIndicadores();
        
        // Mostrar primera imagen
        this.mostrarImagen(0);
        
        // Event listeners para botones
        this.contenedor.querySelector('.prev').addEventListener('click', () => this.imagenAnterior());
        this.contenedor.querySelector('.next').addEventListener('click', () => this.imagenSiguiente());
        
        // Iniciar rotación automática
        this.iniciarRotacion();
        
        // Pausar en hover
        this.contenedor.addEventListener('mouseenter', () => this.pausarRotacion());
        this.contenedor.addEventListener('mouseleave', () => this.iniciarRotacion());
    }
    
    crearIndicadores() {
        this.imagenes.forEach((_, index) => {
            const indicador = document.createElement('span');
            indicador.className = 'indicador';
            indicador.setAttribute('data-index', index);
            indicador.addEventListener('click', () => this.irAImagen(index));
            this.indicadoresContainer.appendChild(indicador);
        });
    }
    
    mostrarImagen(indice) {
        const imagen = this.imagenes[indice];
        this.imgElement.src = imagen.src;
        this.imgElement.alt = imagen.alt;
        this.tituloElement.textContent = imagen.titulo;
        this.descripcionElement.textContent = imagen.descripcion;
        
        // Actualizar indicadores
        const indicadores = this.indicadoresContainer.querySelectorAll('.indicador');
        indicadores.forEach((ind, i) => {
            ind.classList.toggle('activo', i === indice);
        });
        
        this.indiceActual = indice;
    }
    
    imagenSiguiente() {
        const siguiente = (this.indiceActual + 1) % this.imagenes.length;
        this.mostrarImagen(siguiente);
    }
    
    imagenAnterior() {
        const anterior = (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
        this.mostrarImagen(anterior);
    }
    
    irAImagen(indice) {
        this.mostrarImagen(indice);
    }
    
    iniciarRotacion() {
        this.pausarRotacion();
        this.intervalo = setInterval(() => this.imagenSiguiente(), 4000);
    }
    
    pausarRotacion() {
        if (this.intervalo) {
            clearInterval(this.intervalo);
            this.intervalo = null;
        }
    }
}

// 2. MENSAJES PERSONALIZADOS (Hora + Idioma)

class MensajesPersonalizados {
    constructor() {
        this.idiomaActual = 'es';
        this.mensajes = {
            es: {
                manana: '¡Buenos días! ☀️ Descubre Italia con energía',
                tarde: '¡Buenas tardes! 🌅 Perfecto momento para explorar',
                noche: '¡Buenas noches! 🌙 Planifica tu próxima aventura',
                madrugada: '¡Hola! 🌃 ¿Planificando tu viaje nocturno?'
            },
            en: {
                manana: 'Good morning! ☀️ Discover Italy with energy',
                tarde: 'Good afternoon! 🌅 Perfect time to explore',
                noche: 'Good evening! 🌙 Plan your next adventure',
                madrugada: 'Hello! 🌃 Planning your night trip?'
            }
        };
        
        this.inicializar();
    }
    
    inicializar() {
        // Crear contenedor para mensaje personalizado si no existe
        const heroContenido = document.querySelector('.hero-contenido');
        if (heroContenido) {
            const mensajeDiv = document.createElement('div');
            mensajeDiv.id = 'mensaje-personalizado';
            mensajeDiv.className = 'mensaje-personalizado';
            heroContenido.insertBefore(mensajeDiv, heroContenido.firstChild);
        }
        
        // Actualizar mensaje inicial
        this.actualizarMensaje();
        
        // Event listener para cambio de idioma
        const selectorIdioma = document.getElementById('selector-idioma');
        if (selectorIdioma) {
            selectorIdioma.addEventListener('change', (e) => {
                this.cambiarIdioma(e.target.value);
            });
        }
        
        // Actualizar mensaje cada minuto
        setInterval(() => this.actualizarMensaje(), 60000);
    }
    
    obtenerHoraDelDia() {
        const hora = new Date().getHours();
        
        if (hora >= 6 && hora < 12) {
            return 'manana';
        } else if (hora >= 12 && hora < 19) {
            return 'tarde';
        } else if (hora >= 19 && hora < 24) {
            return 'noche';
        } else {
            return 'madrugada';
        }
    }
    
    actualizarMensaje() {
        const mensajeDiv = document.getElementById('mensaje-personalizado');
        if (!mensajeDiv) return;
        
        const momentoDia = this.obtenerHoraDelDia();
        const mensaje = this.mensajes[this.idiomaActual][momentoDia];
        
        mensajeDiv.textContent = mensaje;
        
        // Animación de entrada
        mensajeDiv.style.animation = 'fadeIn 0.5s ease-in';
    }
    
    cambiarIdioma(nuevoIdioma) {
        this.idiomaActual = nuevoIdioma;
        this.actualizarMensaje();
        this.actualizarTextosPagina(nuevoIdioma);
    }
    
    actualizarTextosPagina(idioma) {
        const traducciones = {
            es: {
                titulo: 'DESCUBRE ITALIA',
                subtitulo: 'Explora rutas que conectan con la esencia italiana, más allá del turismo',
                boton: 'EXPLORA RUTAS'
            },
            en: {
                titulo: 'DISCOVER ITALY',
                subtitulo: 'Explore routes that connect with the Italian essence, beyond tourism',
                boton: 'EXPLORE ROUTES'
            }
        };
        
        const textos = traducciones[idioma];
        
        const h1 = document.querySelector('.hero-contenido h1');
        const p = document.querySelector('.hero-contenido p');
        const btn = document.querySelector('.hero-contenido .btn-principal');
        
        if (h1) h1.textContent = textos.titulo;
        if (p) p.textContent = textos.subtitulo;
        if (btn) btn.textContent = textos.boton;
    }
}

// 3. EFECTOS ADICIONALES DE INTERACTIVIDAD

// Efecto parallax suave en el scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animación de aparición de elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', function() {
    const elementos = document.querySelectorAll('.tarjeta-ruta, .beneficio, .testimonio');
    elementos.forEach(el => observer.observe(el));
});

// 4. INICIALIZACIÓN PRINCIPAL

document.addEventListener('DOMContentLoaded', function() {
    console.log('🇮🇹 Italia Auténtica - JavaScript Cargado');
    
    // Inicializar slider después de la sección de bienvenida
    const bienvenida = document.querySelector('.bienvenida');
    if (bienvenida) {
        const sliderSection = document.createElement('section');
        sliderSection.className = 'slider-seccion';
        sliderSection.innerHTML = `
            <h2>Galería de Experiencias</h2>
            <div id="slider-principal" class="slider-container"></div>
        `;
        bienvenida.after(sliderSection);
        
        // Crear instancia del slider
        new SliderImagenes('slider-principal');
    }
    
    // Inicializar mensajes personalizados
    new MensajesPersonalizados();
    
    // Mostrar mensaje de bienvenida en consola
    const hora = new Date().getHours();
    let saludo = hora >= 6 && hora < 12 ? '¡Buenos días!' : 
                 hora >= 12 && hora < 19 ? '¡Buenas tardes!' : '¡Buenas noches!';
    console.log(`${saludo} Bienvenido a Italia Auténtica 🇮🇹`);
});

// 5. FUNCIONES DE UTILIDAD

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función para validar formularios (si se agregan más adelante)
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Log de interacciones del usuario (para análisis)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-principal') || 
        e.target.classList.contains('btn-secundario')) {
        console.log('Botón clickeado:', e.target.textContent);
    }
});