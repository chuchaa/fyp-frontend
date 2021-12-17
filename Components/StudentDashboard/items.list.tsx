import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import {Grade, LibraryBooks, Logout} from "@mui/icons-material";
import {Divider} from "@mui/material";

const ItemsList = () => {
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
        <BarChartIcon />
    </ListItemIcon>
    <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
    <ListItemIcon>
        <LayersIcon />
    </ListItemIcon>
    <ListItemText primary="Integrations" />
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
export default ItemsList;



