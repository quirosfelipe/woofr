import os


class Configuration:
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL") or "postgresql://woofr:woofr@localhost/woofr_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = "klisafl4735628765uiasd654363456fiuh"
