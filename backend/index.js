import express from 'express';
import cors from 'cors';

const app = express();
const PORT =  3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.post('/status', (req, res) => {
    const status=req.body;
    console.log("Status received:",status)
    res.json({ status: 'Server is running', data: status });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})