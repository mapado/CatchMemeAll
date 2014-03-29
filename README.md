Save The Internet
===========
Save the internet by rescuing all the endangered meme characters!

## Server
### Installation
```bash
$ git clone https://github.com:fhactory/SaveTheInternet.git
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

#### Dev mode
```bash
$ cd server/
$ coffee -c *.coffee
$ node-dev server/server.coffee
```

## Clients
Open a recent Browser (suporting Websockets) on host: [http://vader.mapado.com:4242](http://vader.mapado.com:4242) and enjoy !

