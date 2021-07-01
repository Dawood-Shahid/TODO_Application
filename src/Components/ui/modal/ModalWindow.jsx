import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function ModalWindow(props) {
    const { clicked } = props;
    const useStyles = makeStyles((theme) => ({
        modalStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(3, 5, 4),
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        clicked();
    };

    return (
        <Modal
            className={classes.modalStyle}
            open={open}
            onClose={handleClose}
        >
            <div className={classes.paper} >
                {props.children}
            </div>
        </Modal>
    );
}

export default ModalWindow
