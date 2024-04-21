import tornado.web
import json
import base64

class Handler(tornado.web.RequestHandler):
    def post(self):
        J=json.loads(self.request.body)
        name = J["name"]
        dob = J["dob"]
        email = J["email"]
        image = base64.b64decode(J["image"])
        print("WE GOT:",name,dob,email,image[:20])
        resp={"ok:": True}
        self.write( json.dumps(resp) )