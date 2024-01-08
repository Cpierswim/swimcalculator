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
from datetime import datetime

load_dotenv()

class TimeResource(Resource):
    def get(self):
        now = datetime.now()
        now_dict = {
                'year': now.year,
                'month': now.month, 
                'day': now.day,
                'hour': now.hour, 
                'minute': now.minute,
                'second': now.second, 
                'microsecond': now.microsecond
            }
        now_json = json.dumps(now_dict)
        return now_dict, 200