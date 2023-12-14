import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material"
import crudStyles from "./Crud.Styles"
import React, { useState } from "react";
import BasicModal from "../../components/modal_popup/ModalPopup";
import { getUsers } from '../../redux/UserCrudSlice';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/Store";


// function createData(
//     id: number,
//     mobileNumber: number,
//     email: string,
//     address: string
// ) {
//     return {
//         id, mobileNumber, email,
//         address
//     };
// }

// const rows = [
//     createData(1, 8179041437, "kantamanenibharath21@gamil.com", "flat No: 509, Jai Durga Towers, Kamayathopu center, Vijayawada"),
//     createData(2, 8179041437, "kantamanenibharath21@gamil.com", "flat No: 509, Jai Durga Towers, Kamayathopu center, Vijayawada"),
//     createData(3, 8179041437, "kantamanenibharath21@gamil.com", "flat No: 509, Jai Durga Towers, Kamayathopu center, Vijayawada"),
//     createData(4, 8179041437, "kantamanenibharath21@gamil.com", "flat No: 509, Jai Durga Towers, Kamayathopu center, Vijayawada"),
//     createData(5, 8179041437, "kantamanenibharath21@gamil.com", "flat No: 509, Jai Durga Towers, Kamayathopu center, Vijayawada"),
// ];

interface IState {
    isModalOpened: boolean
}

const apiStatusConstants = {
    initial : "INITIAL",
    pending: "PENDING",
    success : "SUCCESS",
    failure: "FAILURE"
}

const Crud = () => {
    const [apiStatus, setApiStatus] = useState<string>(apiStatusConstants.initial)
    const dispatch = useDispatch<AppDispatch>();
    const [isModalOpened, setIsModalOpened] = useState<IState["isModalOpened"]>(false)
    const reduxState = useSelector((state: RootState) => state.crud);
    // console.log(allUsers)

    const addUserEventHandler = () => {
        setIsModalOpened(true)
    }

    const closePopupHandler = () => {
        setIsModalOpened(false)
    }

    const getUsersEventHandler = () => {
        dispatch(getUsers())
    }


    const fetchUsers = () => {

    }

    return (
        <>
            <Box sx={crudStyles.mainContainer}>
                <Box sx={crudStyles.childContainer}>
                    <Box sx={crudStyles.btnsMainContainer}>
                        <Stack direction="row" spacing={2}>
                            <Button onClick={addUserEventHandler} sx={crudStyles.userBtn} variant="contained" color="success">
                                Add User
                            </Button>
                            <Button onClick={getUsersEventHandler} sx={crudStyles.userBtn} variant="contained" color="primary">
                                Get Users
                            </Button>
                        </Stack>
                    </Box>
                    <Box sx={crudStyles.bodyContainer}>
                        <Box sx={crudStyles.tableContainer}>
                            <TableContainer sx={crudStyles.tableContainerPaper} component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ ...crudStyles.columnId, ...crudStyles.column }}>id</TableCell>
                                            <TableCell sx={{ ...crudStyles.columnNumber, ...crudStyles.column }} align="center">Mobile Number</TableCell>
                                            <TableCell sx={{ ...crudStyles.columnEmail, ...crudStyles.column }} align="center">Email</TableCell>
                                            <TableCell sx={{ ...crudStyles.columnAddress, ...crudStyles.column }} align="center">Address</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {allUsers.map((eachUser) => (
                                            <TableRow
                                                key={eachUser.id}
                                            >
                                                <TableCell sx={crudStyles.columnId}>
                                                    {eachUser.id}
                                                </TableCell>

                                                <TableCell sx={crudStyles.columnNumber} align="center">{eachUser.mobile}</TableCell>
                                                <TableCell sx={crudStyles.columnEmail} align="center">{eachUser.email}</TableCell>
                                                <TableCell sx={crudStyles.columnAddress} align="center">{eachUser.address}</TableCell>
                                            </TableRow>
                                        ))}
                                        {fetchUsers()}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {isModalOpened && <BasicModal closePopupHandler={closePopupHandler} isModalPopupOpened={isModalOpened} />}

        </>
    )
}


export default Crud