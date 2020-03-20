#!flask/bin/python
from flask import Flask, jsonify

app = Flask(__name__)

tasks = [
    {
        'id':1,
        'title': u'Buy Grocergies',
        'description': u'Milk, Eggs, Cheese',
        'done': False
    }
]

@app.route('/')
def index():
    return "Hello World"

@app.route('/api', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

if __name__ == "__main__":
    app.run(debug=True)