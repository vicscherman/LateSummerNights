import axios from "axios";
//our api call. Returns 250 random users from canada and US
export const getUsers = function() {
  return axios.get("https://randomuser.me/api/?results=250&nat=ca,us");
};