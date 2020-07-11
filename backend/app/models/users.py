from ..models import db
from werkzeug.security import generate_password_hash, check_password_hash


# class User(db.Model):
#     __tablename__ = 'users'

#     id = db.Column(db.Integer, primary_key=True)
#     user_name = db.Column(db.String(30), nullable=False, unique=True)
#     email = db.Column(db.String(255), nullable=False, unique=True)
#     hashed_password = db.Column(db.String(128), nullable=False)

#     comments = db.relationship(
#         'Comment', back_populates='user', cascade="all, delete-orphan")

#     @property
#     def password(self):
#         return hashed_password

#     @password.setter
#     def password(self, password):
#         self.hashed_password = generate_password_hash(password)

#     def check_password(self, password):
#         return check_password_hash(self.hashed_password, password)

#     def to_dict(self):
#         return {"id": self.id, "user_name": self.user_name, "email": self.email}

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(30), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(128), nullable=False)

    @property
    def password(self):
        return hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)

    def to_dict(self):
        return {"id": self.id, "user_name": self.user_name, "email": self.email}
