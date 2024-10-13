import express from 'express';
const router = express.Router();

import * as StudentController from '../app/controllers/StudentController.js';
import * as FileController from '../app/controllers/FileController.js';
import AuthMiddleware from '../app/middlewares/AuthMiddleware.js';


// User Router
router.post('/Registration', StudentController.Registration);
router.post('/Login', StudentController.Login);
router.get('/Read-Profile', AuthMiddleware, StudentController.ReadProfile);
router.post('/Update-Profile', AuthMiddleware, StudentController.UpdateProfile);


// File Upload Router
router.post('/Upload-Single-File', FileController.uploadSingleFile);
router.post('/Upload-Multiple-Files', FileController.uploadMultipleFiles);
router.get('/Read-File/:fileName', FileController.readFile);
router.delete('/Delete-Single-File/:fileName', FileController.deleteSingleFile);


export default router;