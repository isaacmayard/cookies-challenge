import express from "express";
import cookieParser from "cookie-parser";
const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.json());

const name = "Isaac";

app.get("/login", (req, res) => {
  // define cookie attributes
  var opts = {
    maxAge: 900000,
    httpOnly: true,
    sameSite: "strict",
  };

  // add a cookie to the response
  res.cookie("name", name, opts);
  console.log(req.cookies.name);
  // send our response with the cookies in the header
  res.send("Hello world!!!");
});

app.get("/hello", (req, res) => {
  res.status(200).send(`Welcome ${req.cookies.name}!`);
});

app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}`)
);
