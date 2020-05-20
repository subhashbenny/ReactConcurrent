import Axios from 'axios'

export const fetchData = () => {
    const Users = fetchUser();
    const Posts = fetchPosts();
    return{
        user:WrapPromise(Users),
        posts:WrapPromise(Posts)
    }
}

const WrapPromise = (promise) => {
    let status = "Pending";
    let result;
    let suspender = promise.then(
        res => {
            status = "Success";
            result = res;
        },
        err => {
            status = "Error";
            result = err;
        }

    )
    return{
        read(){
            if(status === "Pending"){
                throw suspender;
            }
            else if(status === "Error"){
                return result;
            }
            else if(status === "Success"){
                return result;
            }

        }
    }
}


const fetchUser = () => {
    console.log('fetchUser')
    return Axios.get('https://jsonplaceholder.typicode.com/users/1')
                .then(res => res.data)
                .catch(err => err)
}

const fetchPosts = () => {
    console.log("new")
    return Axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(res => res.data)
                .catch(err => err)

}