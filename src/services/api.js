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