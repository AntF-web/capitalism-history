const i18n = {
  en: {
    eyebrow: "Critical economic history",
    heroTitleLine1: "How Capitalism",
    heroTitleLine2: "Was Built",
    heroLead: "A chronological world map of markets, banks, colonial extraction, slavery, factories, corporations, debt, finance, and digital platforms.",
    timelineTitle: "Chronological events",
    filtersTitle: "System filter",
    mapControlsTitle: "Map layers",
    toggleFlows: "Flows on",
    toggleFlowsOff: "Flows off",
    togglePlaces: "Places on",
    togglePlacesOff: "Places off",
    mapNote: "Flows are interpretive historical routes, not exact shipping paths.",
    selectedEventTitle: "Selected event",
    selectedPlaceTitle: "Places in this event",
    contextTitle: "Critical context",
    legendTitle: "Legend",
    legendTrade: "Trade / market routes",
    legendFinance: "Banking / finance",
    legendSlavery: "Slavery / forced labor",
    legendIndustry: "Industry / infrastructure",
    legendState: "State / empire",
    legendLabor: "Labor struggle",
    overlayTitle: "Chronological world map",
    overlayText: "Choose an event on the left. The map jumps to its historical places and draws the flows that connect markets, colonies, banks, plantations, factories, and financial centers.",
    all: "All",
    filterLabels: {
      trade: "trade",
      finance: "finance",
      slavery: "slavery",
      industry: "industry",
      state: "state",
      labor: "labor"
    },
    contextLabels: {
      built: "What it built",
      benefited: "Who benefited",
      paid: "Who paid",
      link: "Capitalist link",
      critical: "Critical note"
    }
  },
  fr: {
    eyebrow: "Histoire économique critique",
    heroTitleLine1: "Comment le capitalisme",
    heroTitleLine2: "s’est construit",
    heroLead: "Une carte mondiale chronologique des marchés, banques, extractions coloniales, esclavages, usines, corporations, dettes, finances et plateformes numériques.",
    timelineTitle: "Événements chronologiques",
    filtersTitle: "Filtrer par système",
    mapControlsTitle: "Couches de la carte",
    toggleFlows: "Flux activés",
    toggleFlowsOff: "Flux désactivés",
    togglePlaces: "Lieux activés",
    togglePlacesOff: "Lieux désactivés",
    mapNote: "Les flux sont des routes historiques interprétatives, pas des trajets maritimes exacts.",
    selectedEventTitle: "Événement sélectionné",
    selectedPlaceTitle: "Lieux de cet événement",
    contextTitle: "Contexte critique",
    legendTitle: "Légende",
    legendTrade: "Commerce / routes marchandes",
    legendFinance: "Banque / finance",
    legendSlavery: "Esclavage / travail forcé",
    legendIndustry: "Industrie / infrastructure",
    legendState: "État / empire",
    legendLabor: "Luttes du travail",
    overlayTitle: "Carte mondiale chronologique",
    overlayText: "Choisissez un événement à gauche. La carte montre ses lieux historiques et trace les flux reliant marchés, colonies, banques, plantations, usines et centres financiers.",
    all: "Tous",
    filterLabels: {
      trade: "commerce",
      finance: "finance",
      slavery: "esclavage",
      industry: "industrie",
      state: "État",
      labor: "travail"
    },
    contextLabels: {
      built: "Ce que cela construit",
      benefited: "Qui en bénéficie",
      paid: "Qui paie",
      link: "Lien avec le capitalisme",
      critical: "Note critique"
    }
  }
};

function place(id, nameEn, nameFr, lat, lng, roleEn, roleFr) {
  return { id, name: { en: nameEn, fr: nameFr }, lat, lng, role: { en: roleEn, fr: roleFr } };
}

function flow(from, to, category, intensity, labelEn, labelFr) {
  return { from, to, category, intensity, label: { en: labelEn, fr: labelFr } };
}

