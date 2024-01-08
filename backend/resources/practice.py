from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Practice
from database.schemas import practice_schema
from marshmallow import ValidationError
import urllib.parse
from urllib.request import urlopen
import json
from dotenv import load_dotenv
from os import environ

load_dotenv()

class PracticesResource(Resource):
    def post():
        pass

    def get(self):
        pass

class PracticeResource(Resource):
    def get(self, practice_id):
        pass