const i18n = {
  en: {
    eyebrow: "Critical economic history",
    heroTitleLine1: "How Capitalism",
    heroTitleLine2: "Was Built",
    heroLead: "A chronological timeline of markets, banks, colonial extraction, slavery, factories, corporations, debt, finance, and digital platforms. This is not a story of one invention, but of many institutions and violences becoming one world system.",
    exploreButton: "Explore timeline ↓",
    layersButton: "View system layers",
    coreCapital: "CAPITAL",
    tagBanks: "BANKS",
    tagLabor: "LABOR",
    tagEmpire: "EMPIRE",
    tagMarkets: "MARKETS",
    statMarketsTitle: "Markets",
    statMarketsText: "Exchange becomes organized through price, money, and trade.",
    statEmpireTitle: "Empire",
    statEmpireText: "Colonies, slavery, and extraction feed accumulation.",
    statFinanceTitle: "Finance",
    statFinanceText: "Credit, shares, bonds, banks, and debt scale the system.",
    timelineTitle: "Chronological timeline",
    timelineIntro: "Click an event to open its historical, labor, colonial, and financial context. Filter by system layer or search by keyword.",
    systemMapTitle: "System map",
    centerNode: "Capital accumulation",
    miniMarkets: "Markets",
    miniBanks: "Banks",
    miniColonies: "Colonies",
    miniLabor: "Labor",
    miniFactories: "Factories",
    miniDebt: "Debt",
    layersTitle: "System layers",
    layersIntro: "Capitalism was built through overlapping layers. Each layer has its own institutions, conflicts, and historical violence.",
    layerPropertyTitle: "Property",
    layerPropertyText: "Land, labor, ideas, and resources are turned into ownable and sellable assets.",
    layerTradeTitle: "Trade",
    layerTradeText: "Long-distance trade links local production to global markets and colonial routes.",
    layerBankingTitle: "Banking",
    layerBankingText: "Credit, deposits, public debt, and central banks make accumulation scalable.",
    layerSlaveryTitle: "Slavery",
    layerSlaveryText: "Forced labor, plantation economies, and racial domination generate enormous wealth.",
    layerIndustryTitle: "Industry",
    layerIndustryText: "Factories reorganize time, labor, machines, cities, and discipline around production.",
    layerFinanceTitle: "Finance",
    layerFinanceText: "Stocks, bonds, speculation, derivatives, debt, and crises become engines of power.",
    noteLabel: "Note:",
    footerNote: "This timeline is interpretive and critical. It does not claim that capitalism began at one exact moment. It shows major institutions and historical processes that helped build the capitalist world-system.",
    selectedEvent: "Selected event",
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
    heroLead: "Une chronologie des marchés, des banques, de l’extraction coloniale, de l’esclavage, des usines, des corporations, de la dette, de la finance et des plateformes numériques. Ce n’est pas l’histoire d’une seule invention, mais celle de nombreuses institutions et violences devenues un système mondial.",
    exploreButton: "Explorer la chronologie ↓",
    layersButton: "Voir les couches du système",
    coreCapital: "CAPITAL",
    tagBanks: "BANQUES",
    tagLabor: "TRAVAIL",
    tagEmpire: "EMPIRE",
    tagMarkets: "MARCHÉS",
    statMarketsTitle: "Marchés",
    statMarketsText: "L’échange s’organise par les prix, la monnaie et le commerce.",
    statEmpireTitle: "Empire",
    statEmpireText: "Colonies, esclavage et extraction nourrissent l’accumulation.",
    statFinanceTitle: "Finance",
    statFinanceText: "Crédit, actions, obligations, banques et dette changent l’échelle du système.",
    timelineTitle: "Chronologie historique",
    timelineIntro: "Cliquez sur un événement pour ouvrir son contexte historique, colonial, financier et social. Filtrez par couche du système ou recherchez un mot-clé.",
    systemMapTitle: "Carte du système",
    centerNode: "Accumulation du capital",
    miniMarkets: "Marchés",
    miniBanks: "Banques",
    miniColonies: "Colonies",
    miniLabor: "Travail",
    miniFactories: "Usines",
    miniDebt: "Dette",
    layersTitle: "Couches du système",
    layersIntro: "Le capitalisme s’est construit par couches superposées. Chaque couche possède ses institutions, ses conflits et ses violences historiques.",
    layerPropertyTitle: "Propriété",
    layerPropertyText: "La terre, le travail, les idées et les ressources deviennent des actifs possédables et vendables.",
    layerTradeTitle: "Commerce",
    layerTradeText: "Le commerce lointain relie les productions locales aux marchés mondiaux et aux routes coloniales.",
    layerBankingTitle: "Banque",
    layerBankingText: "Le crédit, les dépôts, la dette publique et les banques centrales rendent l’accumulation scalable.",
    layerSlaveryTitle: "Esclavage",
    layerSlaveryText: "Le travail forcé, les plantations et la domination raciale produisent d’immenses richesses.",
    layerIndustryTitle: "Industrie",
    layerIndustryText: "Les usines réorganisent le temps, le travail, les machines, les villes et la discipline productive.",
    layerFinanceTitle: "Finance",
    layerFinanceText: "Actions, obligations, spéculation, produits dérivés, dette et crises deviennent des moteurs de pouvoir.",
    noteLabel: "Note :",
    footerNote: "Cette chronologie est interprétative et critique. Elle ne prétend pas que le capitalisme aurait commencé à une date exacte. Elle montre des institutions et processus historiques majeurs qui ont contribué à construire le système-monde capitaliste.",
    selectedEvent: "Événement sélectionné",
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

const events = [
  {
    year: "c. 3000 BCE",
    category: "trade",
    tags: ["trade", "credit", "accounting"],
    en: {
      title: "Early trade, accounting, and credit",
      summary: "Ancient Mesopotamian temples, merchants, ledgers, grain stores, and debt records show early systems of exchange, credit, and accounting.",
      detail: "Capitalism did not exist yet, but some tools later used by capitalism were already present: written accounts, debts, contracts, interest, storage, and organized long-distance trade.",
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
      detail: "Le capitalisme n’existe pas encore, mais certains outils qu’il utilisera plus tard sont déjà présents : comptes écrits, dettes, contrats, intérêt, stockage et commerce à longue distance.",
      contexts: {
        built: "Cela crée une infrastructure de base pour l’échange : registres, contrats, crédit, mesure et confiance à distance.",
        benefited: "Les souverains, temples, marchands et grands propriétaires peuvent coordonner biens et travail à plus grande échelle.",
        paid: "Les paysans, débiteurs, personnes esclavisées et travailleurs dépendants portent souvent le poids de la dette et de l’extraction.",
        link: "Le capitalisme moderne intensifiera ces outils en reliant crédit et comptabilité à l’investissement privé, au profit et à l’expansion des marchés.",
        critical: "Les marchés sont anciens, mais le marché seul n’est pas le capitalisme. Le capitalisme est un système plus tardif organisé autour de l’accumulation, du salariat, de la propriété privée et du profit concurrentiel."
      }
    }
  },
  {
    year: "c. 600 BCE",
    category: "trade",
    tags: ["money", "markets", "state"],
    en: {
      title: "Coined money spreads",
      summary: "Coins help standardize exchange, taxation, military payment, and market circulation across states and trade zones.",
      detail: "Coinage made value portable and visible. It helped states pay soldiers, collect taxes, and connect local markets to wider circuits of exchange.",
      contexts: {
        built: "Money became a more standardized medium of exchange, store of value, and unit of account.",
        benefited: "States, armies, merchants, and tax collectors gained a more flexible instrument of control and trade.",
        paid: "Taxpayers and conquered populations were pulled more deeply into monetary obligations.",
        link: "Capitalism requires money to circulate as capital: money advanced to generate more money.",
        critical: "Money can support trade, but capitalism begins when money, labor, land, and production are reorganized around accumulation."
      }
    },
    fr: {
      title: "Diffusion de la monnaie frappée",
      summary: "Les pièces standardisent l’échange, l’impôt, la paie militaire et la circulation marchande entre États et zones commerciales.",
      detail: "La monnaie frappée rend la valeur portable et visible. Elle aide les États à payer les soldats, lever l’impôt et relier les marchés locaux à des circuits d’échange plus larges.",
      contexts: {
        built: "La monnaie devient un moyen d’échange, une réserve de valeur et une unité de compte plus standardisés.",
        benefited: "Les États, armées, marchands et collecteurs d’impôts gagnent un instrument plus flexible de contrôle et de commerce.",
        paid: "Les contribuables et populations conquises sont davantage intégrés aux obligations monétaires.",
        link: "Le capitalisme exige que l’argent circule comme capital : de l’argent avancé pour produire davantage d’argent.",
        critical: "La monnaie peut soutenir le commerce, mais le capitalisme commence quand monnaie, travail, terre et production sont réorganisés autour de l’accumulation."
      }
    }
  },
  {
    year: "11th–13th c.",
    category: "trade",
    tags: ["fairs", "merchants", "bills of exchange"],
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
    year: "1347–1351",
    category: "labor",
    tags: ["labor", "wages", "feudalism"],
    en: {
      title: "Black Death weakens feudal labor relations",
      summary: "Population collapse after the plague increases labor scarcity in parts of Europe and helps undermine older feudal obligations.",
      detail: "The Black Death did not create capitalism, but it changed the balance between landlords and workers in many regions. Labor scarcity contributed to wage struggles and pressure against serfdom.",
      contexts: {
        built: "It helped destabilize feudal labor systems and made wage labor more important in some areas.",
        benefited: "Some workers gained bargaining power, while landlords and states tried to restrict wages and mobility.",
        paid: "The poor suffered massively from disease, repression, and later attempts to restore labor discipline.",
        link: "Capitalism later depends on workers being legally free but economically compelled to sell labor.",
        critical: "The transition from feudalism to capitalism was uneven, conflictual, and different across regions."
      }
    },
    fr: {
      title: "La peste noire affaiblit les rapports féodaux",
      summary: "L’effondrement démographique augmente la rareté de la main-d’œuvre dans certaines régions d’Europe et fragilise les obligations féodales.",
      detail: "La peste noire ne crée pas le capitalisme, mais elle modifie le rapport de force entre propriétaires et travailleurs. La rareté du travail favorise les luttes salariales et la contestation du servage.",
      contexts: {
        built: "Elle déstabilise certains systèmes féodaux de travail et rend le salariat plus important dans plusieurs régions.",
        benefited: "Certains travailleurs gagnent du pouvoir de négociation, tandis que les seigneurs et États cherchent à limiter salaires et mobilité.",
        paid: "Les pauvres subissent la maladie, la répression et les tentatives de rétablir la discipline du travail.",
        link: "Le capitalisme dépendra plus tard de travailleurs juridiquement libres mais économiquement contraints de vendre leur force de travail.",
        critical: "La transition du féodalisme au capitalisme est inégale, conflictuelle et différente selon les régions."
      }
    }
  },
  {
    year: "1407",
    category: "finance",
    tags: ["banking", "public debt", "city-states"],
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
    year: "1494",
    category: "finance",
    tags: ["accounting", "profit", "books"],
    en: {
      title: "Double-entry bookkeeping codified",
      summary: "Luca Pacioli publishes a description of double-entry bookkeeping, helping standardize profit calculation and commercial accounting.",
      detail: "Double-entry accounting made it easier to track assets, liabilities, costs, debts, and profits. It became a core technology of capitalist rationality.",
      contexts: {
        built: "It created a clearer way to measure profit, loss, capital, debt, and business performance.",
        benefited: "Merchants, bankers, and firms gained stronger control over complex commercial operations.",
        paid: "Workers and debtors became more legible inside systems of calculation and discipline.",
        link: "Capitalism needs measurement: profit must be counted before it can be maximized.",
        critical: "Accounting looks technical, but it shapes what counts as value and what disappears as external cost."
      }
    },
    fr: {
      title: "Codification de la comptabilité en partie double",
      summary: "Luca Pacioli publie une description de la comptabilité en partie double, standardisant le calcul du profit et la comptabilité commerciale.",
      detail: "La comptabilité en partie double facilite le suivi des actifs, passifs, coûts, dettes et profits. Elle devient une technologie centrale de la rationalité capitaliste.",
      contexts: {
        built: "Elle crée une méthode plus claire pour mesurer profit, perte, capital, dette et performance commerciale.",
        benefited: "Les marchands, banquiers et entreprises gagnent un meilleur contrôle sur les opérations complexes.",
        paid: "Les travailleurs et débiteurs deviennent plus lisibles dans des systèmes de calcul et de discipline.",
        link: "Le capitalisme a besoin de mesure : le profit doit être compté avant d’être maximisé.",
        critical: "La comptabilité semble technique, mais elle décide ce qui compte comme valeur et ce qui disparaît comme coût externe."
      }
    }
  },
  {
    year: "1500s–1800s",
    category: "slavery",
    tags: ["slavery", "plantations", "racial capitalism"],
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
    year: "1609",
    category: "finance",
    tags: ["banking", "Amsterdam", "exchange"],
    en: {
      title: "Bank of Amsterdam",
      summary: "Amsterdam's public exchange bank stabilizes payments and helps make the city a major financial center.",
      detail: "The Bank of Amsterdam supported trade by providing reliable deposits and settlement. It strengthened Amsterdam's role in early modern finance.",
      contexts: {
        built: "It helped stabilize commercial payments and trust in money for long-distance trade.",
        benefited: "Merchants, traders, and the Dutch commercial empire gained a stronger payment infrastructure.",
        paid: "The wealth moving through Amsterdam was tied to colonial extraction and unequal trade.",
        link: "Capitalism needs stable financial plumbing: deposits, clearing, settlement, and trustworthy money.",
        critical: "Financial stability for merchants often rested on instability and violence elsewhere."
      }
    },
    fr: {
      title: "Banque d’Amsterdam",
      summary: "La banque publique de change d’Amsterdam stabilise les paiements et contribue à faire de la ville un centre financier majeur.",
      detail: "La Banque d’Amsterdam soutient le commerce par des dépôts fiables et des règlements sécurisés. Elle renforce le rôle d’Amsterdam dans la finance moderne naissante.",
      contexts: {
        built: "Elle stabilise les paiements commerciaux et la confiance monétaire dans le commerce à longue distance.",
        benefited: "Les marchands, négociants et l’empire commercial néerlandais gagnent une infrastructure de paiement plus forte.",
        paid: "Les richesses circulant par Amsterdam sont liées à l’extraction coloniale et au commerce inégal.",
        link: "Le capitalisme a besoin d’une plomberie financière stable : dépôts, compensation, règlement et monnaie crédible.",
        critical: "La stabilité financière des marchands reposait souvent sur l’instabilité et la violence ailleurs."
      }
    }
  },
  {
    year: "1694",
    category: "finance",
    tags: ["central banking", "public debt", "war"],
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
    year: "1793",
    category: "slavery",
    tags: ["cotton", "slavery", "industry"],
    en: {
      title: "Cotton gin and slave cotton expansion",
      summary: "The cotton gin accelerates cotton processing and strengthens the plantation economy in the U.S. South.",
      detail: "Cotton became a key raw material for industrial textile production. Enslaved labor in the American South was deeply connected to factories, banks, shipping, and global trade.",
      contexts: {
        built: "It expanded cotton plantation capitalism and connected slave labor to industrial textile growth.",
        benefited: "Planters, textile manufacturers, banks, insurers, shippers, and exporters profited.",
        paid: "Enslaved people endured intensified exploitation, forced migration, family separation, and violence.",
        link: "Industrial capitalism and slavery were not separate worlds; cotton linked them directly.",
        critical: "The factory and the plantation were parts of the same global system."
      }
    },
    fr: {
      title: "Égreneuse de coton et expansion du coton esclavagiste",
      summary: "L’égreneuse accélère le traitement du coton et renforce l’économie de plantation dans le Sud des États-Unis.",
      detail: "Le coton devient une matière première clé pour l’industrie textile. Le travail esclavisé dans le Sud américain est profondément relié aux usines, banques, transports maritimes et marchés mondiaux.",
      contexts: {
        built: "Elle étend le capitalisme cotonnier de plantation et relie le travail esclavisé à la croissance textile industrielle.",
        benefited: "Planteurs, industriels du textile, banques, assureurs, transporteurs et exportateurs en profitent.",
        paid: "Les personnes esclavisées subissent exploitation intensifiée, migrations forcées, séparation familiale et violence.",
        link: "Capitalisme industriel et esclavage ne sont pas des mondes séparés ; le coton les relie directement.",
        critical: "L’usine et la plantation font partie du même système mondial."
      }
    }
  },
  {
    year: "1830s–1870s",
    category: "industry",
    tags: ["railways", "telegraph", "infrastructure"],
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
    year: "1850s–1860s",
    category: "finance",
    tags: ["corporation", "limited liability", "investment"],
    en: {
      title: "Limited liability corporation expands",
      summary: "Company law makes it easier for investors to risk only what they invest, helping corporations grow.",
      detail: "Limited liability encouraged more people to invest because their personal losses were capped. This helped scale corporate capitalism.",
      contexts: {
        built: "It made large-scale investment easier and helped corporations become dominant economic actors.",
        benefited: "Shareholders and corporate managers gained protection and scale.",
        paid: "Workers, consumers, communities, and ecosystems could bear harms not fully paid by owners.",
        link: "The corporation separates ownership, management, risk, and responsibility.",
        critical: "Limited liability socializes some risks while privatizing many gains."
      }
    },
    fr: {
      title: "Expansion de la société à responsabilité limitée",
      summary: "Le droit des sociétés permet aux investisseurs de ne risquer que leur apport, facilitant la croissance des corporations.",
      detail: "La responsabilité limitée encourage davantage de personnes à investir car les pertes personnelles sont plafonnées. Elle permet au capitalisme corporatif de changer d’échelle.",
      contexts: {
        built: "Elle facilite l’investissement à grande échelle et aide les corporations à devenir des acteurs économiques dominants.",
        benefited: "Les actionnaires et dirigeants d’entreprise gagnent protection et échelle.",
        paid: "Travailleurs, consommateurs, communautés et écosystèmes peuvent porter des dommages non entièrement assumés par les propriétaires.",
        link: "La corporation sépare propriété, gestion, risque et responsabilité.",
        critical: "La responsabilité limitée socialise certains risques tout en privatisant de nombreux gains."
      }
    }
  },
  {
    year: "1870s–1914",
    category: "state",
    tags: ["imperialism", "gold standard", "colonies"],
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
    year: "1929–1930s",
    category: "state",
    tags: ["crisis", "depression", "state"],
    en: {
      title: "Great Depression and mass unemployment",
      summary: "Financial collapse reveals capitalism's instability and forces new state interventions, welfare policies, and regulations.",
      detail: "The Great Depression transformed capitalism by showing that markets could collapse at massive scale. States responded with regulation, public works, welfare, and new economic theories.",
      contexts: {
        built: "It built the case for managed capitalism: regulation, welfare, public spending, and labor protections.",
        benefited: "Some workers gained protections, while capital accepted regulation to save the system.",
        paid: "The unemployed, poor, migrants, and racialized communities suffered deeply during collapse.",
        link: "Crises are not accidents outside capitalism; they are recurrent features of capitalist expansion.",
        critical: "Reform often arrives only after catastrophe threatens the system itself."
      }
    },
    fr: {
      title: "Grande Dépression et chômage de masse",
      summary: "L’effondrement financier révèle l’instabilité du capitalisme et impose de nouvelles interventions de l’État, protections sociales et régulations.",
      detail: "La Grande Dépression transforme le capitalisme en montrant que les marchés peuvent s’effondrer à grande échelle. Les États répondent par régulation, travaux publics, protection sociale et nouvelles théories économiques.",
      contexts: {
        built: "Elle légitime un capitalisme administré : régulation, protection sociale, dépenses publiques et droits du travail.",
        benefited: "Certains travailleurs gagnent des protections, tandis que le capital accepte la régulation pour sauver le système.",
        paid: "Les chômeurs, pauvres, migrants et communautés racialisées souffrent profondément de l’effondrement.",
        link: "Les crises ne sont pas des accidents extérieurs au capitalisme ; elles sont récurrentes dans son expansion.",
        critical: "La réforme arrive souvent seulement quand la catastrophe menace le système lui-même."
      }
    }
  },
  {
    year: "1944",
    category: "state",
    tags: ["IMF", "World Bank", "dollar"],
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
  },
  {
    year: "2020s",
    category: "finance",
    tags: ["AI", "climate", "green finance"],
    en: {
      title: "Green finance, AI, and crisis capitalism",
      summary: "Climate crisis, AI infrastructure, carbon markets, supply-chain shocks, and geopolitical conflict reshape capitalist accumulation.",
      detail: "Current capitalism is increasingly shaped by climate adaptation, energy transition minerals, carbon markets, automation, AI, data centers, and security politics.",
      contexts: {
        built: "It extends accumulation into carbon accounting, energy transition minerals, automation, cloud infrastructure, and predictive systems.",
        benefited: "Tech giants, energy firms, mining companies, asset managers, defense industries, and infrastructure investors seek new frontiers.",
        paid: "Workers, Indigenous communities, the Global South, migrants, and ecosystems often carry the costs of transition and crisis.",
        link: "Capitalism adapts to crisis by creating new markets from crisis itself.",
        critical: "The question is whether climate transition breaks extractive capitalism or simply updates it."
      }
    },
    fr: {
      title: "Finance verte, IA et capitalisme de crise",
      summary: "Crise climatique, infrastructures d’IA, marchés carbone, chocs logistiques et conflits géopolitiques reconfigurent l’accumulation capitaliste.",
      detail: "Le capitalisme actuel est de plus en plus façonné par l’adaptation climatique, les minerais de transition énergétique, les marchés carbone, l’automatisation, l’IA, les data centers et les politiques sécuritaires.",
      contexts: {
        built: "Il étend l’accumulation vers la comptabilité carbone, les minerais de transition, l’automatisation, le cloud et les systèmes prédictifs.",
        benefited: "Géants technologiques, firmes énergétiques, compagnies minières, gestionnaires d’actifs, industries de défense et investisseurs d’infrastructure cherchent de nouvelles frontières.",
        paid: "Travailleurs, peuples autochtones, Sud global, migrants et écosystèmes portent souvent les coûts de la transition et de la crise.",
        link: "Le capitalisme s’adapte à la crise en créant de nouveaux marchés à partir de la crise elle-même.",
        critical: "La question est de savoir si la transition climatique rompt avec le capitalisme extractif ou le met simplement à jour."
      }
    }
  }
];

const filters = ["All", "trade", "finance", "slavery", "industry", "state", "labor"];

let currentLang = localStorage.getItem("capitalismTimelineLang") || "en";
let activeFilter = "All";
let selectedIndex = 0;
let activeContext = "built";

const timelineTrack = document.getElementById("timelineTrack");
const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("search");
const detailKicker = document.getElementById("detailKicker");
const detailTitle = document.getElementById("detailTitle");
const detailText = document.getElementById("detailText");
const contextTabs = document.getElementById("contextTabs");
const contextBox = document.getElementById("contextBox");
const systemCopy = document.getElementById("systemCopy");

function t(key) {
  return i18n[currentLang][key];
}

function currentEventText(event) {
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

  searchEl.placeholder = searchEl.dataset[`placeholder${currentLang === "fr" ? "Fr" : "En"}`];

  document.querySelectorAll(".lang-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
}

function labelFilter(filter) {
  if (filter === "All") return t("all");
  return i18n[currentLang].filterLabels[filter] || filter;
}

function labelContext(contextKey) {
  return i18n[currentLang].contextLabels[contextKey] || contextKey;
}

function renderFilters() {
  filtersEl.innerHTML = filters.map(filter => `
    <button class="filter ${filter === activeFilter ? "active" : ""}" data-filter="${filter}">
      ${labelFilter(filter)}
    </button>
  `).join("");

  filtersEl.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderTimeline();
    });
  });
}

