import React from 'react'
import {useParams} from 'react-router-dom';
import { Container, Box } from '@mui/material';

function PostPage({blogs}) {
    const {id} = useParams();
    console.log(typeof id)
    const blog = blogs.filter(b => {
        return b.id===id
    })[0];
    return (
        <div>
            <Container>
                <h1>{blog.title}</h1>
                <p className="author"><em>by </em>{blog.author}</p>
                <Box
                    component="img"
                    src={blog.imageURL}
                    style={{maxWidth:"900px"}}
                />
                <p>{blog.content}</p>
            </Container>
        </div>   
    )
}

export default PostPage
