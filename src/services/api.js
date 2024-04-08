import axios from 'axios';

const randomUserApi = process.env.VUE_APP_RANDOM_USER_API

export async function getData() {
    try {
        const response = await axios.get(`${randomUserApi}?seed=aa6cdccaffb9cd3b&results=254`)
        const data = response.data

        return data
    } catch(err) {
        console.log(err)
    }
}

export async function getUser(seed, index) {
    try {
        const response = await axios.get(`${randomUserApi}?seed=${seed}&results=${index}`)
        const data = response.data

        const currentUser = data.results[index-1]

        return currentUser
    } catch(err) {
        console.log(err)
    }
}