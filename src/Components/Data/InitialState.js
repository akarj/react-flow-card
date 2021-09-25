export const initialState = [
  {
    id: "text-01",
    type: "input",
    data: {
      label: "Text Input",
    },
    position: {
      x: 100,
      y: 100,
    },
  },
  {
    id: "image-01",
    type: "input",
    data: {
      label: "image Input",
    },
    position: {
      x: 100,
      y: 150,
    },
  },
  {
    id: "card-01",
    type: "input",
    data: {
      label: "card Input",
    },
    position: {
      x: 100,
      y: 50,
    },
  },
  {
    id: "output-01",
    type: "output",
    data: {
      label: "Card Generate",
    },
    position: {
      x: 500,
      y: 150,
    },
  },
  {
    id: "text-01-output-01",
    type: "straight",
    source: "text-01",
    target: "output-01",
    animated: true,
  },
  {
    id: "image-01-output-01",
    type: "straight",
    source: "image-01",
    target: "output-01",
    animated: true,
  },
  {
    id: "card-01-output-01",
    type: "straight",
    source: "card-01",
    target: "output-01",
    animated: true,
  },
];
