from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import sqlite3
import json

app = Flask(__name__)
CORS(app, origins="*")

# @app.route("/pickup", methods = ['POST'])
# def getTheMadeRequest():
# 	data = request.get_json()
# 	person_name = data.name
# 	person_addr = data.address
# 	items = data.items
# 	hash = 10
# 	conn = sqlite3.connect("database.db")
# 	cur = conn.cursor()
# 	table_name = "orders"
# 	for i in items:
# 		canteen_id = i.canteen_id
# 		item_id = i.item_id
# 		quantity = i.quantity
# 		cur.execute(f'''
# 			INSERT INTO 
# 			{table_name}(hash, person_name, person_address, canteed_id, item_id, quantity) 
# 			VALUES({hash}, {person_name}, {person_addr}, {canteen_id}, {item_id}, {quantity})
# 		''')
# 	cur.commit()
# 	cur.close()

@app.route("/receive", methods = ['GET', 'POST'])
def bar():
	if(request.method == "POST"):
		name = request.form['name']
		location = request.form['location']
		batch = request.form['batch']
		phone = request.form['phone']
		items = request.form['items']
		j_items = json.loads(items)
		ret_val = jsonify({'name': name, 'location': location, 'batch': batch, 'phone': phone, 'items': j_items})	
		print(type(j_items))
		with open('orders.txt', 'a') as f:
			for i in list(j_items.keys()):
				string = str(i) + "," + str(j_items[i]['name']) + "," + j_items[i]['price'] + "," + str(j_items[i]['quantity']) + "," + name + "," + location + "," + batch + "," + phone + "\n"
				f.write(string)
		return ret_val

@app.route("/pickup")
def pickUpPage():
	return render_template("pickuppage.html")

@app.route("/")
def homepage():
	return render_template("homepage.html")

@app.route("/aboutpage")
def aboutpage():
	return render_template("aboutpage.html")

@app.route("/menupage")
def menupage():
	return render_template("menu_page.html")

if __name__ == "__main__":
	app.run(debug = True)

#id, name of item, price, qunatity, name of orderer, location of orderer, batch of orderer