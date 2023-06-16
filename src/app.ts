import express, { Application, NextFunction, Response, Request } from 'express';
import cors from 'cors';
const app: Application = express();
import globalErrorHandeler from './middleware/globalerrorHandeler';
import routes from './app/routes';
import httpStatus from 'http-status';

app.use(cors());

// parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application router

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1', routes);

// for testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   //  throw new apiError(400,"error hoyece")
//   next('error kaice')
// })

// global error handeler

app.use(globalErrorHandeler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