const events = [
  {
    year: "c. 3000 BCE",
    category: "trade",
    tags: ["trade", "credit", "accounting"],
    places: [
      place("uruk", "Uruk / southern Mesopotamia", "Uruk / Mésopotamie du Sud", 31.32, 45.64, "Early urban accounting, grain storage, and temple economies.", "Comptabilité urbaine, stockage des céréales et économies de temple."),
      place("susa", "Susa", "Suse", 32.19, 48.25, "Regional exchange and administration.", "Échange régional et administration.")
    ],
    flows: [
      flow("uruk", "susa", "trade", 1, "Regional exchange and accounting networks", "Réseaux régionaux d’échange et de comptabilité")
    ],
    en: {
      title: "Early trade, accounting, and credit",
      summary: "Ancient Mesopotamian temples, merchants, ledgers, grain stores, and debt records show early systems of exchange, credit, and accounting.",
      detail: "Capitalism did not exist yet, but some tools later used by capitalism were already present: written accounts, debts, contracts, interest, storage, and organized trade.",
      contexts: {
        built: "It helped create the basic infrastructure of exchange: records, contracts, credit, measurement, and trust over distance.",
        benefited: "Rulers, temples, merchants, and large landholders could coordinate goods and labor at larger scales.",
        paid: "Peasants, debtors, enslaved people, and dependent laborers often carried the burden of debt and extraction.",
        link: "Modern capitalism later intensifies these tools by tying credit and accounting to private investment, profit, and market expansion.",
        critical: "Markets are ancient, but markets alone are not capitalism. Capitalism is a later system organized around accumulation, wage labor, private property, and competitive profit."
      }
    },
    fr: {
      title: "Premiers échanges, comptabilité et crédit",
      summary: "Les temples, marchands, registres, greniers et dettes de la Mésopotamie ancienne montrent des formes précoces d’échange, de crédit et de comptabilité.",
      detail: "Le capitalisme n’existe pas encore, mais certains outils qu’il utilisera plus tard sont déjà présents : comptes écrits, dettes, contrats, intérêt, stockage et commerce organisé.",
      contexts: {
        built: "Cela crée une infrastructure de base pour l’échange : registres, contrats, crédit, mesure et confiance à distance.",
        benefited: "Les souverains, temples, marchands et grands propriétaires peuvent coordonner biens et travail à plus grande échelle.",
        paid: "Les paysans, débiteurs, personnes esclavisées et travailleurs dépendants portent souvent le poids de la dette et de l’extraction.",
        link: "Le capitalisme moderne intensifie ces outils en reliant crédit et comptabilité à l’investissement privé, au profit et à l’expansion des marchés.",
        critical: "Les marchés sont anciens, mais le marché seul n’est pas le capitalisme. Le capitalisme est un système plus tardif organisé autour de l’accumulation, du salariat, de la propriété privée et du profit concurrentiel."
      }
    }
  },
  {
    year: "11th–13th c.",
    category: "trade",
    tags: ["fairs", "merchants", "bills of exchange"],
    places: [
      place("troyes", "Troyes / Champagne fairs", "Troyes / foires de Champagne", 48.30, 4.07, "Major medieval commercial fair.", "Grande foire commerciale médiévale."),
      place("genoa", "Genoa", "Gênes", 44.41, 8.93, "Maritime merchant city.", "Cité marchande maritime."),
      place("bruges", "Bruges", "Bruges", 51.21, 3.22, "Northern European trading hub.", "Centre commercial du nord de l’Europe.")
    ],
    flows: [
      flow("genoa", "troyes", "trade", 2, "Mediterranean merchants connect to inland fairs", "Les marchands méditerranéens rejoignent les foires intérieures"),
      flow("troyes", "bruges", "trade", 2, "Commercial routes link fairs to northern markets", "Les routes commerciales relient les foires aux marchés du Nord")
    ],
    en: {
      title: "Medieval trade fairs and merchant networks",
      summary: "Commercial fairs, bills of exchange, merchant law, and long-distance networks expand European trade.",
      detail: "The Champagne fairs and other trading centers connected merchants across Europe. Credit instruments reduced the need to carry metal money and helped long-distance commerce grow.",
      contexts: {
        built: "It expanded trade infrastructure: contracts, merchant courts, bills of exchange, and commercial trust networks.",
        benefited: "Merchant houses, towns, guilds, and rulers who taxed commerce gained influence.",
        paid: "Urban workers, peasants, and debtors increasingly faced market dependence and price pressure.",
        link: "Merchant capitalism developed before industrial capitalism, accumulating wealth through circulation and trade.",
        critical: "Medieval trade was still embedded in feudal and religious limits; later capitalism breaks many of those limits."
      }
    },
    fr: {
      title: "Foires médiévales et réseaux marchands",
      summary: "Les foires commerciales, lettres de change, droits marchands et réseaux à longue distance étendent le commerce européen.",
      detail: "Les foires de Champagne et d’autres centres commerciaux relient les marchands à travers l’Europe. Les instruments de crédit réduisent le besoin de transporter du métal et facilitent le commerce lointain.",
      contexts: {
        built: "Cela développe l’infrastructure commerciale : contrats, tribunaux marchands, lettres de change et réseaux de confiance.",
        benefited: "Les maisons marchandes, villes, guildes et souverains taxant le commerce gagnent en influence.",
        paid: "Les travailleurs urbains, paysans et débiteurs affrontent davantage la dépendance au marché et la pression des prix.",
        link: "Le capitalisme marchand se développe avant le capitalisme industriel, accumulant la richesse par la circulation et le commerce.",
        critical: "Le commerce médiéval reste encadré par des limites féodales et religieuses ; le capitalisme ultérieur en brise beaucoup."
      }
    }
  },
  {
    year: "1407",
    category: "finance",
    tags: ["banking", "public debt", "city-states"],
    places: [
      place("genoa", "Genoa", "Gênes", 44.41, 8.93, "Bank of Saint George and public debt.", "Banque de Saint-Georges et dette publique."),
      place("mediterranean", "Mediterranean trade zone", "Zone commerciale méditerranéenne", 38.0, 16.0, "Maritime exchange zone.", "Zone d’échange maritime.")
    ],
    flows: [
      flow("mediterranean", "genoa", "finance", 2, "Trade revenues and debt management concentrate in Genoa", "Revenus commerciaux et gestion de la dette se concentrent à Gênes")
    ],
    en: {
      title: "Bank of Saint George",
      summary: "Genoa's Bank of Saint George becomes one of Europe's early powerful public banks, linking state debt, commerce, and finance.",
      detail: "Early banks helped manage deposits, exchange, state debt, and merchant finance. They created institutions that could concentrate money and make long-distance capitalism possible.",
      contexts: {
        built: "It linked public authority, debt, and merchant capital through a durable financial institution.",
        benefited: "Merchant elites, creditors, and city-states gained tools for managing debt and trade.",
        paid: "Taxpayers and subject populations often financed public debt through taxes and extraction.",
        link: "Modern capitalism depends on banking systems that transform savings, debt, and credit into investment power.",
        critical: "Banking is not neutral: it decides who gets credit, who bears debt, and who controls future income."
      }
    },
    fr: {
      title: "Banque de Saint-Georges",
      summary: "La Banque de Saint-Georges à Gênes devient l’une des premières banques publiques puissantes d’Europe, reliant dette d’État, commerce et finance.",
      detail: "Les premières banques gèrent dépôts, change, dette publique et finance marchande. Elles créent des institutions capables de concentrer l’argent et de rendre possible un capitalisme à longue distance.",
      contexts: {
        built: "Elle relie autorité publique, dette et capital marchand dans une institution financière durable.",
        benefited: "Les élites marchandes, créanciers et cités-États obtiennent des outils pour gérer dette et commerce.",
        paid: "Les contribuables et populations soumises financent souvent la dette publique par les impôts et l’extraction.",
        link: "Le capitalisme moderne dépend de systèmes bancaires transformant épargne, dette et crédit en puissance d’investissement.",
        critical: "La banque n’est pas neutre : elle décide qui reçoit le crédit, qui porte la dette et qui contrôle les revenus futurs."
      }
    }
  },
  {
    year: "1492",
    category: "state",
    tags: ["colonialism", "land", "extraction"],
    places: [
      place("seville", "Seville / Castile", "Séville / Castille", 37.39, -5.99, "Imperial administration and Atlantic trade.", "Administration impériale et commerce atlantique."),
      place("caribbean", "Caribbean", "Caraïbes", 18.2, -66.5, "First major conquest zone in the Americas.", "Première grande zone de conquête dans les Amériques."),
      place("potosi", "Potosí", "Potosí", -19.58, -65.75, "Silver extraction and forced labor.", "Extraction de l’argent et travail forcé.")
    ],
    flows: [
      flow("seville", "caribbean", "state", 4, "Conquest and colonization cross the Atlantic", "Conquête et colonisation traversent l’Atlantique"),
      flow("potosi", "seville", "state", 4, "Silver extraction feeds European accumulation", "L’extraction de l’argent nourrit l’accumulation européenne")
    ],
    en: {
      title: "Conquest of the Americas begins",
      summary: "European conquest opens a violent era of colonization, land seizure, resource extraction, forced labor, and global trade reorganization.",
      detail: "The Americas became central to capitalist accumulation through silver, sugar, land appropriation, plantation systems, and forced labor.",
      contexts: {
        built: "It created a new Atlantic world economy based on conquest, extraction, plantation production, and maritime trade.",
        benefited: "European crowns, merchants, investors, slave traders, and plantation owners accumulated wealth.",
        paid: "Indigenous peoples suffered dispossession, genocide, forced labor, disease, and social destruction.",
        link: "Colonial extraction supplied bullion, raw materials, land, and profits that helped finance European capitalism.",
        critical: "Capitalism cannot be separated from colonialism; accumulation was built through violence, not only innovation."
      }
    },
    fr: {
      title: "Début de la conquête des Amériques",
      summary: "La conquête européenne ouvre une ère violente de colonisation, confiscation des terres, extraction, travail forcé et réorganisation du commerce mondial.",
      detail: "Les Amériques deviennent centrales dans l’accumulation capitaliste par l’argent, le sucre, l’appropriation des terres, les plantations et le travail forcé.",
      contexts: {
        built: "Elle crée une nouvelle économie atlantique fondée sur la conquête, l’extraction, la plantation et le commerce maritime.",
        benefited: "Les couronnes européennes, marchands, investisseurs, négriers et propriétaires de plantations accumulent des richesses.",
        paid: "Les peuples autochtones subissent dépossession, génocide, travail forcé, maladies et destruction sociale.",
        link: "L’extraction coloniale fournit métaux précieux, matières premières, terres et profits qui financent le capitalisme européen.",
        critical: "Le capitalisme ne peut pas être séparé du colonialisme ; l’accumulation s’est construite par la violence, pas seulement par l’innovation."
      }
    }
  },
  {
    year: "1500s–1800s",
    category: "slavery",
    tags: ["slavery", "plantations", "racial capitalism"],
    places: [
      place("west-africa", "West African coast", "Côte ouest-africaine", 6.0, 0.0, "Captive labor extraction and slave-trading ports.", "Extraction de main-d’œuvre captive et ports négriers."),
      place("caribbean", "Caribbean plantations", "Plantations des Caraïbes", 18.2, -66.5, "Sugar, coffee, and plantation economies.", "Sucre, café et économies de plantation."),
      place("liverpool", "Liverpool", "Liverpool", 53.41, -2.99, "Shipping, insurance, merchant capital.", "Transport maritime, assurance et capital marchand."),
      place("charleston", "Charleston / U.S. South", "Charleston / Sud des États-Unis", 32.78, -79.93, "Slave plantation economy.", "Économie esclavagiste de plantation.")
    ],
    flows: [
      flow("west-africa", "caribbean", "slavery", 4, "Forced transatlantic movement of enslaved Africans", "Déplacement transatlantique forcé des Africains esclavisés"),
      flow("caribbean", "liverpool", "slavery", 4, "Plantation commodities and profits return to Europe", "Marchandises et profits de plantation retournent en Europe"),
      flow("west-africa", "charleston", "slavery", 4, "Slave trade feeds plantation expansion", "La traite nourrit l’expansion des plantations")
    ],
    en: {
      title: "Atlantic slavery and plantation capitalism",
      summary: "The transatlantic slave trade and plantation economies turn forced African labor into a foundation of Atlantic wealth.",
      detail: "Sugar, cotton, tobacco, coffee, and other plantation commodities connected enslaved labor to European finance, shipping, insurance, manufacturing, and consumption.",
      contexts: {
        built: "It built plantation capitalism: forced labor, racial domination, land theft, export crops, credit, insurance, and maritime trade.",
        benefited: "Planters, merchants, banks, insurers, shipowners, manufacturers, and European states accumulated wealth.",
        paid: "Enslaved Africans and their descendants paid through forced labor, family separation, violence, death, and racialized oppression.",
        link: "Slavery generated capital, commodities, credit, and industrial inputs while helping build global markets.",
        critical: "Slavery was not outside capitalism. It was one of the central engines of capitalist development."
      }
    },
    fr: {
      title: "Esclavage atlantique et capitalisme de plantation",
      summary: "La traite transatlantique et les économies de plantation transforment le travail forcé africain en fondation de la richesse atlantique.",
      detail: "Le sucre, le coton, le tabac, le café et d’autres marchandises de plantation relient le travail esclavisé à la finance européenne, au transport maritime, à l’assurance, à l’industrie et à la consommation.",
      contexts: {
        built: "Cela construit le capitalisme de plantation : travail forcé, domination raciale, vol des terres, cultures d’exportation, crédit, assurance et commerce maritime.",
        benefited: "Planteurs, marchands, banques, assureurs, armateurs, industriels et États européens accumulent des richesses.",
        paid: "Les Africains esclavisés et leurs descendants paient par le travail forcé, la séparation familiale, la violence, la mort et l’oppression racialisée.",
        link: "L’esclavage produit capital, marchandises, crédit et intrants industriels tout en construisant des marchés mondiaux.",
        critical: "L’esclavage n’était pas extérieur au capitalisme. Il fut l’un des moteurs centraux de son développement."
      }
    }
  },
  {
    year: "1602",
    category: "finance",
    tags: ["VOC", "shares", "corporation"],
    places: [
      place("amsterdam", "Amsterdam", "Amsterdam", 52.37, 4.90, "Stock exchange, investors, and VOC headquarters.", "Bourse, investisseurs et siège de la VOC."),
      place("cape-town", "Cape route", "Route du Cap", -34.36, 18.47, "Strategic maritime route.", "Route maritime stratégique."),
      place("batavia", "Batavia / Jakarta", "Batavia / Jakarta", -6.21, 106.85, "Colonial trading center in Asia.", "Centre commercial colonial en Asie.")
    ],
    flows: [
      flow("amsterdam", "cape-town", "finance", 3, "Joint-stock capital moves through imperial sea routes", "Le capital par actions circule par les routes maritimes impériales"),
      flow("cape-town", "batavia", "finance", 3, "VOC trade and colonial power reach Asia", "Le commerce et le pouvoir colonial de la VOC atteignent l’Asie")
    ],
    en: {
      title: "Dutch East India Company and tradable shares",
      summary: "The VOC is chartered as a joint-stock company, allowing investors to buy shares in long-distance imperial trade.",
      detail: "The VOC helped create a model of corporate capitalism: pooled investment, tradable shares, monopoly rights, state backing, war, colonization, and profit.",
      contexts: {
        built: "It scaled investment beyond individual merchants by pooling risk and reward through shares.",
        benefited: "Investors, merchant elites, and the Dutch state gained from Asian trade and colonial power.",
        paid: "Colonized populations faced violence, forced trade, extraction, and military domination.",
        link: "The joint-stock corporation became one of capitalism's most powerful institutions.",
        critical: "The modern corporation was born close to empire, monopoly, war, and colonial extraction."
      }
    },
    fr: {
      title: "Compagnie néerlandaise des Indes orientales et actions négociables",
      summary: "La VOC est créée comme société par actions, permettant aux investisseurs d’acheter des parts du commerce impérial lointain.",
      detail: "La VOC contribue à créer un modèle de capitalisme corporatif : investissement mutualisé, actions négociables, monopoles, soutien de l’État, guerre, colonisation et profit.",
      contexts: {
        built: "Elle change l’échelle de l’investissement en mutualisant risque et récompense par les actions.",
        benefited: "Les investisseurs, élites marchandes et l’État néerlandais bénéficient du commerce asiatique et du pouvoir colonial.",
        paid: "Les populations colonisées subissent violence, commerce forcé, extraction et domination militaire.",
        link: "La société par actions devient l’une des institutions les plus puissantes du capitalisme.",
        critical: "La corporation moderne naît près de l’empire, du monopole, de la guerre et de l’extraction coloniale."
      }
    }
  },
  {
    year: "1694",
    category: "finance",
    tags: ["central banking", "public debt", "war"],
    places: [
      place("london", "London", "Londres", 51.51, -0.13, "Bank of England and public debt.", "Banque d’Angleterre et dette publique."),
      place("atlantic", "Atlantic empire", "Empire atlantique", 25, -40, "War, trade, and imperial finance.", "Guerre, commerce et finance impériale.")
    ],
    flows: [
      flow("london", "atlantic", "finance", 3, "Public debt and war finance support imperial expansion", "Dette publique et financement de guerre soutiennent l’expansion impériale")
    ],
    en: {
      title: "Bank of England founded",
      summary: "The Bank of England is founded as a private bank to act as banker to the government and help finance war.",
      detail: "The Bank of England tied state power, war finance, public debt, and private investors together. This helped build the modern fiscal-financial state.",
      contexts: {
        built: "It institutionalized public debt and made state borrowing more reliable for investors.",
        benefited: "The British state, creditors, merchants, and financial elites gained a powerful monetary institution.",
        paid: "Taxpayers, colonized populations, and war-affected communities bore the costs of empire and debt.",
        link: "Modern capitalism grows with states that can borrow, tax, wage war, and protect property.",
        critical: "Capitalism did not grow against the state; it grew through state power."
      }
    },
    fr: {
      title: "Fondation de la Banque d’Angleterre",
      summary: "La Banque d’Angleterre est fondée comme banque privée chargée de servir de banquier au gouvernement et de financer la guerre.",
      detail: "La Banque d’Angleterre lie pouvoir d’État, financement de la guerre, dette publique et investisseurs privés. Elle contribue à construire l’État fiscal-financier moderne.",
      contexts: {
        built: "Elle institutionnalise la dette publique et rend l’emprunt d’État plus fiable pour les investisseurs.",
        benefited: "L’État britannique, les créanciers, marchands et élites financières obtiennent une institution monétaire puissante.",
        paid: "Les contribuables, populations colonisées et communautés touchées par la guerre portent le coût de l’empire et de la dette.",
        link: "Le capitalisme moderne grandit avec des États capables d’emprunter, de taxer, de faire la guerre et de protéger la propriété.",
        critical: "Le capitalisme ne s’est pas développé contre l’État ; il s’est développé par le pouvoir d’État."
      }
    }
  },
  {
    year: "1760s–1840s",
    category: "industry",
    tags: ["factories", "machines", "coal"],
    places: [
      place("manchester", "Manchester", "Manchester", 53.48, -2.24, "Textile factories and industrial labor.", "Usines textiles et travail industriel."),
      place("lancashire", "Lancashire coal and mills", "Charbon et filatures du Lancashire", 53.76, -2.70, "Coal, mills, and mechanized production.", "Charbon, filatures et production mécanisée."),
      place("charleston", "U.S. South cotton zone", "Zone cotonnière du Sud des États-Unis", 32.78, -79.93, "Slave-produced cotton inputs.", "Intrants cotonniers produits par l’esclavage.")
    ],
    flows: [
      flow("charleston", "manchester", "slavery", 4, "Slave-produced cotton feeds British textile mills", "Le coton produit par l’esclavage alimente les filatures britanniques"),
      flow("lancashire", "manchester", "industry", 3, "Coal and machinery power factory production", "Charbon et machines alimentent la production industrielle")
    ],
    en: {
      title: "Industrial Revolution",
      summary: "Factories, steam power, coal, textile machinery, and urban labor transform production in Britain and then beyond.",
      detail: "Industrial capitalism reorganized work around machines, factories, wage labor, discipline, energy extraction, and mass production.",
      contexts: {
        built: "It created factory capitalism: mechanized production, urban labor, coal energy, and mass commodities.",
        benefited: "Industrialists, investors, imperial merchants, and states gained new productive power.",
        paid: "Workers faced long hours, dangerous conditions, child labor, slums, and loss of autonomy.",
        link: "Industrial capitalism shifts accumulation from trade alone to production organized for profit.",
        critical: "Industrial wealth depended on coal, colonial raw materials, disciplined labor, and often slave-produced inputs like cotton."
      }
    },
    fr: {
      title: "Révolution industrielle",
      summary: "Usines, vapeur, charbon, machines textiles et travail urbain transforment la production en Grande-Bretagne puis ailleurs.",
      detail: "Le capitalisme industriel réorganise le travail autour des machines, des usines, du salariat, de la discipline, de l’extraction énergétique et de la production de masse.",
      contexts: {
        built: "Il crée le capitalisme d’usine : production mécanisée, travail urbain, énergie charbonnière et marchandises de masse.",
        benefited: "Les industriels, investisseurs, marchands impériaux et États gagnent une nouvelle puissance productive.",
        paid: "Les travailleurs subissent longues journées, conditions dangereuses, travail des enfants, taudis et perte d’autonomie.",
        link: "Le capitalisme industriel déplace l’accumulation du commerce seul vers une production organisée pour le profit.",
        critical: "La richesse industrielle dépend du charbon, des matières premières coloniales, du travail discipliné et souvent d’intrants produits par l’esclavage comme le coton."
      }
    }
  },
  {
    year: "1830s–1870s",
    category: "industry",
    tags: ["railways", "telegraph", "infrastructure"],
    places: [
      place("london", "London finance", "Finance londonienne", 51.51, -0.13, "Railway finance and capital markets.", "Finance ferroviaire et marchés de capitaux."),
      place("india-rail", "Indian railways", "Chemins de fer indiens", 22.57, 88.36, "Colonial infrastructure and resource circulation.", "Infrastructure coloniale et circulation des ressources."),
      place("us-rail", "U.S. transcontinental rail", "Chemin de fer transcontinental américain", 41.88, -87.63, "Continental market integration.", "Intégration du marché continental.")
    ],
    flows: [
      flow("london", "india-rail", "industry", 3, "Imperial finance builds colonial infrastructure", "La finance impériale construit l’infrastructure coloniale"),
      flow("london", "us-rail", "industry", 2, "Capital markets fund railway expansion", "Les marchés de capitaux financent l’expansion ferroviaire")
    ],
    en: {
      title: "Railways, telegraphs, and infrastructure capitalism",
      summary: "Railways and telegraphs compress time and space, speed up commodity flows, and reorganize territories around markets.",
      detail: "Infrastructure became a major field of investment and speculation. Railways connected mines, farms, ports, factories, and markets.",
      contexts: {
        built: "It created faster circulation of goods, labor, information, and capital.",
        benefited: "Railway companies, investors, industrial firms, landlords, and imperial states gained new reach.",
        paid: "Workers, Indigenous peoples, peasants, and colonized communities often faced displacement and violence.",
        link: "Capitalism needs circulation: goods and money must move quickly for profit to expand.",
        critical: "Infrastructure is never neutral. It decides which territories are connected, exploited, or sacrificed."
      }
    },
    fr: {
      title: "Chemins de fer, télégraphe et capitalisme d’infrastructure",
      summary: "Les chemins de fer et le télégraphe compressent temps et espace, accélèrent les flux de marchandises et réorganisent les territoires autour des marchés.",
      detail: "L’infrastructure devient un champ majeur d’investissement et de spéculation. Les chemins de fer relient mines, fermes, ports, usines et marchés.",
      contexts: {
        built: "Elle accélère la circulation des biens, du travail, de l’information et du capital.",
        benefited: "Compagnies ferroviaires, investisseurs, firmes industrielles, propriétaires et États impériaux gagnent en portée.",
        paid: "Travailleurs, peuples autochtones, paysans et communautés colonisées subissent souvent déplacement et violence.",
        link: "Le capitalisme a besoin de circulation : biens et argent doivent bouger vite pour que le profit s’étende.",
        critical: "L’infrastructure n’est jamais neutre. Elle décide quels territoires sont connectés, exploités ou sacrifiés."
      }
    }
  },
  {
    year: "1870s–1914",
    category: "state",
    tags: ["imperialism", "gold standard", "colonies"],
    places: [
      place("london", "London", "Londres", 51.51, -0.13, "Financial and imperial center.", "Centre financier et impérial."),
      place("berlin", "Berlin", "Berlin", 52.52, 13.40, "Imperial diplomacy and partition politics.", "Diplomatie impériale et politique de partage."),
      place("kinshasa", "Congo Basin", "Bassin du Congo", -4.32, 15.31, "Colonial extraction and forced labor.", "Extraction coloniale et travail forcé."),
      place("bombay", "Bombay / Mumbai", "Bombay / Mumbai", 19.08, 72.88, "Colonial trade, cotton, finance.", "Commerce colonial, coton, finance.")
    ],
    flows: [
      flow("berlin", "kinshasa", "state", 4, "Imperial partition opens extraction zones", "Le partage impérial ouvre des zones d’extraction"),
      flow("kinshasa", "london", "state", 4, "Rubber, minerals, and colonial profits move to Europe", "Caoutchouc, minerais et profits coloniaux vont vers l’Europe"),
      flow("bombay", "london", "trade", 3, "Colonial trade connects India to imperial finance", "Le commerce colonial relie l’Inde à la finance impériale")
    ],
    en: {
      title: "Imperialism, gold standard, and global capitalism",
      summary: "European empires, gold-backed currencies, global trade, and colonial resource extraction intensify world-market integration.",
      detail: "The late 19th century fused industrial capitalism with empire: raw materials, forced labor regimes, racial hierarchies, military conquest, and global finance.",
      contexts: {
        built: "It integrated colonies into a world economy structured around European industrial and financial power.",
        benefited: "Imperial states, banks, mining companies, plantation firms, and manufacturers accumulated wealth.",
        paid: "Colonized people faced dispossession, forced labor, famine, extraction, and political domination.",
        link: "Global capitalism expanded through empire, not only free trade.",
        critical: "The world market was built by gunboats, borders, mines, plantations, railways, and debt."
      }
    },
    fr: {
      title: "Impérialisme, étalon-or et capitalisme mondial",
      summary: "Les empires européens, monnaies adossées à l’or, commerce mondial et extraction coloniale intensifient l’intégration du marché mondial.",
      detail: "La fin du XIXe siècle fusionne capitalisme industriel et empire : matières premières, régimes de travail forcé, hiérarchies raciales, conquête militaire et finance mondiale.",
      contexts: {
        built: "Elle intègre les colonies à une économie mondiale structurée par la puissance industrielle et financière européenne.",
        benefited: "États impériaux, banques, compagnies minières, firmes de plantation et industriels accumulent des richesses.",
        paid: "Les peuples colonisés subissent dépossession, travail forcé, famines, extraction et domination politique.",
        link: "Le capitalisme mondial s’étend par l’empire, pas seulement par le libre-échange.",
        critical: "Le marché mondial a été construit par les canonnières, frontières, mines, plantations, chemins de fer et dettes."
      }
    }
  },
  {
    year: "1913",
    category: "finance",
    tags: ["central bank", "credit", "US"],
    places: [
      place("washington", "Washington, D.C.", "Washington", 38.90, -77.04, "Federal Reserve Act and state authority.", "Federal Reserve Act et autorité de l’État."),
      place("new-york", "New York", "New York", 40.71, -74.01, "Financial markets and banking power.", "Marchés financiers et pouvoir bancaire.")
    ],
    flows: [
      flow("washington", "new-york", "finance", 3, "Central banking connects state authority and financial markets", "La banque centrale relie autorité d’État et marchés financiers")
    ],
    en: {
      title: "Federal Reserve created",
      summary: "The United States creates a central banking system to stabilize money, credit, and banking after repeated financial panics.",
      detail: "The Federal Reserve became central to U.S. and global capitalism by managing interest rates, banking liquidity, crises, and monetary policy.",
      contexts: {
        built: "It strengthened the state's role in managing credit, banks, and crisis response.",
        benefited: "Banks, investors, and the state gained a lender-of-last-resort structure.",
        paid: "Workers and debtors are deeply affected by monetary policy, unemployment, inflation, and credit cycles.",
        link: "Modern capitalism depends on central banks to manage instability that markets produce.",
        critical: "Central banks often present themselves as technical institutions, but their decisions distribute pain and protection unevenly."
      }
    },
    fr: {
      title: "Création de la Réserve fédérale",
      summary: "Les États-Unis créent un système de banque centrale pour stabiliser monnaie, crédit et banques après des paniques financières répétées.",
      detail: "La Réserve fédérale devient centrale pour le capitalisme américain et mondial en gérant taux d’intérêt, liquidité bancaire, crises et politique monétaire.",
      contexts: {
        built: "Elle renforce le rôle de l’État dans la gestion du crédit, des banques et des crises.",
        benefited: "Les banques, investisseurs et l’État obtiennent une structure de prêteur en dernier ressort.",
        paid: "Les travailleurs et débiteurs sont profondément affectés par la politique monétaire, le chômage, l’inflation et les cycles du crédit.",
        link: "Le capitalisme moderne dépend des banques centrales pour gérer l’instabilité produite par les marchés.",
        critical: "Les banques centrales se présentent souvent comme techniques, mais leurs décisions distribuent douleur et protection de manière inégale."
      }
    }
  },
  {
    year: "1944",
    category: "state",
    tags: ["IMF", "World Bank", "dollar"],
    places: [
      place("bretton-woods", "Bretton Woods", "Bretton Woods", 44.26, -71.44, "Conference creating the postwar monetary order.", "Conférence créant l’ordre monétaire d’après-guerre."),
      place("washington", "Washington, D.C.", "Washington", 38.90, -77.04, "IMF and World Bank headquarters.", "Sièges du FMI et de la Banque mondiale."),
      place("global-south", "Debtor countries / Global South", "Pays débiteurs / Sud global", 5, 20, "Development finance and debt relations.", "Finance du développement et relations de dette.")
    ],
    flows: [
      flow("bretton-woods", "washington", "state", 3, "Postwar institutions are centered in Washington", "Les institutions d’après-guerre se centrent à Washington"),
      flow("washington", "global-south", "finance", 3, "Development lending and conditionality spread globally", "Prêts au développement et conditionnalité se diffusent mondialement")
    ],
    en: {
      title: "Bretton Woods system",
      summary: "Postwar institutions create a new global monetary order around the dollar, the IMF, and the World Bank.",
      detail: "Bretton Woods reorganized global capitalism after World War II. It tied development, reconstruction, currencies, debt, and U.S. power together.",
      contexts: {
        built: "It created institutions for global monetary coordination, development lending, and postwar reconstruction.",
        benefited: "The United States, allied states, international finance, and reconstruction industries gained power.",
        paid: "Debtor countries later faced conditionality, austerity, and development models shaped from outside.",
        link: "Capitalism became more globally governed through monetary institutions and development finance.",
        critical: "Development finance can build infrastructure, but it can also deepen dependency and debt."
      }
    },
    fr: {
      title: "Système de Bretton Woods",
      summary: "Les institutions d’après-guerre créent un nouvel ordre monétaire mondial autour du dollar, du FMI et de la Banque mondiale.",
      detail: "Bretton Woods réorganise le capitalisme mondial après la Seconde Guerre mondiale. Il relie développement, reconstruction, monnaies, dette et puissance américaine.",
      contexts: {
        built: "Il crée des institutions de coordination monétaire mondiale, de prêts au développement et de reconstruction.",
        benefited: "Les États-Unis, États alliés, finance internationale et industries de reconstruction gagnent du pouvoir.",
        paid: "Les pays débiteurs affronteront plus tard conditionnalité, austérité et modèles de développement imposés de l’extérieur.",
        link: "Le capitalisme devient davantage gouverné mondialement par les institutions monétaires et la finance du développement.",
        critical: "La finance du développement peut construire des infrastructures, mais aussi approfondir dépendance et dette."
      }
    }
  },
  {
    year: "1971–1980s",
    category: "finance",
    tags: ["neoliberalism", "debt", "deregulation"],
    places: [
      place("washington", "Washington, D.C.", "Washington", 38.90, -77.04, "Dollar policy, IMF, World Bank, U.S. power.", "Politique du dollar, FMI, Banque mondiale, pouvoir américain."),
      place("london", "London", "Londres", 51.51, -0.13, "Financial deregulation and markets.", "Dérégulation financière et marchés."),
      place("latin-america", "Latin American debt crisis", "Crise de la dette latino-américaine", -15, -60, "Debt, austerity, and structural adjustment.", "Dette, austérité et ajustement structurel.")
    ],
    flows: [
      flow("washington", "london", "finance", 3, "Financial deregulation links dollar power and global markets", "La dérégulation financière relie pouvoir du dollar et marchés mondiaux"),
      flow("washington", "latin-america", "finance", 4, "Debt discipline and adjustment policies spread", "Discipline de la dette et politiques d’ajustement se diffusent")
    ],
    en: {
      title: "Neoliberal turn and financial globalization",
      summary: "The dollar leaves gold convertibility, capital controls weaken, deregulation grows, and market discipline becomes global policy.",
      detail: "From the 1970s onward, capitalism shifts toward deregulation, privatization, anti-union policy, global debt markets, and intensified financial power.",
      contexts: {
        built: "It expanded financial globalization, austerity politics, privatization, and shareholder-oriented capitalism.",
        benefited: "Financial institutions, asset owners, multinational corporations, and creditor states gained influence.",
        paid: "Workers, public services, debtor nations, and unions often faced cuts, unemployment, and weakened bargaining power.",
        link: "Profit increasingly comes through finance, debt, asset prices, and global supply chains.",
        critical: "Neoliberalism presents markets as freedom, while often using state power to discipline labor and debtors."
      }
    },
    fr: {
      title: "Tournant néolibéral et mondialisation financière",
      summary: "Le dollar quitte la convertibilité-or, les contrôles de capitaux s’affaiblissent, la dérégulation progresse et la discipline de marché devient politique mondiale.",
      detail: "À partir des années 1970, le capitalisme se déplace vers dérégulation, privatisation, politiques anti-syndicales, marchés mondiaux de la dette et puissance financière accrue.",
      contexts: {
        built: "Il étend la mondialisation financière, l’austérité, la privatisation et le capitalisme orienté actionnaires.",
        benefited: "Institutions financières, détenteurs d’actifs, multinationales et États créanciers gagnent en influence.",
        paid: "Travailleurs, services publics, pays débiteurs et syndicats subissent coupes, chômage et affaiblissement du pouvoir de négociation.",
        link: "Le profit vient de plus en plus de la finance, de la dette, des prix d’actifs et des chaînes d’approvisionnement mondiales.",
        critical: "Le néolibéralisme présente les marchés comme liberté tout en utilisant souvent l’État pour discipliner travail et débiteurs."
      }
    }
  },
  {
    year: "1995",
    category: "trade",
    tags: ["WTO", "globalization", "trade rules"],
    places: [
      place("geneva", "Geneva / WTO", "Genève / OMC", 46.20, 6.14, "World trade rules and dispute system.", "Règles commerciales mondiales et règlement des différends."),
      place("shenzhen", "Shenzhen / export manufacturing", "Shenzhen / production d’exportation", 22.54, 114.06, "Export manufacturing and global supply chains.", "Production d’exportation et chaînes mondiales."),
      place("mexico-border", "Mexico border factories", "Usines frontalières mexicaines", 31.74, -106.49, "Maquiladora production and trade integration.", "Production maquiladora et intégration commerciale.")
    ],
    flows: [
      flow("geneva", "shenzhen", "trade", 3, "Trade rules support global manufacturing chains", "Les règles commerciales soutiennent les chaînes manufacturières mondiales"),
      flow("geneva", "mexico-border", "trade", 3, "Trade agreements reorganize labor and production zones", "Les accords commerciaux réorganisent les zones de travail et de production")
    ],
    en: {
      title: "World Trade Organization begins",
      summary: "The WTO strengthens global trade rules, intellectual property regimes, and dispute systems for a more integrated world market.",
      detail: "The WTO helped lock in a legal architecture for globalized capitalism, shaping tariffs, trade disputes, intellectual property, and investment-friendly policy.",
      contexts: {
        built: "It expanded the legal infrastructure of global trade and corporate market access.",
        benefited: "Export industries, multinational corporations, and powerful trading states gained tools to shape markets.",
        paid: "Workers, small farmers, and poorer countries often faced competition and policy constraints.",
        link: "Capitalism becomes a rules-based global order, not simply spontaneous exchange.",
        critical: "Free trade rules often protect corporate freedom more strongly than labor, ecology, or local sovereignty."
      }
    },
    fr: {
      title: "Création de l’Organisation mondiale du commerce",
      summary: "L’OMC renforce les règles du commerce mondial, la propriété intellectuelle et les mécanismes de règlement des différends.",
      detail: "L’OMC contribue à verrouiller l’architecture juridique du capitalisme mondialisé : tarifs, litiges commerciaux, propriété intellectuelle et politiques favorables à l’investissement.",
      contexts: {
        built: "Elle étend l’infrastructure juridique du commerce mondial et l’accès des entreprises aux marchés.",
        benefited: "Industries exportatrices, multinationales et États commerciaux puissants gagnent des outils pour façonner les marchés.",
        paid: "Travailleurs, petits agriculteurs et pays pauvres affrontent concurrence et contraintes politiques.",
        link: "Le capitalisme devient un ordre mondial fondé sur des règles, pas seulement un échange spontané.",
        critical: "Les règles du libre-échange protègent souvent la liberté des entreprises plus fortement que le travail, l’écologie ou la souveraineté locale."
      }
    }
  },
  {
    year: "2008",
    category: "finance",
    tags: ["crisis", "banks", "debt"],
    places: [
      place("new-york", "New York / Wall Street", "New York / Wall Street", 40.71, -74.01, "Financial crisis epicenter.", "Épicentre de la crise financière."),
      place("london", "London", "Londres", 51.51, -0.13, "Global banking transmission.", "Transmission bancaire mondiale."),
      place("reykjavik", "Iceland", "Islande", 64.15, -21.94, "Banking collapse shock.", "Choc d’effondrement bancaire.")
    ],
    flows: [
      flow("new-york", "london", "finance", 4, "Mortgage finance crisis spreads through global banking", "La crise du crédit immobilier se diffuse par la banque mondiale"),
      flow("london", "reykjavik", "finance", 3, "Interconnected banking collapses expose systemic fragility", "Les effondrements bancaires interconnectés exposent la fragilité systémique")
    ],
    en: {
      title: "Global financial crisis",
      summary: "A crisis centered on mortgage finance and banking spreads globally, exposing the fragility of deregulated financial capitalism.",
      detail: "The 2008 crash showed how debt, speculation, derivatives, housing, and global banking had become deeply interconnected.",
      contexts: {
        built: "It reinforced the idea that major banks could be too big to fail and that states would rescue financial systems.",
        benefited: "Many financial institutions were protected, while asset owners later benefited from monetary stimulus.",
        paid: "Households, workers, renters, debtors, and public services absorbed unemployment, foreclosures, and austerity.",
        link: "Financial capitalism creates private profits but can socialize losses during crises.",
        critical: "The bailout era revealed that markets demand discipline for the poor and rescue for the powerful."
      }
    },
    fr: {
      title: "Crise financière mondiale",
      summary: "Une crise centrée sur le crédit immobilier et les banques se diffuse mondialement, exposant la fragilité du capitalisme financier dérégulé.",
      detail: "Le krach de 2008 montre à quel point dette, spéculation, produits dérivés, logement et banque mondiale sont interconnectés.",
      contexts: {
        built: "Il renforce l’idée que les grandes banques peuvent être trop grandes pour faire faillite et que les États sauveront le système financier.",
        benefited: "De nombreuses institutions financières sont protégées, tandis que les détenteurs d’actifs bénéficient ensuite des politiques monétaires.",
        paid: "Ménages, travailleurs, locataires, débiteurs et services publics absorbent chômage, saisies et austérité.",
        link: "Le capitalisme financier crée des profits privés mais peut socialiser les pertes en période de crise.",
        critical: "L’ère des sauvetages révèle que les marchés exigent la discipline pour les pauvres et le secours pour les puissants."
      }
    }
  },
  {
    year: "2010s–2020s",
    category: "finance",
    tags: ["platforms", "data", "gig work"],
    places: [
      place("silicon-valley", "Silicon Valley", "Silicon Valley", 37.39, -122.08, "Platform firms, venture capital, data extraction.", "Plateformes, capital-risque, extraction de données."),
      place("shenzhen", "Shenzhen", "Shenzhen", 22.54, 114.06, "Hardware manufacturing and logistics.", "Production matérielle et logistique."),
      place("bangalore", "Bangalore", "Bangalore", 12.97, 77.59, "Software labor and outsourced services.", "Travail logiciel et services externalisés."),
      place("global-users", "Global users", "Utilisateurs mondiaux", 20, 0, "Attention, data, and platform dependence.", "Attention, données et dépendance aux plateformes.")
    ],
    flows: [
      flow("global-users", "silicon-valley", "finance", 4, "Data and attention become monetized assets", "Données et attention deviennent des actifs monétisés"),
      flow("silicon-valley", "shenzhen", "industry", 3, "Platform capitalism depends on hardware supply chains", "Le capitalisme de plateforme dépend des chaînes matérielles"),
      flow("silicon-valley", "bangalore", "labor", 3, "Digital labor and outsourcing support platform growth", "Le travail numérique et l’externalisation soutiennent la croissance des plateformes")
    ],
    en: {
      title: "Platform capitalism and data extraction",
      summary: "Digital platforms turn data, attention, logistics, cloud infrastructure, and gig work into new engines of accumulation.",
      detail: "Capitalism expands into digital life through platforms, surveillance advertising, algorithmic management, cloud monopolies, gig labor, and data extraction.",
      contexts: {
        built: "It creates new forms of monopoly power around data, networks, logistics, cloud infrastructure, and attention.",
        benefited: "Platform owners, venture capital, advertisers, cloud firms, and shareholders gained new revenue models.",
        paid: "Gig workers, users, small sellers, artists, and communities face surveillance, precarity, dependency, and extraction.",
        link: "Data becomes a productive asset, while platforms mediate markets and labor at massive scale.",
        critical: "The factory did not disappear. It became distributed through warehouses, phones, apps, servers, and algorithmic control."
      }
    },
    fr: {
      title: "Capitalisme de plateforme et extraction des données",
      summary: "Les plateformes numériques transforment données, attention, logistique, cloud et travail à la tâche en nouveaux moteurs d’accumulation.",
      detail: "Le capitalisme s’étend dans la vie numérique par les plateformes, la publicité de surveillance, le management algorithmique, les monopoles du cloud, le travail précaire et l’extraction des données.",
      contexts: {
        built: "Il crée de nouvelles formes de pouvoir monopolistique autour des données, réseaux, infrastructures cloud, logistique et attention.",
        benefited: "Propriétaires de plateformes, capital-risque, annonceurs, entreprises cloud et actionnaires gagnent de nouveaux modèles de revenus.",
        paid: "Travailleurs de plateformes, utilisateurs, petits vendeurs, artistes et communautés subissent surveillance, précarité, dépendance et extraction.",
        link: "La donnée devient un actif productif, tandis que les plateformes médiatisent marchés et travail à grande échelle.",
        critical: "L’usine n’a pas disparu. Elle s’est distribuée dans les entrepôts, téléphones, applications, serveurs et contrôles algorithmiques."
      }
    }
  }
];

