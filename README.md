## How to Run Unit Testing Files: `test_app.py`, `myTest.cy.ts`,`article-utils.test.ts`, and `article-utils.ts` (isolation testing)
Navigate to the root dir of the project and run the following commands
### Backend:
```
pip install pytest
cd backend
pytest
```
The first test is to check when NYT_API_KEY is set, the API should return the correct key. 
The second test is to check when NYT_API_KEY is not set, the API will not fail and it is still safe to return "apiKey" and that one  will be None or an empty string.

Citation: 
[pytest](https://docs.pytest.org/en/6.2.x/reference.html#pytest-fixture)


### Frontend:
```
npm install -D vitest
npx vitest run
```
The first 2 tests check if the raw data fetched from the API can be correctly transformed into Article objects with their attributes: title, URL, image. Covers for cases where the article does/does not have an image associated.
The third test checks whether the URL string used by fetch contains Davis and Sacramento. Verify that the correct query keywords are included in the API call.
####Cypress Testing for UI Responsiveness:
Navigate to root folder then run:
```
npm install --save-dev cypress
```
In a new terminal run:
```
docker compose -f docker-compose.dev.yml up --build
```
Go back to first terminal and navigate to frontend then run:
```
npx cypress run --spec "cypress/e2e/**/*.cy.ts"
```
The 3 unit tests demonstrate whether or not the column formatting is reponsive according to the media query specs. It does so by simulating different pixel sizes using `cy.viewport`

```
[npm install --save-dev @testing-library/svelte](https://www.npmjs.com/package/@testing-library/svelte)
```



citation: [vitest](https://vitest.dev/api/vi.html#vi-stubglobal), [vi.waitFor](https://vitest.dev/api/vi.html#vi-spyon)
