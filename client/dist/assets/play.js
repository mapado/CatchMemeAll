var socket = io.connect('http://www.catchmemeall.com');

// update a player view
function updatePlayer(player) {
    var position, name, avatar;
    if (typeof player === "number") {
        // if a player is only a number: clean the view
        position = player;
        name = '&nbsp;';
        // one pixel image
        avatar = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    } else {
        position = player.position;
        name = player.name;
        avatar = player.avatar;
    }

    var playerDiv = $('#players .cloud:nth-child(' + position + ')');
    playerDiv.find('.username').html(name);
    playerDiv.find('.avatar img')
        .addClass('present')
        .attr('src', avatar);
}

// update the title plural
function updateTitle(playerCount) {
    if (playerCount > 1) {
        $('#titlestart').html("<span id=\"nb-places-restantes\">" + playerCount + "</span> places");
    } else if (playerCount == 1){
        $('#titlestart').html("<span id=\"nb-places-restantes\">1</span> place");
    } else if (playerCount == -1){
        $('#pagetitle').text("Desole, le jeu est complet !");
    } else {
        $('#pagetitle').text("C'est parti!");
    }
}

// gets an update on the player list
socket.on('player list', function (playerList) {
    newPlayerCount = 5 - playerList.length;
    if (newPlayerCount == 0) {
        updateTitle(-1);
        $('#username-content').hide();
        $('#login-select').hide();
    } else {
        updateTitle(newPlayerCount);
    }

    // update all present players
    var nbPlayer = 1;
    for (i in playerList) {
        updatePlayer(playerList[i]);
        nbPlayer++;
    }

    // remove empty spaces when a users leaves
    while (nbPlayer < 5) {
        updatePlayer(nbPlayer);
        nbPlayer++;
    }
});

// a new player is comming
socket.on('new player', function (player) {
    oldPlayerCount = $('#nb-places-restantes').text();
    newPlayerCount = oldPlayerCount - 1;
    updateTitle(newPlayerCount);
    updatePlayer(player);
});

// a player gets an update
socket.on('player updated', function (player) {
    updatePlayer(player);
});

// trigger sounds on score update and bubble add events
socket.on('score updated', function (player) {
    $('#sound-point').trigger('play');
});
socket.on('bubble added', function (player) {
    $('#sound-nsa').trigger('play');
});

// Hide the username text input after having joined the game
socket.on('game full', function () {
    updateTitle(-1);
    $('#username-content').hide();
    $('#login-select').hide();
});

// set a user on the podim
function setPodium(div, player) {
    div.find('.avatar').attr('src', player.avatar);
    div.find('.username').text(player.name);
}

// game stop
socket.on('game stop', function (playerList) {
    // generate the podium
    setPodium($('#winners .winner'), playerList[0]);
    setPodium($('#winners .cloud:nth-child(1)'), playerList[1]);
    setPodium($('#winners .cloud:nth-child(3)'), playerList[2]);
    setPodium($('#losers .cloud:nth-child(1)'), playerList[3]);
    setPodium($('#losers .cloud:nth-child(2)'), playerList[4]);

    // changes the view, show the podium, clean sounds
    $('#connect').hide();
    $('#game').hide();
    $('#podium').show();
    $('#sound-point').remove();
    $('#sound-nsa').remove();
    $('.the-end').addClass('active');
    setTimeout(function () {
        $('.the-end').removeClass('active');
        setTimeout(function () {
            $('.the-end').hide();
            $('#winners-loosers').addClass('active');
        }, 1000);
    }, 3000);
});

// the game will be launched in 5 seconds
socket.on('game countdown', function (data) {
    var i = 5;
    var countdown = setInterval(function () {
        var text = i;
        // the "0" special view
        if (i == 0) {
            text = 'Catch all the memes!';
            $('#pagetitle').removeClass('the-end active');
            img = $('<img />').attr({
                'id': "allthethings",
                'src': "assets/images/allthethings.png"
            });
            $('#pagetitle').after(img);
        } else if (i < 0) {
            // the game is starting
            $('#allthething').remove();
            clearInterval(countdown);
            return;
        } else {
            // classic number
            $('#pagetitle').addClass('the-end active');
        }

        // changes the title
        $('#pagetitle').text(text);
        i = i - 1;
    }, 1000);
});

// the game really starts
socket.on('game start', function (data) {
    // display the timer
    $('#timer').show();

    // awful tweak pixel-perfect players position thing
    $('#players').addClass('playing');

    // manage the countdown
    var timer = 30;
    setInterval(function () {
        timer = timer - 1;
        $('#timer').text(timer);
    }, 1000);

    // let's start the game
    var game = new window.Game(data);
});

$(function() {
    // login username function
    $('#username-content').on('submit', function () {
        // lets connect to the user
        username = $('#username').val()
        isTwitter = username[0] == '@'

        // remove @ from twitter username
        if (isTwitter) {
            username = username.slice(1)
        }
        socket.emit(
            'logged in',
            {
                'name': username,
                'isTwitter': isTwitter,
            }
        )

        $('#username-content').hide();
        $('#music').trigger('play');

        return false;
    });
});
