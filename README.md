# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


SERVER SETUP

GIT INSTALL  https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-20-04
============
sudo apt update
sudo apt install git
git --version

NGINX INSTALL https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04
=============
sudo apt update
sudo apt install nginx
--------
sudo ufw app list
    Output
    Available applications:
    Nginx Full
    Nginx HTTP
    Nginx HTTPS
    OpenSSH

sudo ufw allow 'Nginx HTTP'

sudo ufw status
-------------------
Output
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere                  
Nginx HTTP                 ALLOW       Anywhere                  
OpenSSH (v6)               ALLOW       Anywhere (v6)             
Nginx HTTP (v6)            ALLOW       Anywhere (v6)

IN CASE UFW still disable try below -- https://phoenixnap.com/kb/configure-firewall-with-ufw-on-ubuntu
-----------------------------------

sudo nano /etc/default/ufw
 ====  If the IPv6 value is set as no, change the value to yes to enable IPv6 use.

sudo ufw default deny incoming
Default incoming policy changed to 'deny'
(be sure to update your rules accordingly)

sudo ufw default allow outgoing
Default outgoing policy changed to 'allow'
(be sure to update your rules accordingly)

sudo ufw allow ssh
Rules updated
Rules updated (v6)

sudo ufw disable
Firewall stopped and disabled on system startup

sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup

sudo ufw status verbose
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
80/tcp (Nginx HTTP)        ALLOW IN    Anywhere                  
22/tcp (OpenSSH)           ALLOW IN    Anywhere                  
22/tcp                     ALLOW IN    Anywhere                  
80/tcp (Nginx HTTP (v6))   ALLOW IN    Anywhere (v6)             
22/tcp (OpenSSH (v6))      ALLOW IN    Anywhere (v6)             
22/tcp (v6)                ALLOW IN    Anywhere (v6)             



---------------
systemctl status nginx

NODE NVM INSTALL https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
=================

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

source ~/.bashrc

nvm list-remote

nvm install v16.14.0 || nvm install lts/gallium

 nvm use v16.14.0
 node -v

 ==========================

 Removing Node.js
You can uninstall Node.js using apt or nvm, depending on how it was installed. To remove the version from the system repositories, use apt remove:

sudo apt remove nodejs
By default, apt remove retains any local configuration files that were created since installation. If you don’t want to save the configuration files for later use, use apt purge:

sudo apt purge nodejs
To uninstall a version of Node.js that you installed using nvm, first determine whether it is the current active version:

nvm current
If the version you are targeting is not the current active version, you can run:

nvm uninstall node_version
Output
Uninstalled node node_version
This command will uninstall the selected version of Node.js.

If the version you would like to remove is the current active version, you first need to deactivate nvm to enable your changes:

nvm deactivate

======================================================
