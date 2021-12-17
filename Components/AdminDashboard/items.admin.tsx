import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Add, Grade, LibraryBooks, Logout, Upload, UploadFile} from "@mui/icons-material";
import {Divider} from "@mui/material";

const ItemsAdmin = () => {
    return(

        <div>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Add/>
                </ListItemIcon>
                <a href="addstudent">Add Student</a>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Add />
                </ListItemIcon>
                <a href="addteacher">Add Teacher</a>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <UploadFile/>
                </ListItemIcon>
                <ListItemText primary="Upload Timetable" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Upload />
                </ListItemIcon>
                <ListItemText primary="Upload Courses" />
            </ListItem>
            <Divider style={{ backgroundColor: 'white' }} />
            <ListItem button>
                <ListItemIcon>
                    <Logout/>
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
        </div>
    );
};
export default ItemsAdmin;



