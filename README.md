Catch Meme All
===========
Save the internet by rescuing all the endangered meme characters!

This project was coded by Julien Deniau, Christelle Mozzati, Julien Balian, Dimitri Allegoet & Balthazar Rouberol during the Fhacktory 2nd edition.

![Screenshot](http://photos-f.ak.instagram.com/hphotos-ak-prn/10005659_337373949747861_1268425291_n.jpg)

## Server
### Installation
```bash
$ git clone https://github.com:mapado/CatchMemeAll.git
$ cd CatchMemeAll
$ npm install -g coffee-script
$ npm install
```

### Run the server
#### Production
``` bash
$ node server.js  # not working for now, need to convert the .coffee file to JS
```

You also need to run a Python flask server talking to the twitter API.
```bash
$ sudo pip install -r requirements.txt
$ python twitter_server.py
```

#### Dev mode
```bash
$ npm install -g node-dev
$ node-dev server.coffee
```

## Clients
Open a recent Browser (suporting Websockets) on host: [http://www.catchmemeall.com](http://www.catchmemeall.com) and enjoy !
