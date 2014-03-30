var socket = io.connect('http://vader.mapado.com');

function updatePlayer(player) {
    var playerDiv = $('#players .cloud:nth-child(' + player.position + ')');
    playerDiv.find('.username').text(player.name);
    playerDiv.find('.avatar img')
        .addClass('present')
        .attr('src', player.avatar);
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

    for (i in playerList) {
        updatePlayer(playerList[i]);
    }
});

socket.on('new player', function (player) {
    oldPlayerCount = $('#nb-places-restantes').text();
    newPlayerCount = oldPlayerCount - 1;
    updateTitle(newPlayerCount);
    console.log('new player', player);
    updatePlayer(player);
});

socket.on('character spawned', function (data) {
    console.log(data);
});

socket.on('player updated', function (player) {
    console.log('player updated', player);
    updatePlayer(player);
});

socket.on('game full', function () {
    updateTitle(-1);
    $('#username-content').hide();
    $('#login-select').hide();
});

socket.on('game stop', function () {
    console.log("GAME STOP");
});

$(function() {
    $('.twitter-connect, .connect').on('click', function () {
        if ($(this).hasClass('twitter-connect')) {
            $('#isTwitter').val('1');
        } else {
            $('#isTwitter').val('0');
        }
        $('#username-content').show();
        $('#login-select').hide();

        return false;
    });

    $('#username-content').on('submit', function () {
        // lets connect to the user
        socket.emit(
            'logged in',
            {
                'name': $('#username').val(),
                'isTwitter': $('#isTwitter').val() == '1'
            }
        )

        $('#username-content').hide();

        return false;
    });
});
