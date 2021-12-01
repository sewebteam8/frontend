import React, { useState, useEffect,useRef } from "react";
import List from "@material-ui/core/List";

import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'
// import { useGetUsers } from "../Services/userService";
// import commonUtilites from "../Utilities/common";
import User from './User.js'
const useStyles = makeStyles((theme) => ({
  subheader: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  globe: {
    backgroundColor: theme.palette.primary.dark,
  },
  subheaderText: {
    color: theme.palette.primary.dark,
  },
  list: {
    maxHeight: "calc(100vh - 112px)",
    overflowY: "auto",
  }
}));

const Users = (props) => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(null);
  
   
    // console.log(props.socket)
   useEffect(() => { 
       axios.get('https://se-web-app.herokuapp.com/services/users').then((res) => setUsers(res.data));
   }, [newUser]);
    
//    console.log(socket)
   useEffect(() => {
       props.socket.emit('addUser', props.account._id);
       props.socket.on("getUsers", users => {
        //    setActiveUsers(users);
       })
   }, [props.account])
 
  console.log(props.account);
  return (
    <List className={classes.list}>
      {users && (
        <React.Fragment>
          {users.map((u) => (
              <User user={u} setUser={props.setUser} account={ props.account}/>
          ))}
        </React.Fragment>
      )}
    </List>
  );
};

export default Users;
