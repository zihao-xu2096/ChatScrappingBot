from flask import Flask, request, jsonify
from psycopg2 import connect
# Global Variables
app = Flask(__name__)

# Variables
twitchlink = None  # Global variables to store links, might not need since we have postgresql
youtubelink = None


# Members API Route

@app.route("/", methods=['GET'])
def hello():
    return "Hello world"


@app.route("/members", methods=['GET'])
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

# Twitchlink API route


app.config['JSON_AS_ASCII'] = False
app.config['JSON_SORT_KEYS'] = False


@app.route("/twitchlink", methods=['POST', 'GET'])
def link():
    global twitchlink
    try:
        if request.method == 'POST':
            form_data = request.get_json(force=True)
            twitchlink = form_data
            print(twitchlink)
            return "Success"
        else:
            return "GET Method called."
    except KeyError as e:
        return "KeyError"


if __name__ == "__main__":
    app.run(debug=True)
