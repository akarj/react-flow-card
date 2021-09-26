export const initialState = [
  {
    id: "text-01",
    type: "TextNode",
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
    type: "ImageNode",
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
    type: "CardNode",
    data: {
      label: "card Input",
    },
    position: {
      x: 100,
      y: 50,
    },
  },

  {
    id: "text-01-card-01",
    type: "straight",
    source: "text-01",
    target: "card-01",
    animated: true,
  },
  {
    id: "image-01-card-01",
    type: "straight",
    source: "image-01",
    target: "card-01",
    animated: true,
  },
];
