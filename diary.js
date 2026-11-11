// Each member's 5-day travel diary (autoethnography), shown on diary.html.
// Only the night trips are shown. Leave a field as "" and the page shows "To fill in".
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
];
