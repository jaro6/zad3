import React from 'react'
import BlogPost from '../Components/BlogPost';
import { Grid, Container } from '@mui/material';

function Home({blogs}) {
    console.log(blogs)
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    {blogs.map(blog => {
                        return (
                            <Grid key={blog.id} item xs={3}>
                                {/* <Link to={`/${blog.id}`}> */}
                                    <BlogPost blog={blog}/>
                                {/* </Link> */}
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
            {/* <Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        
                    </Grid>
                </Grid>
                
            </Grid> */}
        </div>
    )
}

export default Home
