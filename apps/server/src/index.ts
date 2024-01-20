import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

import { PORT, MONGO_URI } from './config';
import userRouter from './routers/user';
import postRouter from './routers/post';
import { resend } from './helpers/sendEmail';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

app.use('/user', userRouter);
app.use('/post', postRouter);
app.get('/health', (req: Request, res: Response) => {
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'shiladityad940@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });
    return res.status(200).json({ msg: 'OK' });
});
app.get('/', (req: Request, res: Response) => {

    return res.status(200).send("<h1>Mern Blog backend 2</h1>")
})
app.use('/*', (req: Request, res: Response) => { return res.status(404).json({ msg: 'NOT FOUND' }) });


mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("🟢 DB COONNECTED");
        app.listen(PORT, () => {
            console.log(`🟢 Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("🔴 [MONGOOSE CONNECT]", err)
    })
