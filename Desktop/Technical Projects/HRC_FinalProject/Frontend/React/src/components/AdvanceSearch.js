import React from "react";
import { Button } from "@material-ui/core";
import "./style.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import { Grid } from "@material-ui/core";
import axios from "axios";
//import Table_data from "./axiosComponent";
import { useState } from "react";

const deleteTheme = {
  but: {
    backgroundColor: "#273D49",
    border: "1px solid #14AFF1",
    height: "2.5rem",
    fontSize: ".9rem",
    color: "#fff",
    margin: "1.5vh",
    width: "50%",
  },
  but1: {
    backgroundColor: "#14AFF1",
    border: "1px solid #14AFF1",
    height: "2.5rem",
    fontSize: ".9rem",
    color: "#fff",
    width: "50%",
  },
};

const AdvanceSearch = () => {
  const [open, setOpen] = useState(false);

  const [doc_id, setDocid] = React.useState("");
  const [invoice_id, setInvoiceid] = React.useState("");
  const [cust_number, setCustnum] = React.useState("");
  const [buisness_year, setBusinessyear] = React.useState("");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const createNewinv = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data3 =
      "doc_id=" +
      doc_id +
      "&invoice_id=" +
      invoice_id +
      "&cust_number=" +
      cust_number +
      "&buisness_year=" +
      buisness_year;
    let response = await axios.get(
      `http://localhost:8080/HighradiusProject/AdvancedSearch?` + data3
    );
    return response.data3;
  };

  return (
    <>
      <Button
        variant="outlined"
        id="advance"
        size="medium"
        onClick={handleClickOpen}
      >
        ADVANCE SEARCH
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{ backgroundColor: "#2A3E4C", color: "#fff" }}
          id="alert-dialog-title"
        >
          Advance Search
          <CloseIcon
            style={{ position: "absolute", right: "1rem", color: "#97A1A9" }}
            onClick={handleClose}
          />
        </DialogTitle>

        <DialogContent className="adddialog" dividers>
          <form
            id="form"
            onSubmit={(e) => {
              createNewinv(e);
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <input
                className="addtext"
                style={{ width: "42%" }}
                type="text"
                required
                onChange={(e, index) => setDocid(e.target.value)}
                placeholder="Document Id"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                className="addtext"
                style={{ width: "42%" }}
                type="text"
                required
                onChange={(e, index) => setInvoiceid(e.target.value)}
                placeholder="Invoice Id"
              />
            </Grid>

            <br />

            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <input
                className="addtext"
                style={{ width: "42%" }}
                type="text"
                //value={cName}
                required
                onChange={(e, index) => setCustnum(e.target.value)}
                placeholder="Customer Number"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                className="addtext"
                style={{ width: "42%" }}
                type="text"
                required
                onChange={(e, index) => setBusinessyear(e.target.value)}
                placeholder="Business Year"
              />
            </Grid>
          </form>
        </DialogContent>

        <DialogActions style={{ backgroundColor: "#2A3E4C" }}>
          <Button style={deleteTheme.but} onClick={handleSubmit}>
            SEARCH
          </Button>
          <Button style={deleteTheme.but1} onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdvanceSearch;
