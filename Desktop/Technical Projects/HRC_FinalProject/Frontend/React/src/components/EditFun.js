import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { Grid } from "@material-ui/core";
import "./style.css";
import "./Add.css";

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

const EditFun = () => {
  const [open, setOpen] = React.useState(false);

  const [invoicecurr, setInvoicecurr] = React.useState("");
  const [custpaymterm, setCustpaymterm] = React.useState("");

  let sl_no = localStorage.getItem("sl_no");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInvoicecurr = (event) => {
    setInvoicecurr(event.target.value);
  };
  const handlecustpaymterm = (event) => {
    setCustpaymterm(event.target.value);
  };

  const createNewinv = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data1 =
      "invoice_currency=" +
      invoicecurr +
      "&cust_payment_terms=" +
      custpaymterm +
      "&sl_no=" +
      sl_no;
    let response = await axios.get(
      `http://localhost:8080/HighradiusProject/EditElement?` + data1
    );
    return response.data1;
  };

  return (
    <>
      <Button id="edit" variant="outlined" onClick={handleOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle
          className="adddialog"
          onClose={handleClose}
          style={{ color: "#FFFFFF" }}
        >
          Edit Invoice
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
                style={{ width: "44%" }}
                type="text"
                onChange={handleInvoicecurr}
                placeholder="Invoice Currencr"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                className="addtext"
                type="text"
                style={{ width: "44%" }}
                onChange={handlecustpaymterm}
                placeholder="Customer Payment Terms"
              />
            </Grid>
          </form>
        </DialogContent>

        <DialogActions style={{ backgroundColor: "#2A3E4C" }}>
          <Button style={deleteTheme.but} onClick={handleSubmit}>
            EDIT
          </Button>
          <Button style={deleteTheme.but1} onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

EditFun.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default EditFun;
