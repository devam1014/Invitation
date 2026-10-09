export const weddingData = {
  groom: {
    name: "AZIZ SIDHHPURI",
    title: "Groom",
    image: "/images/naruto.jpg",
    parentsLine1: "Son of Mr. & Mrs.",
    parentsLine2: "Sidhhpuri"
  },
  bride: {
    name: "ZAINAB SADABARWALA",
    title: "Bride",
    image: "/images/hinata.jpg",
    parentsLine1: "Daughter of Mr. & Mrs.",
    parentsLine2: "Sadabarwala"
  },
  weddingDate: {
    day: "23",
    month: "OCTOBER",
    year: "2026",
    isoString: "2026-10-23T13:15:00+05:30",
    targetTimestamp: new Date("2026-10-23T13:15:00+05:30").getTime()
  },
  venue: {
    name: "THE GRAND PAVILION",
    shortAddress: "Royal Heritage Enclave, Main Boulevard",
    fullAddressLines: [
      "Building No. 42, Royal Heritage Enclave",
      "Opposite Regency Club, Main Boulevard",
      "Grand Imperial Sector, City - 400001"
    ]
  },
  events: [
    {
      id: 1,
      number: "EVENT 01",
      time: "09:00 AM",
      title: "Mehndi",
      date: "21st October (Wednesday)",
      hijriDate: "11th Jamadil-Ula 1448",
      venue: "MJ Culture, Ukardi Road",
      schedule: "Mehndi at 09:00 AM, Lunch at 01:00 PM",
      side: "left",
      topPercent: 18.5
    },
    {
      id: 2,
      number: "EVENT 02",
      time: "05:00 PM",
      title: "Mosalu",
      date: "22nd October (Thursday)",
      hijriDate: "12th Jamadil-Ula 1448",
      venue: "MJ Culture, Ukardi Road",
      schedule: "Mosalu at 05:00 PM, Dinner at 08:00 PM",
      side: "right",
      topPercent: 41.5
    },
    {
      id: 3,
      number: "EVENT 03",
      time: "1:15 PM onwards",
      title: "Zafaf",
      date: "23rd October (Friday)",
      hijriDate: "13th Jamadil-Ula 1448",
      venue: "Zainab Hall, Dahod",
      schedule: "1:15 PM onwards",
      side: "left",
      topPercent: 64.5
    },
    {
      id: 4,
      number: "EVENT 04",
      time: "01:15 PM",
      title: "Invitee (Nikha Lunch)",
      date: "24th October (Saturday)",
      hijriDate: "14th Jamadil-Ula 1448",
      venue: "Zainab Hall",
      schedule: "Lunch at 01:15 PM",
      side: "right",
      topPercent: 84.5
    }
  ]
};
