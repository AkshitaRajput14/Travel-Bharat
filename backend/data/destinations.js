const destinations = [
  {
    id: 1,
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    city: "Agra",
    category: "Heritage",
    bestTime: "October - March",
    fee: "₹50 for Indian visitors",
    timings: "30 minutes before sunrise to 30 minutes before sunset",
    description: "The Taj Mahal is a world-famous white marble monument in Agra, built by Mughal emperor Shah Jahan in memory of Mumtaz Mahal. It is one of India's most recognized heritage attractions.",
    nearby: ["Agra Fort", "Mehtab Bagh", "Itmad-ud-Daulah"],
    map: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    name: "Dal Lake",
    state: "Jammu and Kashmir",
    city: "Srinagar",
    category: "Nature",
    bestTime: "March - October",
    fee: "Varies by activity",
    timings: "Open throughout the day",
    description: "Dal Lake is one of the most famous attractions of Srinagar, known for its scenic Himalayan surroundings, houseboats and traditional shikaras.",
    nearby: ["Mughal Gardens", "Hazratbal Shrine", "Shankaracharya Temple"],
    map: "https://www.google.com/maps/search/?api=1&query=Dal+Lake+Srinagar",
    image: "https://travelsolution.dukekashmirtravels.com/sphoto/40/dal-lake.jpg"
  },
  {
    id: 3,
    name: "Gateway of India",
    state: "Maharashtra",
    city: "Mumbai",
    category: "Heritage",
    bestTime: "November - February",
    fee: "Free",
    timings: "Open throughout the day",
    description: "The Gateway of India is an iconic waterfront monument overlooking the Arabian Sea in Mumbai. It is a major landmark and starting point for visiting nearby attractions.",
    nearby: ["Marine Drive", "Colaba Causeway", "Chhatrapati Shivaji Maharaj Terminus"],
    map: "https://www.google.com/maps/search/?api=1&query=Gateway+of+India+Mumbai",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    name: "Amber Fort",
    state: "Rajasthan",
    city: "Jaipur",
    category: "Heritage",
    bestTime: "October - March",
    fee: "Entry fee applicable",
    timings: "Usually 8:00 AM - 6:00 PM",
    description: "Amber Fort is a historic hilltop fort near Jaipur, famous for its Rajput architecture, courtyards, palaces and artistic decoration.",
    nearby: ["Jaigarh Fort", "Jal Mahal", "City Palace"],
    map: "https://www.google.com/maps/search/?api=1&query=Amber+Fort+Jaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    name: "Goa Beaches",
    state: "Goa",
    city: "North Goa",
    category: "Adventure",
    bestTime: "November - February",
    fee: "Generally free; activities may cost extra",
    timings: "Open throughout the day",
    description: "Goa is known for its beaches, coastal landscapes, water activities, Portuguese-influenced heritage and lively tourism culture.",
    nearby: ["Fort Aguada", "Baga Beach", "Calangute Beach"],
    map: "https://www.google.com/maps/search/?api=1&query=North+Goa+Beaches",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    name: "Mysore Palace",
    state: "Karnataka",
    city: "Mysuru",
    category: "Heritage",
    bestTime: "October - February",
    fee: "Entry fee applicable",
    timings: "Usually 10:00 AM - 5:30 PM",
    description: "Mysore Palace is a grand historical palace known for Indo-Saracenic architecture, royal interiors and illumination during special occasions.",
    nearby: ["Chamundi Hills", "Mysore Zoo", "Brindavan Gardens"],
    map: "https://www.google.com/maps/search/?api=1&query=Mysore+Palace",
    image: "https://tse3.mm.bing.net/th/id/OIP.ioC3PgfMDyYTSuwI4YBbmAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 7,
    name: "Varanasi Ghats",
    state: "Uttar Pradesh",
    city: "Varanasi",
    category: "Religious",
    bestTime: "October - March",
    fee: "Free; boat rides may cost extra",
    timings: "Open throughout the day",
    description: "The ghats of Varanasi along the Ganges are important cultural and spiritual spaces known for riverfront rituals, temples and evening ceremonies.",
    nearby: ["Kashi Vishwanath Temple", "Sarnath", "Dashashwamedh Ghat"],
    map: "https://www.google.com/maps/search/?api=1&query=Varanasi+Ghats",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    name: "Munnar",
    state: "Kerala",
    city: "Munnar",
    category: "Nature",
    bestTime: "September - March",
    fee: "Varies by attraction",
    timings: "Varies by attraction",
    description: "Munnar is a hill station in Kerala known for tea plantations, misty mountains, waterfalls and pleasant weather.",
    nearby: ["Eravikulam National Park", "Mattupetty Dam", "Tea Museum"],
    map: "https://www.google.com/maps/search/?api=1&query=Munnar+Kerala",
    image: "https://4.bp.blogspot.com/-rKwlNmB5zTU/UzrsY_M1QTI/AAAAAAAAAIo/XHyjjpCa680/s1600/munnar-photo.jpg"
  },
  {
    id: 9,
    name: "Hampi",
    state: "Karnataka",
    city: "Vijayanagara",
    category: "Heritage",
    bestTime: "October - February",
    fee: "Varies by monument",
    timings: "Varies by monument",
    description: "Hampi is an archaeological and heritage landscape containing the remains of the historic Vijayanagara Empire, temples and monumental architecture.",
    nearby: ["Virupaksha Temple", "Vittala Temple", "Hampi Bazaar"],
    map: "https://www.google.com/maps/search/?api=1&query=Hampi+Karnataka",
    image: "https://i.pinimg.com/originals/fc/1e/8e/fc1e8e062745f5cdc9d17553801048b1.jpg",
    
  },


  {
    id: 10,
    name: "Rishikesh",
    state: "Uttarakhand",
    city: "Rishikesh",
    category: "Adventure",
    bestTime: "September - November and March - May",
    fee: "Activity dependent",
    timings: "Varies by activity",
    description: "Rishikesh is a popular destination beside the Ganges, known for yoga, spiritual tourism, river activities and adventure experiences.",
    nearby: ["Laxman Jhula area", "Triveni Ghat", "Neer Garh Waterfall"],
    map: "https://www.google.com/maps/search/?api=1&query=Rishikesh+Uttarakhand",
    image: "https://adisheshyoga.com/blog/images/rishikesh-yoga-capital-world-01.webp"
  },

  {
    id:11,
    name:"Morni Hills",
    state:"Haryana",
    city:"Panchkula",
    category:"Adventure",
    bestTime: "September-March",
    fee:"Free",
    timings:"Daylight hours",
    description:"Trekking,paragliding,camping",
    nearby:["Tikkar Taal", "Pinjore"],
    map: "https://www.google.com/maps/search/?api=1&query=MorniHill+Haryana",
    image: "https://tse4.mm.bing.net/th/id/OIP.sGjwLgU-GvbIb1wZnLnKxwHaD8?r=0&pid=Api&h=220&P=0"
   },

    {
    id:12,
    name:"double decker living root bridge",
    state:"Meghalaya",
    city:"Nongriat(Cherrapunji)",
    category:"Adventure",
    bestTime: "November-April",
    fee:"Rs50-100(trek free)",
    timings:" Start early; Daylight only",
    description:"The Double Decker Living Root Bridge is an extraordinary natural wonder located in Nongriat village of Meghalaya, India. It is the prime example of bio-engineered bridges. These structures are crafted from the aerial roots of the rubber tree or Ficus elastica( rubber fig), by the indigenous Khasi tribe.The meaning of living root bridge lies in its very nature as these bridges are not built, but grown. The roots are carefully guided and intertwined over decades, resulting in a sturdy, two-tiered pedestrian bridge. It spans across rivers and streams in the rain-soaked hills.",
    nearby:["Nohkalikai Falls", "Mawsmai Cave"],
    map: "https://www.google.com/maps/search/?api=1&query=double decker living root bridge+Meghalaya",
    image: "https://as2.ftcdn.net/jpg/08/48/67/55/1000_F_848675537_7toSz35KdUI0qArfbnNUIsOp4JWMmvbU.jpg"

    },
{
    id: 13,
    name: "Vaishno Mata",
    state: "Jammu and Kashmir",
    city: "Katra",
    category: "Religious",
    bestTime: "March to November",
    fee: "Free",
    timings: "5AM to 12PM and 4PM to 9PM daily",
    description: "A cave shrine in the Trikuta hills. The trek from Katra is about 12km, and pilg",
    nearby: ["Bhairon temple", "Patnitop", "Shiv Khori"],
    map: "https://www.google.com/maps/search/?api=1&query=Vaishno+Mata+Jammu+and+Kashmir",
    image: "https://cdn.99pandit.com/images/blogsimg/Mata-Vaishno-Devi-Temple-1.webp"
},

{
    id: 14,
    name: "Amarnath Cave",
    state: "Jammu and Kashmir",
    city: "Anantnag",
    category: "Religious",
    bestTime: "July to August",
    fee: "Free (Registration fee applies)",
    timings: "6:00 AM to 6:00 PM (Operational only during the annual Yatra window)",
    description: "A revered shrine housed in a high-altitude glacial cave at 3,888 meters, famous for its naturally occurring ice Shiva Lingam.",
    nearby: ["Sheshnag Lake", "Panchtarni", "Chandanwari"],
    map: "https://www.google.com/maps/search/?api=1&query=Amarnath+Cave+Jammu+and+Kashmir",
    image:"https://tse2.mm.bing.net/th/id/OIF.uP9M4E9ohNumJcV5vnV2jA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
},

{
    id: 15,
    name: "Golden Temple",
    state: "Punjab",
    city: "Amritsar",
    category: "Religious",
    bestTime: "October to March",
    fee: "Free",
    timings: "Open 24 hours",
    description: "The holiest Gurdwara and spiritual center of Sikhism, featuring stunning gold architecture and the world's largest community kitchen (langar).",
    nearby: ["Jallianwala Bagh", "Durgiana Temple", "Partition Museum"],
    map: "https://www.google.com/maps/search/?api=1&query=Golden+Temple+Amritsar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amrithsar_7.jpg/330px-The_Golden_Temple_of_Amrithsar_7.jpg"
},

{
    id: 16,
    name: "Qutb Minar",
    state: "Delhi",
    city: "New Delhi",
    category: "Heritage",
    bestTime: "October to March",
    fee: "INR 40 for Indians, INR 600 for Foreigners",
    timings: "7:00 AM to 5:00 PM daily",
    description: "A 73-meter high victory tower built in 1193 by Qutb-ud-din Aibak, surrounded by historically significant monuments of the early Delhi Sultanate.",
    nearby: ["Iron Pillar", "Alai Darwaza", "Mehrauli Archaeological Park"],
    map: "https://www.google.com/maps/search/?api=1&query=Qutb+Minar+New+Delhi",
    image: "https://www.holidify.com/images/cmsuploads/compressed/Qutub_Minar_in_the_monsoons_20170908115259.jpg"
  },

{
    id: 17,
    name: "Hawa Mahal",
    state: "Rajasthan",
    city: "Jaipur",
    category: "Heritage",
    bestTime: "October to March",
    fee: "INR 50 for Indians, INR 200 for Foreigners",
    timings: "9:00 AM to 5:00 PM daily",
    description: "Known as the 'Palace of Winds', this five-story palace built from red and pink sandstone features 953 intricate windows called jharokhas.",
    nearby: ["City Palace", "Jantar Mantar", "Amber Fort"],
    map: "https://www.google.com/maps/search/?api=1&query=Hawa+Mahal+Jaipur",
    image: "https://static.vecteezy.com/system/resources/previews/002/856/313/large_2x/hawa-mahal-on-evening-jaipur-rajasthan-india-photo.jpg"
},

{
    id: 18,
    name: "Bir Billing",
    state: "Himachal Pradesh",
    city: "Bir",
    category: "Adventure",
    bestTime: "October to June",
    fee: "Varies by activity (Paragliding approx. INR 2500–3500)",
    timings: "8:00 AM to 5:00 PM daily",
    description: "Renowned as the paragliding capital of India, allowing thrill-seekers to soar high above the magnificent Dhauladhar mountain ranges.",
    nearby: ["Bir Tibetan Colony", "Sherabling Monastery", "Guneru Waterfall"],
    map: "https://www.google.com/maps/search/?api=1&query=Bir+Billing+Himachal+Pradesh",
    image: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2016/06/Paragliding-at-Bir-Billing.jpg"
},

{
    id: 19,
    name: "Pangong Lake",
    state: "Ladakh",
    city: "Leh",
    category: "Nature",
    bestTime: "May to September",
    fee: "INR 400 per person (Permit and environment fee)",
    timings: "Open 24 hours",
    description: "A stunning high-altitude endorheic saltwater lake situated at 4,350 meters near the India-China border, famous for its changing crystal-clear blue shades and featured in popular films.",
    nearby: ["Spangmik Village", "Chang La Pass", "Tangtse"],
    map: "https://www.google.com/maps/search/?api=1&query=Pangong+Lake+Ladakh",
    image: "https://images5.alphacoders.com/641/641406.jpg"
},
{
    id: 20,
    name: "Valley of Flowers",
    state: "Uttarakhand",
    city: "Chamoli",
    category: "Nature",
    bestTime: "July to September",
    fee: "INR 150 for Indians, INR 600 for Foreigners",
    timings: "7:00 AM to 2:00 PM daily",
    description: "A vibrant UNESCO World Heritage Site nestled in the West Himalayas, famous for its meadows of endemic alpine flowers and rich diverse flora.",
    nearby: ["Hemkund Sahib", "Nanda Devi National Park", "Joshimath"],
    map: "https://www.google.com/maps/search/?api=1&query=Valley+of+Flowers+Uttarakhand",
    image: "https://images.prismic.io/indiahike/226b9030-85aa-4032-a0a0-1562d697ff53_ValleyOfFlowers+-+Pavan+Jain+-+Blooming+flowers+of+the+valley.jpg?auto=compress"
}



];

module.exports = destinations;