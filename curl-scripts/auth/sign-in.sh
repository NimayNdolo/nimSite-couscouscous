# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh
# don't use a password you use for any real websites!
curl "https://library-express-api.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo