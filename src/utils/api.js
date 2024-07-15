import axios from "axios"

const datafetcher = async () =>{
    try {
        const responce = await  axios.get('http://localhost:3005/api/restaurants/list');
        return {status:true, data:responce};
    } catch (error) {
        return {status:false, data:error.message}
    }
}

export default datafetcher;
