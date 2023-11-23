import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(express.text());

// router
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "user is created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "user is created successfully",
    data: course,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

// app.get("/:userId/:subUserId", (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send("Hello MERN Full-Stack Developers !");
// });
// app.get("/", logger, (req: Request, res: Response) => {
//   console.log(req.query);
//   res.send("Hello MERN Full-Stack Developers !");
// });

// app.post("/", logger, (req: Request, res: Response) => {
//   console.log(req.body);
//   res.json({
//     message: "successfully receive data ",
//   });
// });

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(something);
    } catch (error) {
      console.log(error);
      next(error);
      // res.status(400).json({
      //   success: false,
      //   message: "failed to get data ",
      // });
    }
  }
);

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if(error){
    res.status(400).json({
      success : false,
      message : " failed to data "
    })
  }
});
export default app;
