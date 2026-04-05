export interface CountryExtra {
  curiosities: {
    title: string
    description: string
  }[]
  landmarks: {
    name: string
    description: string
  }[]
}

export const europeData: Record<string, CountryExtra> = {
  AL: {
    curiosities: [
      { title: "Bunkers por todas partes", description: "Albania tiene más de 170,000 búnkeres construidos durante la dictadura comunista, uno por cada 13 habitantes." },
      { title: "Origen del nombre", description: "Se cree que el nombre Albania proviene de una tribu iliria llamada 'Albanoi', mencionada por el geógrafo Ptolomeo en el siglo II." },
      { title: "País mayoritariamente musulmán en Europa", description: "Es uno de los pocos países de mayoría musulmana en Europa, aunque tiene una larga tradición de convivencia entre religiones." },
      { title: "Cuna del Madre Teresa", description: "La célebre Madre Teresa de Calcuta nació en Skopje de padres albaneses y es considerada un símbolo nacional." },
    ],
    landmarks: [
      { name: "Castillo de Gjirokastra", description: "Fortaleza medieval declarada Patrimonio de la Humanidad por la UNESCO, domina la ciudad de piedra de Gjirokastra." },
      { name: "Lago de Ohrid", description: "Uno de los lagos más antiguos del mundo, compartido con Macedonia del Norte, de aguas cristalinas y gran biodiversidad." },
      { name: "Riviera albanesa", description: "Costa del Mar Jónico con playas de aguas turquesas consideradas entre las más vírgenes del Mediterráneo." },
    ],
  },
  AD: {
    curiosities: [
      { title: "Coprincipado único en el mundo", description: "Andorra es el único país del mundo gobernado por dos copríncipes: el Presidente de Francia y el Obispo de Urgell." },
      { title: "Sin ejército propio", description: "Andorra no tiene fuerzas armadas. Su defensa depende de Francia y España, aunque mantiene una pequeña policía." },
      { title: "Paraíso de esquí y compras", description: "Es uno de los destinos de esquí más populares de Europa y atrae millones de visitantes por sus precios libres de impuestos." },
      { title: "Alta esperanza de vida", description: "Andorra figura constantemente entre los países con mayor esperanza de vida del mundo, superando los 83 años." },
    ],
    landmarks: [
      { name: "Casa de la Vall", description: "Edificio del siglo XVI que albergó el Consell General de Andorra durante siglos, símbolo de la democracia andorrana." },
      { name: "Caldea", description: "Uno de los spas termales más grandes de Europa, con arquitectura futurista ubicado en Andorra la Vella." },
      { name: "Vallnord", description: "Estación de esquí de clase mundial con más de 100 km de pistas en los Pirineos andorranos." },
    ],
  },
  AT: {
    curiosities: [
      { title: "Cuna de Mozart y Beethoven", description: "Austria es la tierra natal de Wolfgang Amadeus Mozart y adoptó a Beethoven, siendo la capital mundial de la música clásica." },
      { title: "El croissant es austriaco", description: "El famoso croissant fue inventado en Viena en el siglo XVII para celebrar la victoria sobre el Imperio Otomano." },
      { title: "Primer zoo del mundo", description: "El Tiergarten Schönbrunn de Viena, fundado en 1752, es el zoológico más antiguo del mundo aún en funcionamiento." },
      { title: "Energía renovable líder", description: "Austria genera más del 70% de su electricidad mediante energías renovables, principalmente energía hidroeléctrica." },
    ],
    landmarks: [
      { name: "Palacio de Schönbrunn", description: "Residencia imperial de los Habsburgo con 1,441 habitaciones y jardines espectaculares, declarado Patrimonio UNESCO." },
      { name: "Catedral de San Esteban", description: "Icónica catedral gótica en el corazón de Viena, símbolo de la ciudad con su característica techumbre de tejas de colores." },
      { name: "Hallstatt", description: "Pintoresco pueblo a orillas de un lago alpino, considerado uno de los más bellos del mundo y Patrimonio de la Humanidad." },
    ],
  },
  BE: {
    curiosities: [
      { title: "Capital de la UE y la OTAN", description: "Bruselas alberga las sedes principales de la Unión Europea y la OTAN, siendo considerada la capital política de Europa." },
      { title: "Inventores de las papas fritas", description: "Aunque llamadas 'french fries', las papas fritas fueron inventadas en Bélgica, posiblemente en el siglo XVII en la región de Namur." },
      { title: "País del chocolate y la cerveza", description: "Bélgica produce más de 220,000 toneladas de chocolate al año y tiene más de 1,500 variedades de cerveza registradas." },
      { title: "Tres idiomas oficiales", description: "Bélgica tiene tres idiomas oficiales: neerlandés, francés y alemán, lo que refleja su diversidad cultural única en Europa." },
    ],
    landmarks: [
      { name: "Grand Place de Bruselas", description: "Plaza central de Bruselas rodeada de edificios gremiales dorados del siglo XVII, considerada una de las más bellas del mundo." },
      { name: "Manneken Pis", description: "Pequeña pero famosa escultura de bronce de un niño orinando, símbolo irreverente y querido de Bruselas desde 1619." },
      { name: "Canal de Brujas", description: "La ciudad medieval de Brujas con sus canales históricos es llamada la 'Venecia del Norte' y es Patrimonio UNESCO." },
    ],
  },
  BA: {
    curiosities: [
      { title: "Punto de inicio de la Primera Guerra Mundial", description: "El asesinato del Archiduque Francisco Fernando en Sarajevo en 1914 desencadenó la Primera Guerra Mundial." },
      { title: "Coexistencia de religiones", description: "En Sarajevo es posible escuchar al mismo tiempo el llamado a la oración islámico, las campanas de una iglesia católica y las de una ortodoxa." },
      { title: "Puente Stari Most", description: "El famoso puente de Mostar fue destruido durante la guerra de los 90 y reconstruido exactamente igual, símbolo de reconciliación." },
      { title: "Sede de olimpiadas de invierno", description: "Sarajevo organizó los Juegos Olímpicos de Invierno de 1984, siendo la primera ciudad comunista en hacerlo." },
    ],
    landmarks: [
      { name: "Stari Most", description: "Puente otomano del siglo XVI en Mostar, declarado Patrimonio UNESCO, famoso por sus clavadistas que saltan al río Neretva." },
      { name: "Bašćaršija", description: "Antiguo bazar otomano del siglo XV en el corazón de Sarajevo, lleno de artesanía, mezquitas y cafés tradicionales." },
      { name: "Cascadas de Kravice", description: "Impresionantes cascadas de 25 metros de altura en el río Trebižat, rodeadas de vegetación exuberante." },
    ],
  },
  BG: {
    curiosities: [
      { title: "Inventores del alfabeto cirílico", description: "El alfabeto cirílico, usado por cientos de millones de personas, fue creado por los monjes búlgaros Cirilo y Metodio en el siglo IX." },
      { title: "País más antiguo de Europa con el mismo nombre", description: "Bulgaria fue fundada en 681 d.C. y nunca ha cambiado su nombre, siendo uno de los estados más antiguos de Europa." },
      { title: "Mayor productor de rosas", description: "Bulgaria produce más del 70% del aceite de rosa del mundo en el Valle de las Rosas, usado en perfumería fina." },
      { title: "Gestos invertidos", description: "En Bulgaria, mover la cabeza de arriba a abajo significa 'no', y de lado a lado significa 'sí', al contrario que en la mayoría de países." },
    ],
    landmarks: [
      { name: "Monasterio de Rila", description: "El monasterio más grande de Bulgaria, fundado en el siglo X, con frescos extraordinarios y declarado Patrimonio UNESCO." },
      { name: "Ciudad Antigua de Nesebar", description: "Península con más de 3,000 años de historia y numerosas iglesias medievales, Patrimonio de la Humanidad de la UNESCO." },
      { name: "Valle de las Rosas", description: "Región famosa por sus plantaciones de rosa damascena, cuya floración en mayo es una explosión de color y aroma." },
    ],
  },
  BY: {
    curiosities: [
      { title: "Último país con KGB", description: "Bielorrusia mantiene el nombre KGB para su servicio de inteligencia, siendo el único país postsoviético que lo conserva." },
      { title: "Bosque primario más grande de Europa", description: "El Bosque de Białowieża, compartido con Polonia, es el último bosque primario de las llanuras europeas y hogar del bisonte europeo." },
      { title: "Alta educación", description: "Bielorrusia tiene una de las tasas de alfabetización más altas del mundo, cercana al 99.8%." },
      { title: "Centro de producción soviética", description: "Los tractores Bielorrusia (Belarus) son de los más vendidos del mundo y siguen fabricándose en Minsk desde 1946." },
    ],
    landmarks: [
      { name: "Castillo de Mir", description: "Fortaleza del siglo XVI declarada Patrimonio UNESCO, ejemplo destacado de la arquitectura defensiva gótico-renacentista." },
      { name: "Bosque de Białowieża", description: "Reserva natural compartida con Polonia, hogar de los últimos bisontes europeos salvajes y declarada Patrimonio UNESCO." },
      { name: "Línea Stalin", description: "Línea de fortificaciones militares de la Segunda Guerra Mundial convertida en museo al aire libre cerca de Minsk." },
    ],
  },
  CH: {
    curiosities: [
      { title: "Cuatro idiomas oficiales", description: "Suiza tiene cuatro idiomas oficiales: alemán, francés, italiano y romanche, reflejo de su rica diversidad cultural." },
      { title: "Nunca ha estado en guerra", description: "Suiza lleva más de 500 años de neutralidad armada, siendo el país con el período de paz ininterrumpido más largo de Europa." },
      { title: "Inventores del Velcro y el celofán", description: "Varios inventos cotidianos como el Velcro, el celofán y el LSD fueron inventados por científicos suizos." },
      { title: "El país con más premios Nobel per cápita", description: "Suiza tiene uno de los índices más altos de premios Nobel per cápita del mundo, especialmente en ciencias." },
    ],
    landmarks: [
      { name: "Matterhorn", description: "Icónica montaña piramidal de 4,478 metros en los Alpes, una de las cumbres más fotografiadas y reconocibles del mundo." },
      { name: "Castillo de Chillon", description: "Espectacular castillo medieval a orillas del lago Lemán, inspiración de Lord Byron para su poema 'El prisionero de Chillon'." },
      { name: "Jungfraujoch", description: "Conocido como 'el techo de Europa', a 3,454 metros de altitud, accesible en tren cremallera con vistas glaciares impresionantes." },
    ],
  },
  CY: {
    curiosities: [
      { title: "Isla del nacimiento de Afrodita", description: "Según la mitología griega, Afrodita, diosa del amor, nació de las espumas del mar en las costas de Chipre." },
      { title: "País dividido", description: "Chipre es el único país de la Unión Europea cuyo territorio está parcialmente ocupado por otro país, Turquía, desde 1974." },
      { title: "Gatos por todas partes", description: "Se estima que hay más de un millón de gatos en Chipre para una población de menos de 1.3 millones de personas." },
      { title: "Una de las islas más antiguas habitadas", description: "Hay evidencia de asentamientos humanos en Chipre desde hace más de 10,000 años, siendo una de las islas habitadas más antiguas." },
    ],
    landmarks: [
      { name: "Petra tou Romiou", description: "Formación rocosa costera donde, según la leyenda, nació Afrodita, con aguas turquesas de extraordinaria belleza." },
      { name: "Paphos Arqueológico", description: "Sitio UNESCO con mosaicos romanos extraordinariamente conservados del siglo II-III d.C. en la ciudad antigua de Paphos." },
      { name: "Monasterio de Kykkos", description: "El monasterio más rico e importante de Chipre, fundado en el siglo XI, guarda un ícono atribuido a San Lucas." },
    ],
  },
  CZ: {
    curiosities: [
      { title: "Mayor consumo de cerveza del mundo", description: "Los checos son los mayores consumidores de cerveza per cápita del mundo, con más de 180 litros por persona al año." },
      { title: "Inventores del azúcar de caña refinada", description: "El proceso de refinación del azúcar de remolacha fue perfeccionado en Bohemia en el siglo XIX, revolucionando la industria azucarera." },
      { title: "Cuna del lente de contacto", description: "El químico checo Otto Wichterle inventó los lentes de contacto blandos en 1961, usando un juguete de su hijo para el prototipo." },
      { title: "Castillos por doquier", description: "República Checa tiene la mayor densidad de castillos por kilómetro cuadrado de Europa, con más de 2,000 castillos y ruinas." },
    ],
    landmarks: [
      { name: "Centro histórico de Praga", description: "Una de las ciudades medievales mejor conservadas de Europa, con el Puente Carlos, el Castillo y el Reloj Astronómico como joyas." },
      { name: "Český Krumlov", description: "Ciudad medieval con un castillo renacentista sobre el río Vltava, declarada Patrimonio UNESCO, de extraordinaria belleza." },
      { name: "Catedral de San Vito", description: "Catedral gótica dentro del Castillo de Praga, con vidrieras de Alfons Mucha y las tumbas de los reyes bohemios." },
    ],
  },
  DE: {
    curiosities: [
      { title: "País de inventores", description: "Alemania es la cuna del automóvil (Benz), el motor diésel, los rayos X, la aspirina, la imprenta de Gutenberg y el MP3." },
      { title: "1,500 tipos de cerveza", description: "Alemania tiene más de 1,500 variedades de cerveza y celebra el Oktoberfest, la mayor festividad de la cerveza del mundo." },
      { title: "El país con más zoológicos", description: "Alemania tiene más zoológicos que cualquier otro país del mundo, con más de 400 parques zoológicos y acuarios." },
      { title: "Reciclaje ejemplar", description: "Alemania recicla más del 65% de sus residuos, siendo uno de los países con mayor tasa de reciclaje del mundo." },
    ],
    landmarks: [
      { name: "Puerta de Brandeburgo", description: "Monumento neoclásico en Berlín, símbolo de la reunificación alemana y uno de los iconos más reconocibles de Europa." },
      { name: "Castillo de Neuschwanstein", description: "Castillo romántico del siglo XIX en los Alpes bávaros, inspiración para el castillo de la Cenicienta de Disney." },
      { name: "Catedral de Colonia", description: "Obra maestra del gótico tardío que tardó 632 años en construirse, declarada Patrimonio UNESCO y símbolo de Alemania." },
    ],
  },
  DK: {
    curiosities: [
      { title: "País más feliz del mundo", description: "Dinamarca aparece consistentemente entre los países más felices del mundo según el Informe Mundial de Felicidad de la ONU." },
      { title: "Origen de los vikingos", description: "Dinamarca fue el hogar de algunos de los más grandes guerreros y exploradores vikingos, que llegaron hasta América del Norte." },
      { title: "Inventores del LEGO", description: "LEGO fue creado en 1932 por el carpintero danés Ole Kirk Christiansen en la pequeña ciudad de Billund, Dinamarca." },
      { title: "Energía eólica líder", description: "Dinamarca genera más del 50% de su electricidad con energía eólica, siendo pionera mundial en energías renovables." },
    ],
    landmarks: [
      { name: "La Sirenita", description: "Icónica escultura de bronce en el puerto de Copenhague, basada en el cuento de Hans Christian Andersen, símbolo de Dinamarca." },
      { name: "Tivoli Gardens", description: "Uno de los parques de atracciones más antiguos del mundo (1843) en Copenhague, inspiración de Walt Disney para Disneyland." },
      { name: "Castillo de Kronborg", description: "Fortaleza renacentista en Helsingør, declarada Patrimonio UNESCO y escenario del Hamlet de Shakespeare." },
    ],
  },
  EE: {
    curiosities: [
      { title: "País más digital del mundo", description: "Estonia fue el primer país en ofrecer residencia digital (e-Residency) y el 99% de sus servicios gubernamentales están en línea." },
      { title: "Cuna de Skype", description: "Skype fue desarrollado en Estonia en 2003 por ingenieros estonios, siendo uno de los mayores éxitos tecnológicos del país." },
      { title: "El país con más startups per cápita", description: "Estonia tiene más unicornios (startups valoradas en más de 1,000 millones) per cápita que cualquier otro país europeo." },
      { title: "Bosques infinitos", description: "Más del 50% del territorio de Estonia está cubierto de bosques, uno de los porcentajes más altos de Europa." },
    ],
    landmarks: [
      { name: "Ciudad Vieja de Tallin", description: "Centro medieval extraordinariamente bien conservado declarado Patrimonio UNESCO, con murallas del siglo XIII intactas." },
      { name: "Parque Nacional Lahemaa", description: "El parque nacional más grande de Estonia, con bosques primarios, turberas, mansiones bálticas y costa del Mar Báltico." },
      { name: "Cantante Hill de Tallin", description: "Anfiteatro al aire libre símbolo de la Revolución Cantada, donde los estonios recuperaron su independencia cantando." },
    ],
  },
  ES: {
    curiosities: [
      { title: "Segundo país más visitado del mundo", description: "España es uno de los destinos turísticos más populares del mundo, recibiendo más de 83 millones de visitantes al año." },
      { title: "País con más bares por habitante", description: "España tiene la mayor densidad de bares por habitante del mundo, con aproximadamente un bar por cada 175 personas." },
      { title: "Siesta y horarios únicos", description: "España tiene una de las horas de dormir más tardías del mundo, con horarios de comida y cenas notablemente más tardíos que el resto de Europa." },
      { title: "Tres lenguas cooficiales", description: "Además del español, España reconoce oficialmente el catalán, el euskera y el gallego como lenguas cooficiales en sus regiones." },
    ],
    landmarks: [
      { name: "Sagrada Família", description: "Basílica modernista de Antoni Gaudí en Barcelona, en construcción desde 1882, obra maestra del arte y la arquitectura mundial." },
      { name: "Alhambra de Granada", description: "Complejo palaciego nazarí del siglo XIV en Granada, una de las joyas del arte islámico en occidente y Patrimonio UNESCO." },
      { name: "Museo del Prado", description: "Uno de los museos de arte más importantes del mundo, con obras de Velázquez, Goya, El Greco y Rubens en Madrid." },
    ],
  },
  FI: {
    curiosities: [
      { title: "País con más lagos del mundo", description: "Finlandia tiene más de 188,000 lagos, más que cualquier otro país del mundo en relación a su superficie." },
      { title: "Cuna de Linux y Nokia", description: "Finlandia dio al mundo Linux, el sistema operativo de código abierto creado por Linus Torvalds, y la marca Nokia." },
      { title: "País con más saunas que coches", description: "Finlandia tiene más de 3 millones de saunas para una población de 5.5 millones, más saunas que vehículos registrados." },
      { title: "Mejor sistema educativo", description: "El sistema educativo finlandés es consistentemente clasificado como uno de los mejores del mundo según rankings internacionales PISA." },
    ],
    landmarks: [
      { name: "Parque Nacional Koli", description: "Paisaje nacional de Finlandia con colinas boscosas sobre el lago Pielinen, inspiración de los grandes compositores finlandeses." },
      { name: "Catedral de Helsinki", description: "Imponente catedral neoclásica blanca en la Plaza del Senado de Helsinki, símbolo de la capital finlandesa." },
      { name: "Rovaniemi y Laponia", description: "Ciudad natal oficial de Papá Noel, puerta de entrada a Laponia donde se puede ver la aurora boreal y los renos." },
    ],
  },
  FR: {
    curiosities: [
      { title: "País más visitado del mundo", description: "Francia es el país más visitado del mundo, recibiendo más de 90 millones de turistas extranjeros al año." },
      { title: "País con más quesos", description: "Francia produce más de 1,200 variedades diferentes de queso, con el famoso dicho de De Gaulle: 'No se puede gobernar un país con 246 quesos'." },
      { title: "El idioma francés en cinco continentes", description: "El francés es idioma oficial en 29 países de cinco continentes, siendo la segunda lengua más estudiada del mundo." },
      { title: "Inventores del cine", description: "Los hermanos Lumière realizaron la primera proyección cinematográfica pública de la historia en París el 28 de diciembre de 1895." },
    ],
    landmarks: [
      { name: "Torre Eiffel", description: "Icónica torre de hierro de 330 metros construida en 1889, símbolo de París y de Francia, visitada por 7 millones de personas al año." },
      { name: "Museo del Louvre", description: "El museo más visitado del mundo con más de 35,000 obras, hogar de la Mona Lisa y la Venus de Milo en París." },
      { name: "Mont Saint-Michel", description: "Isla mareal con una abadía benedictina medieval del siglo XI, declarada Patrimonio UNESCO y uno de los lugares más fotografiados de Francia." },
    ],
  },
  GB: {
    curiosities: [
      { title: "Inventores del fútbol moderno", description: "Inglaterra codificó las reglas del fútbol moderno en 1863 con la fundación de la Football Association, la más antigua del mundo." },
      { title: "País sin constitución escrita", description: "El Reino Unido es una de las pocas democracias del mundo sin una constitución escrita formal, basándose en leyes y convenciones." },
      { title: "Cuna de la Revolución Industrial", description: "Gran Bretaña fue la cuna de la Revolución Industrial en el siglo XVIII, transformando para siempre la economía mundial." },
      { title: "El idioma más hablado del mundo", description: "El inglés, originario de Inglaterra, es el idioma más hablado del mundo como segunda lengua, con más de 1,500 millones de hablantes." },
    ],
    landmarks: [
      { name: "Stonehenge", description: "Monumento prehistórico de piedras megalíticas en Wiltshire, construido hace más de 4,500 años, Patrimonio UNESCO." },
      { name: "Torre de Londres", description: "Fortaleza medieval del siglo XI a orillas del Támesis, antigua prisión real y actual guardiana de las joyas de la Corona." },
      { name: "Palacio de Buckingham", description: "Residencia oficial de la monarquía británica en Londres, famoso por el cambio de guardia y símbolo del Imperio." },
    ],
  },
  GR: {
    curiosities: [
      { title: "Cuna de la democracia y la filosofía", description: "Grecia es el lugar de nacimiento de la democracia, la filosofía occidental, los Juegos Olímpicos y gran parte de la civilización occidental." },
      { title: "País con más letras del alfabeto griego en ciencia", description: "El alfabeto griego es usado universalmente en matemáticas, física y otras ciencias para denominar constantes y variables." },
      { title: "Más islas que ningún otro país europeo", description: "Grecia tiene más de 6,000 islas e islotes, de los cuales solo 227 están habitados, con más de 16,000 km de costa." },
      { title: "El yogur griego original", description: "El yogur griego tradicional tiene más de 2,000 años de historia y es notablemente diferente al yogur industrializado moderno." },
    ],
    landmarks: [
      { name: "Acrópolis de Atenas", description: "Colina sagrada con el Partenón y otros templos del siglo V a.C., símbolo de la civilización griega clásica y Patrimonio UNESCO." },
      { name: "Meteora", description: "Monasterios del siglo XIV construidos sobre enormes pilares de roca en Tesalia, declarados Patrimonio UNESCO." },
      { name: "Santorini", description: "Isla volcánica con los icónicos edificios blancos y cúpulas azules sobre el caldera, uno de los paisajes más reconocibles del mundo." },
    ],
  },
  HR: {
    curiosities: [
      { title: "Inventores de la corbata", description: "La corbata tiene origen croata. Los soldados croatas del siglo XVII usaban pañuelos al cuello que los franceses llamaron 'croate', origen de 'cravate'." },
      { title: "Nikola Tesla era croata", description: "Nikola Tesla, el genial inventor de la corriente alterna, nació en Smiljan, en la actual Croacia, en 1856." },
      { title: "Costa dálmata con miles de islas", description: "Croacia tiene 1,244 islas a lo largo de su costa adriática, siendo uno de los litorales más fragmentados y hermosos de Europa." },
      { title: "El primer bolígrafo", description: "El bolígrafo fue inventado por el croata Slavoljub Eduard Penkala en 1906, quien también inventó el portaminas mecánico." },
    ],
    landmarks: [
      { name: "Lagos de Plitvice", description: "Sistema de 16 lagos en cascada de colores turquesa y esmeralda en el interior de Croacia, Patrimonio UNESCO desde 1979." },
      { name: "Ciudad Vieja de Dubrovnik", description: "Ciudad amurallada medieval en el Adriático, llamada la 'Perla del Adriático', escenario de Juego de Tronos y Patrimonio UNESCO." },
      { name: "Anfiteatro de Pula", description: "Uno de los anfiteatros romanos mejor conservados del mundo, construido en el siglo I d.C. con capacidad para 20,000 espectadores." },
    ],
  },
  HU: {
    curiosities: [
      { title: "Inventores del cubo de Rubik", description: "El famoso cubo de Rubik fue inventado en 1974 por el arquitecto húngaro Ernő Rubik como herramienta pedagógica." },
      { title: "País con más premios Nobel per cápita", description: "Hungría tiene uno de los índices más altos de premios Nobel per cápita del mundo, con 13 ganadores en ciencias y literatura." },
      { title: "Lengua única en Europa", description: "El húngaro (magyar) no tiene relación con ninguna lengua indoeuropea y es uno de los idiomas más difíciles del mundo." },
      { title: "Primer metro continental de Europa", description: "Budapest inauguró en 1896 el primer metro de Europa continental, el Millennium Underground, aún en funcionamiento hoy." },
    ],
    landmarks: [
      { name: "Parlamento de Budapest", description: "Edificio neogótico a orillas del Danubio, uno de los parlamentos más grandes y hermosos del mundo, símbolo de Hungría." },
      { name: "Baños Széchenyi", description: "Los baños termales más grandes de Europa en Budapest, construidos en 1913, con 18 piscinas de aguas termales naturales." },
      { name: "Bastión de los Pescadores", description: "Terraza neoromana y neogótica en el Castillo de Buda con vistas panorámicas incomparables sobre el Danubio y Pest." },
    ],
  },
  IE: {
    curiosities: [
      { title: "País de la cerveza Guinness", description: "La cerveza Guinness, creada en Dublin en 1759, es una de las marcas más reconocidas del mundo y símbolo de Irlanda." },
      { title: "Emigración masiva histórica", description: "La Gran Hambruna (1845-1852) redujo la población irlandesa a la mitad por muertes y emigración, marcando la identidad nacional." },
      { title: "País más joven de Europa", description: "Irlanda tiene la población más joven de la Unión Europea, con una edad media de 38 años y alta tasa de natalidad." },
      { title: "Cuna de grandes escritores", description: "Irlanda ha producido cuatro ganadores del Premio Nobel de Literatura: Shaw, Yeats, Beckett y Heaney." },
    ],
    landmarks: [
      { name: "Acantilados de Moher", description: "Imponentes acantilados de 214 metros sobre el Océano Atlántico en el condado de Clare, uno de los paisajes más dramáticos de Europa." },
      { name: "Roca de Cashel", description: "Conjunto de edificios medievales del siglo XII sobre una colina rocosa en Tipperary, antigua sede de los reyes de Munster." },
      { name: "Giant's Causeway", description: "Formación de 40,000 columnas de basalto hexagonales en Antrim, Irlanda del Norte, creadas por actividad volcánica hace 60 millones de años." },
    ],
  },
  IS: {
    curiosities: [
      { title: "Tierra del fuego y el hielo", description: "Islandia tiene más de 130 volcanes activos y está cubierta en un 11% por glaciares, siendo el país más volcánico de Europa." },
      { title: "Sin mosquitos", description: "Islandia es uno de los pocos países del mundo sin mosquitos debido a sus condiciones climáticas particulares." },
      { title: "Primera democracia parlamentaria", description: "El Althing islandés, fundado en 930 d.C., es considerado el parlamento más antiguo del mundo aún en funcionamiento." },
      { title: "País más pacífico del mundo", description: "Islandia ocupa el primer lugar del Índice Global de Paz desde 2008, sin ejército propio desde 1869." },
    ],
    landmarks: [
      { name: "Geysir", description: "El géiser que dio nombre a todos los géiseres del mundo, en la zona geotérmica de Haukadalur, erupciona cada 5-10 minutos." },
      { name: "Aurora Boreal", description: "Islandia es uno de los mejores lugares del mundo para ver la aurora boreal entre septiembre y marzo en cielos despejados." },
      { name: "Jökulsárlón", description: "Laguna glacial con icebergs flotantes desprendidos del glaciar Breiðamerkurjökull, uno de los paisajes más mágicos de Europa." },
    ],
  },
  IT: {
    curiosities: [
      { title: "País con más Patrimonios UNESCO", description: "Italia tiene 58 sitios Patrimonio de la Humanidad de la UNESCO, más que cualquier otro país del mundo." },
      { title: "Fundadores del banco moderno", description: "El concepto de banco moderno fue inventado en Italia en el siglo XIV, con el Banco de Médici de Florencia como pionero." },
      { title: "Pizza y pasta para el mundo", description: "Italia exportó al mundo la pizza, la pasta y el espresso, contribuyendo más que ningún otro país a la gastronomía mundial." },
      { title: "El Vaticano dentro de Italia", description: "Italia es el único país del mundo que contiene dos estados independientes en su interior: el Vaticano y San Marino." },
    ],
    landmarks: [
      { name: "Coliseo de Roma", description: "Anfiteatro romano del siglo I d.C. con capacidad para 80,000 espectadores, símbolo de Roma y una de las maravillas del mundo moderno." },
      { name: "Pompeya", description: "Ciudad romana sepultada por la erupción del Vesubio en el 79 d.C., conservada perfectamente bajo las cenizas y declarada Patrimonio UNESCO." },
      { name: "Torre de Pisa", description: "Torre campanario del siglo XII famosa por su inclinación de 3.97 grados, símbolo de Italia y de los errores de ingeniería." },
    ],
  },
  LI: {
    curiosities: [
      { title: "Uno de los dos países doblemente sin salida al mar", description: "Liechtenstein y Uzbekistán son los únicos países del mundo rodeados completamente por otros países sin salida al mar." },
      { title: "País sin ejército desde 1868", description: "Liechtenstein abolió su ejército tras la guerra austro-prusiana de 1866 y no ha tenido fuerzas armadas desde entonces." },
      { title: "Centro financiero mundial", description: "A pesar de su pequeño tamaño, Liechtenstein es un importante centro financiero con más empresas registradas que habitantes." },
      { title: "Familia real vive en castillo real", description: "La familia real de Liechtenstein vive actualmente en el Castillo de Vaduz, una de las pocas familias reales que habita su castillo histórico." },
    ],
    landmarks: [
      { name: "Castillo de Vaduz", description: "Castillo medieval del siglo XII residencia oficial de la familia principesca, domina la capital desde una colina." },
      { name: "Kunstmuseum Liechtenstein", description: "Museo de arte moderno y contemporáneo de clase mundial en Vaduz, con una de las mejores colecciones privadas de Europa." },
      { name: "Trail de los Tres Países", description: "Ruta de senderismo que pasa por Liechtenstein, Austria y Suiza, con vistas alpinas espectaculares." },
    ],
  },
  LT: {
    curiosities: [
      { title: "Último país de Europa en convertirse al cristianismo", description: "Lituania fue el último país de Europa en adoptar el cristianismo oficialmente, en 1387, bajo el rey Jogaila." },
      { title: "Centro geográfico de Europa", description: "Un punto cercano a Vilnius fue determinado como el centro geográfico de Europa continental por el Institut Géographique National francés." },
      { title: "La ciudad con más iglesias barrocas", description: "Vilnius tiene la mayor concentración de arquitectura barroca de Europa del Este, con más de 40 iglesias en el casco histórico." },
      { title: "Primera república soviética en independizarse", description: "Lituania fue la primera república de la Unión Soviética en declarar su independencia el 11 de marzo de 1990." },
    ],
    landmarks: [
      { name: "Ciudad Vieja de Vilnius", description: "Centro histórico barroco declarado Patrimonio UNESCO, con más de 1,500 edificios históricos de distintos estilos arquitectónicos." },
      { name: "Colina de las Cruces", description: "Lugar de peregrinación con más de 200,000 cruces de todos los tamaños, símbolo de la resistencia lituana al comunismo." },
      { name: "Trakai", description: "Castillo medieval del siglo XIV en una isla del lago Galvė, sede de los grandes duques de Lituania, a 28 km de Vilnius." },
    ],
  },
  LU: {
    curiosities: [
      { title: "País con el PIB más alto del mundo", description: "Luxemburgo tiene consistentemente el PIB per cápita más alto del mundo, gracias a su sector financiero y bancario." },
      { title: "Tres idiomas oficiales", description: "Luxemburgo tiene tres idiomas oficiales: luxemburgués, francés y alemán, siendo el luxemburgués el idioma nacional único." },
      { title: "País con más empleados transfronterizos", description: "Más del 40% de los trabajadores en Luxemburgo viven en Francia, Bélgica o Alemania y cruzan la frontera diariamente." },
      { title: "Cuna de la Unión Europea", description: "Luxemburgo fue uno de los seis países fundadores de la Comunidad Económica Europea en 1957 y alberga instituciones clave de la UE." },
    ],
    landmarks: [
      { name: "Ciudad de Luxemburgo", description: "Capital declarada Patrimonio UNESCO con un impresionante sistema de defensas subterráneas conocido como las 'Casemates du Bock'." },
      { name: "Vianden", description: "Pintoresco pueblo medieval dominado por un imponente castillo románico-gótico del siglo XI, uno de los más grandes de Europa occidental." },
      { name: "Mullerthal", description: "Conocida como la 'Pequeña Suiza de Luxemburgo', región de formaciones rocosas areniscas, bosques y cascadas." },
    ],
  },
  LV: {
    curiosities: [
      { title: "Capital del Art Nouveau", description: "Riga tiene la mayor concentración de arquitectura Art Nouveau del mundo, con más de 800 edificios de este estilo." },
      { title: "Inventores del jeans azules", description: "Jacob Davis, quien patentó los jeans con Levi Strauss, era un sastre letón emigrado a Estados Unidos." },
      { title: "Canción Nacional más antigua", description: "El Festival Nacional de la Canción de Letonia, celebrado desde 1873, es el evento coral más grande del mundo." },
      { title: "Bosques y naturaleza pristina", description: "Más del 50% de Letonia está cubierta por bosques y tiene una de las calidades de aire más limpias de Europa." },
    ],
    landmarks: [
      { name: "Ciudad Histórica de Riga", description: "Centro medieval y Art Nouveau declarado Patrimonio UNESCO, con la Catedral del Dom y el mercado central más grande de Europa." },
      { name: "Castillo de Turaida", description: "Castillo medieval del siglo XIII en el valle del río Gauja, parte del Parque Nacional de Gauja, corazón del turismo letón." },
      { name: "Cabo Kolka", description: "Punto donde se encuentran el Mar Báltico y el Golfo de Riga, en el Parque Nacional de Slītere, de extraordinaria belleza natural." },
    ],
  },
  MD: {
    curiosities: [
      { title: "Mayor colección de vinos del mundo", description: "Las bodegas Milestii Mici en Moldavia tienen el mayor almacén de vinos del mundo con más de 2 millones de botellas en 200 km de túneles." },
      { title: "País más pobre de Europa", description: "Moldavia es considerada la nación más pobre de Europa por renta per cápita, a pesar de su tierra extremadamente fértil." },
      { title: "Dos países en uno", description: "Transnistria, región separatista pro-rusa en el este de Moldavia, se declaró independiente en 1990 aunque no es reconocida internacionalmente." },
      { title: "Tierra del vino excelente", description: "Moldavia tiene 112,000 hectáreas de viñedos, siendo el país con mayor superficie de viñas per cápita del mundo." },
    ],
    landmarks: [
      { name: "Bodegas Cricova", description: "Ciudad subterránea de vinos a 15 metros de profundidad con 120 km de galerías, famosas en todo el mundo por su colección." },
      { name: "Monasterio de Orheiul Vechi", description: "Monasterio rupestre del siglo XIII tallado en roca calcárea sobre el río Răut, en un paisaje de extraordinaria belleza." },
      { name: "Soroca", description: "Ciudad en la orilla del río Dniéster con una fortaleza circular del siglo XVI, centro de la cultura romaní en Moldavia." },
    ],
  },
  ME: {
    curiosities: [
      { title: "El nombre significa Montenegro", description: "'Montenegro' significa literalmente 'Montaña Negra' en italiano y veneciano, haciendo referencia al monte Lovćen." },
      { title: "País independiente más joven de Europa", description: "Montenegro declaró su independencia de Serbia en 2006 tras un referéndum, siendo uno de los estados más jóvenes de Europa." },
      { title: "Bahía de Kotor única en Europa", description: "La Bahía de Kotor es el único fiordo del Mediterráneo, rodeado de montañas que caen directamente al mar." },
      { title: "Miembro de la OTAN desde 2017", description: "Montenegro se unió a la OTAN en 2017, convirtiéndose en el 29º miembro de la alianza atlántica." },
    ],
    landmarks: [
      { name: "Bahía de Kotor", description: "Fiordo mediterráneo rodeado de murallas medievales y pueblos venecianos, declarado Patrimonio UNESCO de extraordinaria belleza." },
      { name: "Durmitor", description: "Parque nacional con el Gran Cañón del Tara, el más profundo de Europa, glaciares y el lago Negro, Patrimonio UNESCO." },
      { name: "Sveti Stefan", description: "Pequeña isla-hotel de lujo conectada a tierra por un puente, uno de los símbolos más reconocibles del Adriático montenegrino." },
    ],
  },
  MK: {
    curiosities: [
      { title: "Disputa por el nombre con Grecia", description: "Durante décadas, Macedonia del Norte fue conocida como 'FYROM' por la disputa con Grecia sobre el nombre Macedonia, resuelta en 2019." },
      { title: "Cuna de la Madre Teresa", description: "La Madre Teresa nació en Skopje el 26 de agosto de 1910, siendo la persona más famosa nacida en Macedonia del Norte." },
      { title: "Lago Ohrid antiguo", description: "El Lago Ohrid es uno de los lagos más antiguos del mundo con más de 3 millones de años, hogar de especies endémicas únicas." },
      { title: "Estatuas gigantes en la capital", description: "Skopje tiene una de las concentraciones más altas de estatuas por kilómetro cuadrado del mundo, incluyendo un Alejandro Magno de 22 metros." },
    ],
    landmarks: [
      { name: "Lago Ohrid", description: "Lago tectónico de 3 millones de años declarado Patrimonio UNESCO, con la ciudad medieval de Ohrid en sus orillas." },
      { name: "Fortaleza de Skopje", description: "Ciudadela medieval del siglo VI en la colina de Kale, con vistas panorámicas sobre la capital y el río Vardar." },
      { name: "Monasterio de San Naum", description: "Monasterio del siglo X a orillas del lago Ohrid, con manantiales de aguas cristalinas y pavos reales en los jardines." },
    ],
  },
  MT: {
    curiosities: [
      { title: "Templos más antiguos del mundo", description: "Malta alberga los Templos de Ġgantija, los templos prehistóricos independientes más antiguos del mundo, con 5,500 años de antigüedad." },
      { title: "Idioma con raíces árabes en Europa", description: "El maltés es el único idioma semítico oficial de la Unión Europea, con raíces en el árabe siciliano medieval." },
      { title: "País más densamente poblado de la UE", description: "Malta es el país más densamente poblado de la Unión Europea, con más de 1,500 habitantes por kilómetro cuadrado." },
      { title: "George Cross colectivo", description: "Durante la Segunda Guerra Mundial, el Rey Jorge VI otorgó la Cruz de Jorge a toda la isla de Malta por su resistencia heroica." },
    ],
    landmarks: [
      { name: "La Valeta", description: "Capital más pequeña de la UE y Patrimonio UNESCO, construida por los Caballeros de la Orden de San Juan en el siglo XVI." },
      { name: "Templos de Ġgantija", description: "Complejo de templos megalíticos en Gozo de 3600 a.C., los edificios religiosos independientes más antiguos del mundo." },
      { name: "Azure Window", description: "Aunque colapsó en 2017, el sitio del Arco de Azure en Gozo sigue siendo un destino icónico de buceo y snorkel." },
    ],
  },
  NL: {
    curiosities: [
      { title: "País bajo el nivel del mar", description: "Aproximadamente el 26% de los Países Bajos está por debajo del nivel del mar, mantenido seco por un sistema de diques y bombas." },
      { title: "Más bicicletas que personas", description: "Los Países Bajos tienen más bicicletas que habitantes, con 23 millones de bicicletas para 17 millones de personas." },
      { title: "Inventores del microscopio y el telescopio", description: "El microscopio y el telescopio fueron inventados por fabricantes de lentes holandeses en el siglo XVII." },
      { title: "País más tolerante históricamente", description: "Amsterdam fue históricamente un refugio de tolerancia religiosa y libertad de prensa, acogiendo a Spinoza, Descartes y los judíos sefardíes." },
    ],
    landmarks: [
      { name: "Canales de Amsterdam", description: "Red de 165 canales del siglo XVII declarada Patrimonio UNESCO, con más de 1,500 puentes y 2,500 casas flotantes." },
      { name: "Rijksmuseum", description: "Museo nacional de los Países Bajos con obras maestras de Rembrandt, Vermeer y Van Gogh, entre las más visitadas de Europa." },
      { name: "Campos de tulipanes de Keukenhof", description: "Jardín de 32 hectáreas con 7 millones de bulbos de flores en flor cada primavera, el jardín de flores más grande del mundo." },
    ],
  },
  NO: {
    curiosities: [
      { title: "País inventor del salmón ahumado moderno", description: "Noruega es el mayor productor mundial de salmón de acuicultura y exporta más del 50% del salmón del mundo." },
      { title: "País con más fiordos del mundo", description: "Noruega tiene más de 1,000 fiordos a lo largo de sus 25,000 km de costa, siendo los fiordos noruegos Patrimonio UNESCO." },
      { title: "Fondo soberano más grande del mundo", description: "El Fondo de Pensiones del Gobierno de Noruega, basado en el petróleo, es el mayor fondo soberano del mundo con más de 1 billón de dólares." },
      { title: "País más feliz consistentemente", description: "Noruega aparece regularmente entre los tres países más felices del mundo según el Informe Mundial de Felicidad de la ONU." },
    ],
    landmarks: [
      { name: "Fiordos de Noruega", description: "Los fiordos de Geiranger y Nærøy, declarados Patrimonio UNESCO, son de los paisajes naturales más impresionantes del mundo." },
      { name: "Auroras Boreales en Tromsø", description: "Tromsø, al norte del Círculo Polar, es uno de los mejores lugares del mundo para ver la aurora boreal entre octubre y marzo." },
      { name: "Parque Nacional de Jotunheimen", description: "Corazón montañoso de Noruega con el Galdhøpiggen, el punto más alto de Escandinavia a 2,469 metros sobre el nivel del mar." },
    ],
  },
  PL: {
    curiosities: [
      { title: "Cuna de Copérnico y Curie", description: "Polonia es el país natal de Nicolás Copérnico, quien descubrió que la Tierra gira alrededor del Sol, y de Marie Curie, dos veces Nobel." },
      { title: "Bosque de bisontes europeos", description: "El Bosque de Białowieża en Polonia alberga la última manada de bisontes europeos salvajes, símbolo de la naturaleza prístina europea." },
      { title: "País reconstruido de las cenizas", description: "El 85% de Varsovia fue destruido en la Segunda Guerra Mundial. La ciudad fue reconstruida ladrillo a ladrillo basándose en pinturas del siglo XVIII." },
      { title: "Mayor productor de ámbar", description: "Polonia produce el 80% del ámbar báltico del mundo, conocido como el 'oro del Báltico', usado en joyería desde hace milenios." },
    ],
    landmarks: [
      { name: "Ciudad Vieja de Cracovia", description: "Centro medieval perfectamente conservado con la Plaza del Mercado más grande de Europa medieval y el Castillo de Wawel, Patrimonio UNESCO." },
      { name: "Auschwitz-Birkenau", description: "Campo de concentración nazi convertido en memorial, declarado Patrimonio UNESCO como recordatorio de los horrores del Holocausto." },
      { name: "Minas de Sal de Wieliczka", description: "Minas de sal del siglo XIII con 300 km de galerías, capillas y esculturas talladas en sal, Patrimonio UNESCO desde 1978." },
    ],
  },
  PT: {
    curiosities: [
      { title: "Primera potencia colonial global", description: "Portugal fue la primera potencia colonial global, estableciendo un imperio que se extendió por América, África, Asia y Oceanía." },
      { title: "Lengua más hablada en el hemisferio sur", description: "El portugués es la lengua más hablada en el hemisferio sur del mundo, con 250 millones de hablantes en cuatro continentes." },
      { title: "Inventores del pastel de nata", description: "El Pastel de Belém, creado por monjes del Monasterio de los Jerónimos en el siglo XVIII, es el pastel más famoso del mundo." },
      { title: "País con el fado como alma nacional", description: "El Fado, música melancólica declarada Patrimonio Inmaterial de la Humanidad UNESCO, es considerada el alma musical de Portugal." },
    ],
    landmarks: [
      { name: "Torre de Belém", description: "Torre defensiva del siglo XVI en Lisboa, símbolo de la Era de los Descubrimientos y Patrimonio UNESCO." },
      { name: "Monasterio de los Jerónimos", description: "Obra maestra del estilo manuelino en Lisboa, construido con las riquezas del comercio de las especias, Patrimonio UNESCO." },
      { name: "Sintra", description: "Villa con palacios románticos del siglo XIX en la Sierra de Sintra, declarada Paisaje Cultural Patrimonio UNESCO." },
    ],
  },
  RO: {
    curiosities: [
      { title: "País de Drácula y los vampiros", description: "La leyenda de Drácula tiene su origen en Vlad III 'el Empalador', príncipe de Valaquia en el siglo XV, cuyo castillo está en Bran." },
      { title: "Mayor edificio del mundo por volumen", description: "El Palacio del Parlamento en Bucarest es el edificio administrativo más pesado y el segundo más grande del mundo por volumen." },
      { title: "Inventores del avión a reacción", description: "Henri Coandă, inventor rumano, creó el primer avión a reacción del mundo en 1910, aunque su contribución fue reconocida tardíamente." },
      { title: "Delta del Danubio única", description: "El Delta del Danubio en Rumanía es el segundo delta más grande de Europa y una reserva de biosfera UNESCO de extraordinaria biodiversidad." },
    ],
    landmarks: [
      { name: "Castillo de Bran", description: "Fortaleza medieval del siglo XIV en Transilvania, conocida mundialmente como el 'Castillo de Drácula', aunque Vlad nunca vivió allí." },
      { name: "Monasterios de Bucovina", description: "Iglesias del siglo XV con frescos exteriores únicos en el mundo, declaradas Patrimonio UNESCO, pintadas en vivos colores." },
      { name: "Delta del Danubio", description: "Reserva de Biosfera UNESCO con 5,800 km² de humedales, hogar de 300 especies de aves y 160 especies de peces." },
    ],
  },
  RS: {
    curiosities: [
      { title: "Cuna de Nikola Tesla", description: "Nikola Tesla, uno de los inventores más importantes de la historia, nació en Smiljan en 1856, en territorio que era entonces parte de Serbia." },
      { title: "Belgrado la ciudad de la confluencia", description: "Belgrado significa 'Ciudad Blanca' y está ubicada en la confluencia del río Sava con el Danubio, siendo destruida y reconstruida 44 veces." },
      { title: "Frambuesas para el mundo", description: "Serbia es el mayor exportador mundial de frambuesas, produciendo el 30% de las frambuesas del mundo." },
      { title: "Cultura de la cafeína", description: "Serbia tiene una de las culturas cafetera más arraigadas de Europa, con el 'domaća kafa' (café casero) como ritual social fundamental." },
    ],
    landmarks: [
      { name: "Fortaleza de Kalemegdan", description: "Ciudadela del siglo III a.C. en Belgrado, en la confluencia del Sava y el Danubio, con museos y parques dentro de sus murallas." },
      { name: "Monasterio de Studenica", description: "Monasterio medieval del siglo XII considerado el más importante de Serbia, con iglesias de mármol blanco y frescos extraordinarios." },
      { name: "Djerdap - Puertas de Hierro", description: "Espectacular cañón en el río Danubio entre Serbia y Rumanía con la tabla votiva de Trajano y ruinas de la fortaleza de Golubac." },
    ],
  },
  RU: {
    curiosities: [
      { title: "País más grande del mundo", description: "Rusia ocupa el 11% de la superficie terrestre del planeta, siendo el país más grande del mundo con 17.1 millones de km²." },
      { title: "Once husos horarios", description: "Rusia abarca 11 husos horarios, lo que significa que cuando amanece en el este, aún es el día anterior en el oeste del país." },
      { title: "Mayor reserva de recursos naturales", description: "Rusia tiene las mayores reservas de gas natural del mundo y las segundas mayores de petróleo, siendo una potencia energética global." },
      { title: "Primer país en el espacio", description: "La URSS lanzó el primer satélite artificial (Sputnik, 1957) y el primer humano al espacio (Gagarin, 1961), iniciando la era espacial." },
    ],
    landmarks: [
      { name: "Plaza Roja y el Kremlin", description: "Corazón histórico de Moscú con la Catedral de San Basilio, el Mausoleo de Lenin y las torres del Kremlin, Patrimonio UNESCO." },
      { name: "Hermitage de San Petersburgo", description: "Uno de los museos más grandes del mundo con más de 3 millones de obras, en el Palacio de Invierno de los Zares." },
      { name: "Lago Baikal", description: "El lago más profundo y antiguo del mundo con el 20% del agua dulce superficial del planeta, Patrimonio UNESCO." },
    ],
  },
  SE: {
    curiosities: [
      { title: "Cuna de IKEA, Spotify y H&M", description: "Suecia ha dado al mundo marcas globales como IKEA, Spotify, H&M, Volvo, Ericsson y la empresa de videojuegos Mojang (Minecraft)." },
      { title: "Aurora Boreal y sol de medianoche", description: "Al norte del Círculo Polar, Suecia experimenta el sol de medianoche en verano y la noche polar en invierno." },
      { title: "Premio Nobel", description: "El Premio Nobel fue creado por el sueco Alfred Nobel, inventor de la dinamita, y se entrega cada año en Estocolmo el 10 de diciembre." },
      { title: "Sistema de bienestar ejemplar", description: "Suecia tiene uno de los sistemas de bienestar social más completos del mundo, con licencia parental de 480 días por hijo." },
    ],
    landmarks: [
      { name: "Gamla Stan de Estocolmo", description: "Ciudad Vieja medieval de Estocolmo sobre una isla, con calles adoquinadas del siglo XIII y el Palacio Real, una de las más grandes de Europa." },
      { name: "Auroras en Abisko", description: "El Parque Nacional de Abisko en Laponia sueca es considerado uno de los mejores lugares del mundo para ver auroras boreales." },
      { name: "Vasa Museum", description: "Museo en Estocolmo que alberga el barco de guerra Vasa de 1628, recuperado en perfectas condiciones del fondo del mar en 1961." },
    ],
  },
  SI: {
    curiosities: [
      { title: "País más verde de Europa", description: "Eslovenia tiene el 60% de su territorio cubierto por bosques, siendo uno de los países más boscosos y con mayor biodiversidad de Europa." },
      { title: "Capital más pequeña de la UE con tranvía", description: "Ljubljana es una de las capitales europeas más pequeñas y fue declarada Capital Verde Europea en 2016 por sus políticas ecológicas." },
      { title: "Cuna del esperanto europeo", description: "Eslovenia tiene el único lago con una isla en su interior en toda Europa, el icónico Lago Bled con su iglesia sobre la roca." },
      { title: "El único país con Alpes, Mediterráneo y Panonia", description: "Eslovenia es el único país europeo que toca simultáneamente los Alpes, el Mar Mediterráneo y la llanura panónica." },
    ],
    landmarks: [
      { name: "Lago Bled", description: "Lago glacial con una isla con iglesia y un castillo medieval en el acantilado, el paisaje más icónico de Eslovenia." },
      { name: "Cuevas de Postojna", description: "Sistema de cuevas de 24 km con formaciones kársticas únicas y el olm (salamandra de cueva), visitable en tren subterráneo." },
      { name: "Tríglave", description: "El punto más alto de Eslovenia a 2,864 metros, símbolo nacional que aparece en la bandera del país y en el Parque Nacional de Tríglave." },
    ],
  },
  SK: {
    curiosities: [
      { title: "País con más castillos por km²", description: "Eslovaquia tiene la mayor densidad de castillos medievales por kilómetro cuadrado del mundo, con más de 180 castillos y ruinas." },
      { title: "Inventores del paracaídas moderno", description: "Štefan Banič, un minero eslovaco emigrado a EE.UU., patentó el primer paracaídas funcional en 1914." },
      { title: "Corazón de Europa", description: "Eslovaquia está situada en el corazón geográfico de Europa y en la Edad Media era conocida como el corazón del Imperio de los Habsburgo." },
      { title: "Separación pacífica", description: "Checoslovaquia se dividió pacíficamente en República Checa y Eslovaquia el 1 de enero de 1993, en la llamada 'Revolución de Terciopelo'." },
    ],
    landmarks: [
      { name: "Castillo de Spiš", description: "El castillo más grande de Europa Central con 4 hectáreas, declarado Patrimonio UNESCO, domina el paisaje de los Cárpatos eslovacos." },
      { name: "Bratislava Vieja", description: "Casco histórico con el Castillo de Bratislava, la Catedral de San Martín donde se coronaban los reyes húngaros, y la histórica Plaza Principal." },
      { name: "Altos Tatras", description: "La única montaña alpina de Eslovaquia con el Gerlachovský štít a 2,655 metros, pico más alto de los Cárpatos." },
    ],
  },
  SM: {
    curiosities: [
      { title: "República más antigua del mundo", description: "San Marino fue fundada en 301 d.C. por el cristiano Marino, siendo la república más antigua del mundo en existencia continua." },
      { title: "País rodeado completamente por Italia", description: "San Marino es uno de los tres países del mundo completamente rodeados por otro país, junto con el Vaticano y Lesoto." },
      { title: "Sin deuda nacional", description: "San Marino es uno de los pocos países del mundo sin deuda nacional y con superávit presupuestario consistente." },
      { title: "Más coches que personas", description: "San Marino tiene el mayor número de automóviles per cápita del mundo, con más de 1,200 coches por cada 1,000 habitantes." },
    ],
    landmarks: [
      { name: "Monte Titano", description: "Colina de 750 metros con tres torres medievales del siglo XIV, símbolo de San Marino y declarado Patrimonio UNESCO." },
      { name: "Palazzo Pubblico", description: "Sede del gobierno de San Marino desde el siglo XIX, en la Plaza de la Libertad, con vistas al campo italiano circundante." },
      { name: "Guaita", description: "La primera y más antigua de las tres torres del Monte Titano, construida en el siglo XI, ofrece vistas panorámicas sobre Italia." },
    ],
  },
  TR: {
    curiosities: [
      { title: "Puente entre dos continentes", description: "Turquía es el único país del mundo con territorio en dos continentes: Europa (Tracia) y Asia (Anatolia), unidas por el Bósforo." },
      { title: "Cuna de Troya y las ciudades más antiguas", description: "Turquía alberga Çatalhöyük, una de las ciudades más antiguas del mundo (7500 a.C.), y el legendario sitio de Troya." },
      { title: "Origen del café turco", description: "El café llegó a Europa a través de Turquía en el siglo XVI, y el café turco fue declarado Patrimonio Inmaterial de la Humanidad UNESCO." },
      { title: "Mayor productor de avellanas del mundo", description: "Turquía produce el 75% de las avellanas del mundo, siendo el ingrediente principal del chocolate Nutella." },
    ],
    landmarks: [
      { name: "Hagia Sophia", description: "Monumento del siglo VI en Estambul, que ha sido catedral cristiana, mezquita y museo, considerado una maravilla de la arquitectura mundial." },
      { name: "Capadocia", description: "Región de formaciones rocosas volcánicas únicas con casas rupestres, iglesias talladas en roca y famosos globos aerostáticos al amanecer." },
      { name: "Pamukkale", description: "Cascadas de travertino de color blanco nieve con termas naturales calientes, junto a las ruinas de la ciudad romana de Hierápolis." },
    ],
  },
  UA: {
    curiosities: [
      { title: "El granero de Europa", description: "Ucrania es llamada el 'granero de Europa' y produce el 10% del trigo mundial, siendo uno de los mayores exportadores agrícolas del planeta." },
      { title: "Mayor país completamente europeo", description: "Ucrania es el mayor país cuyo territorio está completamente dentro de Europa, con 603,550 km²." },
      { title: "Cuna del primer estado eslavo", description: "La Rus de Kiev, fundada en el siglo IX, es considerada el primer estado eslavo y el origen de las culturas rusa, ucraniana y bielorrusa." },
      { title: "Chernóbil convertido en atracción", description: "La zona de exclusión de Chernóbil, escenario del peor accidente nuclear de la historia en 1986, recibe hoy miles de turistas al año." },
    ],
    landmarks: [
      { name: "Monasterio de las Cuevas de Kiev", description: "Complejo monástico del siglo XI con catacumbas subterráneas donde descansan momias de monjes, declarado Patrimonio UNESCO." },
      { name: "Sofía de Kiev", description: "Catedral del siglo XI con mosaicos y frescos medievales únicos en Europa, declarada Patrimonio UNESCO junto al monasterio." },
      { name: "Lviv", description: "Ciudad medieval del oeste de Ucrania con arquitectura renacentista y barroca bien conservada, declarada Patrimonio UNESCO." },
    ],
  },
  XK: {
    curiosities: [
      { title: "País más joven del mundo", description: "Kosovo declaró su independencia de Serbia el 17 de febrero de 2008, siendo uno de los países más jóvenes del mundo." },
      { title: "Mayoría de población joven", description: "Kosovo tiene la población más joven de Europa, con una edad media de 28 años y más del 50% menor de 25 años." },
      { title: "Reconocimiento parcial", description: "Kosovo es reconocido por más de 100 países pero no por todos los miembros de la ONU, incluyendo Rusia, China y España." },
      { title: "Cuna del monacato medieval serbio", description: "Kosovo alberga los monasterios medievales más importantes de la cultura serbia, declarados Patrimonio UNESCO en peligro." },
    ],
    landmarks: [
      { name: "Monasterio de Visoki Dečani", description: "Monasterio medieval serbio del siglo XIV con los frescos medievales mejor conservados de los Balcanes, Patrimonio UNESCO en peligro." },
      { name: "Prizren", description: "La ciudad más histórica de Kosovo, con una mezquita otomana, una iglesia serbio-ortodoxa y una fortaleza medieval conviviendo." },
      { name: "Rugova Canyon", description: "Espectacular cañón de 25 km cerca de Peja, con paredes de hasta 1,000 metros, uno de los paisajes naturales más impresionantes de los Balcanes." },
    ],
  },
}
