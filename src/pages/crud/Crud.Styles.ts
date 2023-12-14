const crudStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    // border: "1px solid red",
    padding: "50px 0px",
  },

  childContainer: {
    width: "90%",
    margin: "auto",
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    gap: "100px",
  },

  btnsMainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // border: "2px solid pink",
  },

  btnsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  userBtn: {
    textTransform: "capitalize",
  },

  bodyContainer: {
    // border: "2px solid pink",
  },

  tableContainer : {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "center"


  },

  tableContainerPaper : {
    // border: '6px solid yellow',
    width: {xs: "100%", lg:"80%", xl:'60%'},
    overflowX:"scoll hidden"

  },

  columnId : {
    fontWeight: "500",
    width:"10%",
    // border:"1px solid black"
  },

  columnNumber : {
    width:"20%",
    // border:"1px solid black"
  },

  columnEmail : {
    width:"25%",
    // border:"1px solid black"
  },

  columnAddress : {
    width:"45%",
    // border:"1px solid black"
  },

  column :{
    fontWeight: "700",
    fontSize: "17px"
  },

  modalStyle : {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
};

export default crudStyles;
