var socket = io.connect('http://vader.mapado.com');

function updatePlayer(player) {
    if (typeof player === "number") {
        var position = player;
        var name = '&nbsp;';
        var avatar = '';
    } else {
        var position = player.position;
        var name = player.name;
        var avatar = player.avatar;
    }

    var playerDiv = $('#players .cloud:nth-child(' + position + ')');
    playerDiv.find('.username').html(name);
    playerDiv.find('.avatar img')
        .addClass('present')
        .attr('src', avatar);
}

function updateTitle(playerCount) {
    if (playerCount > 1) {
        $('#nb-places-restantes').text(playerCount);
    } else if (playerCount == 1){
        $('#titlestart').html("<span id=\"nb-places-restantes\">1</span> place");
    } else if (playerCount == -1){
        $('#pagetitle').text("Desole, le jeu est complet !");
    } else {
        $('#pagetitle').text("C'est parti!");
    }
}

socket.on('welcome', function (data) {
    console.log(data);
});

socket.on('player list', function (playerList) {
    newPlayerCount = 5 - playerList.length;
    if (newPlayerCount == 0) {
        updateTitle(-1);
        $('#username-content').hide();
        $('#login-select').hide();
    } else {
        updateTitle(newPlayerCount);
    }

    var nbPlayer = 1;
    for (i in playerList) {
        updatePlayer(playerList[i]);
        nbPlayer++;
    }

    while (nbPlayer < 5) {
        updatePlayer(nbPlayer);
        nbPlayer++;
    }
});

socket.on('new player', function (player) {
    oldPlayerCount = $('#nb-places-restantes').text();
    newPlayerCount = oldPlayerCount - 1;
    updateTitle(newPlayerCount);
    updatePlayer(player);
});

socket.on('character spawned', function (data) {
    console.log(data);
});

socket.on('player updated', function (player) {
    console.log('player updated', player);
    updatePlayer(player);
});

// Hide the username text input after having joined the game
socket.on('game full', function () {
    updateTitle(-1);
    $('#username-content').hide();
    $('#login-select').hide();
});

function setPodium(div, player) {
    div.find('.avatar').attr('src', player.avatar);
    div.find('.username').text(player.name);
}

socket.on('game stop', function (playerList) {
    setPodium($('#winners .winner'), playerList[0]);
    setPodium($('#winners .cloud:nth-child(1)'), playerList[1]);
    setPodium($('#winners .cloud:nth-child(3)'), playerList[2]);
    setPodium($('#losers .cloud:nth-child(1)'), playerList[3]);
    setPodium($('#losers .cloud:nth-child(2)'), playerList[4]);

    $('#connect').hide();
    $('#game').hide();
    $('#podium').show();
    $('#the-end').addClass('active');
    setTimeout(function () {
        $('#the-end').removeClass('active');
        setTimeout(function () {
            $('#the-end').hide();
            $('#winners-loosers').addClass('active');
        }, 1000);
    }, 3000);

    console.log("GAME STOP");
});

socket.on('game start', function (data) {
    var game = new window.Game(data);
});

$(function() {
    $('.twitter-connect, .connect').on('click', function () {
        $('#username-content').show();
        $('#login-select').hide();
        $('#username').select();

        return false;
    });

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

        return false;
    });
});
