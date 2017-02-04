#!/Users/takeda/.anyenv/envs/pyenv/versions/3.4.0/bin/python3.4
#!/home/yutakeda/.pyenv/versions/3.4.0/bin/python3.4
import cgitb
import cgi
import json
import datetime
import handle_sqlite

cgitb.enable()

print("Content-type: application/json")
print()

form = cgi.FieldStorage()
if "amount" not in form:
    print(json.dumps({"status": "failed", "explanation": "argument error"}))
    exit()

amount = form["amount"].value
time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')

exit()
# 保存
insert_data = {}
try:
    insert_data = handle_sqlite.insert("beer.db", amount, time)
except:
    print(json.dumps({"status": "failed", "explanation": "error around db"}))
    exit()

print(json.dumps({
    "status": "success",
    "data": insert_data
}))

