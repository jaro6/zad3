import React, { useEffect, useState } from 'react';
import {Button, OutlinedInput, Container, FormLabel} from '@mui/material';
import { blue } from '@mui/material/colors';

function AddPost({addPost}) {
    const defaultBlog = {
        id: '',
        imageURL: '',
        title: '',
        author: '',
        content: '',
    }
    const [isSubmited, setIsSubmited] = useState(false);
    const [errors, setErrors] = useState({
        id: '',
        imageURL: '',
        title: '',
        author: '',
        content: '',
    });
    const [newPost, setNewPost] = useState(defaultBlog);

    useEffect(() => {
        if(isSubmited && isValid(errors)){
            addPost({...newPost});
            setNewPost(defaultBlog);
        }
        setIsSubmited(false);
    },[errors])

    const handleErrors = () => {
        let newErs = {...errors};
        let val = true;
        if(newPost.title.length >= 20){
            newErs.title = 'The title should be less than 20 characters.';
            val=false;
        }
        else {
            newErs.title = "";
        }
        if(newPost.author.length >=20){
            newErs.author =  "The author name should be 20 characters or less.";
            val=false;
        }
        else {
            newErs.author = "";
        }
        if(newPost.content.length >= 250){
            newErs.content = "Content is max 250 characters.";
            val=false;
        }
        else {
            newErs.content = "";
        }
        setErrors(newErs);
    }
    const isValid = (errors) => {
        let isValid = true;
        Object.values(errors).forEach(value => {
            if(value!==''){
                isValid = false;
            }
        });
        return isValid;
    }

    const handleClick = (e) => {
        e.preventDefault();
        handleErrors();
        setIsSubmited(true);
    }

    const handleChange = (e) => {
        const newNew = e.target.value;
        const name = e.target.name;
        setNewPost({...newPost, [name]:newNew});
    }
    return (
        <div>
            <Container maxWidth="sm">
                <form>
                    <FormLabel>Title: </FormLabel>
                    <OutlinedInput
                        type="text"
                        size = "small"
                        name= "title"
                        value = {newPost.title}
                        error={errors.title==='' ? false : true}
                        onChange = {handleChange} 
                        />
                        <p className="error">{ errors.title }</p>
                    <hr/>
                    <FormLabel>Author: </FormLabel>
                    <OutlinedInput
                        type="text"
                        size = "small"
                        name= "author"
                        value = {newPost.author}
                        error={errors.author==='' ? false : true}
                        onChange = {handleChange} 
                        />
                        <p>{ errors.author }</p>
                    <hr/>
                    <FormLabel>Image URL: </FormLabel>
                    <OutlinedInput
                        type="text"
                        size = "small"
                        name= "imageURL"
                        value = {newPost.imageURL}
                        onChange = {handleChange} 
                        />
                    <hr/>
                    <FormLabel>Content: </FormLabel>
                    <OutlinedInput
                        style={{width:"100%"}}
                        multiline
                        type="text"
                        size = "large"
                        name= "content"
                        value = {newPost.content}
                        error={errors.content==='' ? false : true}
                        onChange = {handleChange} 
                        />
                        <p>{ errors.content }</p>
                    <hr/>
                    <Button style={{color: "white", border: "2px solid white", backgroundColor:"#1976d2", borderRadius: "10px"}} onClick={handleClick}>Napravi novi blog post</Button>

                </form>

            </Container>

        </div>
    )
}

export default AddPost;
