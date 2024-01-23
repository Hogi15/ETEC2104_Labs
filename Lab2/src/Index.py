import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('<a href="/profile/alice">Alice</a><br>')
        self.write('<a href="/profile/bob">Bob</a><br>')
        self.write('<a href="/profile/carol">Carol</a><br>')
        self.write('<a href="/profile/dave">Dave</a>')