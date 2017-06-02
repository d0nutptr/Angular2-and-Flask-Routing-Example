import os
import json
from flask import Flask, send_from_directory
app = Flask(__name__)

class Data:
    def __init__(self, name: str, data: str):
        self.name = name
        self.data = data

test_data = [Data("widgets", "Widgets are doing well!"), Data("foos", "Foos are looking good :)"), Data("bars", "Not so hot :(")]

@app.route('/api/')
def api():
    return json.dumps({         
        "routes": [             
            "/data/",           
            "/data/foos",       
            "/data/bars",       
            "/data/widgets"     
        ]                      
    })

@app.route('/api/data/<string:name>')
def getData(name: str):
    element = next((x for x in test_data if x.name.lower() == name.lower()), None)

    if element != None:
        return json.dumps({"status": element.data})
    else:
        return json.dumps({})

@app.route('/api/data/')
def data():
    return json.dumps({
        "routes": [
            "/foos",
            "/bars",
            "/widgets"
        ]
    })


# =======================    
# =======================
# === Angular Routing ===
__angular_paths = []
__angular_default_path = "index.html"
__root = "../Frontend/dist/"

for root, subdirs, files in os.walk(__root):
    if len(root) > len(__root):
        root += "/"

    for file in files:
        relativePath = str.replace(root + file, __root, "")
        __angular_paths.append(relativePath)

# Special trick to capture all remaining routes
@app.route('/<path:path>')
@app.route('/', defaults={'path': ''})
def angular(path):    
    if path not in __angular_paths:
        path = __angular_default_path
    
    return send_from_directory('../Frontend/dist/', path)
# =======================

# === Auto Run Flask ===
if __name__ == "__main__":
    app.run()
# ======================