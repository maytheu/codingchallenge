# Backend Code Challenge

Senior Software Engineer code challenge (backend edition).

## Overview

When you run the project, you should see a webpage that displays cards with information about Star Wars characters. This data is served from the [Star Wars API](https://swapi.dev/). What we would like to add to this is the ability to "favourite" certain characters, which will then be displayed on a Favourites page. The frontend of the project doesn't require any changes, but you can use it to verify that the backend is correctly connected to it after finishing the backend substaks. Please be aware that the project, in its current state, is not fully functional and we want you to fix this with the subtasks highlighted below.

## Getting started

While this repo contains both the back and frontend of a project, in this case, you are require to work on the backend side. The backend is written in Node.js, and the frontend uses React.js. You can find more information about the backend in the `backend/README.md` file.

### Backend Subtasks

We would like you to implement:
- Authorisation with API key coming on the `x-api-key` request header:
  - Description: The frontend currently makes calls to the backend using an API key but the backend is not validating it.
  - Implemented in the file: `backend/src/user/milestones/authorisation.js` 
  - Get the api key from header
  - Return error if api key is not found
- User authentication with the use of the `x-slug` request header:
  - Description: This should allow the backend to identify the user based on the `slug` (identifier) to simulate that the user is logged in to the webpage. The `x-slug` header is expected to be base64 encoded and contain the `slug` (identifier) field of the user table. 
  - Implemented in the file: `backend/src/user/milestones/authentication.js`.
  - Get the slug from the header
  - Convert from base to string
  - modify the params with the string
- Response data enrichment:
  - Description: The `favouritesDetails` property on the response should be populated with the characters details for each of the `favourites`. The frontend passes a character ID into the `favourites` array for each character, make use of that ID to call the SWAPI to fetch details about that character. For example, the 21 in the array should make a call to https://swapi.dev/api/people/21/.
  - Implemented in the file: `backend/src/user/milestones/presentation.js`.
  - Get the favourites array from the context
  - Return empty favouritesDetails if favourites is empty
  - Loop over the favourites and make request based on id
  - Update the afvouritesDetails
- Integration tests:
  - Description: The frontend is already making use of some endpoints, such as `GET /users/me` and `PUT /users/me` and this way you can guarantees the contract is being kept.
  - To be implemented in the file: `backend/test/user.spec.js`.

We have created unit tests for all the functionality you are require to implement but the tests are skipped. Feel free to inspect the test to determine how to correctly solve the challenge, and remove the `.skip` flag in the `*.spec.js` files so that you are sure the solution is working as expected before submitting.

## Installation

Create (or reuse) a Github account to fork this repository.

Clone your forked repository:

```sh
git clone https://github.com/toluconsultingllc/codingchallenge.git
```

And then:

```sh
cd backend-code-challenge
```

Choose Junior or Senior

```sh
cd junior
```

or 

```sh
cd senior
```

Once the project is cloned, you will see two folders: `frontend` and `backend`, along with the `docker-compose.yml` file to spin up all the services.

### Requirements

Before jumping into the subtasks, make use you have all the tools installed on your machine:

- [node.js][node] 12.20.1+
- [yarn][yarn]
- [docker][docker]
- [docker-compose][docker-compose]

[node]: https://nodejs.org/en/download/
[yarn]: https://classic.yarnpkg.com/en/docs/install
[docker]: https://docs.docker.com/install/
[docker-compose]: https://docs.docker.com/compose/install/

### Environment variables

Create a copy of `default.env` file:

```sh
cp default.env .env
```

Customise if needed. Depending on your OS, you may need to change the `DB_HOST` value:
- `host.docker.internal` works on MacOS
- `db` works on Linux and Windows
- `localhost` works when running the backend outside of the Docker Compose

### Usage

Compose the containers to get both the `frontend` and `backend` services running:

```sh
docker-compose up
```

You should now be able to access:
- The frontend on [http://localhost:5000](http://localhost:5000/)
- The backend on [http://localhost:3000](http://localhost:3000/)

In order to stop the services:

```sh
docker-compose down
```

If you need to run each project separately, please, follow the instructions on the `README.md` file in the `frontend` or `backend` folders.

## Constraints

We'd prefer that you try to stick to up to 4 hours to complete the challenge that most appeals to you, and we'll take this timebox into account when reviewing submissions. 
If you run out of time, please make use of the README to tell us:
- How you'd complete the submission with more time
- Anything you'd add to extend the project, given more time
- Anything you had difficulties completing/unforeseen issues

## Submission

Please, in order to submit your forked repository for review ensure it has been set to public visibility before sharing the link with us. Make sure you follow the frequent commit practice so that your repository indicates reasonable milestones of your implementation. Good luck!
