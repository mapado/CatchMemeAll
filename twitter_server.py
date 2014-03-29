import tweepy
import os
from flask import Flask, make_response, jsonify

CONSUMER_KEY = os.environ['CATCHMEMEALL_TWITTER_CONSUMER_TOKEN']
CONSUMER_SECRET = os.environ['CATCHMEMEALL_TWITTER_CONSUMER_SECRET']

app = Flask(__name__)
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
api = tweepy.API(auth)

@app.route('/twitter/avatar/<username>', methods=['GET'])
def get_user_avatar(username):
    try:
        user = api.get_user(username)
    except tweepy.TweepError:
        return make_response(jsonify({'error': 'no username %s' % (username)}), 404)
    else:
        json_data = {'avatar': user.profile_image_url}
        return make_response(jsonify(json_data), 200)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8888, debug=True)
