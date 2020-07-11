import os
from flask import Flask, Blueprint, render_template, request, redirect, send_file, jsonify
from ..aws.aws_s3 import list_files, download_file, upload_file, get_photo
from ..models.users import User

# app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
BUCKET = "woofr"

bp = Blueprint('s3', __name__, url_prefix='/api')

@bp.route("/storage")
def storage():
    contents = list_files("woofr")
    return {'contents': contents}


# The /upload endpoint will be used to receive a file and then call the upload_file() method that uploads a file to an S3 bucket
@bp.route("/upload", methods=['POST'])
def upload():
    if request.method == "POST":
        file = request.body.file
        # f = request.files['file']
        userId = request.body.id
        print('info', file, userId)
        f = data['file']
        f.save(os.path.join(UPLOAD_FOLDER, f.filename))
        upload_file(f"uploads/{f.filename}", BUCKET)
        url = get_photo()
        return {"message": "file uploaded successfully"}

# The /download endpoint will receive a file name and use the download_file() method to download the file to the user's device
@bp.route("/download/<filename>", methods=['GET'])
def download(filename):
    if request.method == 'GET':
        output = download_file(filename, BUCKET)

        return send_file(output, as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)

@bp.route("/aws-photo/<filename>", methods=['GET'])
def photo(filenamme):
    if request.method == 'GET':
        photoUrl = get_photo(filename, BUCKET)

        return photoUrl
