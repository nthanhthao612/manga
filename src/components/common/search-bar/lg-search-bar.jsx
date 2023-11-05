import React, { useState, useEffect } from "react";

import LGSearchBarInput from "./lg-search-bar-input";
import LGSearchBarItem from "./lg-search-bar-item";
import "../../../css/spec/search-bar.css";
import "../../../css/common/scroll-bar.css"

const people = [
  {
    name: "Siri",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "Siri",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "Siri",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "Siri",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "Siri",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "Siri",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "Siri",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "Siri",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "facebook",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "google",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
  {
    name: "twitter",
    image:
      "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
  },
];

export default function LGSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchBarStatus, setSearchBarStatus] = useState(false);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchBarFocus = (e) => {
    setSearchBarStatus(!searchBarStatus);
  };
  const handleSearchBarBlur = (e) => {
    setSearchBarStatus(!searchBarStatus);
  };

  useEffect(() => {
    const results = people.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="lg search-bar">
      <LGSearchBarInput
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleSearchBarFocus}
        onBlur={handleSearchBarBlur}
      />
      <div
        className={
          searchBarStatus === true
            ? "lg search-bar-list-item"
            : "hidden lg search-bar-list-item"
        }
      >
        {searchResults.map((item, index) => (
          <LGSearchBarItem item={item} key={index} action={console.log("hello"+index)}/>
        ))}
      </div>
    </div>
  );
}
