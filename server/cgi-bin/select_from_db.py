#!/Users/takeda/.anyenv/envs/pyenv/versions/3.4.0/bin/python3.4
#!/home/yutakeda/.pyenv/versions/3.4.0/bin/python3.4
import cgitb
import cgi
import json
import handle_sqlite
cgitb.enable()

print("Content-type: application/json")
print()

handle_sqlite.confirm("beer.db")
