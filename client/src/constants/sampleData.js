export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
    name: "Roman Reigns",
    _id: "2",
    groupChat: true,
    members: ["2", "3", "4"],
  },
  {
    avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
    name: "Seth Rollins",
    _id: "3",
    groupChat: true,
    members: ["3", "4", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
    name: "Dean Ambrose",
    _id: "4",
    groupChat: true,
    members: ["4", "2", "3"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
    name: "John Cena",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
      name: "John Cena",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "abcdxyz",
        url: "https://www.w3schools.com/w3images/avatar2.png",
      },
    ],
    content: "Come here & lets have a chat",
    _id: "dtfghjkdfghj",
    sender: {
      _id: "user._id",
      name: "Seth Rollins",
    },
    _id: "1",
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.6302",
  },
];
