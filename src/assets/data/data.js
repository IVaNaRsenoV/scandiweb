import img1 from "../img/A.png";
import img2 from "../img/B.png";
import img3 from "../img/C.png";
import img4 from "../img/D.png";
import img5 from "../img/E.png";
import { v4 } from "uuid";

export const data = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
];

export const size = [
  [
    {
      id: v4(),
      size: "XS",
    },
    {
      id: v4(),
      size: "S",
    },
    {
      id: v4(),
      size: "M",
    },
    {
      id: v4(),
      size: "L",
    },
  ],
  [
    {
      id: v4(),
      size: "XS",
    },
    {
      id: v4(),
      size: "S",
    },
    {
      id: v4(),
      size: "M",
    },
    {
      id: v4(),
      size: "L",
    },
  ],
];

export const color = [
  [
    {
      id: 1,
      color: "gray",
    },
    {
      id: 2,
      color: "black",
    },
    {
      id: 3,
      color: "green",
    },
  ],
  [
    {
      id: 1,
      color: "black",
    },
    {
      id: 2,
      color: "blue",
    },
    {
      id: 3,
      color: "orange",
    },
  ],
];

export const text = [
  {
    id: 1,
    stateManager: "Apollo",
    glasses: "Running Short",
    price: "$50.00",
  },
  {
    id: 2,
    stateManager: "Jupiter",
    glasses: "Wayfarer",
    price: "$75.00",
  },
];
