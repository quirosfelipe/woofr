from ..models import db
from .photo_tags import photo_tags


class Photo(db.Model):
    __tablename__ = 'photos'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    description = db.Column(db.String(200))
    photoName = db.Column(db.String(70), nullable=False)
    photoUrl = db.Column(db.String, nullable=False)

    comments = db.relationship(
        'Comment', back_populates='photo', cascade="all, delete-orphan")

    tags = db.relationship("Tag",
                           secondary=photo_tags,
                           back_populates="photos"
                           )

    def to_dict(self):
        return {"id": self.id, "userId": self.userId, "description": self.description,  "photoUrl": self.photoUrl}
