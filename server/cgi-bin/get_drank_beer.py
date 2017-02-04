#!/Users/takeda/.anyenv/envs/pyenv/versions/3.4.0/bin/python3.4
#!/home/yutakeda/.pyenv/versions/3.4.0/bin/python3.4
import cgitb
import cgi
import json
import datetime
import handle_sqlite
import handle_device

cgitb.enable()

print("Content-type: application/json")
print()

# 保存
try:
    data = handle_sqlite.select("beer.db")
except:
    print(json.dumps({"status": "failed", "explanation": "error around db"}))
    exit()

try:
    # ミラーボールとかの判定
    device_result = handle_device.judge_atmosphere(data)
except:
    print(json.dumps({"status": "failed", "explanation": "error around device"}))
    exit()

print(json.dumps({
    "status": "success",
    "data": data,
    "device": device_result,
}))

