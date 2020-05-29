# Open Access On Containers - Apps - WebSPA

This project is the submodule of the root project called openAccessOnContainers.

The root project is located at https://github.com/huseyindeniz/openAccessOnContainers

## WebSPA App - Specs
- React
- Typescript
- Material-UI
- Dockerized

## TODOs
- Decide and configure unit testing structure for the app. Code coverage should be 80% minimum.

## Note
I'm trying to establish a whole workflow for a microservices project. That's why I prepared the following workflows. But, I'm the only developer who is working on this project currently. For a while, I'll work like this:

![alt text](/docs/D90nHuOXkAAGxtJ.jpg)

:)

---

## TEAMS

### WebSPA App Dev Team

#### Prerequsities for the developer machine
1. Docker should be installed.
2. Nodejs should be installed.
3. Git bash or any terminal that supports Docker and be able to run sh files should be present.
4. Recommended ide is vscode.

#### Notes for the Dev Team

There are two applications in this repository.

1. WebSPA app that you are responsible for developing.
2. MockAPI server that helps mocking real rest api server. With this application, you are not dependent on other teams in the root project. 

#### First time workflow for a developer
1. Clone this repository to your local machine.
2. Open project folder in vscode.
3. Open git bash terminal on vscode.
2. Switch to the dev branch
2. Duplicate the .env file in the root directory, and rename it to .env.local
3. Uncomment the dev section in the .env.local

Now, you are ready to development. 

#### Important Note 
As the WebSPA APP Team, you are not responsible for developing Rest API. You will use models(typescript types) under <b>/src/models</b> directory. These models are sent to this submodule by the <b>API Design Team</b> who are working in the root project. So, you will only use these models, not will modify them. If you need model updates, you should send request to the API Design Team. 

You also don't need to modify MockAPI Server which is under <b>api</b> directory. If you need modification in MockAPI Server, you still need to send request to the API Design Team.

#### How to start application (with MockAPI server)
1. Open git bash terminal on vscode.
2. run <code>./start-onlyMockApi.sh</code> on terminal
3. after Docker image started, run <code>npm start</code>
4. You should be able to see the homepage of WebSPA application.

#### How to stop application (with MockAPI server)
1. press ctrl + c to stop react app.
2. run <code>./stop-onlyMockApi.sh</code>

#### Feature/Bug development workflow
1. Switch to the <b>dev</b> branch.
2. <code>git branch -a <feature_name/bug_name></code> to create a new branch.
3. Switch to this branch.
4. Work on this branch until feature/bugfix finished.
5. Create a pull request to the <b>qa</b> branch. Don't forget, the <b>qa</b> branch will automatically run unit tests when PR created, and will reject if it fails.
6. GO TO 1:)

PR reviews will be made by this team also. When PR accepted, changes will go to the <b>qa</b> branch.

### WebSPA App QA TEAM

#### Prerequsities for the developer machine
1. Docker should be installed.
2. Nodejs should be installed.
3. Git bash or any terminal that supports Docker and be ables to run sh files should be present.

#### Notes for the Dev Team

#### Notes

You are responsible for testing the project. For this, follow workflows below.

#### First time workflow for a tester
1. clone this repository to you local machine.
2. Open git bash terminal and go to the project root directory.
3. Switch to the <b>qa</b> branch
4. Duplicate .env file in root directory, and rename it to .env.local
5. Uncomment the <b>qa</b> section in .env.local

Now, you are ready to testing.

#### How to start application
1. Open git bash terminal and go to the project root directory.
2. run <code>./start.sh</code> on terminal
3. You should be able to see the homepage of WebSPA application. host and port values are REACT_APP_HOST and REACT_APP_PORT values that are in your .env.local file. For example, it will be: <b>localhost:9000<b>

#### How to stop application
1. run <code>./stop.sh</code>

At this point, when a new PR merged to the qa branch, you will be notified to run your tests. I don't know what kind of tests you should run, and I'm not planning to focus on this topic for a while. You know what to do, right? When you finished your tests, follow these steps.

1. if tests failed, reset the qa branch to the previous version. Send the test results to the Dev Team.
2. if tests succeeded, create a pull request to the dev branch. This PR will be automatically merged to the dev branch.

### WebSPA App Dev Team Lead

When a PR sent to master branch from dev

1. Create pull reqest to the master branch if the milestone features completed.
2. Merge pull request on master branch.