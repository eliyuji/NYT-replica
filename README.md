## How to Run Unit Testing Files: `test_app.py`,`article-utils.test.ts`, and `article-utils.ts` (isolation testing)
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
[pytest-fixture](https://docs.pytest.org/en/6.2.x/reference.html#pytest-fixture)


### Frontend:
```
npm install -D vitest
npx vitest run
```
The first 2 tests check if the raw data fetched from the API can be correctly transformed into Article objects with their attributes: title, URL, image. Covers for cases where the article does/does not have an image associated.
The third test checks whether the URL string used by fetch contains Davis and Sacramento. Verify that the correct query keywords are included in the API call.


