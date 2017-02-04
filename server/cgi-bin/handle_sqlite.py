import sqlite3

def create_table_if_not_exist(con, cur):
    con.commit()
    cur = con.execute("SELECT * FROM sqlite_master WHERE type='table' and name='beer'")
    if cur.fetchone() == None:
         #存在してないので作る
        cur.execute("CREATE TABLE beer (id INTEGER PRIMARY KEY, uid INTEGER, amount INTEGER, time TEXT);")

def insert(db_name, amount, time, new_user=False):
    con = sqlite3.connect(db_name)
    cur = con.cursor()

    # テーブルのが存在しない場合は作成
    create_table_if_not_exist(con, cur)
    user = get_current_user(db_name)
    if user == None:
        user = 1

    if new_user:
        user += 1

    cur.execute("INSERT INTO beer (uid, amount, time) VALUES (?, ?, ?);",
                (int(user), int(amount), time))
    con.commit()

    return {
        "user": user,
        "amount": amount,
        "time": time,
        }

def confirm(db_name):
    con = sqlite3.connect(db_name)
    cur = con.cursor()
    cur.execute("SELECT * FROM beer;")
    products = cur.fetchall()
    for product in products:
        print(product)


def select(db_name):
    data = []
    con = sqlite3.connect(db_name)
    cur = con.cursor()
    user = get_current_user(db_name)
    cur.execute("SELECT uid, amount, time  FROM beer WHERE uid = ? ORDER BY id;",
                (int(user),))
    products = cur.fetchall()
    for product in products:
        result = {
            "uid": product[0],
            "amount": product[1],
            "time": product[2],
            }
        data.append(result)
    return data

def get_current_user(db_name):
    con = sqlite3.connect(db_name)
    cur = con.cursor()
    cur.execute("SELECT max(uid)  FROM beer;")
    result = cur.fetchone()
    if result == None:
        uid = None
    else:
        uid = int(result[0])
    return uid

if __name__ == "__main__":
    db_name = "beer.db"
    #insert(db_name, 1, 2, "10:10")
    #confirm(db_name)
    get_current_user(db_name)
