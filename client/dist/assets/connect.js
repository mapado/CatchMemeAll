var socket = io.connect('http://vader.mapado.com');

function updatePlayer(player) {
    var playerDiv = $('#players .cloud:nth-child(' + player.position + ')');
    playerDiv.find('.username').text(player.name);
    playerDiv.find('.avatar').attr('src', player.avatar);
}

socket.on('welcome', function (data) {
    console.log(data);
});
socket.on('player list', function (playerList) {
    for (i in playerList) {
        updatePlayer(playerList[i]);
    }
});
socket.on('new player', function (player) {
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


socket.on('game stop', function () {
    console.log("GAME STOP");
});

$(function() {
    $('#username-content').hide();

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
        console.log($('#isTwitter').val() == '1');
        socket.emit(
            'logged in',
            {
                'name': $('#username').val(),
                'isTwitter': $('#isTwitter').val() == '1'
            }
        )

        return false;
    });
});
