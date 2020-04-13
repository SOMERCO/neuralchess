from flask import Flask , Response, request
app = Flask(__name__)
import chess
board = chess.Board()

@app.route('/')
def board_rendering():
    ret = open("index.html").read()
    return ret

@app.route("/move")
def move():
    move = request.args.get("move",default="")
    print(move)
    try:
        board.push_uci(move)
        return "valido"
    except ValueError:
        print("no")
        return "non valido"
