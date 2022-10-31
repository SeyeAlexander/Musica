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

const songList = [
  {
    id: "123",
    title: "Xtra-cool",
    artist: "Young John",
    song: `${john}`,
    art: `${youngjohnArt}`,
    albumType: "Single",
  },
  {
    id: "910",
    title: "Soundgasm",
    artist: "Rema",
    song: `${soundgasm}`,
    art: `${remaArt}`,
    albumType: "Single",
  },
  {
    id: "234",
    title: "Ku-Lo-Sa",
    artist: "Oxlade",
    song: `${kulo}`,
    art: `${oxladeArt}`,
    albumType: "Single",
  },
  {
    id: "345",
    title: "Apollo",
    artist: "Victony",
    song: `${apollo}`,
    art: `${victonyArt}`,
    albumType: "Single",
  },
  {
    id: "456",
    title: "Kilometer",
    artist: "BNXN",
    song: `${kilo}`,
    art: `${kiloArt}`,
    albumType: "Single",
  },
  {
    id: "567",
    title: "FYN",
    artist: "Rema",
    song: `${FYN}`,
    art: `${remaArt}`,
    albumType: "Rave and Roses",
  },
  {
    id: "678",
    title: "In My Mind",
    artist: "BNXN",
    song: `${mind}`,
    art: `${bujuEpArt}`,
    albumType: "Bad Since '97",
  },
  {
    id: "789",
    title: "Kolomental",
    artist: "Victony",
    song: `${kolo}`,
    art: `${victonyArt}`,
    albumType: "Single",
  },
  {
    id: "891",
    title: "Electricity",
    artist: "Pheelz",
    song: `${pheelz}`,
    art: `${pheelzArt}`,
    albumType: "Single",
  },
  {
    id: "101",
    title: "Soweto",
    artist: "Victony",
    song: `${soweto}`,
    art: `${victonyArt}`,
    albumType: "Single",
  },
  {
    id: "111",
    title: "Wine",
    artist: "Rema",
    song: `${wine}`,
    art: `${remaArt}`,
    albumType: "Rave and Roses",
  },
];

export default songList;
