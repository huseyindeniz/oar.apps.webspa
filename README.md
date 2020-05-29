# Open Access On Containers - Apps - WebSPA

This project is the submodule of the root project called openAccessOnContainers.

The root project is located at https://github.com/huseyindeniz/openAccessOnContainers

<<<<<<< HEAD
## Technical Requirements
- Production code should be served on Dockerized Nginx.
- Should be able to be live tested alone. -> probably with Swagger + Imposter
- React + Typescript + Material-UI
- TDD -> probably with jest, enzyme etc.
- Environment management strategy: ??? still looking for.
=======
## WebSPA App - Specs
- React
- Typescript
- Material-UI
<<<<<<< HEAD
>>>>>>> dev

## How to Run the Application

This application is part of the openAccessOnContainers. But should be able to be live tested without other apps. When I solve this requirement, I will update this section.

## CI/CD

### Branches
1. <b>master</b>: Main branch for releases.
    - Never changes directly. 
    - Accepts merge from dev.
2. <b>dev</b>: Branch the most closest to master.
    - Never changes directly. 
    - Accepts merge from qa. 
    - Sends PR to master.
3. <b>qa</b>: Quality assurance branch for testing.
    - Never changes directly. 
    - Accepts merge from feature or bug branches. 
    - Sends PR to dev.
4. <b>feature*</b> : Main development branches. 
    - Cuts from dev.
    - Accepts merge from dev.
    - Sends PR to qa.
5. <b>bug*</b>: Bug fix branches. 
    - Cut from dev. 
    - Accepts merge from dev.
    - Sends PR to qa.
6. <b>hotfix</b>: Hot bug fix branches. 
    - Cuts from master. 
    - Sends PR to master.

### Actions
1. <b>qa-pr</b>:
    - Triggers on PR to qa from feature or bug branches.
    - Run unit tests. If fails, rejects PR. If successful, merges from requester branch.
    - Run integration tests. If fails, reverts back to previous state. If successfull, send PR to dev.
2. <b>dev-pr</b>:
    - Triggers on PR to dev from qa.
    - Run integration tests. If fails, rejects PR. If successful, merges from qa.
3. <b>master-pr</b>:
    - Triggers on PR from dev.
    - Run unit tests. If fails, rejects PR. If successful, go to next step
    - Run integration tests. If fails, rejects PR. If successful, merges from dev.
4. <b>master-push</b>:
    - Triggers on push in master.
    - Builds deployment packages.
    - Deploys packages.

## Workflows

### Main Workflow
1. Switch to dev branch.
2. <code>git pull origin master, git merge master</code> to get latest direct changes on master branch. -optional
3. <code>git branch -a <feature_name/bug_name></code> to create new feature/bug branch.
4. Switch to feature/bug branch.
5. Work on this branch until feature/bug finished.
6. Create pull request to qa branch.
7. Review and merge PR on qa branch.
8. Run integration tests.
9. Create PR to dev if integration tests successful.
10. Merge PR on dev branch.
11. Create PR to master branch if the milestone features completed.
12. Merge PR on master branch.
  
=======
- Dockerized

## TODOs
- Decide and configure the unit testing structure for the app. The code coverage of the app should be at least 80%.

## Note
I'm trying to establish a whole workflow for a microservices project. That's why I prepared the following workflows. But, I'm the only developer who is working on this project currently. For a while, I'll work like this:

![alt text](/docs/D90nHuOXkAAGxtJ.jpg)

:)

---

## Teams

### WebSPA App Dev Team

#### Prerequsities for the developer machine
1. Docker should be installed.
2. Nodejs should be installed.
3. Git Bash or any terminal that supports Docker and be able to run sh files should be present.
4. Recommended ide is vscode.

#### Notes

There are two applications in this repository.

1. The WebSPA app that you are responsible for developing.
2. The MockAPI server that helps mocking the real rest api server. With this application, you are not dependent on the other teams in the root project. 

#### First time workflow for the dev team developer
1. Clone this repository to your local machine.
2. Open project folder in vscode.
3. Open git bash terminal on vscode.
2. Switch to the dev branch
2. Duplicate the .env file in the root directory, and rename it to .env.local
3. Uncomment the dev section in the .env.local

Now, you are ready to development. 

#### Important Note 
As the WebSPA APP Team, you are not responsible for developing the Rest API. You will use the models(typescript types) under the <b>/src/models</b> directory. These models are sent to this submodule by the <b>API Design Team</b> who are working in the root project. So, you will only use these models, not will modify them. If you need model updates, you should send a request to the API Design Team.

You also don't need to modify the MockAPI Server under the <b>api</b> directory. If you need modification in the MockAPI Server, you still need to send a request to the API Design Team.

#### How to start the application (with the MockAPI server)
1. Open a git bash terminal on vscode.
2. Run <code>./start-onlyMockApi.sh</code> on the terminal
3. After the Docker image started, run <code>npm start</code>
4. You should be able to see the homepage of the WebSPA application.

#### How to stop the application (with the MockAPI server)
1. Press ctrl + c to stop the react app.
2. Run <code>./stop-onlyMockApi.sh</code>

#### Feature/Bug development workflow
1. Switch to the <b>dev</b> branch.
2. Run <code>git branch -a <feature_name/bug_name></code> to create a new branch.
3. Switch to this branch.
4. Work on this branch until feature/bugfix finished.
5. Create a pull request to the <b>qa</b> branch. Don't forget, the <b>qa</b> branch will automatically run the unit tests when a PR created, and will reject if it fails.
6. GO TO step 1:)

The PR reviews will be made by this team also. When a PR accepted, changes will go to the <b>qa</b> branch.

### WebSPA App QA TEAM

#### Prerequsities for the tester machine
1. Docker should be installed.
2. Nodejs should be installed.
3. Git Bash or any terminal that supports Docker and be able to run sh files should be present.

#### Notes

You are responsible for testing the project. For testing, follow workflows below.

#### First time workflow for the tester
1. Clone this repository to your local machine.
2. Open the git bash terminal and go to the project root directory.
3. Switch to the <b>qa</b> branch
4. Duplicate the .env file in the root directory, and rename it to .env.local
5. Uncomment the <b>qa</b> section in the .env.local

Now, you are ready for testing.

#### How to start the application
1. Open the git bash terminal and go to the project root directory.
2. Run <code>./start.sh</code> on the terminal.
3. You should be able to see the homepage of the WebSPA application. The "host" and the "port" values are the REACT_APP_HOST and the REACT_APP_PORT values that are in your .env.local file. For example, address will be: <b>localhost:9000</b>

#### How to stop the application
1. Run <code>./stop.sh</code>

At this point, when a new PR merged to the qa branch, you will be notified to run your tests. I don't know what kind of test tools you should run, and I'm not planning to focus on this topic for a while. You know what to do, right? When you finished your tests, follow these steps.

1. if the tests failed, reset the qa branch to the previous version. Send the test results to the Dev Team.
2. if the tests succeeded, create a pull request to the dev branch. This PR will be automatically merged to the dev branch.

### WebSPA App Dev Team Lead

When a PR sent to the master branch from the dev branch:

1. Create a pull reqest to the master branch if the milestone features completed.
2. Merge the pull request on the master branch.
>>>>>>> dev
