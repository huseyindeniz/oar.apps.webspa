# openAccessOnContainers - Apps - WebSPA
This is the submodule of openAccessOnContainers repository located at https://github.com/huseyindeniz/openAccessOnContainers

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
- Dockerized
- Material-UI
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
  
