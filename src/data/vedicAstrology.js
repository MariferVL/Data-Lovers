export default {
    data: {
      nakshatra: [
        {
          id: 1,
          name: "Ashwini",
          symbol_img: "images/",
          positive_traits: "Poder, fuerza, vitalidad, coraje y capacidad de acción rápida. Espontaneos, prefieren la acción.",
          negative_traits: "Propensos a seguir su impulsividad; gusto por la venganza y terquedad.",
          compatibility: "Shatabhisak",
          incompatibility: "Hasta y Swati",
        },
        {
          id: 2,
          name: "Bharani",
          symbol_img: "images/",
          positive_traits: "Capacidad para crear, soportar, nutrir, destruir, explorar y experimentar.",
          negative_traits: "Fuerte vulnerabilidad a las emociones y los deseos. Incapaces de tolerar la dominación.",
          compatibility: "Bharani, Hasta, Swati y Shravana",
          incompatibility: "Chitra, Dhanistha, Purva bhadrapada/Vishaka",
        },
        {
          id: 3,
          name: "Krittika",
          symbol_img: "images/",
          positive_traits: "Honesto y protector. Independiente y con una determinación ardiente e insistencia en la protección.",
          negative_traits: "Con franqueza desinhibida y tendencia a encontrar fallas. Acumulan ira y falta de diplomacia.",
          compatibility: "Swati, Hasta",
          incompatibility: "Chitra, Vishaka, Dhanistha y Purva Bhadrapada",
        },
        {
          id: 4,
          name: "Rohini",
          symbol_img: "images/",
          positive_traits: "Dulces, gentiles, con ingenio creativo e imaginativo.",
          negative_traits: "Con falta de propósito y estabilidad. Indecisos y ociosos.",
          compatibility: "Ashwini y Bharani, Revathi/Shatabhisa",
          incompatibility: "Todos los demás",
        },
        {
          id: 5,
          name: "Mrigashirsha",
          symbol_img: "images/",
          positive_traits: "Inteligentes y buscadores de conocimientos. Entusiastas y con buenos poderes de administración.",
          negative_traits: "Inquietos y nerviosos. Su impaciencia puede llevarlos a tomar decisiones equivocadas y cometer errores.",
          compatibility: "Ardra, Pushya y Ashlesha",
          incompatibility: "Ashvini/Mrigashirsha",
        },
        {
          id: 6,
          name: "Ardra",
          symbol_img: "images/",
          positive_traits: "Fuertes, mentalmente estables y empáticos con los demás. Trabajan duro, con inteligencia e innovación.",
          negative_traits: "Llenos de tristeza y una especie de mentalidad impulsiva. Tercos y con temperamento violento.",
          compatibility: "Ashwini, Bharani y Krittika",
          incompatibility: "Purva Phalguni/Magha.",
        },
        {
          id: 7,
          name: "Punarvasu",
          symbol_img: "images/",
          positive_traits: "Amables, sociables y con conocimiento. Son populares y tienen una esencia hogareña o doméstica.",
          negative_traits: "Con mentalidad inconstante e inestables. Constantemente tienen falta de previsión y cuidado.",
          compatibility: "Yeshta/Anuradha, Sravana/Purva Ashadha",
          incompatibility: "Magha y Purva Phalguni",
        },
        {
          id: 8,
          name: "Pushya",
          symbol_img: "images/",
          positive_traits: "Benevolente, amable, sereno y filántropo. Con gusto por la creación y expansión.",
          negative_traits: "Ferozmente posesivos, ortodoxos y conservadores.",
          compatibility: "Hasta/Swati",
          incompatibility: "Chitra, Dhanistha, Vishaka/Purva Bhadrapada",
        },
        {
          id: 9,
          name: "Ashlesha",
          symbol_img: "images/",
          positive_traits: "Observadores, intuitivos, con coraje y liderazgo. Buenos en la planificación y el cálculo.",
          negative_traits: "Facilidad para el engaño, deshonestidad, egoísmo, avaricia y falsedad.",
          compatibility: "Punarvasu",
          incompatibility: "Magha/Purva Phalguni",
        },
        {
          id: 10,
          name: "Magha",
          symbol_img: "images/",
          positive_traits: "Inclinación hacia las artes. Empáticos y cuidadosos con los sentimientos de los demás.",
          negative_traits: "Orgullosos y con tendencia a imponer sus decisiones a los demás.",
          compatibility: "Ashwini, Mrigashirsha/Ashlesha",
          incompatibility: "Chitra",
        },
        {
          id: 11,
          name: "Purva Phalguni",
          symbol_img: "images/",
          positive_traits: "Compasivos, empáticos, educados y cariñosos. Amantes de la paz, se mantienen alejados de las peleas.",
          negative_traits: "Tienden al exceso de confianza y arrogancia. Inquietos e impacientes.",
          compatibility: "Ashwini y Ardra",
          incompatibility: "Magha",
        },
        {
          id: 12,
          name: "Uttara Phalguni",
          symbol_img: "images/",
          positive_traits: "Estables, racionales, generosos, determinados y bondadosos. Con sabiduría y genialidad.",
          negative_traits: "Obsesionados con la limpieza y la arrogancia. Pueden ser desconsiderados y despectivos.",
          compatibility: "Anuradha/Jyeshta ",
          incompatibility: "Vishaka y Chitra",
        },
        {
          id: 13,
          name: "Hasta",
          symbol_img: "images/",
          positive_traits: "Independientes, intelectuales y firmes. Capaces de conquistar e inspirar personas y situaciones.",
          negative_traits: "Escandalosamente dominantes y crueles. Propensos a la crueldad y la falta de sensibilidad.",
          compatibility: "Uttara Phalguni/Uttara bhadrapada, Krittika/Pushyami ",
          incompatibility: "Shatabhisak",
        },
        {
          id: 14,
          name: "Chitra",
          symbol_img: "images/",
          positive_traits: "Intuitivos y con capacidad de crear, construir y embellecer.",
          negative_traits: "Egoístas, individualistas e indulgentes. El deseo excesivo de embellecimiento los vuelve artificiales.",
          compatibility: "Swati y Hasta",
          incompatibility: "Mrigashira/Dhanista, Uttara Phalguni/Uttara Bhadrapada",
        },
        {
          id: 15,
          name: "Swati",
          symbol_img: "images/",
          positive_traits: "Conocedores, independientes, competentes e ingeniosos. De naturaleza servicial y veraz.",
          negative_traits: "Obstinados, inquietos, indecisos e inflexibles. No están dispuestos a escuchar a los demás.",
          compatibility: "Punarvasu, Chitra y Hasta",
          incompatibility: "Rohini y Bharani",
        },
        {
          id: 16,
          name: "Vishaka",
          symbol_img: "images/",
          positive_traits: "Llenos de energía y entusiasmo. Decididos, trabajadores y deseosos de aprender cosas nuevas.",
          negative_traits: "Convierten las cosas simples en complejas y viceversa. Nunca se sienten satisfechos con sus logros.",
          compatibility: "Swati, Ashwini y Bharani",
          incompatibility: "Ardra y Purva Phalguni",
        },
        {
          id: 17,
          name: "Anuradha",
          symbol_img: "images/",
          positive_traits: "Amables, equilibrados, armoniosos y con liderazgo. Espontáneos y sensibles.",
          negative_traits: "Sienten una usencia de propósito y tienen cambios de humor inesperados.",
          compatibility: "Vishaka y Jyeshta",
          incompatibility: "Bharani/Anuradha, Ashwini/Purva Bhadrapada",
        },
        {
          id: 18,
          name: "Jyeshta",
          symbol_img: "images/",
          positive_traits: "Trabajador orientado a resultados. Generosidad, responsabilidad y confianza en ti mismo. Vitalidad emocional.",
          negative_traits: "Autoritarios, posesivos, egoístas, materialistas y con deseo de dominar a las personas.",
          compatibility: "Anuradha",
          incompatibility: "Ashwini",
        },
        {
          id: 19,
          name: "Moola",
          symbol_img: "images/",
          positive_traits: "Trabajas duro. Compromiso y determinación, inteligencia para innovar ideas, optimista.",
          negative_traits: "Ira ocasional, terquedad e inflexibilidad. Falta de conocimiento para enfrentar la vida les lleva a diversos problemas.",
          compatibility: "Hasta, Shravana, Revati/Pushya.",
          incompatibility: "Swati/Magha.",
        },
        {
          id: 20,
          name: "Purva Ashadha",
          symbol_img: "images/",
          positive_traits: "Amabilidad y comportamiento empático. Alta habilidad de convencimiento. Seguro de ti mismo. ",
          negative_traits: "Problemas para tomar decisiones. Arrogancia y terquedad al decidir.",
          compatibility: "Rohini, Ashwini/Hasta.",
          incompatibility: "Purva Phalguni/Ardra.",
        },
        {
          id: 21,
          name: "Uttara Ashada",
          symbol_img: "images/",
          positive_traits: "Humilde, respetuoso y empático. Modesto, prefiere reservar su opinión en diferencias de pensamiento.",
          negative_traits: "Carecen de motivación, infelices y deprimidos. Humildad excesiva que impide ser duro con las personas.",
          compatibility: "Hasta, Bharani/Rohini.",
          incompatibility: "Bhadrapada/Ashlesha.",
        },
        {
          id: 22,
          name: "Shravana",
          symbol_img: "images/",
          positive_traits: "Gran corazón. Riqueza de conocimientos. Extiendes tu ayuda, valentía, inteligencia, perdón y gratitud.",
          negative_traits: "Egoísmo e inflexibilidad. Paso en falso/Esfuerzo desorganizado podría hacerte perjudicar a otros por triunfar.",
          compatibility: "Swati, Krittika/Anuradha.",
          incompatibility: "Moola/Mrigashirsha.",
        },
        {
          id: 23,
          name: "Dhanistha",
          symbol_img: "images/",
          positive_traits: "Franqueza y fácil adaptabilidad. Capacidad de brillar en artes escénicas(música,danza), genialidad,armonía.",
          negative_traits: "Influenciable. Agresión, codicia, lujuria por éxito. Susceptible a selección de compañeros de vida incompatibles.",
          compatibility: "Purva Bhadrapada, Shravana, Purvashadha, Uttarashada.",
          incompatibility: "Mrigashirsha/Chitra, Bharani & Revati.",
        },
        {
          id: 24,
          name: "Shatabhisaa",
          symbol_img: "images/",
          positive_traits: "Trabajo duro y disciplina. Capacidad de sanar. Intuición. De trato fácil. Facultad intelectual.",
          negative_traits: "Inflexible y testarudo. Arrebatos de ira y depresión. Pereza, rudeza y ausencia de habilidades sociales.",
          compatibility: "Ashwini/Shatabhisha,  Rohini, Mrigashira, Purvaashada/Shravana. ",
          incompatibility: "Hasta/Swati",
        },
        {
          id: 25,
          name: "Purva Bhadrapada",
          symbol_img: "images/",
          positive_traits: "Sinceridad, deber, resistencia y fuerza. Amabilidad, protección y preocupación.",
          negative_traits: "Puedes resultar dañino y destructivo. Propenso a ser inducido a la deshonestidad, negatividad y inmoralidad.", 
          compatibility:  "Uttaraashada/Shravistha",
          incompatibility: "Purva Bhadrapada/Uttara Phalguni, Bharani/Revathi",
        },
        {
          id: 26,
          name: "Uttara Bhadrapada",
          symbol_img: "images/",
          positive_traits: "Amables, lógicos y hábiles. Serenidad, equidad y justicia. Ganan con experiencia.",
          negative_traits: "Susceptibilidad a ataques de ira, temperamental. Pereza, inercia y pérdida de control.",
          compatibility: "Uttara Bhadrapada/Uttara Phalguni",
          incompatibility: "Purva Phalguni/Uttara Bhadrapada, Vishaka/Chitra.",
        },
        {
          id: 27,
          name: "Revati",
          symbol_img: "images/",
          positive_traits: "Pilar de fortaleza y apoyo para personas, sentido del decoro, sofisticación y cultura. Optimista.",
          negative_traits: "Susceptible a ociosidad y depresión. Obstinación y temperamento. Ortodoxo y supersticioso.",
          compatibility: "Magha/Revati, Purva Bhadrapada/Dhanistha.",
          incompatibility: "Bharani, Shravana, Uttaraashada, Krittika, Rohini",
        },
      ],
      ayurveda: [
        {
          id: 1,
          type: "Vata",
          type_img: "",
          info_link1: "https://indiaveda.com/p/constitucion-vata",
          info_link2: "https://indiaveda.com/p/equilibra-vata",
          function: "Funciones corporales del movimiento.",
          qualities:
            "Moviéndose rápido, ligero. Frío, áspero y seco, lidera el orden de los doshas.",
          results_balance:
            "Vigilancia mental. Buena regeneración. Fuerte inmunidad. Sueño profundo. Sensación de euforia",
          results_imbalance:
            "Piel seca o áspera. Estreñimiento. Fatiga común (causa no específica). Dolores de cabeza por tensión. Bajo peso. Insomnio. Intolerancia al frío. Ansiedad, preocupación",
        },
        {
          id: 2,
          type: "Pitta",
          type_img: "",
          info_link1: "https://indiaveda.com/p/constitucion-pitta",
          info_link2: "https://indiaveda.com/p/equilibra-pitta",
          function: "Funciones corporales de calor, metabolismo y producción de energía",        
          qualities: "Caliente, punzante, ligero, ácido, ligeramente aceitoso.",
          results_balance: "Mecanismo normal de calor y sed. Digestión fuerte. Intelecto agudo. Complacencia de tez brillante.",
          results_imbalance:   "Erupciones, inflamaciones de la piel. Acidez estomacal. Encanecimiento prematuro, calvicie. Hostilidad, irritabilidad. Problemas visuales. Calor corporal excesivo",
        },
        {
          id: 3,
          type: "Kapha",
          type_img: "",
          info_link1: "https://indiaveda.com/p/constitucion-kapha",
          info_link2: "https://indiaveda.com/p/equilibra-kapha",
          function: "Funciones corporales de estructura física y el equilibrio de líquidos.",
          qualities: "Pesado, oleoso, lento, frío, estable, fiable, apagado.",
          results_balance: "Fuerza muscular. Inmunidad fuerte. Afecto, generosidad, valor, dignidad. Articulaciones sanas, normales. Vitalidad y resistencia. Estabilidad mental",
          results_imbalance: "Piel grasa. Congestión nasal. Obesidad. Digestión lenta. Alergias nasales. Letargo, pesadez",
        },
      ],
  
      yoni: [
        {
          id: 1,
          animal: "Caballo",
          animal_img: "",
          friendlyYoni: "Serpiente, Venado, Mono",
          enemyYoni: "Toro, Vaca, Tigre, León."
        },
        {
          id: 2,
          animal: "Elefante",
          animal_img: "",
          friendlyYoni: "Oveja, Serpiente, Toro, Mono",
          enemyYoni: "Vaca,León, Tiger"
        },
        {
          id: 3,
          animal: "Oveja",
          animal_img: "",
          friendlyYoni: "Elefante, Vaca, Toro, Suricata",
          enemyYoni: "Mono, León, Tigre, Rata, Perro"
        },
        {
          id: 4,
          animal: "Serpiente",
          animal_img: "",
          friendlyYoni: "Caballo, Elefante",
          enemyYoni: "Suricata, Gato, Rata, Vaca, Toro"
        },
        {
          id: 5,
          animal: "Perro",
          animal_img: "",
          friendlyYoni: "",
          enemyYoni: "Venado,Rata, Oveja, Tigre, Suricata, León"
        },
        {
          id: 6,
          animal: "Gato",
          animal_img: "",
          friendlyYoni: "Venado, Mono",
          enemyYoni: "Rata, Serpiente, Tigre, León"
        },
        {
          id: 7,
          animal: "Rata",
          animal_img: "",
          friendlyYoni: "",
          enemyYoni: "Gato, Oveja, Serpiente, Perro, Suricata"
        },
        {
          id: 8,
          animal: "Vaca",
          animal_img: "",
          friendlyYoni: "Oveja, Toro, Venado",
          enemyYoni: "TigreCaballo, Serpiente,Leon"
        },
        {
          id: 9,
          animal: "Toro",
          animal_img: "",
          friendlyYoni: " Elefante, Oveja, Vaca",
          enemyYoni: "Caballo, Serpiente, Tigre, León"
        },
        {
          id: 10,
          animal: "Tigre",
          animal_img: "",
          friendlyYoni: "",
          enemyYoni: "Vaca, Toro, Caballo, Elefante, Oveja, Perro, Gato, Venado, Mono, León"
        },
        {
          id: 11,
          animal: "Venado",
          animal_img: "",
          friendlyYoni: "Caballo, Gato, Vaca",
          enemyYoni: "Perro, Tigre, León"
        },
        {
          id: 12,
          animal: "Mono",
          animal_img: "",
          friendlyYoni: "Caballo, Elefante, Gato, Suricata",
          enemyYoni: "Oveja, Tigre"
        },
        {
          id: 13,
          animal: "Suricata",
          animal_img: "",
          friendlyYoni: "Oveja, Mono",
          enemyYoni: "Serpiente, Perro, Rata, "
        },
        {
          id: 14,
          animal: "Kapha",
          animal_img: "",
          friendlyYoni: "",
          enemyYoni: "Elefante, Caballo, Oveja, Perro, Gato, Vaca, Toro, tigre, Venado"
        },
  
      ],
    },
  };