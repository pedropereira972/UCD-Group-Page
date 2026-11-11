// Every question of the "Your Journey Story" interview booklet, by section.
// Each `key` is the field name used for an entry in research.js.
//
// Used by research.html (to show answers) and add.html (the form to add a booklet).
//   kind      "text" (default), "single" (one choice), "multi" (tick all that apply),
//             "ranked" (numbered list of `count` items), "grid" (one row per sub), "days" (1.3 table)
//   options   the boxes printed in the booklet
//   other     true when the booklet has an "Other:" line
//   detail    for "single": a line to explain the choice, saved as "Choice: detail"
//   subs      rows of a grid question; `scale` = the columns to tick (none = write a value)
const BOOKLET = [
  {
    id: "1.1", title: "Your trips",
    questions: [
      { key: "whereWeek", label: "Where you go in a normal week (sketch / map of your week)" },
      {
        key: "livesIn", label: "Where you live", kind: "single", other: true,
        options: ["City centre", "Inner neighbourhood", "Suburb / outer municipality", "Small town or rural area"],
      },
      { key: "dependents", label: "Who travels with you or depends on your trips" },
      { key: "rhythms", label: "Rhythms and seasons (school term, shifts, weather, hills, summer vs winter)" },
      { key: "particular", label: "What makes the way you get around particular to you?" },
    ],
  },
  {
    id: "1.2", title: "How you move",
    questions: [
      {
        key: "modeFrequency", label: "How often you use each mode", kind: "grid",
        scale: ["Daily", "Weekly", "Rarely", "Never"],
        subs: {
          walking: "Walking", ownBike: "Own bike / e-bike", sharedBike: "Shared bike or scooter",
          busTram: "Bus / tram", metro: "Metro", trainFerry: "Train / ferry",
          ownCar: "Own car / motorbike", carShare: "Car share / carpool",
          taxi: "Taxi / ride-hailing", other: "Other",
        },
      },
      { key: "passes", label: "Passes, subscriptions and cards you hold" },
      {
        key: "passesFit", label: "Do they fit how you actually travel?", kind: "single", detail: true,
        options: ["Yes, fully", "Partially", "No"],
      },
      { key: "notCaptured", label: "What tickets, passes and maps do NOT capture about how you travel" },
    ],
  },
  {
    id: "1.3", title: "A typical travel day",
    questions: [
      // One booklet table per diary day: { date, morning, afternoon, evening }.
      { key: "travelDays", label: "Document a specific day of trips", kind: "days", days: true },
    ],
  },
  {
    id: "1.4", title: "The planning burden",
    questions: [
      {
        key: "planningTime", label: "Time spent planning and checking trips per week", kind: "single",
        options: ["< 1 hour", "1–3 hours", "3–5 hours", "> 5 hours"],
      },
      {
        key: "howPlan", label: "How you plan", kind: "multi", other: true,
        options: ["Map / route apps", "Operator apps or websites", "Paper timetables / stop signs", "Memory and habit", "Asking someone"],
      },
      {
        key: "planFor", label: "What you plan for", kind: "multi", other: true,
        options: [
          "Not being late", "Saving money", "Safety (lighting, traffic, people)",
          "Accessibility (steps, lifts, buggy, luggage)", "Coordinating with others",
        ],
      },
      { key: "planningChallenges", label: "Biggest planning challenges", kind: "ranked", count: 3, ranked: true },
      { key: "wishDifferent", label: "Trips you wish you made differently but don't", kind: "ranked", count: 3, ranked: true },
      { key: "whyNot", label: "Why not?" },
    ],
  },
  {
    id: "2.1", title: "What others don't see",
    questions: [
      { key: "plannersThink", label: "The people who plan streets and transport probably think…" },
      { key: "moment", label: "A moment from one of your trips you'd want them to see (photo / sketch)" },
      { key: "momentWhy", label: "Why is this important to you?" },
    ],
  },
  {
    id: "2.2", title: "Knowing your footprint",
    questions: [
      {
        key: "knowImpact", label: "Do you know the environmental impact of your trips?", kind: "single",
        options: ["Yes, roughly in numbers", "I have a feeling for it", "No", "I don't think about it"],
      },
      {
        key: "impactSources", label: "Where have you seen information about it?", kind: "multi", other: true,
        options: [
          "Route apps (e.g. CO₂ per route)", "Car dashboard / fuel costs", "Transport operator campaigns",
          "Employer or school", "News / social media", "Nowhere",
        ],
      },
      { key: "changedForEnvironment", label: "Have you ever changed a trip for environmental reasons? What happened?" },
      { key: "infoWorksFrustrates", label: "What works well about how that information reaches you? What's frustrating?" },
      { key: "infoBeforeLeaving", label: "Information you look for most before leaving", kind: "ranked", count: 3, ranked: true },
    ],
  },
  {
    id: "3.1", title: "What drives your choices",
    questions: [
      {
        key: "factorRank", label: "Top 5 factors (1 = matters most)", kind: "ranked", count: 5, ranked: true,
        options: [
          "Travel time", "Cost", "Reliability", "Comfort", "Safety", "Health / exercise",
          "Environment", "Flexibility", "Habit", "Accessibility",
        ],
      },
      {
        key: "moneySplit", label: "How your monthly travel money splits (%)", kind: "grid",
        subs: {
          publicTransport: "Public transport", car: "Car (fuel, parking, tolls, insurance)",
          shared: "Shared bikes / scooters / cars / taxis", other: "Other",
        },
      },
      { key: "choicesChange", label: "Do your choices change for different trips (commute vs shopping vs night out)? How?" },
    ],
  },
  {
    id: "3.2", title: "The value of lower-impact travel",
    questions: [
      {
        key: "wouldAccept", label: "Would you accept, for a lower-impact trip", kind: "multi",
        // An option with `detail` has a blank to fill in, saved as "Option: what they wrote".
        options: [
          { label: "A slightly longer trip", detail: "up to … minutes more" },
          { label: "A slightly higher price", detail: "up to … € more" },
          "Less comfort",
          "None of these",
          { label: "Depends on", detail: "what?" },
        ],
      },
      {
        key: "moreInfo", label: "Would MORE information about the impact of your trips", kind: "multi",
        options: ["Help me choose differently", "Make me feel judged", "Be ignored after a week", "Create more effort than value", "Unsure"],
      },
      {
        key: "gaveUp", label: "Have you given up on a lower-impact option?", kind: "single", detail: true,
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: "4.1", title: "Your ideal trip companion",
    questions: [
      { key: "idealCompanion", label: "Something that makes the lower-impact trip the easy one (drawing / description)" },
      {
        key: "features", label: "Features you'd want", kind: "multi", other: true,
        options: [
          "One ticket or pass for every mode", "Door-to-door planning across walking, bike, bus, metro, train",
          "Impact shown for each route option", "Real-time delays and alternatives",
          "Accessibility details (steps, lifts, step-free routes)", "Safety details (lighting, protected bike lanes)",
          "Voice / hands-free while moving", "Works offline", "Automatic trip log (no typing)", "Rewards or discounts",
          "Travel with friends, family or colleagues", "Works with apps and cards I already use",
        ],
      },
    ],
  },
  {
    id: "4.2", title: "The time factor",
    questions: [
      {
        key: "docTime", label: "Maximum time you'd spend daily on documentation", kind: "single",
        options: ["< 1 minute", "1–5 minutes", "5–10 minutes", "> 10 minutes"],
      },
      {
        key: "whenHelp", label: "When you'd want help", kind: "multi", other: true,
        options: ["The night before", "Just before leaving", "On the way (when things go wrong)", "After the trip (looking back)", "Weekly / monthly summary"],
      },
      { key: "worthTime", label: "What would make it WORTH the time?" },
    ],
  },
  {
    id: "4.3", title: "Tech comfort level",
    questions: [
      {
        key: "techComfort", label: "Rate yourself (1–5)", kind: "grid", scale: ["1", "2", "3", "4", "5"],
        subs: { smartphones: "Smartphones", apps: "Apps", payments: "Mobile payments" },
      },
      {
        key: "devices", label: "Device you'd use", kind: "multi", other: true,
        options: ["Phone", "Watch / wearable", "Transit card", "Screens at stops / stations", "Car or bike display"],
      },
      {
        key: "techBarriers", label: "Barriers you face", kind: "multi", other: true,
        options: ["No smartphone or mobile data", "Battery runs out", "Learning curve", "Cost", "Don't trust apps with my location"],
      },
    ],
  },
  {
    id: "5.1", title: "What you'd get back",
    questions: [
      {
        key: "wantToSee", label: "If your trips were recorded for you, what would you want to see?", kind: "grid",
        scale: ["Essential", "Nice to have"],
        subs: {
          timeSpent: "Time spent travelling", money: "Money spent", emissions: "Emissions / impact",
          activeMinutes: "Active minutes (walking, cycling)", pastMonths: "Comparison with past months",
          neighbours: "Comparison with neighbours", suggestions: "Suggestions for better routes", other: "Other",
        },
      },
    ],
  },
  {
    id: "5.2", title: "Privacy & control",
    questions: [
      {
        key: "shareWith", label: "Who would you share your trip data with?", kind: "grid",
        scale: ["Yes", "Only anonymous", "No"],
        subs: {
          friends: "Friends / family", employer: "Employer / school", operators: "Transport operators",
          council: "City council / planners", researchers: "Researchers", companies: "Companies (for discounts)",
          other: "Other",
        },
      },
      {
        key: "privacyWants", label: "Information you'd always keep private: would you want to", kind: "multi", other: true,
        options: [
          "Control exactly what's shared", "Delete history at any time", "Pause tracking for some trips",
          "Share only to improve services for everyone", "Set it once and forget it",
        ],
      },
    ],
  },
  {
    id: "5.3", title: "A shared story",
    questions: [
      { key: "neighbourhoodShow", label: "If your neighbourhood's trips were made visible together, what would you want them to show?" },
      {
        key: "participate", label: "Would you take part in decisions about your streets, routes or stops? How?", kind: "multi", other: true,
        options: ["Online vote or survey", "Street workshop or walk", "Testing a temporary change (pop-up lane, new stop)", "Not interested"],
      },
    ],
  },
  {
    id: "6.1", title: "Reading the numbers",
    questions: [
      {
        key: "seenCO2", label: "Have you seen a CO₂ figure for a trip?", kind: "single", detail: true,
        options: ["No", "Yes"],
      },
      {
        key: "co2Reaction", label: "\"A 10 km car trip emits around 1.5–2 kg of CO₂…\": does a number like this sound", kind: "multi",
        options: ["Useful", "Confusing", "Guilt-inducing", "Not believable", "Interesting but unclear how it helps me"],
      },
    ],
  },
  {
    id: "6.2", title: "Your concerns",
    questions: [
      {
        key: "concerns", label: "Potential issues with tools that push \"greener\" travel", kind: "multi", other: true,
        options: [
          "Greenwashing", "Unfair to people with no real alternative", "Tracking and surveillance",
          "Who controls the data?", "Points and badges get boring", "Cost",
        ],
      },
      {
        key: "whoChange", label: "Who would need to change for you to change?", kind: "multi", other: true,
        options: [
          "The city (streets, lanes, parking)", "Transport operators (frequency, prices, connections)",
          "My employer or school (hours, remote days, showers, bike parking)", "Friends and family",
          "Nobody: I'd do it if it were easy enough",
        ],
      },
    ],
  },
  {
    id: "7.1", title: "The real barriers",
    questions: [
      {
        key: "realBarriers", label: "What stops you from travelling with less impact today?", kind: "multi", other: true,
        options: [
          "Infrastructure (no safe lanes, no bike parking, missing connections)", "Cost", "Time", "Safety",
          "Care duties (children, relatives, shopping)", "Weather or hills", "Health or physical effort", "Habit",
        ],
      },
    ],
  },
  {
    id: "7.2", title: "Economic reality",
    questions: [
      {
        key: "wouldPay", label: "Would you pay for a service that made lower-impact trips easier?", kind: "single", detail: true,
        options: ["Yes", "No", "Only if it pays for itself", "Unsure"],
      },
    ],
  },
  {
    id: "7.3", title: "Support you'd need",
    questions: [
      {
        key: "supportNeeded", label: "To change how you travel, you'd need", kind: "multi", other: true,
        options: [
          "A free or discounted trial period", "Someone to plan the first trips with me",
          "Training (e.g. cycling in traffic, using the app)", "Safe storage for a bike or scooter",
          "A group of others doing the same", "Incentives from my employer or school", "Accessibility assistance",
        ],
      },
      { key: "supportWho", label: "Who should provide this support?" },
    ],
  },
  {
    id: "7.4", title: "Questions for us",
    questions: [
      { key: "designAddress", label: "What should we make sure our design addresses?", kind: "ranked", count: 3, ranked: true },
      {
        key: "talkTo", label: "Who else should we talk to?", kind: "grid",
        subs: {
          travellers: "Other travellers", operators: "Drivers / operators", council: "City council / planners",
          employers: "Employers / schools", other: "Other",
        },
      },
    ],
  },
];

// Rows and columns of the travel day table (1.3).
const DAY_PERIODS = { morning: "Morning", afternoon: "Afternoon", evening: "Evening" };
const DAY_LABELS = { route: "From → to", modes: "Mode(s)", time: "Time", cost: "Cost", feel: "How did it feel?" };
