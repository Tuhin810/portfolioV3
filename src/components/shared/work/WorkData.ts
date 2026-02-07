export const WORKS = [
    {
        id: "01",
        title: "The Forge",
        subtitle: "Architectural Backend Systems",
        description: "A robust infrastructure designed for resilience and performance, echoing the precision of the divine blacksmith's craft. Built with scalable microservices and immutable data structures.",
        god: "Hephaestus",
        mythos: "Master of Fire & Craft",
        themeColor: "#c5a028", // Gold
        image: "/work/suits.png"
    },
    {
        id: "02",
        title: "The Loom",
        subtitle: "Intricate Frontend Weaving",
        description: "Interweaving complex UI patterns with strategic clarity. Each thread of logic is placed with intention, creating a tapestry of seamless user experiences.",
        god: "Athena",
        mythos: "Goddess of Wisdom & Strategy",
        themeColor: "#387299", // Azure
        image: "/work/hobi.png"
    },
    {
        id: "03",
        title: "The Message",
        subtitle: "Low-Latency Communication",
        description: "Facilitating the swift exchange of information across digital realms. A high-frequency data layer that ensures the word reaches its destination with divine speed.",
        god: "Hermes",
        mythos: "The Swift-Footed Messenger",
        themeColor: "#a68b5c", // Bronze
        image: "/work/ching.png"
    },
    {
        id: "04",
        title: "The Harmony",
        subtitle: "Creative Media Systems",
        description: "A symphony of interactive media and artistic expression. Harmonizing visual data with auditory feedback to create a transcendent digital performance.",
        god: "Apollo",
        mythos: "God of Music, Light & Truth",
        themeColor: "#e0b870", // Sunlight
        image: "/work/suits.png"
    }
];

export type WorkType = typeof WORKS[0];
