# Open Access On Containers - Apps - WebSPA
This is the submodule of openAccessOnContainers repository located at https://github.com/huseyindeniz/openAccessOnContainers

## WebSPA App - Specs
- React with Hooks
- Typescript
- Material-UI
- Dockerized

## Workflow
1. Switch to dev branch.
2. <code>git pull origin master</code> to get latest direct changes on master branch
3. <code>git branch -a <feature_name></code> to create new feature branch.
4. Switch to feature branch.
5. Work on this branch until feature finished.
6. Create pull request to qa branch
7. Review and merge pull request on qa branch.
8. Ru unit tests
5. Run integration tests if unit tests passed.
6. Create pull request to dev if integration tests not failed.
7. Merge pull request on dev branch.
8. Create pull reqest to master branch if the milestone features completed.
9. Merge pull request on master branch.