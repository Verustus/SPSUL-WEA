const WORDS = [
    "stůl",
    "židle",
    "auto",
    "hrnek",
    "láhev",
    "čaj",
    "káva",
    "lampa",
    "notebook",
    "mobil",
    "klíče",
    "brýle",
    "slunečník",
    "peněženka",
    "ručník",
    "kapesník",
    "deštník",
    "plášť",
    "oblek",
    "tričko",
    "kalhoty",
    "sukně",
    "šaty",
    "batoh",
    "taška",
    "pero",
    "tužka",
    "pastelky",
    "barva",
    "obraz",
    "kartáček",
    "zubní pasta",
    "papír",
    "knížka",
    "časopis",
    "noviny",
    "mapa",
    "kniha",
    "film",
    "hudba",
    "divadlo",
    "koncert",
    "večerka",
    "restaurace",
    "nápoj",
    "jídlo",
    "snídaně",
    "oběd",
    "večeře",
    "dezert",
    "pizza",
    "hamburger",
    "sendvič",
    "salát",
    "polévka",
    "ryba",
    "maso",
    "ovoce",
    "zelenina",
    "mléko",
    "voda",
    "sok",
    "káva",
    "čaj",
    "cola",
    "pivo",
    "víno",
    "rum",
    "vodka",
    "whisky",
    "koňak",
    "šampaňské",
    "televize",
    "počítač",
    "monitor",
    "klávesnice",
    "myš",
    "tiskárna",
    "webová stránka",
    "aplikace",
    "software",
    "hardware",
    "rozdělovač",
    "kabel",
    "wifi",
    "internet",
    "email",
    "mobilní telefon",
    "tablet",
    "sluchátka",
    "náhlavní souprava",
    "reproduktor",
    "kamera",
    "fotografie",
    "video",
    "zvuk",
    "hudba",
    "film",
    "seriál",
    "dokument",
    "reklama",
    "plakát",
    "leták",
    "brožura",
    "časopis",
    "noviny",
    "článek",
    "titulek",
    "editoriál",
    "zpráva",
    "reportáž",
    "rozhovor",
    "recenze",
    "kritika",
    "analýza",
    "statistika",
    "graf",
    "tabulka",
    "diagram",
    "mapa",
    "piktogram",
    "ikona",
    "symbol",
    "logotyp",
    "znak",
    "prostředí",
    "výhled",
    "podnebí",
    "počasí",
    "roční období",
    "město",
    "venkov",
    "vesnice",
    "hrad",
    "zámek",
    "muzeum",
    "park",
    "les",
    "hora",
    "řeka",
    "jezero",
    "moře",
    "oceán",
    "pláž",
    "písek",
    "tráva",
    "kámen",
    "strom",
    "květ",
    "květina",
    "rostlina",
    "zvíře",
    "pták",
    "pes",
    "kočka",
    "kůň",
    "kráva",
    "ovce",
    "prase",
    "kachna",
    "husa",
    "kuře",
    "jehněčí",
    "vepřové",
    "hovězí",
    "drůbež",
    "ryba",
    "kreveta",
    "krab",
    "úhoř",
    "losos",
    "kapr",
    "sumec",
    "štika",
    "okoun",
    "obchod",
    "supermarket",
    "trh",
    "tržiště",
    "prodejna",
    "obchodní dům",
    "butik",
    "kovárna",
    "krejčovství",
    "stavebnictví",
    "lékárna",
    "knihkupectví",
    "květinářství",
    "autoopravna",
    "benzínová pumpa",
    "restaurace",
    "kavárna",
    "fastfood",
    "vinárna",
    "bar",
    "noční klub",
    "banka",
    "pošta",
    "nemocnice",
    "poliklinika",
    "zdravotní středisko",
    "lékař",
    "zubař",
    "psycholog",
    "psychiatr",
    "advokát",
    "notář",
    "architekt",
    "designér",
    "inženýr",
    "programátor",
    "umělec",
    "malíř",
    "sochař",
    "archeolog",
    "historik",
    "geograf",
    "učitel",
    "profesor",
    "student",
    "žák",
    "učedník",
    "stážista",
    "manažer",
    "ředitel",
    "vedoucí",
    "zaměstnanec",
    "pracovník",
    "kolega",
    "kamarád",
    "přítel",
    "partner",
    "společník",
    "konkurent",
    "rival",
    "nepřítel",
    "zákazník",
    "klient",
    "host",
    "turista",
    "cestovatel",
    "cestující",
    "poutník",
    "poutník",
    "chodec",
    "cyklista",
    "motorista",
    "řidič",
    "pilot",
    "letec",
    "námořník",
    "kapitán",
    "lodivod",
    "plavčík",
    "plavec",
    "potápěč",
    "vodník",
    "rybář",
    "lovčí",
    "myslivec",
    "ostružiník",
    "honák",
    "zahradník",
    "pěstitel",
    "zemědělec",
    "farmář",
    "sedlák",
    "pastýř",
    "dojič",
    "košíkář",
    "hrnčíř",
    "sklář",
    "tkadlec",
    "krejčí",
    "švadlena",
    "obuvník",
    "kolář",
    "kovář",
    "truhlář",
    "tesař",
    "zedník",
    "klempíř",
    "instalatér",
    "elektrikář",
    "pokrývač",
    "malíř",
    "lakýrník",
    "sklář",
    "vážkař",
    "vinař"
];