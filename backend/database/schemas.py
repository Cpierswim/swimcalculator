from flask_marshmallow import Marshmallow
from marshmallow import post_load, fields
from database.models import *

ma = Marshmallow()

# Auth Schemas
class RegisterSchema(ma.Schema):
    """
    Schema used for registration, includes password
    """
    id = fields.Integer(primary_key=True)
    username = fields.String(required=True)
    password = fields.String(required=True)
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    email = fields.String(required=True)
    class Meta:
        fields = ("id", "username",  "password", "first_name", "last_name", "email")

    @post_load
    def create_user(self, data, **kwargs):
        return User(**data)
    
class UserSchema(ma.Schema):
    """
    Schema used for displaying users, does NOT include password
    """
    id = fields.Integer(primary_key=True)
    username = fields.String(required=True)
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    email = fields.String(required=True)
    class Meta:
        fields = ("id", "username", "first_name", "last_name", "email")

register_schema = RegisterSchema()
user_schema = UserSchema()
users_schema = UserSchema(many=True)

class PracticeSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    date = fields.Date(required=True)
    json = fields.String(required=False)
    class Meta:
        fields = ("id", "date", "json")

practice_schema = PracticeSchema()
pratices_schema = PracticeSchema(many=True)
