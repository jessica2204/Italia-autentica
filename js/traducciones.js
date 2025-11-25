// Diccionario de traducciones para Italia Auténtica
const diccionarioTraducciones = {
    es: {
        // Navegación
        inicio: "INICIO",
        rutas: "RUTAS",
        experiencias: "EXPERIENCIAS",
        comunidad: "COMUNIDAD",
        contacto: "CONTACTO",
        
        // Hero
        tituloHero: "DESCUBRE ITALIA",
        subtituloHero: "Explora rutas que conectan con la esencia italiana, más allá del turismo",
        btnExploraRutas: "EXPLORA RUTAS",
        
        // Bienvenida
        eligeComo: "Elige cómo quieres vivir Italia",
        bienvenidaDesc: "Conectamos viajeros con experiencias culturales genuinas, más allá del turismo tradicional. La riqueza de Italia radica en sus diferencias regionales. Cada región tiene su propia identidad, desde la elegancia industrial del norte hasta la pasión mediterránea del sur, esto es crucial porque permite ofrecer múltiples experiencias en un solo país.",
        
        // Agenda/Rutas Destacadas
        agenda: "Agenda",
        norteItalia: "Norte de Italia",
        norteDesc: "Venecia, Milán, Bolonia, Trieste y los impresionantes Lagos de Garda. Descubre la elegancia del norte italiano.",
        laToscana: "La Toscana",
        toscanaDesc: "Toscana, viñedos, arte renacentista y pueblos medievales. La esencia de la Italia tradicional.",
        surItalia: "Sur de Italia",
        surDesc: "Costa Amalfitana, Sicilia, Nápoles, Matera y la pasión mediterránea en su máxima expresión.",
        verMas: "Ver más",
        
        // Por Qué Elegirnos
        porQueElegir: "¿Por Qué Elegir Italia Auténtica?",
        culturaReal: "Cultura Real",
        culturaDesc: "Experiencias con locales, artesanos y tradiciones genuinas",
        gastronomia: "Gastronomía",
        gastronomiaDesc: "Descubre la verdadera cocina italiana región por región.",
        patrimonio: "Patrimonio",
        patrimonioDesc: "Acceso a sitios históricos con contexto cultural profundo",
        sostenible: "Sostenible",
        sostenibleDesc: "Turismo responsable que beneficia a comunidades locales",
        
        // Testimonios
        experienciasUnicas: "Experiencias Únicas Locales",
        testimonio1: "\"Una experiencia inolvidable. Conocí la verdadera Italia, lejos de los lugares turísticos habituales.\"",
        autor1: "- Katherin Nayibe Calderón, Colombia",
        testimonio2: "\"Las rutas gastronómicas fueron excepcionales, cada comida era una historia.\"",
        autor2: "- David Castillo Martínez, Chile",
        testimonio3: "\"Conectar con artesanos locales hizo que mi viaje fuera único y significativo.\"",
        autor3: "- Ana Rogerlia, Argentina",
        
        // CTA
        listoParaVivir: "¿Listo Para Vivir Una Italia Diferente?",
        uneteComunidad: "Únete a nuestra comunidad de viajeros apasionados por la cultura",
        creaRuta: "Crea Tu Ruta Personalizada",
        
        // Footer
        italiAutentica: "Italia Auténtica",
        puertalVerdadera: "Tu puerta a la verdadera experiencia italiana",
        emailLabel: "Email:",
        telLabel: "Tel:",
        siguenos: "Síguenos",
        facebook: "Facebook",
        instagram: "Instagram",
        twitter: "Twitter",
        copyright: "© 2025 Italia Auténtica. Todos los derechos reservados."
    },
    en: {
        // Navigation
        inicio: "HOME",
        rutas: "ROUTES",
        experiencias: "EXPERIENCES",
        comunidad: "COMMUNITY",
        contacto: "CONTACT",
        
        // Hero
        tituloHero: "DISCOVER ITALY",
        subtituloHero: "Explore routes that connect with the Italian essence, beyond tourism",
        btnExploraRutas: "EXPLORE ROUTES",
        
        // Welcome
        eligeComo: "Choose how you want to experience Italy",
        bienvenidaDesc: "We connect travelers with genuine cultural experiences, beyond traditional tourism. The richness of Italy lies in its regional differences. Each region has its own identity, from the industrial elegance of the north to the Mediterranean passion of the south, this is crucial because it allows us to offer multiple experiences in a single country.",
        
        // Agenda/Featured Routes
        agenda: "Itinerary",
        norteItalia: "Northern Italy",
        norteDesc: "Venice, Milan, Bologna, Trieste and the stunning Lake Garda. Discover the elegance of northern Italy.",
        laToscana: "Tuscany",
        toscanaDesc: "Tuscany, vineyards, Renaissance art and medieval villages. The essence of traditional Italy.",
        surItalia: "Southern Italy",
        surDesc: "Amalfi Coast, Sicily, Naples, Matera and Mediterranean passion at its finest.",
        verMas: "Learn more",
        
        // Why Choose Us
        porQueElegir: "Why Choose Italia Auténtica?",
        culturaReal: "Real Culture",
        culturaDesc: "Experiences with locals, artisans and genuine traditions",
        gastronomia: "Gastronomy",
        gastronomiaDesc: "Discover true Italian cuisine region by region.",
        patrimonio: "Heritage",
        patrimonioDesc: "Access to historical sites with deep cultural context",
        sostenible: "Sustainable",
        sostenibleDesc: "Responsible tourism that benefits local communities",
        
        // Testimonials
        experienciasUnicas: "Unique Local Experiences",
        testimonio1: "\"An unforgettable experience. I discovered the real Italy, far from the usual tourist spots.\"",
        autor1: "- Katherin Nayibe Calderón, Colombia",
        testimonio2: "\"The gastronomic routes were exceptional, each meal was a story.\"",
        autor2: "- David Castillo Martínez, Chile",
        testimonio3: "\"Connecting with local artisans made my trip unique and meaningful.\"",
        autor3: "- Ana Rogerlia, Argentina",
        
        // CTA
        listoParaVivir: "Ready to Experience a Different Italy?",
        uneteComunidad: "Join our community of travelers passionate about culture",
        creaRuta: "Create Your Personalized Route",
        
        // Footer
        italiAutentica: "Italia Auténtica",
        puertalVerdadera: "Your gateway to the true Italian experience",
        emailLabel: "Email:",
        telLabel: "Phone:",
        siguenos: "Follow Us",
        facebook: "Facebook",
        instagram: "Instagram",
        twitter: "Twitter",
        copyright: "© 2025 Italia Auténtica. All rights reserved."
    }
};

// Función para cambiar el idioma de toda la página
function cambiarIdioma(idioma) {
    const elementos = document.querySelectorAll('[data-i18n]');
    
    elementos.forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n');
        if (diccionarioTraducciones[idioma] && diccionarioTraducciones[idioma][clave]) {
            elemento.textContent = diccionarioTraducciones[idioma][clave];
        }
    });
    
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('idiomaSeleccionado', idioma);
    
    console.log('🌍 Idioma cambiado a:', idioma);
}

// Obtener el idioma guardado o usar español por defecto
function obtenerIdiomaGuardado() {
    return localStorage.getItem('idiomaSeleccionado') || 'es';
}
