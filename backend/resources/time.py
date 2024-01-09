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
import time

load_dotenv()

class TimeResource(Resource):
    def get(self):
        date= datetime.utcnow()
        date = date - datetime(1970, 1, 1)
        milliseconds = round(date.total_seconds()*1000)
        now_dict = {
                'milliseconds': milliseconds
            }
        return now_dict, 200