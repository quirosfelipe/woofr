from flask import Flask, send_from_directory
from flask_migrate import Migrate
from flask_cors import CORS
import os

from app.config import Configuration
from app.routes import session
from app.routes import comments
from app.routes import photos
from app.routes import s3_routes
from app.models import db

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
app.register_blueprint(s3_routes.bp)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    print(f'caught_path: {path}')
    path_dir = os.path.abspath("./frontend/build")
    if path and os.path.exists(f'./frontend/build/static/{path}'):
        return send_from_directory(os.path.join(path_dir), path)
    else:
        return send_from_directory(os.path.join(path_dir), 'index.html')
