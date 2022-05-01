import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {List, ListItem, ListItemText} from "@mui/material";
import jwt_decode from "jwt-decode";
import axios from "axios";
import {useEffect, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
const style = {
    width: '80%',
    maxWidth: 480,
    bgcolor: 'background.paper',
};


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const flex_center={
    display:'flex',
    alignItems: 'center'
}

export default function Index() {
    // state:
    const [state,setState]=useState({
        bbs:[]
    })
    //effect
    useEffect(
        (e)=>{
            if(localStorage.getItem("token")!=undefined){
                console.log("useeffect",e)

                var token = localStorage.getItem('token');
                var decoded = jwt_decode(token);

                console.log(decoded);

                var decodedHeader = jwt_decode(token, { header: true });
                console.log(decodedHeader);

                let formData = new FormData()
                formData.append("uid", 1)
                formData.append("server_key", '#sdf674%3255$')
                console.log('@',formData)
                axios.post('/message/search', formData
                    , {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    }
                )
                    .then(function (response) {
                        console.log(response);
                        console.log(response.data.data[1]);
                        setState({bbs:response.data.data})
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
        ,
        []
    )

    if(localStorage.getItem("token")==undefined){
        return <Navigate to={'/login'}/>
    }

console.log('state',state.bbs)

    return (
        <Box sx={{ width: '100%' }}>
            <Stack style={flex_center} spacing={2}>
                {
                    state.bbs.map(
                        (value, index, array)=>{
                            return (
                                <List sx={style} component="nav" aria-label="mailbox folders">
                                    <Item>
                                        <ListItem button>
                                            <ListItemText primary={value.message} secondary={value.time}/>
                                        </ListItem>
                                    </Item>
                                </List>
                            )
                        }
                    )
                }
            </Stack>
        </Box>
    );
}