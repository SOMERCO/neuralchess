from flask import Flask , Response, request
app = Flask(__name__)
import chess
board = chess.Board()

@app.route("/FEN")
def get_FEN():
    return board.fen()
    

@app.route("/move",methods=['POST'])
def move():
    move = request.get_json("move")
    try:
        print(move["move"])
        board.push_uci(move["move"])
        return board.fen()
    except ValueError:
        print("No")
        return board.fen() #sistemare
