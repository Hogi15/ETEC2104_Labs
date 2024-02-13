import tornado.web
import random

prof={
        "alice": {
            "image" : "people1.png",
            "name" : "Alice Smith", 
            "dob" : "Jan. 1",
            "email" : "alice@example.com"
        },

        "bob": {
            "image" : "people2.png",
            "name" : "Bob Jones", 
            "dob" : "Dec. 31",
            "email" : "bob@bob.xyz"
        },

        "carol": {
            "image" : "people3.png",
            "name" : "Carol Ling", 
            "dob" : "Jul. 17",
            "email" : "carol@example.com"
        },

        "dave": {
            "image" : "people4.png",
            "name" : "Dave N. Port", 
            "dob" : "Mar. 14",
            "email" : "dave@dave.dave"
        }
}

class Handler(tornado.web.RequestHandler):
    def get(self):
        L = self.request.path.split("/")
        uname = L[2]
        info = prof[uname]
        self.render("profilepage.html", image=info["image"],
                    name=info["name"], dob=info["dob"],
                    email = info["email"])