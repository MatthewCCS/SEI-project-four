from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  passwordConfirmation = serializers.CharField(write_only=True)

  def validate(self, data):

    password = data.pop('password')
    passwordConfirmation = data.pop('passwordConfirmation')
    
    if password != passwordConfirmation:
      raise ValidationError({
        'passwordConfirmation': 'Does not match password'
      })

    data['password'] = make_password(password)

    return data

  class Meta:
    model = User
    fields = ('id', 'email', 'username', 'profileImage', 'password', 'passwordConfirmation')