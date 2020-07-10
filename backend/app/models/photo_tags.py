from ..models import db

photo_tags = db.Table(
    "photo_tags",
    db.Model.metadata,
    db.Column("photoId", db.ForeignKey("photos.id"), primary_key=True),
    db.Column("tagId", db.ForeignKey("tags.id"), primary_key=True)
)
