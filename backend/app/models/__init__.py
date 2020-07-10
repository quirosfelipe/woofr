from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .photo_tags import photo_tags  # noqa
from .comments import Comment  # noqa
from .photos import Photo  # noqa
from .tags import Tag  # noqa
