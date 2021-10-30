import { setConversation, getConversation } from '../../services/api';
import { useContext, useEffect, useState } from 'react'
import { makeStyles, Box, Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
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
    avatar: {
        margin: theme.spacing(0, 3, 0, 1),
    },
}));

const User = ({setUser, user }) => {
    const classes = useStyles();
    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationMessage = async() => {
            const data = await getConversation({ sender: '', receiver: ''});
            // setMessage({ text: data.message, timestamp: data.updatedAt });
        }
        getConversationMessage();
    }, []);

    const getUser = async () => {
        setUser(user);
        await setConversation({ senderId: '', receiverId: user._id });
    }

    const getTime = (time) => {
        return time < 10 ? '0' + time : time; 
    } 

    return (
        <ListItem
              className={classes.listItem}
              key={user._id}
              onClick={() => getUser()}
              button
            >
              <ListItemAvatar className={classes.avatar}>
                <Avatar>{}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.name} />
        </ListItem>
    )
}

export default User;













