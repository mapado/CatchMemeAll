Catch Meme All
===========
Save the internet by rescuing all the endangered meme characters!

## Server
### Installation
```bash
$ git clone https://github.com:fhactory/CatchMemeAll.git
$ npm install -g coffee-script
$ npm install -g node-dev
$ cd SaveTheInternet/server/
$ make # Will install the dependencies
```

### Run the server
#### Production
``` bash
$ node server.js
```

Also, you need to run a Python flask server talking to the twitter API.
```bash
$ mkvirtualenv catchthemall
$ pip install -r requirements.txt
$ python twitter_server.py
```

#### Dev mode
```bash
$ cd server/
$ coffee -c *.coffee
$ node-dev server/server.coffee
```

## Clients
Open a recent Browser (suporting Websockets) on host: [http://vader.mapado.com:4242](http://vader.mapado.com:4242) and enjoy !

