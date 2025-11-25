// Estudiante: Jessica Stefany Garzón Jove

console.log('🇮🇹 Cargando JavaScript de Italia Auténtica...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM Cargado - Iniciando scripts');
    
    // ==========================================
    // 1. INICIALIZAR TRADUCCIONES
    // ==========================================
    const idiomaInicial = obtenerIdiomaGuardado();
    cambiarIdioma(idiomaInicial);
    
    const selectorIdioma = document.getElementById('selector-idioma');
    if (selectorIdioma) {
        selectorIdioma.value = idiomaInicial;
        selectorIdioma.addEventListener('change', function(e) {
            const nuevoIdioma = e.target.value;
            cambiarIdioma(nuevoIdioma);
            actualizarMensajePersonalizado(nuevoIdioma);
        });
    }
    
    console.log('✅ Sistema de traducciones inicializado');
    
    // ==========================================
    // 2. MENÚ DESPLEGABLE 
    // ==========================================
    const btnMenuHamburguesa = document.getElementById('btn-menu-hamburguesa');
    const navegacion = document.getElementById('navegacion');
    
    if (btnMenuHamburguesa && navegacion) {
        btnMenuHamburguesa.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navegacion.classList.toggle('activa');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const enlacesNav = navegacion.querySelectorAll('a');
        enlacesNav.forEach(enlace => {
            enlace.addEventListener('click', function() {
                btnMenuHamburguesa.setAttribute('aria-expanded', 'false');
                navegacion.classList.remove('activa');
            });
        });
        
        console.log('✅ Menú desplegable activado');
    }

    // ==========================================
    // 3. MENSAJES PERSONALIZADOS (Hora + Idioma)
    // ==========================================
    const heroContenido = document.querySelector('.hero-contenido');
    if (heroContenido) {
        console.log('✅ Hero encontrado - Agregando mensaje personalizado');
        
        const mensajeDiv = document.createElement('div');
        mensajeDiv.id = 'mensaje-personalizado';
        mensajeDiv.className = 'mensaje-personalizado';
        heroContenido.insertBefore(mensajeDiv, heroContenido.firstChild);
        
        const mensajesPersonalizados = {
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
        
        function actualizarMensajePersonalizado(idioma = idiomaInicial) {
            const hora = new Date().getHours();
            let momento;
            
            if (hora >= 6 && hora < 12) {
                momento = 'manana';
            } else if (hora >= 12 && hora < 19) {
                momento = 'tarde';
            } else if (hora >= 19 && hora < 24) {
                momento = 'noche';
            } else {
                momento = 'madrugada';
            }
            
            const mensaje = mensajesPersonalizados[idioma][momento];
            mensajeDiv.textContent = mensaje;
            console.log('💬 Mensaje actualizado:', mensaje);
        }
        
        // Actualizar mensaje inicial
        actualizarMensajePersonalizado(idiomaInicial);
        
        // Actualizar cada minuto
        setInterval(() => actualizarMensajePersonalizado(idiomaInicial), 60000);
        
        console.log('✅ Mensajes personalizados activados');
    } else {
        console.log('❌ No se encontró el hero-contenido');
    }
    
    // ==========================================
    // 4. BOTÓN PARA SUBIR AL INICIO
    // ==========================================
    const btnSubir = document.getElementById('btn-subir');
    
    if (btnSubir) {
        // Mostrar/ocultar botón al hacer scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                btnSubir.classList.add('visible');
            } else {
                btnSubir.classList.remove('visible');
            }
        });
        
        // Subir suavemente al hacer clic
        btnSubir.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        console.log('✅ Botón subir al inicio activado');
    }
});