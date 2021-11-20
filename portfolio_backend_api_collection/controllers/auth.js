const { validationResult } = require("express-validator");
const { ContextRunnerImpl } = require("express-validator/src/chain");

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

          user.getIdToken(true).then((token) => {
            res.cookie(process.env.COOKIE_IDENTIFIER, token);
            return res.status(200).json({
              token,
              message: "Sign in successful",
              role: process.env.ADMIN_IDENTIFICATION_ROLE,
            });
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

  res.clearCookie(process.env.COOKIE_IDENTIFIER);
  const auth = getAuth();

  auth.signOut().then(() => {
    return res.status(200).json({
      message: "Signout successful",
    });
  });
};

exports.isSignedIn = (req, res, next) => {
  const auth = getAuth();

  if (!auth.currentUser) {
    return res.status(401).json({
      error: "UnAuthorized",
    });
  }

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

  // setPersistence(auth, browserSessionPersistence)
  //   .then(() => {
  //     auth.currentUser
  //       .getIdToken(true)
  //       .then((token) => {
  //         next();
  //       })
  //       .catch((error) => {
  //         return res.status(401).json({
  //           message: "Sign in Unsuccessful",
  //         });
  //       });
  //   })
  //   .catch((error) => {
  //     return res.status(401).json({
  //       error: "UnAuthorized",
  //     });
  //   });
};