let currentLang = localStorage.getItem("capitalismMapLang") || "en";
let activeFilter = "All";
let selectedIndex = 0;
let activeContext = "built";
let selectedPlaceId = null;
let flowsVisible = true;
let placesVisible = true;

const map = L.map("map", { worldCopyJump: true, zoomControl: true }).setView([20, 10], 2);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
}).addTo(map);

const timelineButtonsEl = document.getElementById("timelineButtons");
const bottomTimelineEl = document.getElementById("bottomTimeline");
const filtersEl = document.getElementById("filters");
const eventYearEl = document.getElementById("eventYear");
const eventTitleEl = document.getElementById("eventTitle");
const eventSummaryEl = document.getElementById("eventSummary");
const eventTagsEl = document.getElementById("eventTags");
const placeListEl = document.getElementById("placeList");
const contextTabsEl = document.getElementById("contextTabs");
const contextBoxEl = document.getElementById("contextBox");
const toggleFlowsBtn = document.getElementById("toggleFlowsBtn");
const togglePlacesBtn = document.getElementById("togglePlacesBtn");

let placeLayers = [];
let flowLayers = [];

function t(key) {
  return i18n[currentLang][key];
}

function eventText(event) {
  return event[currentLang] || event.en;
}

function translateStaticUI() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (i18n[currentLang][key]) {
      element.textContent = i18n[currentLang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });

  toggleFlowsBtn.textContent = flowsVisible ? t("toggleFlows") : t("toggleFlowsOff");
  togglePlacesBtn.textContent = placesVisible ? t("togglePlaces") : t("togglePlacesOff");
}

