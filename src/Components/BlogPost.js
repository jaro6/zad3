import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function BlogPost({blog}) {

    const handleClick = () => {

    }

    return (
        <div>
            <Link to={`/${blog.id}`}>
                <Card onClick={() => handleClick()} sx={{ maxWidth: 345, height: 320 }}>
                    <CardMedia
                        component="img"
                        image={ blog.imageURL }
                        height="200"
                        alt="No image."
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{ blog.title }</Typography>
                        <Typography variant="body2" color="text.secondary"><em>by </em>{blog.author}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>    
    )
}

export default BlogPost
