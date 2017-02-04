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
if "user" not in form or "amount" not in form:
    print(json.dumps({"status": "failed", "explanation": "argument error"}))
    exit()

user = form["user"].value
amount = form["amount"].value
time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')

# 保存
try:
    handle_sqlite.insert("beer.db", user, amount, time)
except:
    print(json.dumps({"status": "failed", "explanation": "error around db"}))
    exit()

print(json.dumps({
    "status": "success",
    "user": user,
    "amount": amount,
    "time": time
}))

