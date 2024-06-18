import express, { Router } from "express";
import User from "../src/BackEnd/Models/User";
import Deck from "../src/BackEnd/Models/Deck";
import Profile from "../src/BackEnd/Models/Profile";

const router = express.Router();

// Fetching all users of app
router.get("/users", async (req, res) => {
  try {
    const collection = await User.find({});
    res.json(collection);
    if (!result) {
      return res.status(404).json({ message: "User not in Database" });
    } else {
      res.status(200).json({ message: "User was deleted from Database" });
    }
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// Fetching a user of the app
router.get("/user/:id", async (req, res) => {
  try {
    const collection = await User.findOneById(_id);
    res.json(collection);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// Creating a New User
router.post("/user", async (req, res) => {
  try {
    console.log(req.body);
    const { username } = req.body;
    // Checking if user exists
    const dbUser = await User.findOne({ username });

    if (dbUser) {
      console.log(dbUser);
    } else {
      const newUser = await User.create({ username, password, email, dob });
      await Profile.create({ user: newUser._id });
      return res.json(newUser);
      console.log(newUser);
    }
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// Updating User profile
router.patch("/user/:id", async (req, res) => {
  try {
    const newDocument = req.body;
    const collection = await User.findOneById(_id);
    const result = await User.findOneAndReplace(collection, newDocument);
    res.json(collection);
    if (!result) {
      return res.status(404).json({ message: "User not in Database" });
    }
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// Deleting a Profile
router.delete("/:id", async (req, res) => {
  try {
    const collection = await User.findOneById(_id);
    const result = await User.deleteOne(collection);
    if (!result) {
      return res.status(404).json({ message: "User not in Database" });
    } else {
      res.status(200).json({ message: "User was deleted from Database" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
