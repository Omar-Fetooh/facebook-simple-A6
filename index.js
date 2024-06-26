import express from 'express'
import db_connection from './database/dbConnection.js';
import postRouter from './src/modules/post/post.routes.js';
import userRouter from './src/modules/user/user.routes.js';
import commentRouter from './src/modules/comment/comment.routes.js';

const app = express()
const port = 8080;
app.use(express.json());

app.use("/posts", postRouter)
app.use("/users", userRouter)
app.use("/comments", commentRouter)

const startServer = async () => {
    try {
        await db_connection();
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    } catch (error) {
        console.error('Unable to start the server:', error);
    }
};

startServer();


app.get('/', (req, res) => res.send('Hello World!'))