function matchesSearch(event) {
  const query = searchEl.value.trim().toLowerCase();
  if (!query) return true;

  const eventText = currentEventText(event);
  const contextValues = Object.values(eventText.contexts || {});
  const translatedTags = event.tags.map(tag => {
    return i18n[currentLang].filterLabels[tag] || tag;
  });

  const haystack = [
    event.year,
    event.category,
    labelFilter(event.category),
    eventText.title,
    eventText.summary,
    eventText.detail,
    ...event.tags,
    ...translatedTags,
    ...contextValues
  ].join(" ").toLowerCase();

  return haystack.includes(query);
}

function renderTimeline() {
  timelineTrack.innerHTML = "";

  events.forEach((event, index) => {
    const eventText = currentEventText(event);
    const visibleByFilter = activeFilter === "All" || event.category === activeFilter;
    const visibleBySearch = matchesSearch(event);

    const card = document.createElement("article");
    card.className = `event-card ${event.category} ${index === selectedIndex ? "selected" : ""} ${visibleByFilter && visibleBySearch ? "" : "hidden"}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    card.innerHTML = `
      <div class="year">${event.year}</div>
      <h3>${eventText.title}</h3>
      <p>${eventText.summary}</p>
      <div class="tags">${event.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    `;

    card.addEventListener("click", () => selectEvent(index));
    card.addEventListener("keydown", eventKey => {
      if (eventKey.key === "Enter" || eventKey.key === " ") selectEvent(index);
    });

    timelineTrack.appendChild(card);
  });
}

function selectEvent(index) {
  selectedIndex = index;
  activeContext = "built";
  renderTimeline();
  renderDetail();
  document.getElementById("detailPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderDetail() {
  const event = events[selectedIndex];
  const eventText = currentEventText(event);

  detailKicker.textContent = `${labelFilter(event.category)} · ${event.year}`;
  detailTitle.textContent = `${event.year} · ${eventText.title}`;
  detailText.textContent = eventText.detail;
  systemCopy.textContent = eventText.summary;

  const contextNames = Object.keys(eventText.contexts);

  contextTabs.innerHTML = contextNames.map(name => `
    <button class="context-tab ${name === activeContext ? "active" : ""}" data-context="${name}">
      ${labelContext(name)}
    </button>
  `).join("");

  contextBox.textContent = eventText.contexts[activeContext];

  contextTabs.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeContext = button.dataset.context;
      renderDetail();
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("capitalismTimelineLang", currentLang);
  translateStaticUI();
  renderFilters();
  renderTimeline();
  renderDetail();
}

document.querySelectorAll(".lang-btn").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

searchEl.addEventListener("input", renderTimeline);

translateStaticUI();
renderFilters();
renderTimeline();
renderDetail();
