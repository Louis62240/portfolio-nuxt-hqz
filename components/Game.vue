<!-- components/SnakeGame.vue -->
<template>
    <div class="snake-container">
        <div class="snake-game">
            <div class="game-header">
                <div class="score-card">
                    <div class="score">
                        <span class="score-label">Score</span>
                        <span class="score-value">{{ score }}</span>
                    </div>
                    <div class="high-score">
                        <span class="score-label">Meilleur score</span>
                        <span class="score-value">{{ highScore }}</span>
                    </div>
                </div>
            </div>

            <div class="game-board" ref="gameBoard">
                <div v-for="(row, y) in board" :key="y" class="row">
                    <div v-for="(cell, x) in row" :key="`${x}-${y}`" class="cell" :class="{
                        'snake': cell === 'snake',
                        'snake-head': isHead(x, y),
                        'food': cell === 'food'
                    }"></div>
                </div>
            </div>

            <div class="controls">
                <button @click="startGame" :disabled="isPlaying" class="control-btn start-btn">
                    Start
                </button>
                <button @click="pauseGame" :disabled="!isPlaying" class="control-btn pause-btn">
                    Pause
                </button>
            </div>

            <div class="mobile-controls">
                <button @click="handleMobileControl('up')" class="direction-btn up">↑</button>
                <div class="mobile-controls-middle">
                    <button @click="handleMobileControl('left')" class="direction-btn left">←</button>
                    <button @click="handleMobileControl('right')" class="direction-btn right">→</button>
                </div>
                <button @click="handleMobileControl('down')" class="direction-btn down">↓</button>
            </div>
        </div>

        <transition name="fade">
            <div v-if="gameOver" class="game-over">
                <div class="game-over-content">
                    <h2>Game Over!</h2>
                    <div class="final-score">Score final: {{ score }}</div>
                    <button @click="resetGame" class="restart-btn">
                        <span class="btn-icon">↺</span>
                        Rejouer
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>
export default {
    data() {
        return {
            board: [],
            snake: [],
            food: { x: 0, y: 0 },
            direction: 'right',
            nextDirection: 'right',
            isPlaying: false,
            gameOver: false,
            score: 0,
            highScore: 0,
            gameInterval: null,
            boardSize: 20,
            gameSpeed: 150
        }
    },
    mounted() {
        this.initializeGame()
        window.addEventListener('keydown', this.handleKeyPress)
        // Charger le meilleur score depuis le localStorage
        const savedHighScore = localStorage.getItem('snakeHighScore')
        if (savedHighScore) {
            this.highScore = parseInt(savedHighScore)
        }
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeyPress)
        if (this.gameInterval) {
            clearInterval(this.gameInterval)
        }
    },
    methods: {
        initializeGame() {
            // Initialiser le plateau
            this.board = Array(this.boardSize).fill().map(() =>
                Array(this.boardSize).fill('empty')
            )

            // Initialiser le serpent
            this.snake = [
                { x: 5, y: 5 },
                { x: 4, y: 5 },
                { x: 3, y: 5 }
            ]

            // Réinitialiser les variables de jeu
            this.direction = 'right'
            this.nextDirection = 'right'
            this.score = 0
            this.gameOver = false
            this.isPlaying = false

            // Placer la nourriture
            this.placeFood()
            this.updateBoard()
        },
        isHead(x, y) {
            return this.snake.length > 0 &&
                this.snake[0].x === x &&
                this.snake[0].y === y
        },

        handleMobileControl(direction) {
            if (this.isPlaying) {
                const opposites = {
                    up: 'down',
                    down: 'up',
                    left: 'right',
                    right: 'left'
                }
                if (opposites[direction] !== this.direction) {
                    this.nextDirection = direction
                }
            }
        },
            startGame() {
                if (!this.isPlaying) {
                    this.isPlaying = true
                    this.gameInterval = setInterval(this.gameLoop, this.gameSpeed)
                }
            },

            pauseGame() {
                this.isPlaying = false
                clearInterval(this.gameInterval)
            },

            resetGame() {
                if (this.gameInterval) {
                    clearInterval(this.gameInterval)
                }
                this.initializeGame()
            },

            handleKeyPress(event) {
                const directions = {
                    ArrowUp: 'up',
                    ArrowDown: 'down',
                    ArrowLeft: 'left',
                    ArrowRight: 'right',
                    z: 'up',
                    s: 'down',
                    q: 'left',
                    d: 'right'
                }

                const newDirection = directions[event.key]
                if (newDirection) {
                    const opposites = {
                        up: 'down',
                        down: 'up',
                        left: 'right',
                        right: 'left'
                    }

                    // Empêcher le serpent de faire demi-tour sur lui-même
                    if (opposites[newDirection] !== this.direction) {
                        this.nextDirection = newDirection
                    }
                }
            },

            gameLoop() {
                const head = { ...this.snake[0] }
                this.direction = this.nextDirection

                // Calculer la nouvelle position de la tête
                switch (this.direction) {
                    case 'up':
                        head.y--
                        break
                    case 'down':
                        head.y++
                        break
                    case 'left':
                        head.x--
                        break
                    case 'right':
                        head.x++
                        break
                }

                // Vérifier les collisions
                if (this.checkCollision(head)) {
                    this.endGame()
                    return
                }

                // Ajouter la nouvelle tête
                this.snake.unshift(head)

                // Vérifier si le serpent mange la nourriture
                if (head.x === this.food.x && head.y === this.food.y) {
                    this.score += 10
                    this.placeFood()
                } else {
                    // Si pas de nourriture mangée, retirer la queue
                    this.snake.pop()
                }

                this.updateBoard()
            },

            checkCollision(head) {
                // Collision avec les murs
                if (head.x < 0 || head.x >= this.boardSize ||
                    head.y < 0 || head.y >= this.boardSize) {
                    return true
                }

                // Collision avec le serpent lui-même
                return this.snake.some(segment =>
                    segment.x === head.x && segment.y === head.y
                )
            },

            placeFood() {
                do {
                    this.food = {
                        x: Math.floor(Math.random() * this.boardSize),
                        y: Math.floor(Math.random() * this.boardSize)
                    }
                } while (this.snake.some(segment =>
                    segment.x === this.food.x && segment.y === this.food.y
                ))
            },

            updateBoard() {
                // Réinitialiser le plateau
                this.board = Array(this.boardSize).fill().map(() =>
                    Array(this.boardSize).fill('empty')
                )

                // Placer le serpent
                this.snake.forEach(segment => {
                    this.board[segment.y][segment.x] = 'snake'
                })

                // Placer la nourriture
                this.board[this.food.y][this.food.x] = 'food'
            },

            endGame() {
                this.isPlaying = false
                this.gameOver = true
                clearInterval(this.gameInterval)

                // Mettre à jour le meilleur score
                if (this.score > this.highScore) {
                    this.highScore = this.score
                    localStorage.setItem('snakeHighScore', this.score.toString())
                }
            }
        }
    }
