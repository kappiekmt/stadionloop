export const AUCTION_ITEMS = [
  { id: 1,  title: 'Matchworn shirt — Berden de Vries', desc: 'KNVB Beker finale 2024', bid: 1450, bids: 23, ends: '4d 12u', tone: 'red' },
  { id: 2,  title: 'Gesigneerde wedstrijdbal', desc: 'Eredivisie 2024/25 selectie', bid: 380, bids: 11, ends: '2d 04u', tone: 'warm' },
  { id: 3,  title: "Captain's armband — Bas Kuipers", desc: 'Gedragen, gesigneerd', bid: 720, bids: 17, ends: '5d 22u', tone: 'gold' },
  { id: 4,  title: 'Originele plaktribunestoel', desc: 'De Adelaarshorst, sectie K', bid: 195, bids: 9, ends: '6d 09u', tone: 'red' },
  { id: 5,  title: 'KNVB Beker replica', desc: 'Officieel, op schaal', bid: 1100, bids: 14, ends: '3d 18u', tone: 'gold' },
  { id: 6,  title: 'Vintage shawl — 1990', desc: 'Wol, originele staat', bid: 240, bids: 6, ends: '1d 02u', tone: 'red' },
  { id: 7,  title: 'Trainingstas — selectie 2025', desc: 'Met spelersnaam', bid: 165, bids: 4, ends: '7d 14u', tone: 'warm' },
  { id: 8,  title: 'Persfoto print, gelimiteerd 12/50', desc: 'Promotie 2017, gesigneerd', bid: 330, bids: 8, ends: '4d 03u', tone: 'cream' },
  { id: 9,  title: "Spelerstunnel ervaring × 2", desc: "Thuiswedstrijd seizoen '25/'26", bid: 890, bids: 19, ends: '2d 16u', tone: 'gold' },
  { id: 10, title: 'Matchworn keepershandschoenen', desc: 'Jeffrey de Lange', bid: 410, bids: 12, ends: '5d 11u', tone: 'warm' },
  { id: 11, title: 'Begeleid stadionrondleiding', desc: 'Voor 8 personen', bid: 540, bids: 13, ends: '3d 07u', tone: 'red' },
  { id: 12, title: "Originele scoreklok-letter", desc: "Jaren '80, metaal", bid: 275, bids: 7, ends: '6d 21u', tone: 'cream' },
];

export const formatEUR = (n) => '€ ' + n.toLocaleString('nl-NL');
