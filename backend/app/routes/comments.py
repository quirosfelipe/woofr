from flask import Blueprint, request, jsonify
from ..models import db
from ..models.comments import Comment


bp = Blueprint('comments', __name__, url_prefix='/api/comments')

# create - POST


@bp.route('<int:photoId>', methods=["GET"])
def get_photo_comments(photoId):
    comments = Comment.query.filter_by(photoId=photoId).all()
    comments = [comment.to_dict() for comment in comments]
    return {"comments": comments}


@bp.route('', methods=["POST"])
def create_comment():
    data = request.json
    try:
        comment = Comment(
            userId=data['userId'], photoId=data['photoId'], comment=data['comment'])
        db.session.add(comment)
        db.session.commit()
        return {'comment': comment.to_dict()}
    except AssertionError as message:
        print(str(message))
        return jsonify({"error": str(message)}), 400


@bp.route('/<int:id>', methods=["DELETE"])
# @require_auth
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()

    return {'deletedId': id}


@bp.route('/<int:id>', methods=["PUT"])
# @require_auth
def update_comment(id):
    data = request.json
    comment = Comment.query.get(id)
    comment.comment = data['comment']
    db.session.commit()

    return {'updatedCommentId': id}
