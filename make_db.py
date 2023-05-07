import sqlite3

class DBClass:
    def __init__(self, path):
        self.path = path
        self.db = sqlite3.connect(self.path)
        self.cur = self.db.cursor()

    def execute(self, query):
        self.cur.execute(query)
        if self.cur.description:
            return [i[0] for i in self.cur.description], self.cur.fetchall()
        
db = DBClass("database.db")

db.execute("CREATE TABLE IF NOT EXISTS tantra(item_id int PRIMARY KEY, item_name varchar(255),cost int);")

# db.execute("INSERT INTO tantra VALUES (1, 'OREO SHAKE', 37)")

# db.execute("INSERT INTO tantra values(2, 'Apple', 35);")

# db.execute("INSERT INTO tantra values(3, 'Banana', 31);")

try:
    db.execute("INSERT INTO tantra VALUES (1, 'OREO SHAKE', 37)")
    print("Values inserted successfully.")
except sqlite3.Error as e:
    print("Error inserting values:", e)

# db.execute("INSERT INTO tantra values(4, 'Papaya', 35);")

# db.execute("INSERT INTO tantra values(5, 'NIMBOO PANI', 15);")

# db.execute("INSERT INTO tantra values(6, 'LEMON SODA', 20);")