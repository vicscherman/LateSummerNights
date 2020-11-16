//importing dependencies

import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsers } from "./API";
import "./App.css";
import logo from "./logo.png"

//our hooks for initial users on page load, and for running a search
function App() {
  //for initial results on load
  const [initialUsers, updateAvailableUsers] = useState([]);

  //for search results
  const [usersToRender, updateUsersToRender] = useState([]);
//useEffect returns a search on page load
  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);
//what gets rendered on screen
  return (
    <div className="App">
      <img id="logo" src={logo} alt="virtucon logo"/>
      <h1>Employee Directory</h1>
      <p>
        Here is a list of All Virtucon Employees in Canada and the US. You can search by first name in the box below.
        <br/>
         Click the red <b>First</b> and <b>Last</b> column headers to sort your result by first or last name alphabetically.
    
      </p>
      <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
      <Table users={usersToRender} />
    </div>
  );
}

export default App;
