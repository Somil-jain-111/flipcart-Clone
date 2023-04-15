import axios from 'axios'

const URL = ''

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${URL}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}


export const getProducts = async (user) => {
    try {
        return await axios.post(`${URL}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const payUsingPaytm = async(data)=>{
    try {
    const response = await axios.post(`${URL}/payment`, data)
        return response.data
    } catch (error) {
        console.log('Error while calling paytm API: ', error);
    }
}