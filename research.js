// One entry per interview: a traveller (with the Your Journey booklet) or a stakeholder.
// Shown on research.html. No participant names: describe the person instead.
//
// To add one: copy the { ... } block from interview-template.js, paste it inside
// the list below (entries separated by commas) and fill it in. The template lists
// every booklet question with its answer options.
//
// The travel diaries are not here: they are on diary.html (data in diary.js).

const INTERVIEWS = [
  // ---- Nicoleta's three traveller booklets ----
  {
    type: "Traveller",
    by: "Nicoleta",
    date: "7 Nov",
    description: "Student in an inner neighbourhood; goes by bus every day, to school, the gym, parties and the beach",
    neighbourhood: "",
    rideAlong: false,
    consent: true,
    insight: "Relies fully on buses (100% of travel money on public transport); late and early buses and missing connections are the main problems, and at night with no buses left they might order an Uber.",
    notes: "",

    // 1.1
    whereWeek: "Sketch: gym, school, party, beach",
    livesIn: "Inner neighbourhood",
    dependents: "No one",
    rhythms: "School term",
    particular: "Bus",

    // 1.2
    modeFrequency: {
      walking: "Daily", ownBike: "Never", sharedBike: "Never", busTram: "Daily", metro: "Weekly",
      trainFerry: "Weekly", ownCar: "Never", carShare: "Never", taxi: "Rarely", other: "",
    },
    passes: "",
    passesFit: "Yes, fully",
    notCaptured: "Better routes to get to the destination",

    // 1.3
    travelDays: [{
      date: "2 Nov",
      morning:   { route: "Home → school", modes: "Bus / metro", time: "9 am", cost: "€40 / month", feel: "Stress" },
      afternoon: { route: "School → home", modes: "Metro / bus", time: "6 pm", cost: "(same pass)", feel: "Tired" },
      evening:   { route: "Home → gym", modes: "Bus", time: "8 pm", cost: "(same pass)", feel: "?" },
    }],

    // 1.4
    planningTime: "1–3 hours",
    howPlan: ["Map / route apps", "Memory and habit"],
    planFor: ["Not being late", "Coordinating with others"],
    planningChallenges: ["Late buses", "Early buses", "Missing connections"],
    wishDifferent: [],
    whyNot: "",

    // 2.1
    plannersThink: "It's convenient and they did a good job!!",
    moment: "Bus hitting a car. One tram blocking the way for three other trams, and stopping all traffic around.",
    momentWhy: "It delayed my trip, and the traffic was stuck.",

    // 2.2
    knowImpact: "No / I don't think about it (both ticked)",
    impactSources: ["Nowhere"],
    changedForEnvironment: "No",
    infoWorksFrustrates: "Idk",
    infoBeforeLeaving: ["Late bus", "Early bus", "Interruptions in the area"],

    // 3.1
    factorRank: ["Travel time", "Reliability", "Comfort", "Cost", "Flexibility"],
    moneySplit: { publicTransport: "100%", car: "0%", shared: "0%", other: "0%" },
    choicesChange: "If there are no more buses going home at night, I might order an Uber.",

    // 3.2
    wouldAccept: ["A slightly longer trip", "Less comfort", "Depends on: where I'm going"],
    moreInfo: ["Help me choose differently", "Be ignored after a week"],
    gaveUp: "Don't know",

    // 4.1
    idealCompanion: "Convenient, quick, efficient, direct, cheap",
    features: [],

    // 4.2
    docTime: "",
    whenHelp: [],
    worthTime: "",

    // 4.3
    techComfort: { smartphones: "", apps: "", payments: "" },
    devices: [],
    techBarriers: ["Battery runs out"],

    // 5.1
    wantToSee: {
      timeSpent: "Nice to have", money: "Nice to have", emissions: "", activeMinutes: "",
      pastMonths: "Nice to have", neighbours: "", suggestions: "Essential", other: "",
    },

    // 5.2
    shareWith: {
      friends: "Yes", employer: "No", operators: "Only anonymous", council: "Only anonymous",
      researchers: "Only anonymous", companies: "No", other: "",
    },
    privacyWants: [
      "Control exactly what's shared", "Delete history at any time", "Pause tracking for some trips",
      "Share only to improve services for everyone", "Set it once and forget it",
    ],

    // 5.3
    neighbourhoodShow: "",
    participate: ["Other: I don't know!!"],

    // 6.1
    seenCO2: "No",
    co2Reaction: ["Interesting but unclear how it helps me"],

    // 6.2
    concerns: ["Greenwashing", "Who controls the data?", "Cost"],
    whoChange: ["Nobody: I'd do it if it were easy enough"],

    // 7
    realBarriers: ["Time", "Weather or hills", "Habit"],
    wouldPay: "Unsure",
    supportNeeded: ["A free or discounted trial period", "Safe storage for a bike or scooter"],
    supportWho: "",
    designAddress: [],
    talkTo: { travellers: "", operators: "", council: "", employers: "", other: "" },
  },

  {
    type: "Traveller",
    by: "Nicoleta",
    date: "8 Nov",
    description: "Student in an inner neighbourhood; university, swimming pool, coffee shops, parties in Bairro Alto, day trips and hiking",
    neighbourhood: "",
    rideAlong: false,
    consent: true,
    insight: "Moves daily by metro and bus; late buses, connections that don't exist and long distances between connections are the main planning problems. Infrastructure and cost stop lower-impact travel.",
    notes: "",

    // 1.1
    whereWeek: "School. Sketch: university, swimming pool, coffee shops, party (Bairro Alto), day trips, hiking",
    livesIn: "Inner neighbourhood",
    dependents: "Nobody",
    rhythms: "School term",
    particular: "Metro, bus, train",

    // 1.2
    modeFrequency: {
      walking: "Daily", ownBike: "Rarely", sharedBike: "Rarely", busTram: "Daily", metro: "Daily",
      trainFerry: "Weekly", ownCar: "Never", carShare: "Never", taxi: "Rarely", other: "Never",
    },
    passes: "",
    passesFit: "Yes, fully",
    notCaptured: "",

    // 1.3
    travelDays: [{
      date: "20 Sep",
      morning:   { route: "Home", modes: "Train", time: "2 hours", cost: "0", feel: "Amazing" },
      afternoon: { route: "Sintra", modes: "Bus", time: "20 min", cost: "0", feel: "Amazing" },
      evening:   { route: "Home", modes: "Train", time: "2 hours", cost: "0", feel: "Amazing" },
    }],

    // 1.4
    planningTime: "< 1 hour",
    howPlan: ["Operator apps or websites"],
    planFor: ["Not being late"],
    planningChallenges: ["Late buses", "Inexistent connections", "Far distance in between the connections"],
    wishDifferent: [],
    whyNot: "",

    // 2.1
    plannersThink: "",
    moment: "Sketch titled \"Sintra trip\": four friends in front of a palace.",
    momentWhy: "I was in Sintra with my friends.",

    // 2.2
    knowImpact: "Yes, roughly in numbers",
    impactSources: ["Route apps (e.g. CO₂ per route)"],
    changedForEnvironment: "It took so much time.",
    infoWorksFrustrates: "",
    infoBeforeLeaving: ["Routes", "Transportation", "Prices"],

    // 3.1
    // Every factor got a 4 or a 5 (1 = matters most), so tied factors are grouped.
    factorRank: [
      "Travel time, comfort, safety, health / exercise (marked 4)",
      "Cost, reliability, environment, flexibility, habit, accessibility, other (marked 5)",
    ],
    moneySplit: { publicTransport: "0%", car: "0%", shared: "0%", other: "0%" },
    choicesChange: "Yes, depending on the price.",

    // 3.2
    wouldAccept: ["A slightly higher price: up to 50 € more"],
    moreInfo: ["Help me choose differently"],
    gaveUp: "Yes (no description)",

    // 4.1
    idealCompanion: "Drawing of a bicycle",
    features: [
      "Door-to-door planning across walking, bike, bus, metro, train",
      "Real-time delays and alternatives",
      "Rewards or discounts",
      "Travel with friends, family or colleagues",
    ],

    // 4.2
    docTime: "1–5 minutes",
    whenHelp: ["On the way (when things go wrong)"],
    worthTime: "",

    // 4.3
    techComfort: { smartphones: "", apps: "", payments: "" },
    devices: ["Phone"],
    techBarriers: ["Cost"],

    // 5.1
    wantToSee: {
      timeSpent: "Nice to have", money: "Essential", emissions: "Nice to have", activeMinutes: "Essential",
      pastMonths: "Nice to have", neighbours: "Nice to have", suggestions: "Essential", other: "",
    },

    // 5.2
    shareWith: {
      friends: "Yes", employer: "Only anonymous", operators: "Only anonymous", council: "Only anonymous",
      researchers: "Only anonymous", companies: "Only anonymous", other: "",
    },
    privacyWants: ["Delete history at any time"],

    // 5.3
    neighbourhoodShow: "",
    participate: ["Online vote or survey"],

    // 6.1
    seenCO2: "No",
    co2Reaction: ["Useful"],

    // 6.2
    concerns: ["Unfair to people with no real alternative"],
    whoChange: ["Transport operators (frequency, prices, connections)"],

    // 7
    realBarriers: ["Infrastructure (no safe lanes, no bike parking, missing connections)", "Cost"],
    wouldPay: "Yes: up to 20 per month/year",
    supportNeeded: ["A free or discounted trial period"],
    supportWho: "",
    designAddress: [],
    talkTo: { travellers: "", operators: "", council: "Yes (ticked)", employers: "", other: "" },
  },

  {
    type: "Traveller",
    by: "Nicoleta",
    date: "9 Nov",
    description: "Student in an inner neighbourhood; walks to university daily, takes the bus to the gym; also swimming pool and supermarket",
    neighbourhood: "",
    rideAlong: false,
    consent: true,
    insight: "Safety drives their choices: they plan for it, say planners don't care about how safe women feel, and find the bus at 4 am scary though fine during the day. Buses running off schedule (sometimes 12 min early) make them miss the bus.",
    notes: "",

    // 1.1
    whereWeek: "Sketch: university, swimming pool, gym, supermarket",
    livesIn: "Inner neighbourhood",
    dependents: "",
    rhythms: "School term",
    particular: "",

    // 1.2
    modeFrequency: {
      walking: "Daily", ownBike: "Never", sharedBike: "Never", busTram: "Weekly", metro: "Weekly",
      trainFerry: "Rarely", ownCar: "Never", carShare: "Never", taxi: "Rarely", other: "",
    },
    passes: "Metro card",
    passesFit: "Yes, fully",
    notCaptured: "",

    // 1.3
    travelDays: [{
      date: "9 Nov",
      morning:   { route: "Home → university", modes: "Walking", time: "8 / 15 min", cost: "", feel: "Good" },
      afternoon: { route: "University → home", modes: "Walking", time: "15 min", cost: "", feel: "Great" },
      evening:   { route: "Home → gym", modes: "Bus", time: "30 min", cost: "", feel: "Amazing" },
    }],

    // 1.4
    planningTime: "< 1 hour",
    howPlan: ["Map / route apps", "Paper timetables / stop signs", "Memory and habit"],
    planFor: ["Not being late", "Safety (lighting, traffic, people)", "Coordinating with others"],
    planningChallenges: ["Punctuality of the bus", "Finding the stop"],
    wishDifferent: ["Home → gym: would love to walk there"],
    whyNot: "Too long",

    // 2.1
    plannersThink: "That it doesn't cost too much, and they don't care about the safety feeling of women.",
    moment: "Sketch: a bus driving off while a person runs after it, \"missing it\".",
    momentWhy: "Because the buses are always coming on their own schedules; they are sometimes 12 min too early.",

    // 2.2
    knowImpact: "I have a feeling for it",
    impactSources: ["News / social media"],
    changedForEnvironment: "Wanted to fly but saw the amount of emissions, and the train was taking me \"only\" 16 hours.",
    infoWorksFrustrates: "",
    infoBeforeLeaving: [
      "When the public transport is arriving",
      "Where I need to leave and change",
      "How much time I have in between changing",
    ],

    // 3.1
    // Several factors share a number (1 = matters most), so tied factors are grouped.
    factorRank: [
      "Safety, health / exercise, environment, flexibility (marked 1)",
      "Travel time, cost (marked 2)",
      "Reliability (marked 4)",
      "Comfort, habit, accessibility (marked 5)",
    ],
    moneySplit: { publicTransport: "0%", car: "0%", shared: "0%", other: "" },
    choicesChange: "How safe I feel: for instance the bus at 4 am is scary, but over the day it is alright.",

    // 3.2
    wouldAccept: ["Less comfort"],
    moreInfo: ["Unsure"],
    gaveUp: "No",

    // 4.1
    idealCompanion: "Drawing of a woman, labelled \"a woman\"",
    features: [
      "One ticket or pass for every mode",
      "Door-to-door planning across walking, bike, bus, metro, train",
      "Impact shown for each route option",
      "Real-time delays and alternatives",
      "Works offline",
      "Works with apps and cards I already use",
    ],

    // 4.2
    docTime: "< 1 minute",
    whenHelp: ["Just before leaving"],
    worthTime: "",

    // 4.3
    techComfort: { smartphones: 4, apps: 4, payments: 4 },
    devices: ["Phone", "Transit card", "Screens at stops / stations"],
    techBarriers: ["No smartphone or mobile data", "Battery runs out"],

    // 5.1
    wantToSee: {
      timeSpent: "Nice to have", money: "Nice to have", emissions: "Nice to have", activeMinutes: "Essential",
      pastMonths: "Essential", neighbours: "Nice to have", suggestions: "Essential", other: "",
    },

    // 5.2
    shareWith: {
      friends: "Yes", employer: "No", operators: "Only anonymous", council: "Only anonymous",
      researchers: "Only anonymous", companies: "No", other: "",
    },
    privacyWants: ["Control exactly what's shared", "Delete history at any time"],

    // 5.3
    neighbourhoodShow: "",
    participate: [],
    seenCO2: "",
    co2Reaction: [],
    concerns: [],
    whoChange: [],

    // 7
    realBarriers: ["Infrastructure (no safe lanes, no bike parking, missing connections)"],
    wouldPay: "Unsure",
    supportNeeded: ["Training (e.g. cycling in traffic, using the app)", "A group of others doing the same"],
    supportWho: "City / state",
    designAddress: [],
    talkTo: { travellers: "", operators: "", council: "", employers: "", other: "" },
  },
  {
    "type": "Traveller",
    "by": "Pedro",
    "date": "10 Nov",
    "description": "MSc finalist student that goes out to bars most days and bairro alto weekly.",
    "neighbourhood": "Pontinha",
    "rideAlong": true,
    "consent": true,
    "insight": "If he could, he would go by the transport method that is the cheapest",
    "notes": "",
    "whereWeek": "",
    "livesIn": "City centre: Pontinha",
    "dependents": "some friends that live nearby",
    "rhythms": "doesn't matter",
    "particular": "I live a bit far away from the center. due to not having transportation at that time is really hard for me, uber is just easier",
    "modeFrequency": {
      "walking": "Daily",
      "ownBike": "Never",
      "sharedBike": "Never",
      "busTram": "Weekly",
      "metro": "Daily",
      "trainFerry": "Never",
      "ownCar": "Weekly",
      "carShare": "Never",
      "taxi": "Weekly",
      "other": ""
    },
    "passes": "Pass",
    "passesFit": "Partially",
    "notCaptured": "uber travel",
    "travelDays": [
      {
        "date": "",
        "morning": {
          "route": "pontinha - benfica",
          "modes": "metro",
          "time": "45",
          "cost": "0",
          "feel": "ok, time consuming"
        },
        "afternoon": {
          "route": "benfica - campo pequeno",
          "modes": "metro",
          "time": "40",
          "cost": "0",
          "feel": "tiring"
        },
        "evening": {
          "route": "bairro alto - pontinha",
          "modes": "uber",
          "time": "30",
          "cost": "15",
          "feel": "relaxing"
        }
      }
    ],
    "planningTime": "< 1 hour",
    "howPlan": [
      "Map / route apps"
    ],
    "planFor": [
      "Not being late",
      "Saving money"
    ],
    "planningChallenges": [
      "not having metro / public transports"
    ],
    "wishDifferent": [],
    "whyNot": "",
    "plannersThink": "",
    "moment": "",
    "momentWhy": "",
    "knowImpact": "I have a feeling for it",
    "impactSources": [
      "News / social media"
    ],
    "changedForEnvironment": "",
    "infoWorksFrustrates": "",
    "infoBeforeLeaving": [],
    "factorRank": [
      "Cost",
      "Travel time",
      "Accessibility",
      "Flexibility",
      "Safety"
    ],
    "moneySplit": {
      "publicTransport": "90",
      "car": "5",
      "shared": "5",
      "other": "0"
    },
    "choicesChange": "",
    "wouldAccept": [
      "A slightly longer trip: 30"
    ],
    "moreInfo": [
      "Unsure"
    ],
    "gaveUp": "Yes",
    "idealCompanion": "",
    "features": [
      "Door-to-door planning across walking, bike, bus, metro, train",
      "Real-time delays and alternatives",
      "Voice / hands-free while moving"
    ],
    "docTime": "< 1 minute",
    "whenHelp": [
      "After the trip (looking back)",
      "Weekly / monthly summary"
    ],
    "worthTime": "",
    "techComfort": {
      "smartphones": "5",
      "apps": "5",
      "payments": "5"
    },
    "devices": [
      "Phone"
    ],
    "techBarriers": [
      "No smartphone or mobile data",
      "Battery runs out",
      "Cost"
    ],
    "wantToSee": {
      "timeSpent": "Essential",
      "money": "Essential",
      "emissions": "Nice to have",
      "activeMinutes": "Essential",
      "pastMonths": "Essential",
      "neighbours": "Nice to have",
      "suggestions": "Essential",
      "other": ""
    },
    "shareWith": {
      "friends": "Yes",
      "employer": "Only anonymous",
      "operators": "Only anonymous",
      "council": "Only anonymous",
      "researchers": "Only anonymous",
      "companies": "Only anonymous",
      "other": ""
    },
    "privacyWants": [
      "Control exactly what's shared",
      "Delete history at any time"
    ],
    "neighbourhoodShow": "",
    "participate": [],
    "seenCO2": "No",
    "co2Reaction": [],
    "concerns": [],
    "whoChange": [],
    "realBarriers": [],
    "wouldPay": "No",
    "supportNeeded": [
      "A free or discounted trial period",
      "Safe storage for a bike or scooter"
    ],
    "supportWho": "",
    "designAddress": [],
    "talkTo": {
      "travellers": "",
      "operators": "",
      "council": "",
      "employers": "",
      "other": ""
    }
  },
  {
    type: "Traveller",
    by: "Pedro",
    date: "10 Nov",
    description: "Bachelor student living in Portela; doesn't drink, so drives his own car on nights out and gives friends lifts home",
    neighbourhood: "Portela",
    rideAlong: false,
    consent: true,
    insight: "Being the one who doesn't drink makes him the group's driver: every Friday night he goes out by car and drives friends home. He doesn't know or care about the footprint; he likes driving and being with people.",
    notes: "",

    // 1.1
    whereWeek: "Weekdays: Portela ↔ university, local walks for errands and coffee. Friday nights: Portela → Campo Pequeno → Bairro Alto, then drops friends home.",
    livesIn: "Suburb / outer municipality: Portela",
    dependents: "Friends: he drives them home on nights out",
    rhythms: "Friday nights fixed. Out more in term and summer, less in exams. Rain makes driving even more obvious.",
    particular: "Doesn't drink, so he always drives his own car when going out.",

    // 1.2
    modeFrequency: {
      walking: "Daily", ownBike: "Never", sharedBike: "Never", busTram: "Never", metro: "Never",
      trainFerry: "Never", ownCar: "Weekly", carShare: "Never", taxi: "Never", other: "",
    },
    passes: "Metro pass",
    passesFit: "No: has it but doesn't use it",
    notCaptured: "One car trip carries 3–4 people; the late-night drop-off loop; time looking for parking.",

    // 1.3
    travelDays: [{
      date: "A typical Friday",
      morning:   { route: "Home / university", modes: "Walking or a lift", time: "", cost: "Free", feel: "Routine" },
      afternoon: { route: "University / home", modes: "Walking", time: "", cost: "Free", feel: "Relaxed" },
      evening:   {
        route: "22:00 Portela → Campo Pequeno (picking up friends); 03:00 Bairro Alto → Campo Pequeno → friends' homes → Portela",
        modes: "Own car", time: "20 min; 45–60 min", cost: "~€3 fuel + parking", feel: "Fun, music on; tired but likes it",
      },
    }],

    // 1.4
    planningTime: "< 1 hour",
    howPlan: ["Map / route apps"],
    planFor: ["Coordinating with others", "Other: where to park"],
    planningChallenges: ["Parking near Bairro Alto", "Drop-off order late at night"],
    wishDifferent: ["The long drop-off loop at the end of the night"],
    whyNot: "Friends depend on him; they have no comfortable late-night alternative.",

    // 2.1
    plannersThink: "Young people use night buses or Uber, and nightlife areas should be car-free.",
    moment: "A car full of friends at 3 am, everyone getting home safely.",
    momentWhy: "Driving is how he looks after his friends and keeps them from drunk driving or unsafe trips.",

    // 2.2
    knowImpact: "No",
    impactSources: ["Nowhere"],
    changedForEnvironment: "No",
    infoWorksFrustrates: "It has never reached him; he'd ignore anything that feels like guilt-tripping.",
    infoBeforeLeaving: ["Traffic", "Parking", "Fuel price"],

    // 3.1
    factorRank: ["Convenience (door to door)", "Being with friends", "Travel time", "Safety at night", "Cost"],
    moneySplit: { publicTransport: "5%", car: "95%", shared: "0%", other: "0%" },
    choicesChange: "On nights out he always drives and takes friends home.",

    // 3.2
    wouldAccept: ["None of these"],
    moreInfo: ["Probably not"],
    gaveUp: "No: never seriously tried; the metro closes too early for nights out",

    // 4.1
    idealCompanion: "An app that plans the best drop-off route and shows parking. Any green angle as a reward for carpooling, not a penalty for driving.",
    features: ["Other: multi-stop route planning", "Other: parking availability", "Other: splitting fuel costs with friends"],

    // 4.2
    docTime: "< 1 minute",
    whenHelp: ["Just before leaving", "Other: when looking for parking"],
    worthTime: "Saving money or parking time.",

    // 4.3
    techComfort: { smartphones: 5, apps: 5, payments: 5 },
    devices: ["Phone"],
    techBarriers: ["Battery runs out"],

    // 5.1
    wantToSee: { money: "Nice to have", other: "Friends he got home; taxi trips saved" },

    // 5.2
    shareWith: {
      friends: "Yes", employer: "No", operators: "Only anonymous", council: "Only anonymous",
      researchers: "Yes", companies: "Yes (for fuel or parking discounts)", other: "",
    },
    privacyWants: ["Other: keep his and friends' home addresses and late-night locations private"],

    // 5.3
    neighbourhoodShow: "How many people one car moves on nights out, and the lack of late-night transport to Portela.",
    participate: ["Online vote or survey"],

    // 6.1
    seenCO2: "No",
    co2Reaction: ["Abstract: doesn't mean much to him"],

    // 6.2
    concerns: ["Tracking and surveillance", "Other: feeling judged when he's preventing drunk driving", "Other: battery drain"],
    whoChange: ["Friends and family", "Transport operators (frequency, prices, connections)"],

    // 7
    realBarriers: ["Infrastructure (no safe lanes, no bike parking, missing connections)", "Other: enjoys driving, doesn't see it as a problem"],
    wouldPay: "Only if it pays for itself: fuel or parking savings",
    supportNeeded: ["Other: frequent, safe night buses or metro to the suburbs", "Other: an option that works for the whole group"],
    supportWho: "Carris, Metro de Lisboa, Lisbon and Loures councils",
    designAddress: ["Designated drivers and multi-passenger trips (lower impact than everyone taking taxis)"],
    talkTo: {
      travellers: "The friends he drives home", operators: "Night bus and ride-hailing drivers",
      council: "Lisbon and Loures", employers: "", other: "Bairro Alto residents",
    },
  },
  {
    type: "Traveller",
    by: "Pedro",
    date: "10 Nov",
    description: "Bachelor student who goes out about once a month and uses Uber for everything",
    neighbourhood: "",
    rideAlong: false,
    consent: true,
    insight: "Comfort decides everything: he takes Uber for every trip, nights out included, to get places smoothly, fast and whenever he wants. Neither the environment nor the money spent matters to him.",
    notes: "",

    particular: "Uses Uber for everything.",
    factorRank: ["Comfort", "Travel time", "Flexibility"],
    choicesChange: "Goes out about once a month, and then goes by Uber, like for every other trip.",
    knowImpact: "I don't think about it",
  },
  {
    "type": "Traveller",
    "by": "Martijn",
    "date": "Nov 11",
    "description": "Young Adult Male",
    "neighbourhood": "Lisboa",
    "rideAlong": false,
    "consent": true,
    "insight": "",
    "notes": "",
    "whereWeek": "Between Olaias and Vasco da Gama",
    "livesIn": "City centre",
    "dependents": "Alone or outings with families",
    "rhythms": "What?",
    "particular": "Food",
    "modeFrequency": {
      "walking": "Daily",
      "ownBike": "Never",
      "sharedBike": "Never",
      "busTram": "Rarely",
      "metro": "Weekly",
      "trainFerry": "Never",
      "ownCar": "Weekly",
      "carShare": "Weekly",
      "taxi": "Rarely",
      "other": "Never"
    },
    "passes": "Metro card",
    "passesFit": "Yes, fully",
    "notCaptured": "",
    "travelDays": [
      {
        "date": "",
        "morning": {
          "route": "Olaias -> Vasco da gama",
          "modes": "Car",
          "time": "30 min",
          "cost": "",
          "feel": "Dull"
        },
        "afternoon": {
          "route": "Vasco da gama -> Olaias",
          "modes": "Metro",
          "time": "30 min",
          "cost": "2 euro",
          "feel": ""
        },
        "evening": {
          "route": "",
          "modes": "",
          "time": "",
          "cost": "",
          "feel": ""
        }
      }
    ],
    "planningTime": "< 1 hour",
    "howPlan": [
      "Map / route apps"
    ],
    "planFor": [
      "Saving money"
    ],
    "planningChallenges": [
      "How many pieces of clothing to take on long trips"
    ],
    "wishDifferent": [],
    "whyNot": "",
    "plannersThink": "",
    "moment": "Time spent visiting family",
    "momentWhy": "Memories",
    "knowImpact": "No",
    "impactSources": [
      "Nowhere"
    ],
    "changedForEnvironment": "",
    "infoWorksFrustrates": "",
    "infoBeforeLeaving": [
      "Weather"
    ],
    "factorRank": [
      "Cost",
      "Comfort",
      "Convenience"
    ],
    "moneySplit": {
      "publicTransport": "24€",
      "car": "",
      "shared": "",
      "other": ""
    },
    "choicesChange": "",
    "wouldAccept": [
      "None of these"
    ],
    "moreInfo": [
      "Help me choose differently"
    ],
    "gaveUp": "No",
    "idealCompanion": "",
    "features": [
      "One ticket or pass for every mode",
      "Door-to-door planning across walking, bike, bus, metro, train"
    ],
    "docTime": "1–5 minutes",
    "whenHelp": [
      "Weekly / monthly summary"
    ],
    "worthTime": "",
    "techComfort": {
      "smartphones": "5",
      "apps": "5",
      "payments": "5"
    },
    "devices": [
      "Phone"
    ],
    "techBarriers": [
      "No smartphone or mobile data",
      "Battery runs out"
    ],
    "wantToSee": {
      "timeSpent": "Nice to have",
      "money": "Nice to have",
      "emissions": "",
      "activeMinutes": "Nice to have",
      "pastMonths": "",
      "neighbours": "",
      "suggestions": "",
      "other": ""
    },
    "shareWith": {
      "friends": "No",
      "employer": "No",
      "operators": "No",
      "council": "No",
      "researchers": "No",
      "companies": "No",
      "other": "No"
    },
    "privacyWants": [],
    "neighbourhoodShow": "",
    "participate": [],
    "seenCO2": "No",
    "co2Reaction": [
      "Guilt-inducing"
    ],
    "concerns": [
      "Tracking and surveillance"
    ],
    "whoChange": [
      "Other: Society"
    ],
    "realBarriers": [
      "Infrastructure (no safe lanes, no bike parking, missing connections)",
      "Cost",
      "Time",
      "Safety",
      "Care duties (children, relatives, shopping)"
    ],
    "wouldPay": "Only if it pays for itself",
    "supportNeeded": [
      "Incentives from my employer or school"
    ],
    "supportWho": "",
    "designAddress": [],
    "talkTo": {
      "travellers": "",
      "operators": "",
      "council": "",
      "employers": "",
      "other": ""
    }
  },
  {
    "type": "Traveller",
    "by": "Martijn",
    "date": "11 Nov",
    "description": "MSc student",
    "neighbourhood": "",
    "rideAlong": false,
    "consent": true,
    "insight": "",
    "notes": "",
    "whereWeek": "University, Home",
    "livesIn": "City centre",
    "dependents": "Alone",
    "rhythms": "University schedule",
    "particular": "Nothing",
    "modeFrequency": {
      "walking": "Daily",
      "ownBike": "Never",
      "sharedBike": "Never",
      "busTram": "Never",
      "metro": "Weekly",
      "trainFerry": "Rarely",
      "ownCar": "Weekly",
      "carShare": "Never",
      "taxi": "Rarely",
      "other": "Never"
    },
    "passes": "None",
    "passesFit": "Yes, fully",
    "notCaptured": "",
    "travelDays": [
      {
        "date": "",
        "morning": {
          "route": "Home - University",
          "modes": "Car",
          "time": "10 minutes",
          "cost": "Low",
          "feel": "Normal"
        },
        "afternoon": {
          "route": "University - Home",
          "modes": "Car",
          "time": "10 minutes",
          "cost": "Low",
          "feel": "Normal"
        },
        "evening": {
          "route": "",
          "modes": "",
          "time": "",
          "cost": "",
          "feel": ""
        }
      }
    ],
    "planningTime": "< 1 hour",
    "howPlan": [
      "Map / route apps"
    ],
    "planFor": [
      "Not being late"
    ],
    "planningChallenges": [
      "Time",
      "Delays",
      "Cost"
    ],
    "wishDifferent": [
      "None",
      "None",
      "None"
    ],
    "whyNot": "",
    "plannersThink": "",
    "moment": "",
    "momentWhy": "",
    "knowImpact": "No",
    "impactSources": [
      "Car dashboard / fuel costs"
    ],
    "changedForEnvironment": "No",
    "infoWorksFrustrates": "",
    "infoBeforeLeaving": [
      "Travel Time",
      "Time of Arrival"
    ],
    "factorRank": [
      "Travel time",
      "Cost",
      "Reliability",
      "Flexibility",
      "Comfort"
    ],
    "moneySplit": {
      "publicTransport": "10",
      "car": "90",
      "shared": "0",
      "other": "0"
    },
    "choicesChange": "",
    "wouldAccept": [
      "A slightly longer trip: 10 minutes"
    ],
    "moreInfo": [
      "Unsure"
    ],
    "gaveUp": "No",
    "idealCompanion": "",
    "features": [
      "One ticket or pass for every mode",
      "Real-time delays and alternatives",
      "Works offline",
      "Works with apps and cards I already use"
    ],
    "docTime": "< 1 minute",
    "whenHelp": [
      "The night before"
    ],
    "worthTime": "",
    "techComfort": {
      "smartphones": "5",
      "apps": "4",
      "payments": "4"
    },
    "devices": [
      "Phone",
      "Transit card"
    ],
    "techBarriers": [
      "Battery runs out",
      "Cost"
    ],
    "wantToSee": {
      "timeSpent": "Essential",
      "money": "Essential",
      "emissions": "Nice to have",
      "activeMinutes": "Essential",
      "pastMonths": "Essential",
      "neighbours": "Nice to have",
      "suggestions": "Nice to have",
      "other": ""
    },
    "shareWith": {
      "friends": "Yes",
      "employer": "No",
      "operators": "No",
      "council": "No",
      "researchers": "No",
      "companies": "No",
      "other": ""
    },
    "privacyWants": [
      "Control exactly what's shared",
      "Delete history at any time"
    ],
    "neighbourhoodShow": "",
    "participate": [
      "Online vote or survey",
      "Testing a temporary change (pop-up lane, new stop)"
    ],
    "seenCO2": "No",
    "co2Reaction": [
      "Confusing"
    ],
    "concerns": [
      "Unfair to people with no real alternative",
      "Tracking and surveillance",
      "Who controls the data?"
    ],
    "whoChange": [
      "The city (streets, lanes, parking)",
      "Transport operators (frequency, prices, connections)"
    ],
    "realBarriers": [
      "Infrastructure (no safe lanes, no bike parking, missing connections)",
      "Cost",
      "Time",
      "Weather or hills"
    ],
    "wouldPay": "Only if it pays for itself",
    "supportNeeded": [
      "A free or discounted trial period",
      "Someone to plan the first trips with me",
      "Incentives from my employer or school"
    ],
    "supportWho": "",
    "designAddress": [],
    "talkTo": {
      "travellers": "",
      "operators": "",
      "council": "",
      "employers": "",
      "other": ""
    }
  },
  {
    "type": "Traveller",
    "by": "Martijn",
    "date": "11 Nov",
    "description": "MSc Student, 24 yo, likes to go out",
    "neighbourhood": "rua comandante cousteau",
    "rideAlong": false,
    "consent": true,
    "insight": "",
    "notes": "",
    "whereWeek": "To IST, to go out with friends at Bairro alto, or do other things at spots such as Saldanha and Campo Pequeno",
    "livesIn": "City centre",
    "dependents": "Usually travel alone",
    "rhythms": "",
    "particular": "",
    "modeFrequency": {
      "walking": "Daily",
      "ownBike": "Never",
      "sharedBike": "Never",
      "busTram": "Never",
      "metro": "Weekly",
      "trainFerry": "Weekly",
      "ownCar": "Rarely",
      "carShare": "Never",
      "taxi": "Rarely",
      "other": "Never"
    },
    "passes": "I have the monthly pass to the public transport",
    "passesFit": "Partially: Most of the times yes, but in order to return from a night out it would be nice to have something like metro",
    "notCaptured": "",
    "travelDays": [
      {
        "date": "When i have to go to IST",
        "morning": {
          "route": "Home to IST",
          "modes": "Metro",
          "time": "30/40 minutes",
          "cost": "30€ monthly",
          "feel": "its good"
        },
        "afternoon": {
          "route": "IST to home",
          "modes": "Metro",
          "time": "30/40 minutes",
          "cost": "30€ monthly",
          "feel": "its good"
        },
        "evening": {
          "route": "",
          "modes": "",
          "time": "",
          "cost": "",
          "feel": ""
        }
      },
      {
        "date": "When i have dinner with friends",
        "morning": {
          "route": "",
          "modes": "",
          "time": "",
          "cost": "",
          "feel": ""
        },
        "afternoon": {
          "route": "Home to Campo pequeno",
          "modes": "Metro",
          "time": "30/40 minutes",
          "cost": "30€ monthly",
          "feel": "its good"
        },
        "evening": {
          "route": "Campo Pequeno to Home",
          "modes": "Metro",
          "time": "30/40 minutes",
          "cost": "30€ monthly",
          "feel": "its good"
        }
      },
      {
        "date": "When i have a night out with friends",
        "morning": {
          "route": "",
          "modes": "",
          "time": "",
          "cost": "",
          "feel": ""
        },
        "afternoon": {
          "route": "Home to Baixa-Chiado",
          "modes": "Metro",
          "time": "30/40 minutes",
          "cost": "30€ monthly",
          "feel": "its good"
        },
        "evening": {
          "route": "Bairro alto to Home",
          "modes": "Taxi",
          "time": "20 minutes",
          "cost": "about 15€",
          "feel": "i would like to have more options"
        }
      },
      {
        "date": "When i go to my grandfathers house",
        "morning": {
          "route": "Home to Benfica",
          "modes": "Train",
          "time": "30 mins",
          "cost": "30€ monthly",
          "feel": "its good"
        },
        "afternoon": {
          "route": "Benfica to home",
          "modes": "Train",
          "time": "30 mins",
          "cost": "30€ monthly",
          "feel": "its good"
        },
        "evening": {
          "route": "",
          "modes": "",
          "time": "",
          "cost": "",
          "feel": ""
        }
      }
    ],
    "planningTime": "< 1 hour",
    "howPlan": [
      "Map / route apps",
      "Memory and habit"
    ],
    "planFor": [
      "Not being late"
    ],
    "planningChallenges": [],
    "wishDifferent": [],
    "whyNot": "",
    "plannersThink": "That most peope return home relatively early",
    "moment": "On Fridays and Saturdays a lot of people go out",
    "momentWhy": "I also go out, would like to have more options of public transport",
    "knowImpact": "No",
    "impactSources": [
      "Nowhere"
    ],
    "changedForEnvironment": "No because i mostly use public transport like metro and train which i think is better than a car",
    "infoWorksFrustrates": "It never gets to me, its something that is rarely talked about",
    "infoBeforeLeaving": [],
    "factorRank": [
      "Cost",
      "Travel time",
      "Reliability",
      "Comfort",
      "Accessibility"
    ],
    "moneySplit": {
      "publicTransport": "70",
      "car": "10",
      "shared": "20",
      "other": ""
    },
    "choicesChange": "I mostly use public transport, except for long trips and night outs",
    "wouldAccept": [
      "None of these"
    ],
    "moreInfo": [
      "Unsure"
    ],
    "gaveUp": "No: i use mostly public transport",
    "idealCompanion": "",
    "features": [
      "One ticket or pass for every mode",
      "Real-time delays and alternatives",
      "Accessibility details (steps, lifts, step-free routes)",
      "Safety details (lighting, protected bike lanes)"
    ],
    "docTime": "1–5 minutes",
    "whenHelp": [
      "Just before leaving",
      "On the way (when things go wrong)"
    ],
    "worthTime": "",
    "techComfort": {
      "smartphones": "5",
      "apps": "5",
      "payments": "5"
    },
    "devices": [
      "Phone",
      "Transit card",
      "Screens at stops / stations"
    ],
    "techBarriers": [],
    "wantToSee": {
      "timeSpent": "Nice to have",
      "money": "Essential",
      "emissions": "Nice to have",
      "activeMinutes": "Nice to have",
      "pastMonths": "Nice to have",
      "neighbours": "Nice to have",
      "suggestions": "Essential",
      "other": ""
    },
    "shareWith": {
      "friends": "Yes",
      "employer": "No",
      "operators": "Only anonymous",
      "council": "No",
      "researchers": "Only anonymous",
      "companies": "Only anonymous",
      "other": ""
    },
    "privacyWants": [
      "Control exactly what's shared",
      "Pause tracking for some trips"
    ],
    "neighbourhoodShow": "",
    "participate": [
      "Online vote or survey"
    ],
    "seenCO2": "No",
    "co2Reaction": [
      "Confusing",
      "Interesting but unclear how it helps me"
    ],
    "concerns": [
      "Unfair to people with no real alternative"
    ],
    "whoChange": [
      "The city (streets, lanes, parking)"
    ],
    "realBarriers": [
      "Habit"
    ],
    "wouldPay": "Only if it pays for itself",
    "supportNeeded": [
      "A free or discounted trial period",
      "Training (e.g. cycling in traffic, using the app)",
      "Safe storage for a bike or scooter",
      "Incentives from my employer or school"
    ],
    "supportWho": "",
    "designAddress": [],
    "talkTo": {
      "travellers": "",
      "operators": "",
      "council": "",
      "employers": "",
      "other": ""
    }
  },
  // ---- Oscar's interviews (transcribed from the booklets) ----
  {
    type: "Stakeholder",
    by: "Oscar",
    date: "11 Nov",
    description: "Taxi driver living in Odivelas; works Thursday to Sunday from sunset, all over Lisbon",
    neighbourhood: "Odivelas",
    rideAlong: false,
    consent: true,
    insight: "",
    notes: "",

    whereWeek: "All over Lisbon, Odivelas",
    livesIn: "Suburb / outer municipality",
    dependents: "Passengers",
    rhythms: "Thursday to Sunday, from sunset",
    particular: "The car is his workplace",
    modeFrequency: {
      walking: "Weekly", ownBike: "Never", sharedBike: "Never", busTram: "Rarely", metro: "Rarely",
      trainFerry: "Rarely", ownCar: "Daily", carShare: "", taxi: "Daily (as the driver)", other: "",
    },
    passes: "Via Verde",
    passesFit: "Yes, fully",
    notCaptured: "Navegante",
    travelDays: [{
      date: "",
      evening: { route: "Odivelas → Marquês de Pombal", modes: "Taxi", time: "25 min", cost: "", feel: "Normal; traffic" },
    }],
    planningTime: "< 1 hour",
    howPlan: ["Map / route apps", "Memory and habit"],
    planFor: ["Not being late", "Saving money", "Safety (lighting, traffic, people)"],
    planningChallenges: ["Knowing demand", "Peak traffic"],
    plannersThink: "Taxis are part of the traffic problem, but after 1 am there is little other choice.",
    knowImpact: "I have a feeling for it: diesel",
    impactSources: ["Car dashboard / fuel costs"],
    changedForEnvironment: "Reduced idling, because of money",
    infoWorksFrustrates: "EVs are supposed to be good, but expensive, and there are few chargers",
    infoBeforeLeaving: ["Events", "Closed streets", "Weather"],
    factorRank: ["Cost", "Safety", "Travel time", "Reliability", "Flexibility"],
    moneySplit: { publicTransport: "5%", car: "90%", shared: "0%", other: "5%" },
    wouldAccept: ["A slightly longer trip: up to 15 minutes more"],
    moreInfo: ["Create more effort than value"],
    gaveUp: "Yes: too expensive, difficult to change",
    idealCompanion: "Shared trips at night",
    features: [
      "Real-time delays and alternatives", "Voice / hands-free while moving",
      "Travel with friends, family or colleagues", "Works with apps and cards I already use",
    ],
    docTime: "< 1 minute",
    whenHelp: ["On the way (when things go wrong)"],
    worthTime: "More fares at night",
    techComfort: { smartphones: 4, apps: 4, payments: 4 },
    devices: ["Phone", "Car or bike display"],
    techBarriers: ["Battery runs out", "Don't trust apps with my location"],
    wantToSee: {
      timeSpent: "Essential", money: "Essential", emissions: "Nice to have", activeMinutes: "",
      pastMonths: "Essential", neighbours: "", suggestions: "Nice to have", other: "Essential: km driven empty",
    },
    shareWith: {
      friends: "No", employer: "Yes", operators: "Only anonymous", council: "Only anonymous",
      researchers: "Only anonymous", companies: "No", other: "",
    },
    privacyWants: ["Control exactly what's shared", "Delete history at any time"],
    seenCO2: "Yes: car ad",
    co2Reaction: ["Interesting but unclear how it helps me"],
    concerns: ["Greenwashing", "Unfair to people with no real alternative"],
    whoChange: [
      "The city (streets, lanes, parking)", "Transport operators (frequency, prices, connections)",
      "Other: government support for electric cars",
    ],
    realBarriers: ["Infrastructure (no safe lanes, no bike parking, missing connections)", "Cost", "Time"],
    wouldPay: "Only if it pays for itself: work",
    supportNeeded: ["A free or discounted trial period", "Incentives from my employer or school"],
    designAddress: ["Times when the metro doesn't run", "Empty taxi km", "Safety"],
    talkTo: { travellers: "Yes", operators: "Yes", council: "", employers: "", other: "" },
  },

  {
    type: "Traveller",
    by: "Oscar",
    date: "11 Nov",
    description: "Student living in Anjos with roommates; studies at Taguspark, takes bus and metro daily",
    neighbourhood: "Anjos",
    rideAlong: false,
    consent: false,
    insight: "",
    notes: "",

    whereWeek: "To/from school (Taguspark), Cais do Sodré, Carcavelos, supermarket",
    livesIn: "Inner neighbourhood",
    dependents: "Roommates",
    particular: "Chooses convenience first",
    modeFrequency: {
      walking: "Daily", ownBike: "Never", sharedBike: "Never", busTram: "Daily", metro: "Daily",
      trainFerry: "Weekly", ownCar: "Never", carShare: "Never", taxi: "Weekly", other: "",
    },
    passesFit: "Yes, fully",
    travelDays: [{
      date: "",
      evening: { route: "Santos", modes: "Metro / tram / walk", time: "30–40 min", cost: "€40 / month", feel: "Good" },
    }],
    planningTime: "< 1 hour",
    howPlan: ["Map / route apps"],
    planFor: ["Not being late", "Accessibility (steps, lifts, buggy, luggage)"],
    planningChallenges: [
      "Buses not on time", "Trams not on time",
      "Bad connection between maps and Metro Lisboa; bad Metro app",
    ],
    wishDifferent: ["Caparica, not by cab"],
    plannersThink: "Hard to plan routes because of stops in traffic, which makes buses late.",
    moment: "Sketch of a metro train in a tunnel",
    momentWhy: "Most often travels by metro",
    knowImpact: "No",
    changedForEnvironment: "No",
    factorRank: ["Travel time", "Reliability", "Cost", "Safety", "Comfort"],
    moneySplit: { publicTransport: "100%", car: "", shared: "", other: "" },
    wouldAccept: [
      "A slightly longer trip: 10–20 minutes more", "A slightly higher price: €15–40 more", "Less comfort",
    ],
    moreInfo: ["Help me choose differently"],
    idealCompanion: "Lower cost",
    features: [
      "One ticket or pass for every mode", "Door-to-door planning across walking, bike, bus, metro, train",
      "Impact shown for each route option", "Real-time delays and alternatives",
      "Accessibility details (steps, lifts, step-free routes)", "Works with apps and cards I already use",
    ],
    techComfort: { smartphones: 5, apps: 5, payments: 5 },
    devices: ["Phone", "Transit card", "Screens at stops / stations", "Car or bike display", "Other: computer for flights"],
    techBarriers: ["Cost"],
    wantToSee: {
      timeSpent: "Nice to have", money: "Essential", emissions: "Nice to have", activeMinutes: "Nice to have",
      pastMonths: "", neighbours: "", suggestions: "Nice to have", other: "",
    },
    shareWith: {
      friends: "Yes", employer: "No", operators: "No", council: "No",
      researchers: "No", companies: "Yes", other: "",
    },
    privacyWants: [
      "Control exactly what's shared", "Delete history at any time", "Pause tracking for some trips",
      "Share only to improve services for everyone",
    ],
    participate: ["Online vote or survey"],
    seenCO2: "Yes: flight booking",
    co2Reaction: ["Useful"],
    concerns: ["Greenwashing", "Unfair to people with no real alternative", "Cost"],
    whoChange: [
      "The city (streets, lanes, parking)", "Transport operators (frequency, prices, connections)",
      "Nobody: I'd do it if it were easy enough",
    ],
    realBarriers: ["Infrastructure (no safe lanes, no bike parking, missing connections)", "Cost", "Time", "Habit"],
    wouldPay: "Yes: up to €10 per month/year",
    supportNeeded: ["A free or discounted trial period", "A group of others doing the same", "Incentives from my employer or school"],
    supportWho: "Employers / government",
    designAddress: ["Life-cycle analysis", "Accessibility", "Reliability"],
    talkTo: { travellers: "Yes", operators: "", council: "Yes", employers: "Yes", other: "" },
  },

  {
    type: "Traveller",
    by: "Oscar",
    date: "11 Nov",
    description: "Student living in Anjos; school, city and beach; picks the safer option in the evening",
    neighbourhood: "Anjos",
    rideAlong: false,
    consent: true,
    insight: "",
    notes: "",

    whereWeek: "Sketch: school, city, beach",
    livesIn: "City centre",
    dependents: "Friends, mainly for school",
    rhythms: "Every season, more so during bad weather",
    particular: "How easy it is to get around; people and building watching; connection",
    modeFrequency: {
      walking: "Daily", ownBike: "Never", sharedBike: "Never", busTram: "Weekly", metro: "Weekly",
      trainFerry: "Rarely", ownCar: "Never", carShare: "Never", taxi: "Weekly", other: "Never",
    },
    passesFit: "Yes, fully",
    notCaptured: "Travel data, environmental impact",
    travelDays: [{
      date: "4 Oct",
      evening: { route: "Anjos → the bar", modes: "Metro", time: "10 min", cost: "Nothing", feel: "Nice, easy" },
    }],
    planningTime: "< 1 hour",
    howPlan: ["Map / route apps"],
    planFor: ["Not being late", "Accessibility (steps, lifts, buggy, luggage)", "Coordinating with others"],
    planningChallenges: ["Route", "Traffic", "Time"],
    wishDifferent: ["To the airport", "To school", "To events"],
    whyNot: "Time optimisation",
    plannersThink: "Accessibility",
    moment: "Sketch of a metro train: \"a lot of unnecessary metro, instead of walking\"",
    knowImpact: "No",
    impactSources: ["Nowhere"],
    changedForEnvironment: "Yes, train instead of flight",
    infoWorksFrustrates: "Through the phone is the best",
    infoBeforeLeaving: ["Time", "Route", "Stops"],
    factorRank: ["Cost", "Reliability", "Travel time", "Safety", "Comfort"],
    moneySplit: { publicTransport: "0% (has NIF)", car: "0%", shared: "15%", other: "0%" },
    choicesChange: "Yes, in the evening I choose a safer option.",
    wouldAccept: ["A slightly longer trip", "A slightly higher price", "Less comfort"],
    moreInfo: ["Unsure"],
    gaveUp: "Yes: too many changes",
    idealCompanion: "One way, not too time-consuming; an app for it stating the benefits",
    features: [
      "Door-to-door planning across walking, bike, bus, metro, train", "Impact shown for each route option",
      "Real-time delays and alternatives", "Accessibility details (steps, lifts, step-free routes)",
      "Safety details (lighting, protected bike lanes)", "Works offline", "Works with apps and cards I already use",
    ],
    docTime: "1–5 minutes",
    whenHelp: ["Just before leaving", "On the way (when things go wrong)"],
    worthTime: "Good options for the route",
    techComfort: { smartphones: 5, apps: 5, payments: 5 },
    devices: ["Phone"],
    techBarriers: ["Battery runs out"],
    wantToSee: {
      timeSpent: "Essential", money: "Essential", emissions: "Nice to have", activeMinutes: "Nice to have",
      pastMonths: "Nice to have", neighbours: "Nice to have", suggestions: "Essential", other: "",
    },
    shareWith: {
      friends: "Yes", employer: "", operators: "Yes", council: "Yes",
      researchers: "Yes", companies: "Yes", other: "",
    },
    privacyWants: ["Delete history at any time", "Pause tracking for some trips"],
    participate: ["Not interested"],
    seenCO2: "No",
    co2Reaction: ["Useful"],
    concerns: ["Greenwashing", "Unfair to people with no real alternative"],
    whoChange: ["Transport operators (frequency, prices, connections)", "Nobody: I'd do it if it were easy enough"],
    realBarriers: ["Infrastructure (no safe lanes, no bike parking, missing connections)", "Time", "Habit"],
    wouldPay: "Unsure",
    supportNeeded: ["A free or discounted trial period", "A group of others doing the same", "Incentives from my employer or school"],
    supportWho: "Transport operators",
    designAddress: ["Time", "Safety", "Costs"],
    talkTo: { travellers: "Yes", operators: "", council: "Yes", employers: "", other: "" },
  },
];
