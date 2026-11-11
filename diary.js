// Each member's 5-day travel diary (autoethnography), shown on diary.html.
// Only the night trips are shown. Empty fields are left out on the page.
// A night can also have `notes`: the end-of-day notes.
//
// Each trip:
//   title     what the trip was, e.g. "Going out", "Getting home"
//   from, to  general places only (no addresses)
//   left      time you left, e.g. "02:30"
//   modes     list of modes in order, e.g. ["Metro", "Walking"]
//   duration  e.g. "50 min"
//   cost      e.g. "€12" or "Navegante pass"
//   why       why you chose that mode
//   obstacles what got in the way
//   feeling   how it felt
const DIARIES = [
  {
    by: "Pedro",
    period: "Fri 6 – Tue 10 Nov 2026",

    // All 5 diary days. `night: true` marks the days with a night trip.
    days: [
      { day: "Fri", date: "6 Nov", night: true },
      { day: "Sat", date: "7 Nov", night: false },
      { day: "Sun", date: "8 Nov", night: true },
      { day: "Mon", date: "9 Nov", night: false },
      { day: "Tue", date: "10 Nov", night: false },
    ],

    nights: [
      {
        day: "Friday",
        date: "6 Nov",
        trips: [
          {
            title: "Night out",
            from: "",
            to: "",
            left: "",
            modes: [],
            duration: "Much longer than the same trip during the day",
            cost: "",
            why: "",
            obstacles: "Public transport at night: the trip took much longer than in the daytime.",
            feeling: "",
          },
        ],
      },
      {
        day: "Sunday",
        date: "8 Nov",
        trips: [
          {
            title: "Night out",
            from: "",
            to: "",
            left: "",
            modes: ["TVDE"],
            duration: "Much longer than the same trip during the day",
            cost: "",
            why: "There was no public transport at that hour.",
            obstacles: "No public transport running, so the only option left was a TVDE.",
            feeling: "",
          },
        ],
      },
    ],
  },

  {
    by: "Martijn",
    period: "Thu 5 – Mon 9 Nov 2026",

    days: [
      { day: "Thu", date: "5 Nov", night: true },
      { day: "Fri", date: "6 Nov", night: true },
      { day: "Sat", date: "7 Nov", night: true },
      { day: "Sun", date: "8 Nov", night: true },
      { day: "Mon", date: "9 Nov", night: true },
    ],

    nights: [
      {
        day: "Thursday",
        date: "5 Nov",
        trips: [
          {
            title: "Going out",
            from: "Anjos",
            to: "Cais do Sodré",
            left: "11:00 PM",
            modes: ["Metro", "Walking"],
            duration: "25 min",
            cost: "",
            why: "Going out with friends. The metro was still running and is cheaper than Uber.",
            obstacles: "Nothing significant.",
            feeling: "Easy and convenient.",
          },
          {
            title: "Getting home (Friday morning)",
            from: "Cais do Sodré",
            to: "Anjos",
            left: "5:00 AM",
            modes: ["Uber"],
            duration: "15 min",
            cost: "",
            why: "Coming home from the club after the metro had closed.",
            obstacles: "Uber was quite expensive.",
            feeling: "Comfortable and quick, but expensive.",
          },
        ],
      },
      {
        day: "Friday",
        date: "6 Nov",
        trips: [
          {
            title: "Going out",
            from: "Anjos",
            to: "Bairro Alto",
            left: "9:30 PM",
            modes: ["Metro", "Walking"],
            duration: "25 min",
            cost: "",
            why: "Meeting friends for drinks.",
            obstacles: "Some uphill walking.",
            feeling: "Easy, no major difficulties.",
          },
        ],
      },
      {
        day: "Saturday",
        date: "7 Nov",
        trips: [
          {
            title: "Going out",
            from: "Anjos",
            to: "Cais do Sodré",
            left: "11:30 PM",
            modes: ["Metro", "Walking"],
            duration: "25 min",
            cost: "",
            why: "Going out with friends.",
            obstacles: "Nothing significant.",
            feeling: "Convenient and affordable.",
          },
          {
            title: "Getting home (Sunday morning)",
            from: "Cais do Sodré",
            to: "Anjos",
            left: "5:00 AM",
            modes: ["Uber"],
            duration: "15 min",
            cost: "",
            why: "Coming home after clubbing, and the metro was closed.",
            obstacles: "Uber was expensive compared to public transport.",
            feeling: "Comfortable but expensive.",
          },
        ],
      },
      {
        day: "Sunday",
        date: "8 Nov",
        trips: [
          {
            title: "Going out for food",
            from: "Anjos",
            to: "Martim Moniz",
            left: "8:30 PM",
            modes: ["Walking"],
            duration: "15 min",
            cost: "",
            why: "Going out for food.",
            obstacles: "None.",
            feeling: "Relaxed.",
          },
        ],
      },
      {
        day: "Monday",
        date: "9 Nov",
        trips: [
          {
            title: "Getting home",
            from: "Saldanha",
            to: "Anjos",
            left: "10:30 PM",
            modes: ["Metro"],
            duration: "15 min",
            cost: "",
            why: "Going home after meeting friends.",
            obstacles: "None.",
            feeling: "Easy and affordable.",
          },
        ],
      },
    ],
  },
  {
    by: "Nicoleta",
    period: "5 evenings out (no dates given)",

    days: [
      { day: "Day 1", date: "Oeiras", night: true },
      { day: "Day 2", date: "Miradouro", night: true },
      { day: "Day 3", date: "Bairro Alto", night: true },
      { day: "Day 4", date: "Sintra", night: true },
      { day: "Day 5", date: "Vertigo", night: true },
    ],

    nights: [
      {
        day: "Day 1",
        date: "Oeiras",
        notes: "Getting there wasn't difficult, except for changing between walking, metro, train and bus. The way back was harder: the waits for both bus and train were very long (we hadn't checked the times), so we split a Bolt back to Cais do Sodré.",
        trips: [
          { title: "Way there", from: "Home", to: "Cais do Sodré", left: "18:30", modes: ["Walking", "Metro"], why: "The fastest mode", obstacles: "Nothing", feeling: "Fine" },
          { title: "Way there", from: "Cais do Sodré", to: "Oeiras", left: "19:05", modes: ["Train"], why: "The most convenient mode", obstacles: "Nothing", feeling: "Fine" },
          { title: "Way there", from: "Oeiras train station", to: "NOVA School of Business", left: "19:40", modes: ["Bus"], why: "The only option (long distance to walk)", obstacles: "Nothing", feeling: "Nobody on the bus; safe because of the group I travelled with" },
          { title: "Way back", from: "NOVA School of Business", to: "Cais do Sodré", left: "23:06", modes: ["Bolt"], cost: "Split with the group", why: "The wait for public transport was too long", obstacles: "Waited for the driver to arrive; no people at the bus stop", feeling: "Safe, because of the group" },
          { title: "Way back", from: "Cais do Sodré", to: "Home", left: "23:42", modes: ["Metro", "Walking"], why: "The fastest mode", obstacles: "Very crowded at Cais do Sodré station", feeling: "Uncomfortable" },
        ],
      },
      {
        day: "Day 2",
        date: "Miradouro",
        notes: "The most annoying moments: waiting for a bus that never came (Google Maps said 02:15, then a few minutes' delay, then 03:15 after refreshing), and waiting a long time for a ride to be accepted, probably few drivers or many requests at that hour. Uber was twice the Bolt price.",
        trips: [
          { title: "Way there", from: "Home", to: "Metro station", left: "20:30", modes: ["Walking"], why: "Short distance", obstacles: "Nothing", feeling: "Safe" },
          { title: "Way there", from: "Metro station", to: "Restauradores", left: "20:40", modes: ["Metro"], why: "Fastest mode", obstacles: "Nothing", feeling: "Safe" },
          { title: "Way there", from: "Restauradores", to: "Miradouro de São Pedro de Alcântara", left: "21:00", modes: ["Walking"], why: "The only option", obstacles: "Crowded; took time to get out of the metro", feeling: "Uncomfortable" },
          { title: "Way back", from: "Bairro Alto", to: "Bus stop", left: "01:53", modes: ["Walking"], duration: "15 min", why: "The only option", obstacles: "Waited almost half an hour for the bus, which didn't come in the end", feeling: "Annoying" },
          { title: "Way back", from: "Bus stop", to: "Home", left: "02:40", modes: ["Bolt"], duration: "About 15 min", why: "The most efficient option", obstacles: "About 10 min to get the request accepted by a driver nearby, then 2 min for the driver to arrive", feeling: "Fine" },
        ],
      },
      {
        day: "Day 3",
        date: "Bairro Alto",
        notes: "The whole trip felt safe and comfortable, with no incidents. Public transport was on time according to Google Maps, and it was easy to get from A to B.",
        trips: [
          { title: "Way there", from: "Home", to: "Eclipse Bar (Bairro Alto)", left: "18:40", modes: ["Metro", "Walking"], why: "The most convenient one", obstacles: "Took the wrong metro exit (6 more minutes to get there)", feeling: "Safe, annoying" },
          { title: "During the night", from: "Bairro Alto", to: "Pavilhão Chinês", left: "22:20", modes: ["Walking"], duration: "Up to 15 min", why: "The only option", obstacles: "Very crowded, lots of people outside, difficult even to walk", feeling: "Safe" },
          { title: "Way back", from: "Pavilhão Chinês", to: "Avenida bus stop", left: "02:01", modes: ["Walking"], duration: "12 min", why: "The only option", obstacles: "No people on the route", feeling: "Unsafe" },
          { title: "Way back", from: "Avenida bus stop", to: "Home", left: "01:53", modes: ["Night bus", "Walking"], why: "The only option", obstacles: "A few people at the station; crowded bus", feeling: "Fine" },
        ],
      },
      {
        day: "Day 4",
        date: "Sintra",
        notes: "Getting from A to B wasn't difficult at all, but the incidents on the train made the trip feel unsafe and uncomfortable.",
        trips: [
          { title: "Way back", from: "Pena Palace", to: "Sintra train station", left: "17:46", modes: ["Bus"], why: "The cheapest option", obstacles: "A huge queue at the bus stop", feeling: "Very uncomfortable, everyone was pushing each other" },
          { title: "Way back", from: "Sintra train station", to: "Rossio station", left: "18:50", modes: ["Train"], why: "The most accessible mode", obstacles: "Crowded train; drunk, dodgy people around", feeling: "Unsafe, but being in a group helped" },
          { title: "Way back", from: "Rossio", to: "Mercado Oriental, Martim Moniz", left: "19:30", modes: ["Walking"], why: "Short distance", obstacles: "Nothing", feeling: "Safe" },
          { title: "Way back", from: "Mercado Oriental, Martim Moniz", to: "Home", left: "21:10", modes: ["Walking", "Metro"], why: "The fastest route", obstacles: "Nothing", feeling: "Safe" },
        ],
      },
      {
        day: "Day 5",
        date: "Vertigo",
        notes: "On the way there, Google Maps gave a complicated route (metro + bus + walking). I went the wrong way for a moment and Maps rerouted me, which was a little creepy with no people around. For the way back, Maps gave a better route (metro + walking) that avoided waiting at bus stops and walking on shady streets at night.",
        trips: [
          { title: "Way there", from: "Home", to: "Oriente metro station", left: "20:30", modes: ["Walking", "Metro"], why: "The fastest route", obstacles: "Nothing", feeling: "Fine" },
          { title: "Way there", from: "Oriente", to: "Bus stop near Vertigo", left: "20:55", modes: ["Night bus"], why: "The best alternative, otherwise a 25-min walk", obstacles: "A little confusing to find the right stop for the bus I needed", feeling: "Fine" },
          { title: "Way there", from: "Bus stop", to: "Vertigo", left: "21:00", modes: ["Walking"], duration: "10 min max", why: "The only option", obstacles: "Dark streets, no people around", feeling: "A little unsafe" },
          { title: "Way back", from: "Vertigo", to: "Cabo Ruivo", left: "23:20", modes: ["Walking"], duration: "Up to 6 min", why: "Short distance", obstacles: "Dark streets, no people around, but we were a group of 3", feeling: "Safer than the way there" },
          { title: "Way back", from: "Cabo Ruivo", to: "Home", left: "23:30", modes: ["Metro", "Walking"], why: "The fastest route", obstacles: "Nothing", feeling: "Fine" },
        ],
      },
    ],
  },
];
