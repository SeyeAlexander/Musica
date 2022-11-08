// songs
import kulo from "../assets/musiclist/Ku-Lo-Sa.mp3";
import john from "../assets/musiclist/xtracool.mp3";
import apollo from "../assets/musiclist/Apollo.mp3";
import kilo from "../assets/musiclist/BNXN-kilo.mp3";
import FYN from "../assets/musiclist/FYN.mp3";
import mind from "../assets/musiclist/InMyMind.mp3";
import kolo from "../assets/musiclist/Kolomental.mp3";
import pheelz from "../assets/musiclist/PheelzElect.mp3";
import soundgasm from "../assets/musiclist/Soundgasm.mp3";
import soweto from "../assets/musiclist/Soweto.mp3";
import wine from "../assets/musiclist/Wine.mp3";

//art
import youngjohnArt from "../assets/Young.webp";
import oxladeArt from "../assets/musiclist/kuloArt.webp";
import kiloArt from "../assets/musiclist/BNXN-kiloArt.webp";
import remaArt from "../assets/musiclist/RemaArt.webp";
import bujuEpArt from "../assets/musiclist/BNXNEpArt.webp";
import victonyArt from "../assets/musiclist/VictonyArt.webp";
import pheelzArt from "../assets/musiclist/PheelzArt.webp";

// had to specify local dataset in the format of results returned by the spotify api,
// to give a level of uniformity and avoid duplicate function lines in the audioplayer component
const songList = [
  {
    id: "123",
    name: "Xtra-cool",
    preview_url: `${john}`,
    album: { images: [{ url: `${youngjohnArt}` }], artists: [{ name: "Young John" }] },
    type: "Single",
  },
  {
    id: "910",
    name: "Soundgasm",
    preview_url: `${soundgasm}`,
    album: { images: [{ url: `${remaArt}` }], artists: [{ name: "Rema" }] },
    type: "Single",
  },
  {
    id: "234",
    name: "Ku-Lo-Sa",
    preview_url: `${kulo}`,
    album: { images: [{ url: `${oxladeArt}` }], artists: [{ name: "Oxlade" }] },
    type: "Single",
  },
  {
    id: "345",
    name: "Apollo",
    preview_url: `${apollo}`,
    album: { images: [{ url: `${victonyArt}` }], artists: [{ name: "Victony" }] },
    type: "Single",
  },
  {
    id: "456",
    name: "Kilometer",
    preview_url: `${kilo}`,
    album: { images: [{ url: `${kiloArt}` }], artists: [{ name: "BNXN" }] },
    type: "Single",
  },
  {
    id: "567",
    name: "FYN",
    preview_url: `${FYN}`,
    album: { images: [{ url: `${remaArt}` }], artists: [{ name: "Rema" }] },
    type: "Rave and Roses",
  },
  {
    id: "678",
    name: "In My Mind",
    preview_url: `${mind}`,
    album: { images: [{ url: `${bujuEpArt}` }], artists: [{ name: "BNXN" }] },
    type: "Bad Since '97",
  },
  {
    id: "789",
    name: "Kolomental",
    preview_url: `${kolo}`,
    album: { images: [{ url: `${victonyArt}` }], artists: [{ name: "Victony" }] },
    type: "Single",
  },
  {
    id: "891",
    name: "Electricity",
    preview_url: `${pheelz}`,
    album: { images: [{ url: `${pheelzArt}` }], artists: [{ name: "Pheelz" }] },
    type: "Single",
  },
  {
    id: "101",
    name: "Soweto",
    preview_url: `${soweto}`,
    album: { images: [{ url: `${victonyArt}` }], artists: [{ name: "Victony" }] },
    type: "Single",
  },
  {
    id: "111",
    name: "Wine",
    preview_url: `${wine}`,
    album: { images: [{ url: `${remaArt}` }], artists: [{ name: "Rema" }] },
    type: "Rave and Roses",
  },
];

export default songList;
