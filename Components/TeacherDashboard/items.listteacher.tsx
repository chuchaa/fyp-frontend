import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import {CheckBoxOutlined, Grade, LibraryBooks, Logout} from "@mui/icons-material";
import {Checkbox, Divider} from "@mui/material";

const ItemsListTeacher = () => {
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
                    <Grade />
                </ListItemIcon>
                <ListItemText primary="Grades" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LibraryBooks />
                </ListItemIcon>
                <ListItemText primary="Courses" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <CheckBoxOutlined />
                </ListItemIcon>
                <ListItemText primary="Attendance" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="CLO" />
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
export default ItemsListTeacher;