function labelFilter(filter) {
  if (filter === "All") return t("all");
  return i18n[currentLang].filterLabels[filter] || filter;
}

function labelContext(key) {
  return i18n[currentLang].contextLabels[key] || key;
}

function visibleEventIndexes() {
  return events
    .map((event, index) => ({ event, index }))
    .filter(item => activeFilter === "All" || item.event.category === activeFilter);
}

function categoryColor(category) {
  return {
    trade: "#5bc0eb",
    finance: "#f9c74f",
    slavery: "#ef476f",
    industry: "#f9844a",
    state: "#9b5de5",
    labor: "#06d6a0"
  }[category] || "#f9c74f";
}

function markerRadius(category) {
  return category === "slavery" || category === "state" ? 10 : 8;
}

function renderFilters() {
  const filters = ["All", "trade", "finance", "slavery", "industry", "state", "labor"];

  filtersEl.innerHTML = filters.map(filter => `
    <button class="filter-btn ${filter === activeFilter ? "active" : ""}" data-filter="${filter}">
      ${labelFilter(filter)}
    </button>
  `).join("");

  filtersEl.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      const visible = visibleEventIndexes();
      if (!visible.some(item => item.index === selectedIndex) && visible.length) {
        selectedIndex = visible[0].index;
      }
      selectedPlaceId = null;
      renderAll();
    });
  });
}

