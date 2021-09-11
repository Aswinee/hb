const express = require("express");
const router = express.Router();

const roomService = require("../services/room.services");

// READ
router.get("/rooms", async (req, res) => {
  const rooms = await roomService.displayRooms();
  res.send(rooms);
});

// READ
router.get("/customers", async (req, res) => {
  const customers = await roomService.displayCustomers();
  res.send(customers);
});

//Create room
router.post("/rooms", (req, res) => {
  // req.body => Body data
  console.log(req.body);
  const room = roomService.createRoom(req.body);
  res.send(room);
});
module.exports = router;
