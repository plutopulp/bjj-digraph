import os
import json
import jwt
import requests

from django.contrib.auth import authenticate


def get_token_auth_header(request):
    """Obtains the Access Token from the Authorization Header"""
    auth = request.META.get("HTTP_AUTHORIZATION", None)
    parts = auth.split()
    token = parts[1]
    return token


def strip_url(url):
    """ Retains the portion of a url which follows the first alphanumeric character to the right of a '/' """
    if not len(url):
        raise ValueError("Reached the end of the url!")
    if url[0] == "/" and url[1].isalnum():
        return url[1:]
    return strip_url(url[1:])


def _issuer_from_env() -> str:
    """Build the expected issuer URL from AUTH0_DOMAIN env var.

    Ensures the URL includes scheme and trailing slash, e.g. https://tenant.auth0.com/
    """
    issuer = os.environ.get("AUTH0_DOMAIN", "").strip()
    if not issuer:
        raise EnvironmentError("AUTH0_DOMAIN must be set")
    if not issuer.startswith("http"):
        issuer = f"https://{issuer}"
    if not issuer.endswith("/"):
        issuer = issuer + "/"
    return issuer


def jwt_decode_token(token):
    header = jwt.get_unverified_header(token)
    issuer = _issuer_from_env()
    jwks_url = issuer.rstrip("/") + "/.well-known/jwks.json"
    jwks = requests.get(jwks_url).json()
    public_key = None
    for jwk in jwks["keys"]:
        if jwk["kid"] == header["kid"]:
            public_key = jwt.algorithms.RSAAlgorithm.from_jwk(json.dumps(jwk))

    if public_key is None:
        raise Exception("Public key not found.")

    return jwt.decode(
        token,
        public_key,
        audience=os.environ["API_IDENTIFIER"],
        issuer=issuer,
        algorithms=["RS256"],
    )


def jwt_get_username_from_payload_handler(payload):
    username = payload.get("sub").replace("|", ".")
    authenticate(remote_user=username)
    return username
