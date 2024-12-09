import express from 'express';
import path from 'path'

const app = express()

app.use(express.static(path.join('public')));


app.get('/', (req, res) => {
    res.sendFile(path.join('public', 'index.html'));
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})