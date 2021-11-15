const { validationResult } = require("express-validator");

const {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} = require("firebase/auth");

exports.signin = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: `Error in ${errors.array()[0].param}`,
    });
  }

  const { email, password } = req.body;

  const auth = getAuth();
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          return res.status(200).json({
            message: "Signin successful",
          });
        })
        .catch((error) => {
          return res.status(404).json({
            error: "Invalid Email or Password",
          });
        });
    })
    .catch((error) => {
      return res.status(404).json({
        error: "Sign in Unsuccessful",
      });
    });
};

exports.signout = (req, res) => {
  const auth = getAuth();
  res.clearCookie("token");

  auth.signOut().then(() => {
    return res.status(200).json({
      message: "Signout successful",
    });
  });
};

exports.isSignedIn = (req, res, next) => {
  const auth = getAuth();
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      auth.currentUser
        .getIdToken(true)
        .then((token) => {
          next();
        })
        .catch((error) => {
          return res.status(401).json({
            message: "Sign in Unsuccessful",
          });
        });
    })
    .catch((error) => {
      return res.status(401).json({
        error: "UnAuthorized",
      });
    });
};
