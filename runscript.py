from flask import Flask, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app, origins="*")

@app.route("/")
def foo():
    return '''<h1>You are at the root page of this flask server</h1>'''

@app.route("/pickup", methods = ['POST'])
def getTheMadeRequest():
	data = request.get_json()
	person_name = data.name
	person_addr = data.address
	items = data.items
	hash = 10
	conn = sqlite3.connect("database.db")
	cur = conn.cursor()
	table_name = "orders"
	for i in items:
		canteen_id = i.canteen_id
		item_id = i.item_id
		quantity = i.quantity
		cur.execute(f'''
			INSERT INTO 
			{table_name}(hash, person_name, person_address, canteed_id, item_id, quantity) 
			VALUES({hash}, {person_name}, {person_addr}, {canteen_id}, {item_id}, {quantity})
		''')
	cur.commit()
	cur.close()
