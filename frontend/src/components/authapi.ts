import axios, {AxiosRequestConfig} from 'axios';

export interface ICredentials{
    username: string;
    password: string;
}

export const onLogin = async(data: ICredentials) =>{
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: process.env.REACT_APP_API_BASE_URL + '/login',
        data
    }
    try{
        const {data: response} = await axios.request(requestConfig);
    }
    catch(e){
        console.error(e);
        return {error: e.response.data.message}
    }
    
}

export const onRegister = async(data: ICredentials)=>{
    const requestConfig: AxiosRequestConfig={
        method: 'post',
        url: process.env.REACT_API_BASE_URL + `/register`,
        data
    }
    try{
        const {data: response} = await axios.request(requestConfig);
    }
    catch(e){
        console.error(e.response);
        return {error: e.response.data.message}
    }
    
}
