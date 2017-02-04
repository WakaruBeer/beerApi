import sqlite3

def create_table_if_not_exist(con, cur):
    con.commit()
    cur = con.execute("SELECT * FROM sqlite_master WHERE type='table' and name='beer'")
    if cur.fetchone() == None:
         #存在してないので作る
        cur.execute("CREATE TABLE beer (id INTEGER PRIMARY KEY, uid INTEGER, amount INTEGER, time TEXT);")

def insert(db_name, user, amount, time):
    con = sqlite3.connect(db_name)
    cur = con.cursor()

    # テーブルのが存在しない場合は作成
    create_table_if_not_exist(con, cur)

    cur.execute("INSERT INTO beer (uid, amount, time) VALUES (?, ?, ?);",
                (int(user), int(amount), time))
    con.commit()

def confirm(db_name):
    con = sqlite3.connect(db_name)
    cur = con.cursor()
    cur.execute("SELECT * FROM beer;")
    products = cur.fetchall()
    for product in products:
        print(product)


if __name__ == "__main__":
    db_name = "beer.db"
    insert(db_name, 1, 2, "10:10")
    confirm(db_name)
