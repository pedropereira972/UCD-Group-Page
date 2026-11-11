// The stakeholders we talked to, shown on stakeholders.html. No names: describe the role.
//
// Each stakeholder:
//   role        e.g. "Bus driver"
//   experience  e.g. "8 years" (optional)
//   about       one line on who they are (optional)
//   by, date    who interviewed them and when
//   consent     true once the consent form is signed
//   points      what they told us, one item per point
//   quotes      their own words (optional)
// Leave anything unknown as "" or [] and the page shows "To fill in".
const STAKEHOLDERS = [
  {
    role: "Bus driver",
    experience: "8 years",
    about: "",
    by: "",
    date: "",
    consent: false,
    points: [],
    quotes: [],
  },
  {
    role: "Bus driver",
    experience: "12 years",
    about: "",
    by: "",
    date: "",
    consent: false,
    points: [],
    quotes: [],
  },
  {
    role: "Uber driver",
    experience: "",
    about: "",
    by: "",
    date: "",
    consent: false,
    points: [],
    quotes: [],
  },
  {
    // From his Your Journey booklet; he is also P10 on the Interviews page.
    role: "Taxi driver",
    experience: "",
    about: "Lives in Odivelas; works Thursday to Sunday from sunset, all over Lisbon",
    by: "Oscar",
    date: "11 Nov",
    consent: true,
    points: [
      "Taxis are part of the traffic problem, but after 1 am there is little other choice.",
      "Wants the design to address the times when the metro doesn't run, empty taxi km, and safety.",
      "Ideal: shared trips at night. It would be worth it if it meant more fares at night.",
      "Planning challenges: knowing demand and peak traffic. Before leaving he checks events, closed streets and the weather.",
      "Has a feeling for his footprint (diesel); reduced idling, but because of money.",
      "EVs are supposed to be good, but they're expensive and there are few chargers; he'd need government support for electric cars.",
    ],
    quotes: [],
  },
];
