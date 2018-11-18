Trevor Colby
11-09-2018

This is a project to artistically render a map of the Qinghai province in China in a 3d navigable environment.

Usage: 
-----------------
- If testing locally:
 - You will need to generate a self signed certificate by running the following
  - openssl req -nodes -new -x509 -keyout server.key -out server.cert
  - Enter the appropriate information: This info is incorporated into the authenticiation certificate that allows us to run this server over https
  - This is neccesary to get around cors protocols for transfering JSON data
 - Run 'node --version'
  - You should be using v8.11.3 or newer 
 - Run 'npm install'
  - This will install the neccesary node dependencies
 - Run 'node server' in the console
 - Open a browser and type in 'localhost:' followed by the port number
  - i.e 'localhost:8000'
  - By default this is port 8000 (Can be customized in the server.js file if that port is already in use)
- A warning will most likely pop-up: click `advanced`
  - Click proceed to localhost
  - NOTE: We are just doing this to access our node server in a controlled local environment


NOTE: 
- Pictures for cube map texturing from Hazel Whorley. 
