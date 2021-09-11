let data = [
  {
    rooms: [
      {
        name: "Room1",
        status: "booked",
        customer: "Customer1",
        date: "11/9/21",
        start: "12.01 am",
        end: "11.59 pm",
        seats: 1000,
      },
      {
        name: "Room2",
        status: "booked",
        customer: "Customer3",
        date: "10/9/21",
        start: "12.01 am",
        end: "11.59 pm",
        seats: 1000,
      },
      {
        name: "Room3",
        status: "available",
        customer: "",
        date: "",
        start: "",
        end: "",
        seats: 1000,
      },
      {
        name: "Room4",
        status: "booked",
        customer: "Customer2",
        date: "11/9/21",
        start: "12.01 am",
        end: "11.59 pm",
        seats: 1000,
      },
    ],
  },
  {
    customer: [
      {
        name: "Customer1",
        room: "Room1",
        date: "11/9/21",
        start: "12.01 am",
        end: "11.59 pm",
      },
      {
        name: "Customer2",
        room: "Room4",
        date: "11/9/21",
        start: "12.01 am",
        end: "11.59 pm",
      },
      {
        name: "Customer3",
        room: "Room2",
        date: "10/9/21",
        start: "12.01 am",
        end: "11.59 pm",
      },
    ],
  },
];

const service = {
  displayRooms() {
    return data[0].rooms;
  },
  displayCustomers() {
    return data[1].customer;
  },

  createRoom(newData) {
    console.log(newData);
    data[0].rooms.push(newData);
    return data[0].rooms;
  },
};

module.exports = service;
