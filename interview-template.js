// Template for one research entry. This file is NOT loaded by the site.
// Copy the { ... } block below into the INTERVIEWS list in research.js and fill it in.
// Leave anything unanswered as "" or []. Options from the booklet are listed in the comments.
// For a ticked box, write the option text; for "Other", write what they said.

({
  // ---- About this entry ----
  type: "Traveller",            // always "Traveller" (stakeholders go in stakeholders.js)
  by: "",                       // team member who ran it (first name)
  date: "",                     // e.g. "12 Nov"
  description: "",              // who they are, no name, e.g. "MSc student, goes out in Bairro Alto most weekends"
  neighbourhood: "",            // booklet cover: neighbourhood / municipality
  rideAlong: false,             // true if you joined them on a trip
  consent: false,               // true once the consent form is signed
  insight: "",                  // the most important thing you learned
  notes: "",                    // anything else worth keeping

  // ---- 1.1 Your trips ----
  whereWeek: "",                // where they go in a normal week (describe the sketch/map)
  livesIn: "",                  // City centre | Inner neighbourhood | Suburb / outer municipality | Small town or rural area | Other: ...
  dependents: "",               // who travels with them or depends on their trips
  rhythms: "",                  // school term, shifts, weather, hills, summer vs winter
  particular: "",               // what makes the way they get around particular to them

  // ---- 1.2 How you move ----
  modeFrequency: {              // each: "Daily" | "Weekly" | "Rarely" | "Never"
    walking: "",
    ownBike: "",                // own bike / e-bike
    sharedBike: "",             // shared bike or scooter
    busTram: "",
    metro: "",
    trainFerry: "",
    ownCar: "",                 // own car / motorbike
    carShare: "",               // car share / carpool
    taxi: "",                   // taxi / ride-hailing
    other: "",                  // e.g. "Skateboard: Weekly"
  },
  passes: "",                   // passes, subscriptions, cards (Navegante, Gira, ...)
  passesFit: "",                // "Yes, fully" | "Partially: ..." | "No: ..."
  notCaptured: "",              // what tickets, passes and maps don't capture

  // ---- 1.3 A typical travel day ----
  // The day documented with the traveller (one { } per day).
  travelDays: [
    {
      date: "",                 // e.g. "Fri 6 Nov"
      morning:   { route: "", modes: "", time: "", cost: "", feel: "" },
      afternoon: { route: "", modes: "", time: "", cost: "", feel: "" },
      evening:   { route: "", modes: "", time: "", cost: "", feel: "" },
    },
  ],

  // ---- 1.4 The planning burden ----
  planningTime: "",             // "< 1 hour" | "1–3 hours" | "3–5 hours" | "> 5 hours"
  howPlan: [],                  // Map / route apps, Operator apps or websites, Paper timetables / stop signs, Memory and habit, Asking someone, Other: ...
  planFor: [],                  // Not being late, Saving money, Safety, Accessibility, Coordinating with others, Other: ...
  planningChallenges: [],       // up to 3
  wishDifferent: [],            // up to 3 trips they wish they made differently
  whyNot: "",

  // ---- 2.1 What others don't see ----
  plannersThink: "",            // "The people who plan streets and transport probably think..."
  moment: "",                   // the photo/sketch of a trip moment (describe it, or link to an image)
  momentWhy: "",

  // ---- 2.2 Knowing your footprint ----
  knowImpact: "",               // Yes, roughly in numbers | I have a feeling for it | No | I don't think about it
  impactSources: [],            // Route apps, Car dashboard / fuel costs, Transport operator campaigns, Employer or school, News / social media, Nowhere, Other: ...
  changedForEnvironment: "",
  infoWorksFrustrates: "",
  infoBeforeLeaving: [],        // up to 3

  // ---- 3.1 What drives your choices ----
  factorRank: [],               // top 5 in order: Travel time, Cost, Reliability, Comfort, Safety, Health / exercise, Environment, Flexibility, Habit, Accessibility, Other
  moneySplit: {                 // percentages, e.g. "70%"
    publicTransport: "",
    car: "",
    shared: "",                 // shared bikes / scooters / cars / taxis
    other: "",
  },
  choicesChange: "",            // commute vs shopping vs night out

  // ---- 3.2 The value of lower-impact travel ----
  wouldAccept: [],              // "Up to 10 min longer", "Up to 1 € more", Less comfort, None of these, "Depends on: ..."
  moreInfo: [],                 // Help me choose differently, Make me feel judged, Be ignored after a week, Create more effort than value, Unsure
  gaveUp: "",                   // "No" | "Yes: missed connection, unsafe bike lane, ..."

  // ---- 4.1 Your ideal trip companion ----
  idealCompanion: "",           // what they drew/described
  features: [],                 // One ticket or pass for every mode, Door-to-door planning, Impact shown for each route option,
                                // Real-time delays and alternatives, Accessibility details, Safety details, Voice / hands-free,
                                // Works offline, Automatic trip log, Rewards or discounts, Travel with friends/family/colleagues,
                                // Works with apps and cards I already use, Other: ...

  // ---- 4.2 The time factor ----
  docTime: "",                  // "< 1 minute" | "1–5 minutes" | "5–10 minutes" | "> 10 minutes"
  whenHelp: [],                 // The night before, Just before leaving, On the way, After the trip, Weekly/monthly summary, Other: ...
  worthTime: "",

  // ---- 4.3 Tech comfort level ----
  techComfort: { smartphones: "", apps: "", payments: "" },   // each 1–5
  devices: [],                  // Phone, Watch/wearable, Transit card, Screens at stops/stations, Car or bike display, Other: ...
  techBarriers: [],             // No smartphone or mobile data, Battery runs out, Learning curve, Cost, Don't trust apps with my location, Other: ...

  // ---- 5.1 What you'd get back ----
  wantToSee: {                  // each: "Essential" | "Nice to have"
    timeSpent: "",
    money: "",
    emissions: "",
    activeMinutes: "",
    pastMonths: "",
    neighbours: "",
    suggestions: "",
    other: "",
  },

  // ---- 5.2 Privacy & control ----
  shareWith: {                  // each: "Yes" | "Only anonymous" | "No"
    friends: "",
    employer: "",
    operators: "",
    council: "",
    researchers: "",
    companies: "",
    other: "",
  },
  privacyWants: [],             // Control exactly what's shared, Delete history at any time, Pause tracking for some trips,
                                // Share only to improve services for everyone, Set it once and forget it, Other: ...

  // ---- 5.3 A shared story ----
  neighbourhoodShow: "",
  participate: [],              // Online vote or survey, Street workshop or walk, Testing a temporary change, Not interested, Other: ...

  // ---- 6.1 Reading the numbers ----
  seenCO2: "",                  // "No" | "Yes: where"
  co2Reaction: [],              // Useful, Confusing, Guilt-inducing, "Not believable: why", Interesting but unclear how it helps me

  // ---- 6.2 Your concerns ----
  concerns: [],                 // Greenwashing, Unfair to people with no real alternative, Tracking and surveillance,
                                // Who controls the data?, Points and badges get boring, Cost, Other: ...
  whoChange: [],                // The city, Transport operators, My employer or school, Friends and family,
                                // Nobody, I'd do it if it were easy enough, Other: ...

  // ---- 7.1 The real barriers ----
  realBarriers: [],             // Infrastructure, Cost, Time, Safety, Care duties, Weather or hills, Health or physical effort, Habit, Other: ...

  // ---- 7.2 Economic reality ----
  wouldPay: "",                 // "Yes: up to X per month/year" | "No" | "Only if it pays for itself through: ..." | "Unsure"

  // ---- 7.3 Support you'd need ----
  supportNeeded: [],            // A free or discounted trial period, Someone to plan the first trips with me, Training,
                                // Safe storage for a bike or scooter, A group of others doing the same,
                                // Incentives from my employer or school, Accessibility assistance, Other: ...
  supportWho: "",

  // ---- 7.4 Questions for us ----
  designAddress: [],            // up to 3
  talkTo: { travellers: "", operators: "", council: "", employers: "", other: "" },
})
