const popupStyles = {
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {xs: "90%", md:600},
    bgcolor: "background.paper",
    boxShadow: 24,
    // p: 4,
    display: "flex",
    flexDirection: "column",
    gap: {xs:"5px", sm:"10px"},
    borderRadius: {xs:"10px", sm:"14px"},
    padding: {xs: "30px 10px", sm:"30px 30px", md:"60px 60px"}
  },

  closeIconContainer : {
    // border: "2px solid blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  createUserheading : {
    fontWeight: "600",
    fontSize: {xs: "17px", sm: "20px"}
  },

  closeIcon : {
    width: {xs:"19px", sm:"25px"},
    height: {xs:"19px", sm:"25px"},
    cursor: "pointer"
  },

  

  inputFieldsContainer : {
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    gap: {xs:"15px", sm:"30px"},
    margin: "25px 0px"
  }
};

export default popupStyles;
