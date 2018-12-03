from lxml import html
import requests
from flask import Flask, render_template, request

app = Flask(__name__)


#Flask Framework
@app.route("/")
def index():
    return render_template('index.html', times='')


@app.route("/", methods=["POST", "GET"])
def user_url():
    if request.method == 'POST':
        userURL = request.form['userURL']

        if userURL == '':
            return render_template('index.html', times='')
        else:
            # Grab the URL
            page = requests.get(userURL)
            tree = html.fromstring(page.content)

            # Grab the times
            title = tree.xpath('//h1[@class="header-post-title-class"]/text()')
            title = "".join(title)
            times = tree.xpath('//h3/em/text() | //p/text() | //strong/text()')
            firstJump = times.index('Jump Scare Times') + 1
            times = times[firstJump:]

            return render_template('index.html', title=title, times=times)

    else:
        return render_template('index.html', times='')


#Run Flask through Python
if __name__ == '__main__':
    app.run()

