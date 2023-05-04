import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "Jasp", value: "jasp" },
  { id: 3, name: "Rock", value: "rock" },
  { id: 4, name: "Melody", value: "melody" },
  { id: 5, name: "Karoke", value: "karoke" },
];

export const filterByLanguage = [
  { id: 1, name: "Español", value: "español" },
  { id: 2, name: "English", value: "english" },
  { id: 3, name: "Portugues", value: "portugues" },
  { id: 4, name: "Ruso", value: "ruso" },
  { id: 5, name: "Chino", value: "chino" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};


