import tornado.web
import json

class Handler(tornado.web.RequestHandler):
    def post(self):
        J=json.loads(self.request.body)
        image = J["image"]
        name = J["name"]
        dob = J["dob"]
        email = J["email"]
        print("WE GOT:",image,name,dob,email)
        resp={"ok:": TRUE}
        self.write( json.dumps(resp) )