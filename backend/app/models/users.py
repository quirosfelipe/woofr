from ..models import db
from werkzeug.security import generate_password_hash, check_password_hash, JWT, jwt_required


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(30), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(128), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        print('printing password here', password)
        return check_password_hash(self.hashed_password, password)

    def to_dict(self):
        return {"id": self.id, "user_name": self.user_name, "email": self.email}