function renderTimelineButtons() {
  const visible = visibleEventIndexes();

  timelineButtonsEl.innerHTML = visible.map(({ event, index }) => {
    const text = eventText(event);
    return `
      <button class="timeline-btn ${index === selectedIndex ? "active" : ""}" data-index="${index}">
        ${event.year}
      </button>
    `;
  }).join("");

  bottomTimelineEl.innerHTML = visible.map(({ event, index }) => {
    return `
      <button class="bottom-dot ${index === selectedIndex ? "active" : ""}" data-index="${index}">
        ${event.year}
      </button>
    `;
  }).join("");

  [...timelineButtonsEl.querySelectorAll("button"), ...bottomTimelineEl.querySelectorAll("button")].forEach(button => {
    button.addEventListener("click", () => {
      selectedIndex = Number(button.dataset.index);
      selectedPlaceId = null;
      activeContext = "built";
      renderAll();
    });
  });
}

function renderEventInfo() {
  const event = events[selectedIndex];
  const text = eventText(event);

  eventYearEl.textContent = `${labelFilter(event.category)} · ${event.year}`;
  eventTitleEl.textContent = text.title;
  eventSummaryEl.textContent = text.summary;
  eventTagsEl.innerHTML = event.tags.map(tag => `<span class="chip">${tag}</span>`).join("");
}

