const jwt = require("jsonwebtoken");

const SECRET_KEY = 'mysecretkey';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJ1c2VybmFtZSI6Imxyb2RyaWd1ZXMiLCJpYXQiOjE3MjUyNzg2MTAsImV4cCI6MTcyNTI3ODY3MH0.ImRDtztEa8cjXRZpaywxP4JIbbdmy5zW84QIxAhSKog';

try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log(decoded);
} catch (err) {
    console.log("Invalid token: ", err.message);
}