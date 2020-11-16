import React, { useState, useEffect } from "react";
import "./table.css"

const Table = (props) => {
  const users= props.users
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);
//sorting function for first and last name (ascending or descending order), also assigns column names for these two columns
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"><b>Title</b></th>
            <th
              scope="col"  className ="grow"
              onClick={() => {
                const usersFirst = [...users];
                const updateSort = usersFirst.sort((a, b) => {
                  const nameA = a.name.first;
                  const nameB = b.name.first;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}
            >First
            
            </th>
            <th
              scope="col" className ="grow"
              onClick={() => {
                const usersLast = [...users];
                const updateSort = usersLast.sort((a, b) => {
                  const nameA = a.name.last;
                  const nameB = b.name.last;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}
            >
             Last
            </th>
            {/* Our other column names */}
            <th scope="col"><b>Gender</b></th>
            <th scope="col"><b>Email</b></th>
            <th scope="col"><b>Phone</b></th>
            <th scope="col"><b>Cell</b></th>
            <th scope="col"><b>City</b></th>
            <th scope="col"><b>Province</b></th>
            <th scope="col"><b>Country</b></th>
            <th scope="col"><b>PostCode</b></th>
            <th scope="col"><b>Picture</b></th>
          </tr>
        </thead>
        {/* creates a new array for the sorted users  */}
        <tbody>

          {sortedUsers.map(
            ({
              location: { city, state, country, postcode },
              picture: { thumbnail },
              cell,
              phone,
              gender,
              email,
              name: { first, last, title },
              login: {uuid}
              // API Call results reordered into title, first, last, gender, email, phone, cell, city, state, country, postcode, pic. 
              //We need a key for each entry to order them. 
              //We use the UUID from the API call for this.
            }) => (
              <tr key={uuid}>
                <td>{title}</td>
                <th>{first}</th>
                <th>{last}</th>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{cell}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{country}</td>
                <td>{postcode}</td>
                <td>
                  <img src={thumbnail}  className="img-thumbnail "alt="employee pic" />
                </td>

                
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