</script>

<style scoped>
.snake-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.snake-game {
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 77, 61, 0.1);
  max-width: 600px;
  width: 100%;
  background-color: #F5E6D3;
}

.game-header {
  margin-bottom: 25px;
}

.score-card {
  display: flex;
  justify-content: space-between;
  background-color: #F5E6D3;
  padding: 15px 25px;
  border-radius: 15px;
  margin-bottom: 20px;
}

.score, .high-score {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score-label {
  font-size: 0.9em;
  color: #004D3D;
  margin-bottom: 5px;
  font-weight: 500;
}

.score-value {
  font-size: 1.5em;
  color: #006A4E;
  font-weight: bold;
}

.game-board {
  border: 3px solid #006A4E;
  border-radius: 10px;
  overflow: hidden;
  background-color: #F5E6D3;
  aspect-ratio: 1;
  margin-bottom: 25px;
}

.row {
  display: flex;
  height: calc(100% / v-bind(boardSize));
}

.cell {
  width: calc(100% / v-bind(boardSize));
  height: 100%;
  transition: all 0.1s ease;
}

.cell.snake {
  background-color: #006A4E;
  border-radius: 4px;
  margin: 1px;
  box-shadow: 0 0 5px rgba(0, 106, 78, 0.3);
}

.cell.snake-head {
  background-color: #004D3D;
  border-radius: 6px;
}

.cell.food {
  background-color: #E2C6A9;
  border-radius: 50%;
  margin: 2px;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); }
  50% { transform: scale(1.05); }
  100% { transform: scale(0.95); }
}

.controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}

.control-btn {
  padding: 12px 25px;
  font-size: 1em;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.start-btn {
  background-color: #006A4E;
}

.start-btn:hover:not(:disabled) {
  background-color: #004D3D;
}

.pause-btn {
  background-color: #298B6E;
}

.pause-btn:hover:not(:disabled) {
  background-color: #006A4E;
}

.control-btn:disabled {
  background-color: #E2C6A9;
  cursor: not-allowed;
  opacity: 0.7;
}

.btn-icon {
  font-size: 1.2em;
}

.game-over {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.game-over-content {
  background-color: #F5E6D3;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.game-over h2 {
  color: #004D3D;
  font-size: 2em;
  margin-bottom: 20px;
}

.final-score {
  color: #006A4E;
  font-size: 1.5em;
  margin-bottom: 30px;
}

.restart-btn {
  background-color: #006A4E;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
}

.restart-btn:hover {
  background-color: #004D3D;
  transform: scale(1.05);
}

.mobile-controls {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.mobile-controls-middle {
  display: flex;
  gap: 40px;
}

.direction-btn {
  width: 60px;
  height: 60px;
  background-color: #298B6E;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.direction-btn:active {
  background-color: #004D3D;
  transform: scale(0.95);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .snake-game {
    padding: 15px;
  }

  .mobile-controls {
    display: flex;
    margin-top: 20px;
  }
  
  .score-card {
    padding: 10px 15px;
  }
  
  .control-btn {
    padding: 10px 20px;
    font-size: 0.9em;
  }
}
</style>