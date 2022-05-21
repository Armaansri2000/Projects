import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Input, TextField } from "@material-ui/core";
import "./Add.css";
import axios from "axios";

import { Grid } from "@material-ui/core";
import "./style.css";

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

const Add = () => {
  const [open, setOpen] = React.useState(false);

  const [business_code, setBusinesscode] = React.useState("");
  const [cust_number, setCustnum] = React.useState("");
  const [clear_date, setClrdate] = React.useState("");
  const [buisness_year, setBusinessyear] = React.useState("");

  const [doc_id, setDocid] = React.useState("");
  const [posting_date, setPostindate] = React.useState("");
  const [document_create_date, setDoccreatedate] = React.useState("");
  const [due_in_date, setDuedate] = React.useState("");

  const [invoice_currency, setInvcurr] = React.useState("");
  const [document_type, setDoctype] = React.useState("");
  const [posting_id, setPostingid] = React.useState("");
  const [total_open_amount, setTotalopenamt] = React.useState("");

  const [baseline_create_date, setBaselinecredate] = React.useState("");
  const [invoice_id, setInvoiceid] = React.useState("");
  const [cust_payment_terms, setCustpaymntnum] = React.useState("");

  const handlebusinesscode = (event, index) => {
    setBusinesscode(event.target.value);
  };
  const handlecustnum = (event, index) => {
    setCustnum(event.target.value);
  };
  const handleclrdate = (event, index) => {
    setClrdate(event.target.value);
  };
  const handlebusinessyear = (event, index) => {
    setBusinessyear(event.target.value);
  };

  const handledocid = (event, index) => {
    setDocid(event.target.value);
  };

  const handlepostindate = (event, index) => {
    setPostindate(event.target.value);
  };

  const handledoccreatedate = (event, index) => {
    setDoccreatedate(event.target.value);
  };
  const handleduedate = (event, index) => {
    setDuedate(event.target.value);
  };

  const hadleinvcurr = (event, index) => {
    setInvcurr(event.target.value);
  };
  const handledoctype = (event, index) => {
    setDoctype(event.target.value);
  };
  const handlepostingid = (event, index) => {
    setPostingid(event.target.value);
  };
  const handletotalopenamt = (event, index) => {
    setTotalopenamt(event.target.value);
  };

  const handlebaselinecredate = (event, index) => {
    setBaselinecredate(event.target.value);
  };
  const handleinvoiceid = (event, index) => {
    setInvoiceid(event.target.value);
  };
  const handlecustpaymntnum = (event, index) => {
    setCustpaymntnum(event.target.value);
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    // axios
    //   .get(
    //     `http://localhost:8080/HighradiusProject/Add?Business_code=${businesscode}&Cust_number=${custnum}&Clear_date=${clrdate}&Buisness_year=${businessyear}&Doc_id=${docid}&Posting_date=${postindate}&Document_create_date=${doccreatedate}&Due_in_date=${duedate}&Invoice_currency=${invcurr}&Document_type=${doctype}&Posting_id=${postingid}&Total_open_amount=${totalopenamt}&Baseline_create_date=${baselinecredate}&Cust_payment_terms=${custpaymntnum}&Invoice_id=${invoiceid}`
    //   )

    if (
      business_code !== "" &&
      cust_number !== "" &&
      clear_date !== "" &&
      buisness_year !== "" &&
      doc_id !== "" &&
      posting_date !== "" &&
      document_create_date !== "" &&
      due_in_date !== "" &&
      invoice_currency !== "" &&
      document_type !== "" &&
      posting_id !== "" &&
      total_open_amount !== "" &&
      baseline_create_date !== "" &&
      cust_payment_terms !== "" &&
      invoice_id !== ""
    ) {
      let response = await axios.get(
        `http://localhost:8080/HighradiusProject/Add`,
        {
          params: {
            business_code,
            cust_number,
            clear_date,
            buisness_year,
            doc_id,
            posting_date,
            document_create_date,
            due_in_date,
            invoice_currency,
            document_type,
            posting_id,
            total_open_amount,
            baseline_create_date,
            cust_payment_terms,
            invoice_id,
          },
        }
      );
    }
  };

  const createNewinv = (e) => {
    e.preventDefault();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        id="add"
        variant="outlined"
        size="medium"
        onClick={handleClickOpen}
      >
        Add
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth={"lg"}
        height="0%"
      >
        <DialogTitle
          className="adddialog"
          onClose={handleClose}
          style={{ color: "#FFFFFF" }}
        >
          Add Invoice
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
                style={{ width: "22%" }}
                type="text"
                value={business_code}
                // required
                onChange={handlebusinesscode}
                placeholder="Business Code"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                className="addtext"
                style={{ width: "22%" }}
                type="text"
                value={cust_number}
                required
                onChange={handlecustnum}
                placeholder="Customer Number"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                type="date"
                value={clear_date}
                onChange={handleclrdate}
                placeholder="Clear Date"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                type="text"
                value={buisness_year}
                //required
                onChange={handlebusinessyear}
                placeholder="Business Year"
              />
            </Grid>
            <br></br>

            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <input
                style={{ width: "22%" }}
                className="addtext"
                value={doc_id}
                onChange={handledocid}
                placeholder="Document id"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                type="date"
                value={posting_date}
                onChange={handlepostindate}
                placeholder="Posting Date"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                type="date"
                value={document_create_date}
                onChange={handledoccreatedate}
                placeholder="Document Create Date"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                type="date"
                value={due_in_date}
                onChange={handleduedate}
                placeholder="Due Date"
              />
            </Grid>
            <br></br>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <input
                style={{ width: "22%" }}
                className="addtext"
                variant="outlined"
                value={invoice_currency}
                onChange={hadleinvcurr}
                placeholder="Invoice Currency"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                variant="outlined"
                value={document_type}
                onChange={handledoctype}
                placeholder="Document Type"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                variant="outlined"
                value={posting_id}
                onChange={handlepostingid}
                placeholder="Posting Id"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                variant="outlined"
                value={total_open_amount}
                onChange={handletotalopenamt}
                placeholder="Total Open Amount"
              />
            </Grid>
            <br></br>

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              &nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                type="date"
                value={baseline_create_date}
                onChange={handlebaselinecredate}
                placeholder="Baseline Create Date"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                variant="outlined"
                value={invoice_id}
                onChange={handleinvoiceid}
                placeholder="Invoice Id"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              <input
                style={{ width: "22%" }}
                className="addtext"
                variant="outlined"
                value={cust_payment_terms}
                onChange={handlecustpaymntnum}
                placeholder="Cutomer Payment Terms"
              />
            </Grid>
          </form>
        </DialogContent>

        <DialogActions style={{ backgroundColor: "#2A3E4C" }}>
          <Button style={deleteTheme.but} onClick={handlesubmit}>
            ADD
          </Button>
          <Button style={deleteTheme.but1} onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Add;
