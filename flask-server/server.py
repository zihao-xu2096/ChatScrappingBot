from flask import Flask, request

app = Flask(__name__)

# Members API Route


@app.route("/members", methods=['GET'])
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

# Twitchlink API route


app.config['JSON_AS_ASCII'] = False
app.config['JSON_SORT_KEYS'] = False


@app.route("/twitchlink", methods=['POST', 'GET'])
def link():
    if request.method == 'POST':
        form_data = request.get_json(force=True)
        return "Success"
    else:
        return "Called for the GET request"


if __name__ == "__main__":
    app.run(debug=True)
