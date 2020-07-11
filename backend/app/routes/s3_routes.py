import os
from flask import Flask, render_template, request, redirect, send_file, jsonify
from ..aws.aws_s3 import list_files, download_file, upload_file, get_photo

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
BUCKET = "flaskdrive"


@app.route("/storage")
def storage():
    contents = list_files("flaskdrive")
    return {'contents': contents}


# The /upload endpoint will be used to receive a file and then call the upload_file() method that uploads a file to an S3 bucket
@app.route("/upload", methods=['POST'])
def upload():
    if request.method == "POST":
        f = request.files['file']
        f.save(os.path.join(UPLOAD_FOLDER, f.filename))
        upload_file(f"uploads/{f.filename}", BUCKET)

        return {"message": "file uploaded successfully"}

# The /download endpoint will receive a file name and use the download_file() method to download the file to the user's device


@app.route("/download/<filename>", methods=['GET'])
def download(filename):
    if request.method == 'GET':
        output = download_file(filename, BUCKET)

        return send_file(output, as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)

@app.route("/aws-photo/<filename>", methods=['GET'])
def photo(filenamme):
    if request.method == 'GET':
        photoUrl = get_photo(filename, BUCKET)

        return photoUrl
