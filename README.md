## How to Run Unit Testing Files: `test_app.py`,`article-utils.test.ts`, and `article-utils.ts` (isolation testing)
Navigate to the root dir of the project and run the following commands
### Backend:
```
pip install pytest
cd backend
pytest
```
### Frontend:
```
npm install -D vitest
npx vitest run
```
The first 2 tests check if the raw data fetched from the API can be correctly transformed into Article objects with their attributes: title, URL, image. Covers for cases where the article does/does not have an image associated.


