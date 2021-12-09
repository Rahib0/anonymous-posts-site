# anonymous-posts-site
By Rahib Rahman & Souheil Fenghour
### Description
Create posts anonymously, similar to [Telegraph](https://telegra.ph/) that are saved to a local database and can be viewed on its own seperate path
## Installation & Usage
### Installation
- Clone the Repo
### Usage
- Open terminal into the main folder
- run command `bash _scripts/start.sh`
- Navigate to client folder and run index.html in live server or just in the folder, or connect to `localhost:8080`
- Once finished with the server, press ctrl + C in terminal and run command `bash _scripts/teardown` in the root directory to stop all services and remove all posts from the db
- If you want the posts to persist, use command `bath _scripts/stop.sh` in the root directory
