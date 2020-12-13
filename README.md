# 4905-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

To run the website in Linux background, it is highly recommended to install pm2 plugin with npm. Pm2 is a background process management plugin that can help run web applications in the background silently
npm install pm2 -g
then start the web with
pm2 start "npm run dev" --name 4905-backend
pm2 start "node ./src/server.js" --name 4905-frontend
Then the web will run at background
To check the process
pm2 ls
To stop the process 
pm2 delete 4905-backend
pm2 delete 4905-frontend
