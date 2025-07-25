---
layout: ../../layout/ProjectLayout.astro
title: "Countdown game server"
description: "Server for the Countdown game based on the British show with the same name."
image: "/images/countdown.jpg"
technologies: ["Spring", "Java"]
status: "Maintained"
year: "2024"
role: "Backend Developer"
githubUrl: "https://github.com/ljubinkovicdj93/countdown-server"
# liveUrl: "https://github.com/ljubinkovicdj93/countdown-server"
isOpenSource: true
---

![Countdown game server](/images/countdown.jpg)

## Overview

A multiplayer game server for the Countdown word and numbers game, based on the popular British television show. The server manages real-time gameplay between two players, handling both the letters round (word formation) and numbers round (arithmetic calculations).

## Key Features

### 🎮 Game Mechanics
- **Letters Round**: Players form the longest possible word from 9 random letters
- **Numbers Round**: Players use 6 numbers and basic arithmetic to reach a target
- **Real-time Gameplay**: Live synchronization between connected players
- **Scoring System**: Automated scoring based on official Countdown rules

### 🔗 Multiplayer Support
- **Room Management**: Create and join game rooms
- **Player Matching**: Automatic or custom player pairing
- **Turn-based Logic**: Enforced game flow and timing
- **Spectator Mode**: Watch ongoing games

### ⚡ Real-time Communication
- **WebSocket Integration**: Live updates during gameplay
- **Game State Synchronization**: Consistent state across all clients
- **Chat System**: In-game communication between players
- **Reconnection Handling**: Resume games after disconnection

## Technical Implementation

### Backend Architecture
Built with Spring Boot and Java:
- **Spring WebSocket**: Real-time bidirectional communication
- **Game State Management**: Thread-safe game logic handling
- **Room Service**: Player matchmaking and room lifecycle
- **Dictionary API**: Word validation for letters rounds

### Game Logic
Core Countdown mechanics:
- **Letter Generator**: Random vowel/consonant selection
- **Number Generator**: Target numbers and calculation sets
- **Word Validator**: Dictionary lookup and scoring
- **Math Solver**: Verify arithmetic solutions

### Data Management
Efficient game data handling:
- **In-Memory Storage**: Fast access to active game states
- **Session Management**: Player connection tracking
- **Game History**: Optional persistent storage for completed games

## Game Flow

### Starting a Game
1. **Room Creation**: Player creates or joins a game room
2. **Player Matching**: Wait for second player or invite friend
3. **Game Initialization**: Server generates letters/numbers for rounds

### Letters Round
1. **Letter Selection**: 9 letters (mix of vowels/consonants)
2. **30-Second Timer**: Players form words simultaneously
3. **Word Submission**: Players submit their best word
4. **Validation & Scoring**: Dictionary check and point calculation

### Numbers Round
1. **Number Generation**: 6 numbers + target (100-999)
2. **30-Second Timer**: Players calculate using basic arithmetic
3. **Solution Submission**: Submit calculation steps
4. **Verification**: Server validates mathematical accuracy

## API Endpoints

### Game Management
- **POST** `/games/create` - Create new game room
- **POST** `/games/{roomId}/join` - Join existing room
- **GET** `/games/{roomId}/status` - Get current game state

### Gameplay
- **POST** `/games/{roomId}/submit-word` - Submit word for letters round
- **POST** `/games/{roomId}/submit-calculation` - Submit numbers solution
- **GET** `/games/{roomId}/results` - Get round results

### WebSocket Events
- `game.started` - Game initialization
- `round.letters` - New letters round
- `round.numbers` - New numbers round
- `player.submitted` - Player submission
- `round.results` - Round scoring results

## Getting Started

```bash
# Clone the repository
git clone https://github.com/ljubinkovicdj93/countdown-server.git
cd countdown-server

# Build and run
./mvnw spring-boot:run

# The server will start on http://localhost:8080
```

## Configuration

```bash
# WebSocket configuration
websocket.allowed-origins=*
websocket.endpoint=/countdown

# Game settings
game.letters-time-limit=30000
game.numbers-time-limit=30000
game.dictionary-api=https://api.dictionaryapi.dev
```

## Future Enhancements

- **Tournament Mode**: Multi-round competitions
- **Player Rankings**: ELO-based rating system
- **Custom Dictionaries**: Language-specific word lists
- **Replay System**: Watch completed games
- **Mobile Client**: Companion mobile app

---

*This project demonstrates real-time game development, WebSocket communication, and implementing complex game logic with Java and Spring Boot.*
