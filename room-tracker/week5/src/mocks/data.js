export const buildings = [
  {
    name: "John Everett Millais",
    code: "JM",
  },
  {
    name: "Michael Andrews",
    code: "A",
  },
  {
    name: "Reginald Mitchell",
    code: "RM",
  },
  {
    name: "Sir Christopher Cockerell",
    code: "CC",
  },
];

export const roomTypes = [
  {
    name: "PC Lab",
    code: "pc",
  },
  {
    name: "Mac Lab",
    code: "mac",
  },
  {
    name: "Lecture Theatre",
    code: "lt",
  },
];

export const rooms = [
  {
    number: "208",
    building: "HC",
    capacity: 10,
    type: {code: "pc", name: "PC Lab"},
  },
  {
    number: "204",
    building: "HC",
    capacity: 25,
    type: {code: "mac", name: "Mac Lab"},
  },
  {
    number: "203",
    building: "HC",
    capacity: 15,
    type: {code: "pc", name: "PC Lab"},
  },
  {
    number: "206",
    building: "HC",
    capacity: 25,
    type: {code: "mac", name: "Mac Lab"},
  },
  {
    number: "202",
    building: "HC",
    capacity: 13,
    type: {code: "pc", name: "PC Lab"},
  },
  {
    number: "201",
    building: "HC",
    capacity: 25,
    type: {code: "mac", name: "Mac Lab"},
  },
];

export const lotsOfRooms = [
  ...rooms,
  ...rooms.map((r) => ({...r, ...{building: "RM"}})),
  ...rooms.map((r) => ({...r, ...{building: "JM"}})),
];
