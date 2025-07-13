import { SimplePost } from "./SimplePost"
import { render } from "@testing-library/react"

describe('', () => {
    it('intial test', () => {
        const rendered = render(
            <SimplePost
            content="Simple content"
            user="Alex"
            />
        )
        expect(rendered.asFragment()).toMatchInlineSnapshot(`
          <DocumentFragment>
            <div
              data-testid="post-container"
            >
              <h2>
                Alex:
              </h2>
              <p>
                Simple content
              </p>
            </div>
          </DocumentFragment>
        `)
    })
})