Cath Meme All API Documentation
==============

## Server events
### Game preparation
```
'welcome', (Player player)
```
is sent to a user when he logs in

```
'new player', (Player player)
```
is triggered when a new user is logged on the game

```
'game full'
```
is triggered when you try to log in and the server is full

### Game events
```
'game start'
```
is triggered when the game starts

```
'game stop'
```
is triggered when the game is finished

```
'score updated', (Player player)
```
is triggered when the score of a user changes

```
'character spawned', (Character character)
```
is triggered when a new character appear on screen

```
'wall added', (Player player, int ax, int ay, int cx, int cy)
```
is triggered when a user adds a wall

```
'wall removed', (Player player, int ax, int ay, int cx, int cy)
```
is triggered when a user removes a wall

```player updated, (Player player)```
The player is updated (name or avatar)


## Client events
```
'connection'
```
is triggered when a user logs in (automatic)

```
logged in (string name, bool isTwitter)
```
the user logs into the server


'update score', (int newScore)
```
is triggered by the player with his new total score

```
'add wall', (int ax, int ay, int cx, int cy)
```
is triggered by the player when he adds a wall

```
'remove wall', (int ax, int ay, int cx, int cy)
```
is triggered by the player when he removes a wall


## Object definition
### Player
* id
* name
* avatar


### Character
* name
* score
* startX

