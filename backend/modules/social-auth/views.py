from rest_auth.registration.views import SocialConnectView, SocialLoginView
from rest_framework.permissions import AllowAny
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client


class FacebookConnect(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class GoogleConnect(SocialConnectView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client
