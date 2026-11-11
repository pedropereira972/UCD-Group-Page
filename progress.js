// Edit this list to update the "Week by week" timeline.
// status: "done", "current" or "upcoming".
// badges: optional extra labels next to the title, e.g. deadlines.
// updates: optional posts for that week. Line breaks in `body` are kept.
const WEEKS = [
  {
    week: "Week 0",
    dates: "26–30 Oct",
    title: "Brief released",
    description: "Form teams; pick your practice, place and access to participants.",
    status: "done",
  },
  {
    week: "Week 1",
    dates: "2–6 Nov",
    title: "Research plan",
    description:
      "Practice, users, other actors, fieldwork plan. Autoethnography, traveller booklets, stakeholder interview.",
    status: "done",
    badges: ["Website due Sun 8 Nov"],
    updates: [
      {
        date: "Nov 5",
        title: "Research plan week 1",
        body: `In this lab, we choose the four dimensions for the project:

Dim 1. Mobility practice
Leisure and night-time trips
Dim 2. Mode
Public transport (Metro, bus, train, ferry) + combinations of modes
Dim 3. User group
Students and university staff (specifically students)
Dim 4. SID dimensions
Practices & Routines + Relationships & Commons`,
      },
    ],
  },
  {
    week: "Week 2",
    dates: "9–13 Nov",
    title: "Research synthesis",
    description:
      "Personas, trip/journey maps showing where decisions and impacts happen, and a system map.",
    status: "current",
    badges: ["Lab assessment 1"],
    updates: [
      {
        date: "Nov 11",
        title: "Fieldwork done",
        body: `Interviews: 12 travellers with the Your Journey booklet, 3 per member, all with signed consent (see Interviews).
Stakeholders: two bus drivers (8 and 12 years of experience), an Uber driver and a taxi driver (see Stakeholders).
Travel diaries: all four members' night trips are on the Night trips page.
Next: the synthesis (personas, scenarios, CI models).`,
      },
    ],
  },
];
