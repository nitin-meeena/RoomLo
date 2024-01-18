
import { MdBoy,MdGirl,MdOutlineBedroomParent } from "react-icons/md";

import {
  
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
  FaCity,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
  
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
    icon: <BiWorld />,
  },
  {
    img: "assets/hostel.gif",
    label: "Hostel",
    icon: <MdOutlineBedroomParent />,
    description: "This property is type of hostel",
  },
  {
    img: "assets/boys.gif",
    label: "Boys Room",
    icon: <MdBoy />,
    description: "This property is for boys",
  },
  {
    img: "assets/pg.gif",
    label: "PG",
    icon: <MdOutlineVilla />,
    description: "This property is a PG",
  },
  {
    img: "assets/flat.gif",
    label: "Flat",
    icon: <MdOutlineBedroomParent />,
    description: "This property is a Flat rent",
  },
  {
    img: "assets/house.gif",
    label: "House",
    icon: <FaHouseUser />,
    description: "This  property is a House rent",
  },
  {
    img: "assets/girls.gif",
    label: "Girls Room",
    icon: <MdGirl />,
    description: "This property is Girls room rent",
  },
  {
    img: "assets/lake_cat.webp",
    label: "Bhopal",
    icon: <FaCity />,
    description: "This property is belong to bhopal",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Indore",
    icon: <FaCity/>,
    description: "This property is belong to indore",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Varanasi",
    icon: <FaCity />,
    description: "This property is belong to Varanasi",
  },
  {
    img: "#",
    label: "Pryagraj coming soon",

    icon: <FaCity />,
    description: "This property is belong to Prayagraj",
  },
  // {
  //   img: "assets/camping_cat.jpg",
  //   label: "Camping",
  //   icon: <GiForestCamp />,
  //   description: "This property offers camping activities!",
  // },
  // {
  //   img: "assets/arctic_cat.webp",
  //   label: "Arctic",
  //   icon: <BsSnow />,
  //   description: "This property is in arctic environment!",
  // },
  // {
  //   img: "assets/desert_cat.webp",
  //   label: "Desert",
  //   icon: <GiCactus />,
  //   description: "This property is in the desert!",
  // },
  // {
  //   img: "assets/barn_cat.jpg",
  //   label: "Barns",
  //   icon: <GiBarn />,
  //   description: "This property is in a barn!",
  // },
  // {
  //   img: "assets/lux_cat.jpg",
  //   label: "Luxury",
  //   icon: <IoDiamond />,
  //   description: "This property is brand new and luxurious!",
  // },
];

export const types = [
  {
    name: "An entire House",
    description: "Tenants have the whole house to themselves",
    icon: <FaHouseUser />,
  },
  {
    name: "Room(s)",
    description:
      "Tenant have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "PG",
    description:
      "tenant sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Bath tub",
    icon: <PiBathtubFill />,
  },
  {
    name: "Personal care products",
    icon: <FaPumpSoap />,
  },
  {
    name: "Outdoor shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "Dryer",
    icon: <BiSolidDryer />,
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
  {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
  {
    name: "Stove",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Outdoor dining area",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
  {
    name: "Camp fire",
    icon: <GiCampfire />,
  },
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },
  {
    name: "Self check-in",
    icon: <FaKey />
  },
  {
    name: " Pet allowed",
    icon: <MdPets />
  }
];
