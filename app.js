import Routes from "./routes/user.js"
import RoutesGrades from "./routes/grade.js"
import RoutesArticles from "./routes/article.js"
import RoutesQuiz from "./routes/quiz.js"
import express from "express"
export const App = express()



 App.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.use("/api/auth", Routes)
App.use("/api", RoutesGrades)
App.use("/api", RoutesArticles)
App.use("/api", RoutesQuiz)
