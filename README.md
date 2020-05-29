# Open Access On Containers - Apps - WebSPA

This project is the submodule of the root project called openAccessOnContainers.

The root project is located at https://github.com/huseyindeniz/openAccessOnContainers

## WebSPA App - Specs
- React
- Typescript
- Material-UI
- Dockerized

## TODOs
- Create a basic create-react-app -> DONE
- Create a branching strategy -> DONE
- Create an environment management infra -> DONE 
- Create the CI/CD actions -> defined but not added yet
- Create teams and their workflows -> DONE
- Decide and configure the unit testing structure for the app. The code coverage of the unit tests should be at least 80%. -> 
- Find integration test tools.

## Note
I'm trying to establish a whole workflow for a microservices project. That's why I prepared the following workflows. But, I'm the only developer who is working on this project currently :)

---

## CI/CD

### Branches
1. <b>master</b>: Main branch for the releases.
    - Never changes directly. 
    - Accepts merges with the dev.
2. <b>dev</b>: Branch the most closest to master.
    - Never changes directly. 
    - Accepts merge with the qa. 
    - Sends PRs to the master.
3. <b>qa</b>: Quality assurance branch for testing.
    - Never changes directly. 
    - Accepts merge with feature or bug branches. 
    - Sends PRs to the dev.
4. <b>feature*</b> : Main development branches. 
    - Cuts from the dev.
    - Accepts merge with the dev.
    - Sends PRs to the qa.
5. <b>bug*</b>: Bug fix branches. 
    - Cuts from the dev. 
    - Accepts merge with the dev.
    - Sends PRs to the qa.
6. <b>hotfix</b>: Hot bug fix branches. 
    - Cuts from the master. 
    - Sends PRs to the master.

### Actions
1. <b>qa-pr</b>:
    - Triggers on PRs to the qa from feature or bug branches.
    - Runs the unit tests. 
    - If the unit tests fail, rejects the PR. Sends a notification to the Dev Team.
    - If the unit tests succeed, goes on next steps.
    - Runs the integration tests. 
    - If the integration tests fail, rejects the PR. Sends a notification to the Dev and the QA Team.
    - If the integration tests succeed, merges the requester branch with the qa. Sends notification to the QA Team.
    - At this point, the QA Team need to test the application by theirselves.
    - If their tests fail, the QA Team Lead reverts back the branch to the previous state. And sends a report to the Dev Team.
    - If their tests succeed, the QA Team Lead create a PR to the dev branch.
2. <b>dev-pr</b>:
    - Triggers on PRs to the dev from the qa.
    - Runs the unit tests. 
    - If the unit tests fail, rejects the PR. Sends a notification to the QA and the Dev Team.
    - If the unit tests succeed, goes on next steps.
    - Runs the integration tests. 
    - If the integration tests fail, rejects the PR. Sends a notification to the Dev and the QA Team.
    - If the integration tests succeed, merges with the qa. Sends a notification to the Dev Team Lead.
    - At this point, the Dev Team Lead decides to send a PR to the master if the milestone features completed.
3. <b>master-pr</b>:
    - Triggers on PRs to the master from the dev.
    - Runs unit tests. If fails, rejects PR. If successful, goes to next step.
    - Runs integration tests. If fails, rejects PR. If successful, merges with dev.
4. <b>master-push</b>:
    - Triggers on pushs in master.
    - Builds deployment packages.
    - Deploys packages.

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

The PR reviews are made by this team. When a PR accepted, changes will go to the <b>qa</b> branch.

#### WebSPA App Dev Team Lead

When the dev merges with the qa:

1. Creates a pull reqest to the master branch if the milestone features completed.
2. Merges the pull request on the master branch.

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

#### WebSPA App QA Team Lead

1. If the latest merge on the qa from feature/bug branches tests fail, reverts back the branch to the previous state. And sends a report to the Dev Team. 
2. If the latest merge on the qa from feature/bug branches tests succeed, creates a pull reqest to the dev branch.