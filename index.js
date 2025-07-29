// ! Module setup
const express = require("express"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    path = require("path"),
    session = require("express-session"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    moment = require("moment");

const app = express();

const flash = require("connect-flash");
app.use(flash());

// ! ENV Configuration
const dotenv = require("dotenv");
dotenv.config();

// ENV Variables
const URI = process.env.DB_URI;
const SESSION_SECRET_KEY = process.env.SESSION_SECRET_KEY;
const PORT = process.env.PORT || 3000; // ✅ Add default port fallback

// ! Database Configuration
mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("✅ Database Connected");
    })
    .catch((err) => {
        console.log("❌ Database Not Connected");
        console.error(err); // ✅ Show actual error
    });

// ! Session Configuration
app.use(
    session({
        secret: SESSION_SECRET_KEY || "fallbacksecret", // ✅ Prevents crash if undefined
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            expires: Date.now() + 1000 * 60 * 60 * 24, // ✅ Fixed Date.now() usage
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);

// ! Passport Configuration
const User = require("./models/users-database.js");
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ! Server Setup & Middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.moment = moment;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// ! Import Routes
const notificationRoutes = require("./routes/notifications-routes.js");
const questionRoutes = require("./routes/question-routes.js");
const userRoutes = require("./routes/user-routes.js");
const authRoutes = require("./routes/auth-routes.js");
const jobRoutes = require("./routes/jobs-routes.js");

app.use(notificationRoutes);
app.use(questionRoutes);
app.use(userRoutes);
app.use(authRoutes);
app.use(jobRoutes);
require("dotenv").config();

// ! Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
