from flask import Blueprint, request
from flask_login import current_user, login_user, logout_user
import jwt

from ..models import db
from ..models.users import User
from ..config import Configuration
from ..auth import require_auth

bp = Blueprint("session", __name__, url_prefix='/api/session')


@bp.route('', methods=["POST"])
def login():
    data = request.json
    print(f"\n\n\nDATA\n{data}\n\n\n")
    user = User.query.filter(User.email == data['email']).first()
    if not user:
        return {"error": "Email not found"}, 422
    print('user', user.to_dict())
    if user.check_password(data['password']):
        access_token = jwt.encode(
            {'email': user.email}, Configuration.SECRET_KEY)
        return {'access_token': access_token.decode('UTF-8'), 'user': user.to_dict()}
    else:
        return {"error": "Incorrect password"}, 401


@bp.route('/register', methods=["POST"])
def register():
    data = request.json
    print(f"\n\n\nDATA\n{data}\n\n\n")
    user = User(password=data['password'],
                user_name=data['user_name'], email=data['email'])
    db.session.add(user)
    db.session.commit()

    access_token = jwt.encode({'email': user.email}, Configuration.SECRET_KEY)
    return {'access_token': access_token.decode('UTF-8'), 'user': user.to_dict()}


@bp.route('', methods=["DELETE"])
def logout():
    access_token = jwt.encode({'email': ''}, Configuration.SECRET_KEY)
    return {'access_token': access_token.decode('UTF-8'), 'user': ''}
