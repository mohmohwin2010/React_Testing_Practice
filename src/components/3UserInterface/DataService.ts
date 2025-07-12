import {Comment} from "./PostWithComment";

export async function getCommentsForPost(id:string): Promise<Comment[]> {
    console.log(`getting comments for post ${id}`)
    const comments: Comment[] =[]
    comments.push({
        content: 'This is awesome!',
    })
    comments.push({
        content: 'Nice Car!'
    })
    return comments
}