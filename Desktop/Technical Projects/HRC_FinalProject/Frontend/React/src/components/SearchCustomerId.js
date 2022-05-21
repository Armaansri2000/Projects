import React from "react";
import { TextField } from "@material-ui/core";
import axios from "axios";
import "./style.css";

function SearchCustomerId() {
  const [searchid, setSearchdata] = React.useState("");

  // const handlesearch = (event) => {
  //   setTimeout(function () {
  //     setSearchdata(event.target.value);
  //     console.log(searchid);
  //     event.preventDefault();
  //     axios
  //       .get(`http://localhost:8080/HighradiusProject/Search=${searchid}`)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 10000);
  // };

  const handlesearch = async (event) => {
    event.preventDefault();
    let data5 = "cust_number=" + searchid;
    let response = await axios.get(
      `http://localhost:8080/HighradiusProject/Search?` + data5
    );
    console.log(response.data);
  };

  // console.log(searchid);

  return (
    <>
      <input
        id="search"
        size="large"
        style={{
          alignSelf: "center",
          backgroundColor: "#fff",
          border: "1px solid ",
          height: "2rem",
          fontSize: ".9rem",
          color: "#273D49",
          margin: "1.5vh",
        }}
        type="text"
        placeholder="Search Customer Id"
        onChange={handlesearch}
      />
    </>
  );
}
export default SearchCustomerId;
