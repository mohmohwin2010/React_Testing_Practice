import { Post } from "./Post";
import { render, screen, within, act } from "@testing-library/react";
import {HttpResponse, http} from 'msw';
import {setupServer} from 'msw/node;'
import { Comment } from "./Model";
import { vi } from "vitest";

describe('Post test with mocks', () => {
    const someUserName = 'Alex';
    const someContent = 'Some content'
    const someId = '123'
    const someComments: Comment[] = [
        {
            content: 'Cool!'
        },
        {
            content: 'Yes!'
        }
    ]

    const server = setupServer(
        http.get('http://localhost:4000/comments/*', () => {
            return HttpResponse.json(someComments)
        })
    )
    
    beforeAll(() => server.listen())
    afterAll(() => server.close())
    afterAll(() => server.resetHandlers())
    
    it('should load received comments', async () =>{
        
       
            render(<Post 
            user={someUserName}
            content={someContent}
            id={someId}
            />)
        
        const commentsContainer = screen.getByTestId('post-comment-container')
        const comments = within(commentsContainer).getAllByRole('paragraph')
        expect(comments.length).toBe(2)
        expect(comments[0]).toHaveTextContent(someComments[0].content)
        expect(comments[1]).toHaveTextContent(someComments[1].content)
    })


 
})