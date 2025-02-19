# Magic Maze (Last Update: 30-4-2021)

## Introduction

**Magic Maze v1.0**

Developers: Kenny CHAN, Knife NG, Benny CHENG, Jason CHU, Sun CHOI  
You may view our game website on: https://luyou00001.github.io/CSCI-3100-Project-E3/  

Magic Maze is a real-time fast-paced competitive maze game running on a map in rectangular board form. Players can compete with each other by teleporting to the destination in the fastest way on the map. The map contains multiple routes for users to explore and find the fastest way to the end requires memories and fortune.

We have "Matching" and "Custom Room" function for multi-player game mode. You can play with other players after logging in. We also provide a "Demo" function for standalone game mode. You can take it as a tutorial and get familiar with the game flow.

## Classes

### Game
This class is to control the game flow, the movement of player and display the game information.
* Class state: Saving win statement, board dimensions, player position, entrances' positions, total number of movement.
* initializeBoardPlayer(): Initialize the board dimension and player position. For the board dimension, the default setting is 5x5x5x5, which means we have 5x5 area board, and each area contains 5x5 cells. The player position will be set to the centre of the area (0, 0).
* setEntrances(): Randomly set the destination of area of each entrances for each game. Each area contains exactly 4 entrances, connected to the front-nearby 4 areas respectively (for those areas along the board boundary, some entrances will direct to itself)
* countTotalMoves(): Count the total number of movements of player.
* handleKeyUp(e), handleKeyDown(e), handleKeyLeft(e), handleKeyRight(e): Send the movement instruction (call the makeMove function) and check whether the move is valid according to the key pressed by the player. If the player runs out of the current area boundary, the move will be invalid and won't be processed.
* makeMove(newX, newY): Change the current position of player to (newX, newY). If (newX, newY) contains an entrance, player will be directed to the centre of the connected area of that entrance
* render(): Display the game information (current included the player position and the connected area of each entrances. The later is for debug usage.) and detect the key pressed by the player.

### GameBoard
This class is to save the map information and display the map.
* Class state: Saving the board state in an 4d array, each cell contain either '╬' (entrance), ' ' (empty) or '♂' (player).
* setPlayerPosition(playerPosition), setBoard(props): Change the current position of player to playerPosition (an object includes x and y coordinates) and clear the previous position (set the state to ' '(empty)).
* render(): Display the map according to the board state. Currently, the display will be in rectangular table form.

### Game Room
* Brief outline of display of a player list inside a game room with ready option (before the custom game start)
* Player can set ready and cancel ready by addready() and minusready()
* Player can leave the romm by clicking the leave button using handleLeaveRoom()
* Update member information and their ready states according to the backend

### Chat Room
* Allow multiple users to input message and the message of all users can be displayed to all users (only one chat room)
* Player can send the message by handleSubmit()
* Update the chat log according to the backedn

### Room List (Custom Room)
* Display the existing room in the database and allow user to create new room
* Player can create room by input the room name and submit by handleSubmit()
* Player can join room by clicking the join button to corresponding room

### Login System
* The game requires users to login before they start playing.
* Users may login as guest, register a new account by email and password, login with their account and logout.
* Confirmation is required to create a new account.

### Profile
* The player can see its name and score

### Leader Board
* The player can see the leader board of the score

### User interface
* Our webpage uses the Bootstrap library to design the user interface.
* From v1.0, GUI is added.

## Test Cases

### Game Testcase
1. When a player move to a portal, he/she will teleport according to its entrance coordinates (passed)
2. When a player move to next level, the ranking will change (passed)
3. The earlier one attain the higher level will have higher ranking (passed)
4. Count down time set to 5 when one of the player attain the terminal (passed)
5. Update other players position (passed)
6. Update score according to players' final ranking and finish status (passed)

### Matching Testcase
1. Players can only enter the room when four players are matching (passed)
2. Less than four players will wait (passed)

### ChatRoom Testcase:
1. Enter the romm will load history chat (passed)
2. Send chat and everyone in room can see (passed)

### GameRoom Testcase:
1. Ready state change (passed)
2. 4 readys with one start (passed)
3. The game cannot start if there is only 1 player (passed)

### Roomlist Testcase:
1. New Room update (passed)
2. New Room delete (passed)

## Changelog

### v1.0 (30-4-2021)
* Significant improvement of UI
* Improve and stabilize the server and many functions
* Fix lots of bugs

### v0.2 (19-3-2021)
* Finished basic UI
* Finished basic login system: users can login as guest or login with their email after registration (testing version)
* Finished demo version of game (standalone version with table as game board only)
* Finished basic game room setting
* Developing chat room and further network functions

### v0.1 (17-3-2021)
* First attempt
