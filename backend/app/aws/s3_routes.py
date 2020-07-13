# import os
# from flask import Flask, Blueprint, request
# # from werkzeug.security import secure_filename
# from .aws_s3 import *
# from ..models.users import User

# bp = Blueprint('s3-routes', __name__, url_prefix='/api')

# @bp.route("/upload", methods=['POST'])
# def upload_file():

# 	# A
#     if "file" not in request.files:
#         return "No file key in request.files"

# 	# B
#     file    = request.files["file"]

#     """
#         These attributes are also available

#         file.filename               # The actual name of the file
#         file.content_type
#         file.content_length
#         file.mimetype

#     """
# 	# D.
#     if file:
#         # file.filename = secure_filename(file.filename)
#         output   	  = upload_file_to_s3(file, app.config["S3_BUCKET"])
#         return str(output)

#     else:
#         print('something went wrong')
