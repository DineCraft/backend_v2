import express from 'express'


const router = express.Router();

router.get('/cuisine', async (req, res) => {
    res.send('Hello from cuisine');
}
);


export default router;