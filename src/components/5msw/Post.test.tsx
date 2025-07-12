import { Post } from "./Post";
import { render, screen, within, act } from "@testing-library/react";
import axios from "axios";
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
    
    it('should load received comments', async () =>{
        const axiosGetSpy = vi.spyOn(axios, 'get')
        axiosGetSpy.mockResolvedValueOnce({
            data: someComments
        })

        await act(async () =>{
            render(<Post 
            user={someUserName}
            content={someContent}
            id={someId}
            />)
        })

        const commentsContainer = screen.getByTestId('post-comment-container')
        const comments = within(commentsContainer).getAllByRole('paragraph')
        expect(comments.length).toBe(2)
        expect(comments[0]).toHaveTextContent(someComments[0].content)
        expect(comments[1]).toHaveTextContent(someComments[1].content)
    })

    it('should call service to load comments', async () => {
        const axiosGetSpy = vi.spyOn(axios, 'get')
        axiosGetSpy.mockResolvedValueOnce({
            data: someComments
        })

        await act(async () => {
            render(<Post
            user={someUserName}
            content={someContent}
            id={someId}
            />)
        })

        expect(axiosGetSpy).toHaveBeenCalledTimes(1)
        const axiosGetSpyArgs = axiosGetSpy.mock.calls
        console.log(axiosGetSpyArgs)
        const axiosGetSpyCallUrl = axiosGetSpy.mock.calls[0][0]
        expect(axiosGetSpyCallUrl.endsWith(someId)).toBe(true)
        const axiosGetSpyCallId = axiosGetSpy.mock.calls[0][1]?.params.id
        expect(axiosGetSpyCallId).toBe("123")
 })
        it('Network call throws error', async () => {
            const axiosGetSpy = vi.spyOn(axios, 'get')
            axiosGetSpy.mockRejectedValueOnce(new Error('Backend erro'))
            await act(async () => {
                render(<Post
                user={someUserName}
                content={someContent}
                id={someId}
                ></Post>)
            })
            const errorLabel = screen.getByTestId('error-label')
            expect(errorLabel).not.toBeEmptyDOMElement()
        })
   
 
})