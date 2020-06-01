# Open Access On Containers - Apps - WebSPA

This project is the submodule of the root project called openAccessOnContainers.

The root project is located at https://github.com/huseyindeniz/openAccessOnContainers

## WebSPA App - Specs
- React
- Typescript
- Material-UI
- Dockerized

## How to Run the Application

### Prerequsities
1. Docker should be installed.
2. Nodejs should be installed.
3. Git Bash or any terminal that supports Docker and be able to run sh files should be present.
4. Recommended ide is vscode.

### Steps
1. Clone the master branch to wherever you want.
2. Switch to the location where you cloned the master branch on your terminal.
3. Duplicate the .env file in the root directory, and rename it to .env.local
4. Uncomment single '#' included lines in .env.local (if you are using vscode, simply select all lines and toggle line comment)
5. Open a second terminal. Go to the /api/apigateways.web directory under root directory.
6. run <code>./start.sh</code> in terminal
7. Go back to the previous terminal, run this <code>./start.sh</code> in root directory.
8. To stop the applications, run this command: <code>./stop.sh</code> on each terminal.

Note: Why there are two start.sh files exist? One of them in the root directory is main WebSPA app of the openAccessOnContainers. Second one under the /api/gateways.web is the mock api server for providing sample data to the WebSPA app. In the root project there is a real api server, but in this project you don't need it.

---

More info can be found at [Project Wiki Pages](https://github.com/huseyindeniz/oar.apps.webspa/wiki)