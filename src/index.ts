import express from 'express';
import diaryRouter from './routes/diaries.routes'

const app = express()


app.use(express.json())
app.use('/api/diaries', diaryRouter)
app.get('/ping', (_req, res) => {
    console.log('ping')
    res.send('pong')
})

app.listen(3000, () => {
    console.log('Server running on port')
})