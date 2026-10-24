/**
 * Colección curada de frases y reflexiones de San Agustín de Hipona (354 - 430 d.C.)
 * Con sus obras de procedencia, categorías temáticas y contextualización.
 */
const SAN_AGUSTIN_QUOTES = [
  {
    id: 1,
    quote: "Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti.",
    source: "Confesiones, Libro I, Cap. 1",
    theme: "Inquietud y Búsqueda",
    latin: "Fecisti nos ad te et inquietum est cor nostrum, donec requiescat in te."
  },
  {
    id: 2,
    quote: "Ama y haz lo que quieras. Si callas, callarás con amor; si gritas, gritarás con amor; si corriges, corregirás con amor; si perdonas, perdonarás con amor.",
    source: "Tratado sobre la Primera Epístola de San Juan, VII, 8",
    theme: "El Amor",
    latin: "Dilige et quod vis fac."
  },
  {
    id: 3,
    quote: "No vayas fuera de ti, vuelve a ti mismo: en el hombre interior habita la verdad.",
    source: "De vera religione, 39, 72",
    theme: "La Verdad Interior",
    latin: "Noli foras ire, in te ipsum redi; in interiore homine habitat veritas."
  },
  {
    id: 4,
    quote: "La medida del amor es amar sin medida.",
    source: "Sermones",
    theme: "El Amor",
    latin: "Modus diligendi est sine modo diligere."
  },
  {
    id: 5,
    quote: "Tarde te amé, hermosura tan antigua y tan nueva, ¡tarde te amé! Tú estabas dentro de mí y yo fuera, y por fuera te buscaba.",
    source: "Confesiones, Libro X, Cap. 27",
    theme: "Conversión y Belleza",
    latin: "Sero te amavi, pulchritudo tam antiqua et tam nova, sero te amavi!"
  },
  {
    id: 6,
    quote: "¿Qué es, pues, el tiempo? Si nadie me lo pregunta, lo sé; pero si quiero explicárselo al que me lo pregunta, no lo sé.",
    source: "Confesiones, Libro XI, Cap. 14",
    theme: "El Tiempo y la Mente",
    latin: "Quid est ergo tempus? Si nemo ex me quaerat scio; si quaerenti explicare velim, nescio."
  },
  {
    id: 7,
    quote: "La soberbia no es grandeza sino hinchazón; y lo que está hinchado parece grande, pero no está sano.",
    source: "Sermones, 340, 1",
    theme: "Humildad",
    latin: "Superbia non est magnitudo, sed tumor; quod autem tumet, videtur magnum, sed non est sanum."
  },
  {
    id: 8,
    quote: "Conócete, acéptate, supérate.",
    source: "Sermones",
    theme: "Crecimiento Personal",
    latin: "Cognosce te, accipe te, vince te."
  },
  {
    id: 9,
    quote: "Quien canta con amor, ora dos veces.",
    source: "Enarraciones sobre los Salmos, 72, 1",
    theme: "Alabanza y Gozo",
    latin: "Qui bene cantat, bis orat."
  },
  {
    id: 10,
    quote: "La fe consiste en creer lo que no vemos, y la recompensa de la fe consiste en ver lo que creemos.",
    source: "Sermones, 43, 1",
    theme: "La Fe",
    latin: "Fides est credere quod nondum vides; cuius fidis merces est videre quod credis."
  },
  {
    id: 11,
    quote: "Si quieres conocer verdaderamente a una persona, no le preguntes lo que piensa, sino lo que ama.",
    source: "La Ciudad de Dios, XIX, 24",
    theme: "El Carácter Humano",
    latin: "Non quaeritur quid credat aut quid speret, sed quid amet."
  },
  {
    id: 12,
    quote: "La paciencia es la compañera inseparable de la sabiduría.",
    source: "De patientia, 4, 3",
    theme: "Sabiduría",
    latin: "Patientia comes est sapientiae."
  },
  {
    id: 13,
    quote: "La esperanza tiene dos hijos hermosos: sus nombres son la indignación y el coraje; la indignación ante cómo son las cosas, y el coraje para ver que no sigan siendo como son.",
    source: "Sermones",
    theme: "Esperanza y Valentía",
    latin: null
  },
  {
    id: 14,
    quote: "Cree para entender, y entiende para creer.",
    source: "Sermones, 43, 9",
    theme: "Fe y Razón",
    latin: "Crede ut intelligas; intellige ut credas."
  },
  {
    id: 15,
    quote: "El orden es la disposición de las cosas iguales y desiguales, que da a cada una su lugar correspondiente.",
    source: "La Ciudad de Dios, XIX, 13",
    theme: "La Paz y el Orden",
    latin: "Ordo est parium dispariumque rerum sua cuique loca tribuens dispositio."
  },
  {
    id: 16,
    quote: "Donde no hay justicia, ¿qué son los reinos sino grandes bandas de ladrones?",
    source: "La Ciudad de Dios, Libro IV, Cap. 4",
    theme: "Justicia Social",
    latin: "Remota itaque iustitia quid sunt regna nisi magna latrocinia?"
  },
  {
    id: 17,
    quote: "No hay santo sin pasado, ni pecador sin futuro.",
    source: "Reflexiones pastorales",
    theme: "Misericordia y Esperanza",
    latin: null
  },
  {
    id: 18,
    quote: "La verdad es como un león; no tienes que defenderla. Déjala libre; se defenderá sola.",
    source: "Sermones",
    theme: "La Verdad",
    latin: null
  },
  {
    id: 19,
    quote: "Errar es humano, pero perseverar en el error por orgullo es verdaderamente perverso.",
    source: "Sermones, 164, 14",
    theme: "Humildad y Error",
    latin: "Humanum fuit errare, diabolicum est per animositatem in errore manere."
  },
  {
    id: 20,
    quote: "Dos amores fundaron dos ciudades: el amor propio llevado hasta el desprecio de Dios levantó la ciudad terrena; el amor a Dios llevado hasta el desprecio del yo levantó la ciudad celeste.",
    source: "La Ciudad de Dios, XIV, 28",
    theme: "Las Dos Ciudades",
    latin: "Fecerunt itaque civitates duas amores duo."
  },
  {
    id: 21,
    quote: "La felicidad no es conseguir lo que deseas, sino desear lo que ya tienes con un corazón en paz.",
    source: "De beata vita (La vida feliz)",
    theme: "Felicidad",
    latin: "Beatus est qui habet omnia quae vult et nihil mali vult."
  },
  {
    id: 22,
    quote: "Dios no manda cosas imposibles, sino que al mandar te exhorta a que hagas lo que puedas y pidas lo que no puedas, y Él te ayudará para que puedas.",
    source: "De natura et gratia, 43, 50",
    theme: "La Gracia",
    latin: "Deus impossibilia non iubet, sed iubendo monet et facere quod possis et petere quod non possis."
  },
  {
    id: 23,
    quote: "Si callas, calla por amor; si hablas, habla por amor.",
    source: "In Epistolam Ioannis ad Parthos",
    theme: "El Amor",
    latin: "Sive taceas, amore taceas; sive clames, amore clames."
  },
  {
    id: 24,
    quote: "La belleza es un regalo de Dios; pero para que los justos no piensen que es un bien supremo, Dios la concede también a los impíos.",
    source: "La Ciudad de Dios, XV, 22",
    theme: "Belleza y Vanidad",
    latin: "Pulchritudo corporis bonum quidem Dei donum est."
  },
  {
    id: 25,
    quote: "Cuida de tu cuerpo como si fueras a vivir siempre, pero cuida de tu alma como si fueras a morir hoy.",
    source: "Consejos epistolares",
    theme: "Trascendencia",
    latin: null
  },
  {
    id: 26,
    quote: "La humildad es la primera, la segunda y la tercera virtud de la vida cristiana.",
    source: "Epístola 118 (A Dióscoro)",
    theme: "Humildad",
    latin: "Prima, secunda, tertia virtus est humilitas."
  },
  {
    id: 27,
    quote: "Nadie puede amar lo que desconoce por completo.",
    source: "De Trinitate (Sobre la Trinidad), Libro VIII",
    theme: "Conocimiento y Amor",
    latin: "Ignoti nulla cupido; nemo enim potest amare quod nescit."
  },
  {
    id: 28,
    quote: "Las palabras son como flechas: una vez lanzadas, no pueden retirarse. Sean siempre bálsamo y no veneno.",
    source: "Enarraciones sobre los Salmos",
    theme: "La Palabra",
    latin: null
  },
  {
    id: 29,
    quote: "El pasado ya no es y el futuro aún no es. El presente es el único punto de contacto con la eternidad.",
    source: "Confesiones, Libro XI",
    theme: "El Tiempo y la Mente",
    latin: "Praesens de praeteritis memoria, praesens de praesentibus contuitus, praesens de futuris expectatio."
  },
  {
    id: 30,
    quote: "¿Quieres ser grande? Comienza por ser pequeño. ¿Planeas construir un edificio elevado? Piensa primero en los cimientos de la humildad.",
    source: "Sermones, 69, 2",
    theme: "Humildad",
    latin: "Cogitas magnam fabricam construere celsitudinis? De fundamento prius cogita humilitatis."
  }
];
