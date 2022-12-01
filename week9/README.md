# Class Example

![Integration Tests](https://github.com/joeappleton18/solent-room-finder/actions/workflows/cypress.yaml/badge.svg)

This is an ongoing project that will be used to support Solent's level 6 DevOps module. It is a room tracking application created using Next.js.

## Getting Started

- Clone this repository: `git clone https://github.com/joeappleton18/solent-room-finder.git`
- Next navigate into the created `solent-room-finder` folder: `cd solent-room-finder`
- Install the dependencies: `npm install`

### Setting up the database

- Get the connection string of your MongoDB server.In the case of MongoDB Atlas, it should be a string like this (notice how we've added rooms as the database name):

`mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/rooms?retryWrites=true&w=majority`

- If you are running MongoDB locally, it will look something like this:

`mongodb://127.0.0.1:27017/rooms`

- To get authentication working, you will need to register a GitHubOauth application. [Full instructions on how to do this can be found in the notes](https://joeappleton18.github.io/devops_2022_2023_notes/week-7/#task-0-1-get-the-starter-application).

- To allow image uploads you will require a Cloudinary account

- Copy the `.env.local.example` file in this directory to .env.local, which will be ignored by Git), an populate the variables within it
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Run the development server: `npm run dev`

- **If you want to see the project stories**:, `npm run "storybook"`
