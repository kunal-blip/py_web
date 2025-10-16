from flask import Flask, render_template

app = Flask(__name__)

# Smart caching: disable for HTML, enable for static assets
@app.after_request
def add_header(response):
    # Only disable caching for HTML pages to see changes immediately
    if response.content_type and 'text/html' in response.content_type:
        response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
    # Enable caching for static assets (CSS, JS, images)
    elif response.content_type and any(ct in response.content_type for ct in ['css', 'javascript', 'image']):
        response.headers['Cache-Control'] = 'public, max-age=3600'  # Cache for 1 hour
    return response

@app.route("/")
def home():
    return render_template('home.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
