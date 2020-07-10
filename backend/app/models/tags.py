from ..models import db
from .photo_tags import photo_tags


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    tagName = db.Column(db.String(40), nullable=False)

    photos = db.relationship("Photo",
                             secondary=photo_tags,
                             back_populates="tags")

    def to_dict(self):
        return {"id": self.id, "tagName": self.tagName}
