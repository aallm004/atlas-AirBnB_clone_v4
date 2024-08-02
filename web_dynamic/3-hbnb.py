#!/usr/bin/python3
""" Starts a Flash Web Application """
from models import storage
from os import getenv
from flask import Flask, render_template
import uuid

app = Flask(__name__)
app.url_map.strict_slashes = False

@app.teardown_appcontext
def close_db(error):
    """ Close Storage """
    storage.close()

@app.route('/3-hbnb')
def hbnb():
    """ HBNB """
    cache_id = uuid.uuid4()
    states = storage.all("State").values()
    amenities = storage.all("Amenity").values()
    return render_template('3-hbnb.html', states=states, amenities=amenities, cache_id=cache_id)

if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5000)
