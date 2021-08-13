import axios from 'axios';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

const URL = 'http://localhost:5000';

class Api {

    #Member

    fetchMember() {
        return axios.get(`${URL}/member`)
            .then((data)=> {
                return data
            }).catch((error) =>{
                console.log(error)
            })
    }

    fetchUpdateMember( newContribute ) {
        const token = Cookies.get('token');
        const data = jwt.verify(token, 'mk')
        return axios.put(`${URL}/member/${data._id}`,{newContribute: newContribute})
    }

    fetchOne() {
        const token = Cookies.get('token');
        const data = jwt.verify(token, 'mk')
        return axios.get(`${URL}/member/${data._id}`)
    }

    fetchLogin( username, pass ) {
        return axios.post(`${URL}/member/login`,{
            username: username,
            pass: pass,
        })
    }

    #Action

    fetchAction() {
        return axios.get(`${URL}/action`)
    }

    fetchCreateAction(action) {
        return  axios.post(`${URL}/action`, action)
    }
    
    #cooking

    fetchCooking() {
        return axios.get(`${URL}/cooking`)
    }

    fetchCreateCooking(cooking) {
        return axios.post(`${URL}/cooking`, cooking)
    }
}

export default new Api();