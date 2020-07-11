from ..models import db
from .photo_tags import photo_tags


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    photoId = db.Column(db.Integer, db.ForeignKey('photos.id'), nullable=False)
    comment = db.Column(db.String(500))

    photo = db.relationship('Photo', back_populates='comments')
    # user = db.relationship('User', back_populates='comments')

    def to_dict(self):
        return {"id": self.id, "userId": self.userId, "photoId": self.photoId, "comment": self.comment}
