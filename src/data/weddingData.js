export const weddingData = {
  groom: {
    name: "Armaan",
    title: "Groom",
    image: "/images/groom.jpg",
    parentsLine1: "Son of Mr. & Mrs.",
    parentsLine2: "Patel"
  },
  bride: {
    name: "Aaliya",
    title: "Bride",
    image: "/images/bride.jpg",
    parentsLine1: "Daughter of Mr. & Mrs.",
    parentsLine2: "Sharma"
  },
  weddingDate: {
    day: "13",
    month: "DEC",
    year: "2026",
    isoString: "2026-12-13T20:30:00+05:30",
    targetTimestamp: new Date("2026-12-13T20:30:00+05:30").getTime()
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
      time: "07:00 PM",
      title: "Mehndi",
      date: "Friday, 12th December",
      description: "An evening of music, colour, and celebration as henna adorns the hands.",
      location: "The Grand Pavilion",
      side: "left",
      topPercent: 18.5
    },
    {
      id: 2,
      number: "EVENT 02",
      time: "08:30 PM",
      title: "Nikah",
      date: "Saturday, 13th December",
      description: "The sacred ceremony where two souls unite in love, faith, and lifelong commitment.",
      location: "Royal Heritage Hall",
      side: "right",
      topPercent: 41.5
    },
    {
      id: 3,
      number: "EVENT 03",
      time: "09:30 PM",
      title: "Reception",
      date: "Sunday, 14th December",
      description: "Dinner, joyous celebration, and heartfelt blessings for the new beginning.",
      location: "Crystal Ballroom",
      side: "left",
      topPercent: 64.5
    },
    {
      id: 4,
      number: "EVENT 04",
      time: "11:00 PM",
      title: "Walima",
      date: "Monday, 15th December",
      description: "A grand celebration with family and friends to share love and gratitude.",
      location: "Grand Imperial Oasis",
      side: "right",
      topPercent: 87.5
    }
  ]
};
