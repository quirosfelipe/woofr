from flask import Blueprint, request, jsonify
from ..models import db
from ..models.photos import Photo
from sqlalchemy.orm import joinedload

# Todo, get photo

bp = Blueprint('photos', __name__, url_prefix='/api/photos')

# get all photos


@bp.route('', methods=['GET'])
def get_all_photos():
    photos = db.session.query(Photo).all()
    photos = [photo.to_dict() for photo in photos]
    return {"photos": photos}


@bp.route('/<int:userId>', methods=['GET'])
def get_user_photos(userId):
    photos = Photo.query.filter_by(userId=userId).all()
    photos = [photo.to_dict() for photo in photos]
    return {'photos': photos}


# @bp.route('/single/<int:id>', methods=['GET'])
# def get_photo_byId(id):
#     # photos = Photo.query.filter_by(id == id).all()
#     # photos = [photo.to_dict() for photo in photos]
#     # return {'photos': photos}
#     return "I'm endpoint"


# @bp.route('/photo/<int:id>', methods=["GET"])
# def get_one_photo(id):
#     photo = Photo.query.get(id)
#     photo = photo.to_dict()
#     return {'photo': photo}

@bp.route('/photo/<int:id>', methods=["GET"])
def get_one_photo(id):
    photo = Photo.query.options(joinedload('comments')).get(id)
    comments = [comment.to_dict() for comment in photo.comments]
    photo = photo.to_dict()
    payload = {'photo': photo, 'comments': comments}
    return payload


@bp.route('/create', methods=["POST"])
def create_photo():
    data = request.json
    try:
        photo = Photo(
            userId=data['userId'], description=data['description'], photoName=data['photoName'], photoUrl=data['photoUrl'])
        db.session.add(photo)
        db.session.commit()
        return {'photo': photo.to_dict()}
    except AssertionError as message:
        print(str(message))
        return jsonify({"error": str(message)}), 400


@bp.route('/<int:id>', methods=["DELETE"])
# @require_auth
def delete_photo(id):
    photo = Photo.query.get(id)
    db.session.delete(photo)
    db.session.commit()

    return {'deletedId': id}
