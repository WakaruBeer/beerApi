#!/Users/takeda/.anyenv/envs/pyenv/versions/3.4.0/bin/python3.4
#!/home/yutakeda/.pyenv/versions/3.4.0/bin/python3.4
import cgitb
import cgi
import json
import datetime
import handle_device
import handle_sqlite

cgitb.enable()

print("Content-type: application/json")
print("Access-Control-Allow-Origin: *")
print()

form = cgi.FieldStorage()
if "state" not in form:
    print(json.dumps({"status": "failed", "explanation": "argument error"}))
    exit()

state = form["state"].value

# 保存
insert_data = {}
if state == "start":
    try:
        amount = 0
        time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        insert_data = handle_sqlite.insert("beer.db", amount, time, new_user=True)
    except:
        print(json.dumps({"status": "failed", "explanation": "error around db"}))
        exit()

if state in ["start", "end"]:
    try:
        # ミラーボールをオフに
        device_result = handle_device.off_all_device()
    except:
        print(json.dumps({"status": "failed", "explanation": "error around device"}))
        exit()

print(json.dumps({
    "status": "success",
    "data": insert_data,
    "device": device_result,
}))

