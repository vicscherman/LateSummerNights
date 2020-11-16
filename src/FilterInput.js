//react hooks
import React, { useEffect, useState } from "react";

const FilterInput = ({ users, updateUsers }) => {
  const [inputValue, updateInput] = useState("");
//search by first name. Input value is equal to the entered string. Will either return the users object array in its entirety, or with the filter applied.
// Filter will return index values of 0 or more (the first entry on from the returned API call)
  useEffect(() => {
    const filteredUsers =
      inputValue === ""
        ? users
        : users.filter(
            ({ name: { first } }) =>
              first.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
          );
          //console.log(inputValue)

    updateUsers(filteredUsers);
  }, [inputValue, users]);

  return (
    <input value={inputValue} onChange={e => updateInput(e.target.value)} />
  );
};

export default FilterInput;