function renderContext() {
  const event = events[selectedIndex];
  const text = eventText(event);
  const contextKeys = Object.keys(text.contexts);

  if (!contextKeys.includes(activeContext)) {
    activeContext = contextKeys[0];
  }

  contextTabsEl.innerHTML = contextKeys.map(key => `
    <button class="context-tab ${key === activeContext ? "active" : ""}" data-context="${key}">
      ${labelContext(key)}
    </button>
  `).join("");

  contextBoxEl.textContent = text.contexts[activeContext];

  contextTabsEl.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeContext = button.dataset.context;
      renderContext();
    });
  });
}

function renderPlaceList() {
  const event = events[selectedIndex];

  placeListEl.innerHTML = event.places.map(placeItem => `
    <article class="place-card ${selectedPlaceId === placeItem.id ? "active" : ""}" data-place="${placeItem.id}">
      <div class="place-card-title">${placeItem.name[currentLang]}</div>
      <div class="place-card-text">${placeItem.role[currentLang]}</div>
    </article>
  `).join("");

  placeListEl.querySelectorAll(".place-card").forEach(card => {
    card.addEventListener("click", () => {
      selectedPlaceId = card.dataset.place;
      const placeItem = event.places.find(p => p.id === selectedPlaceId);
      if (placeItem) {
        map.flyTo([placeItem.lat, placeItem.lng], Math.max(map.getZoom(), 4), { duration: 0.9 });
        const layer = placeLayers.find(item => item.placeId === placeItem.id);
        if (layer) layer.marker.openPopup();
      }
      renderPlaceList();
    });
  });
}

