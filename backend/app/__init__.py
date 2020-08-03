from flask import Flask, send_from_directory, request, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
import os

from app.config import Configuration
from app.routes import session
from app.routes import comments
from app.routes import photos
from app.models import db
from app.routes.photos import *
# from app.aws import s3_routes

from app.aws.aws_s3 import *

if os.environ.get("FLASK_ENV") == 'production':
    app = Flask(__name__, static_folder='../frontend/build/static',
                static_url_path='/static')
else:
    app = Flask(__name__)

CORS(app)
app.config.from_object(Configuration)
db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(session.bp)
app.register_blueprint(comments.bp)
app.register_blueprint(photos.bp)
# app.register_blueprint(s3_roues.bp)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    print(f'caught_path: {path}')
    path_dir = os.path.abspath("./frontend/build")
    if path and os.path.exists(f'./frontend/build/static/{path}'):
        return send_from_directory(os.path.join(path_dir), path)
    else:
        return send_from_directory(os.path.join(path_dir), 'index.html')


@app.route("/api/<userId>/upload", methods=['POST'])
def upload_file(userId):
    print('this is the form data', request.args.content)
    # A
    if "file" not in request.files:
        return "No file key in request.files"

        # B
    file = request.files["file"]
    print('this is the request', request.data)

    """
        These attributes are also available

        file.filename               # The actual name of the file
        file.content_type
        file.content_length
        file.mimetype

    """
    # D.
    if file:
        # file.filename = secure_filename(file.filename)
        print('this is the file', file)
        output = upload_file_to_s3(file, userId, 'woofr')
        print('this is the output', str(output))
        return {'photoUrl': str(output)}

    else:
        print('something went wrong')

    # access form data request.args.content to add access form data
