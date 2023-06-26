import 'reflect-metadata'
import 'express-async-errors'
import express, { Application } from "express";
import { moviesRouter } from './routers';
import middlewares from './middlewares';

const app: Application = express()
app.use(express.json())

app.use('/movies',moviesRouter)

app.use(middlewares.handleError) 

export default app