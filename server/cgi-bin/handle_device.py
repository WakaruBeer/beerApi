import requests

def judge_atmosphere(data):
    result = {}
    if len(data) < 1:
        return

    url = "http://126.162.50.150/API/optionControllerApi.php"
    amount = 0
    amount_prev = 0
    for serve in data:
        amount += int(serve["amount"])

    amount_prev = amount - data[len(data) - 1]["amount"]

    if amount_prev < 1000 and amount >= 1000 and amount < 2000:
        result = on_off(url, "on", "off")
    elif amount_prev < 2000 and amount >= 2000:
        result = on_off(url, "on", "on")
    #elif amount_prev < 3000 and amount >= 3000:
    #result = on_off(url, "off", "off")

    return result

def off_all_device():
    url = "http://126.162.50.150/API/optionControllerApi.php"
    return on_off(url, "off", "off")

def on_off(url, sound, mirror):
     params = {"sound": sound, "mirror": mirror}
     r = requests.get(url, params=params)
     return r.text

if __name__ == '__main__':
    import handle_sqlite
    user = 1
    data = handle_sqlite.select("beer.db", user)
    judge_atmosphere(data)