function clearMapLayers() {
  placeLayers.forEach(item => map.removeLayer(item.marker));
  flowLayers.forEach(layer => map.removeLayer(layer));
  placeLayers = [];
  flowLayers = [];
}

function popupForPlace(event, placeItem) {
  return `
    <div class="popup-title">${placeItem.name[currentLang]}</div>
    <div class="popup-meta">${event.year} · ${eventText(event).title}</div>
    <div class="popup-text">${placeItem.role[currentLang]}</div>
  `;
}

function popupForFlow(event, flowItem) {
  return `
    <div class="popup-title">${flowItem.label[currentLang]}</div>
    <div class="popup-meta">${event.year} · ${labelFilter(flowItem.category)}</div>
    <div class="popup-text">${eventText(event).summary}</div>
  `;
}

function getBezierPoints(start, end) {
  const [lat1, lng1] = start;
  const [lat2, lng2] = end;
  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;
  const dx = lng2 - lng1;
  const dy = lat2 - lat1;
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;
  const curve = Math.min(22, Math.max(6, distance * 0.18));
  const controlLat = midLat + (dx / distance) * curve;
  const controlLng = midLng - (dy / distance) * curve;

  const points = [];
  for (let t = 0; t <= 1.001; t += 0.035) {
    const lat = (1 - t) * (1 - t) * lat1 + 2 * (1 - t) * t * controlLat + t * t * lat2;
    const lng = (1 - t) * (1 - t) * lng1 + 2 * (1 - t) * t * controlLng + t * t * lng2;
    points.push([lat, lng]);
  }

  return points;
}

