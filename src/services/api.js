import axios from 'axios'
export const setConversation = async (data) => {
    try {
        await axios.post(`https://se-web-app.herokuapp.com/services/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`https://se-web-app.herokuapp.com/services/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}
export const getMessages = async (id) => {
    try {
        let response = await axios.get(`https://se-web-app.herokuapp.com/services//message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const newMessages = async (data) => {
    try {
        return await axios.post(`https://se-web-app.herokuapp.com/services//message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}