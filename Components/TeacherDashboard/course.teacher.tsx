import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CourseTeacher= ()=> {
    return (
        <Card sx={{ maxWidth: 450 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Course Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Course Discription
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Attendance
                </Button>
                <Button size="small" color="primary">
                    Quiz
                </Button>
                <Button size="small" color="primary">
                    Assignment
                </Button>
                <Button size="small" color="primary">
                    Content
                </Button>
                <Button size="small" color="primary">
                    <a href="questionbank">Question Bank</a>
                </Button>
            </CardActions>
        </Card>
    );
};
export default CourseTeacher;