function renderMap() {
  clearMapLayers();

  const event = events[selectedIndex];
  const placeMap = new Map(event.places.map(placeItem => [placeItem.id, placeItem]));
  const boundsPoints = [];

  if (flowsVisible) {
    event.flows.forEach(flowItem => {
      const fromPlace = placeMap.get(flowItem.from);
      const toPlace = placeMap.get(flowItem.to);
      if (!fromPlace || !toPlace) return;

      const line = L.polyline(
        getBezierPoints([fromPlace.lat, fromPlace.lng], [toPlace.lat, toPlace.lng]),
        {
          className: `flow-line ${flowItem.category} intensity-${flowItem.intensity}`,
          interactive: true
        }
      ).addTo(map);

      line.bindPopup(popupForFlow(event, flowItem));
      flowLayers.push(line);
      boundsPoints.push([fromPlace.lat, fromPlace.lng], [toPlace.lat, toPlace.lng]);
    });
  }

  if (placesVisible) {
    event.places.forEach(placeItem => {
      const marker = L.circleMarker([placeItem.lat, placeItem.lng], {
        radius: markerRadius(event.category),
        color: categoryColor(event.category),
        fillColor: categoryColor(event.category),
        fillOpacity: 0.86,
        weight: 2
      }).addTo(map);

      marker.bindPopup(popupForPlace(event, placeItem));

      marker.on("click", () => {
        selectedPlaceId = placeItem.id;
        renderPlaceList();
      });

      placeLayers.push({ placeId: placeItem.id, marker });
      boundsPoints.push([placeItem.lat, placeItem.lng]);
    });
  }

  if (boundsPoints.length) {
    const bounds = L.latLngBounds(boundsPoints);
    map.fitBounds(bounds.pad(0.36), { padding: [54, 54] });

    if (boundsPoints.length === 1) {
      map.setZoom(4);
    }
  } else {
    map.setView([20, 10], 2);
  }
}

function renderToggles() {
  toggleFlowsBtn.classList.toggle("active", flowsVisible);
  togglePlacesBtn.classList.toggle("active", placesVisible);
  toggleFlowsBtn.textContent = flowsVisible ? t("toggleFlows") : t("toggleFlowsOff");
  togglePlacesBtn.textContent = placesVisible ? t("togglePlaces") : t("togglePlacesOff");
}

function renderAll() {
  translateStaticUI();
  renderFilters();
  renderTimelineButtons();
  renderEventInfo();
  renderPlaceList();
  renderContext();
  renderToggles();
  renderMap();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("capitalismMapLang", lang);
  renderAll();
}

document.querySelectorAll(".lang-btn").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

toggleFlowsBtn.addEventListener("click", () => {
  flowsVisible = !flowsVisible;
  renderAll();
});

togglePlacesBtn.addEventListener("click", () => {
  placesVisible = !placesVisible;
  renderAll();
});

renderAll();
