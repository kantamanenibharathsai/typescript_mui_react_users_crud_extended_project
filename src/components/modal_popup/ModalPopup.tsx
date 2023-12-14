import React, { FormEvent, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import popupStyles from './ModalPopup.Styles';
import { TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { addUser } from '../../redux/UserCrudSlice';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/Store";



interface IProps {
    closePopupHandler: () => void,
    isModalPopupOpened: boolean
}



const BasicModal: React.FC<IProps> = ({ closePopupHandler, isModalPopupOpened }) => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const mobileNoRef = useRef<HTMLInputElement | null>(null);
    const addressRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch<AppDispatch>();
//    const todos = useSelector((state: RootState) => state.);
 



    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        console.log("form submitted")

        const userObj = {
            email: emailRef.current?.value ?? "",
            mobileNo: mobileNoRef.current?.value ?? "",
            address: addressRef.current?.value ?? "",
        };

        console.log(userObj);
        dispatch(addUser(userObj))
    };



    return (
        <Modal
            open={isModalPopupOpened}
            onClose={closePopupHandler}
        >
            <Box sx={popupStyles.modalStyle}>
                <Box sx={popupStyles.closeIconContainer}>
                    <Typography sx={popupStyles.createUserheading} variant="h6" component="h2">
                        Create new user
                    </Typography>
                    <CloseIcon onClick={closePopupHandler} sx={popupStyles.closeIcon} />
                </Box>
                <Box sx={popupStyles.inputFieldsContainer} component="form" onSubmit={onSubmitForm}>
                    <TextField required label="Email" type="email" inputRef={emailRef} />
                    <TextField required label="mobileNumber" type="number" inputRef={mobileNoRef} />
                    <TextField label="Address" multiline rows={4} required type="text" inputRef={addressRef} />

                    <Button variant="contained" color="success" type="submit">
                        Create User
                    </Button>
                </Box>
            </Box>
        </Modal>

    );
}


export default BasicModal