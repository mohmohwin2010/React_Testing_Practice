import axios from "axios";
import {Comment} from "./Model"

const APP_URL = 'http://localhost:5173/'

export async function getCommentsForPostWithAxios(id:string): Promise<Comment[]> {
    const response = await axios.get<Comment[]>(`${APP_URL}/comments/` + id, {
        params: {
            id: id
        }
    })
    return response.data
    
}