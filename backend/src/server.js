import express from "express"
import cors from "cors"
import route from './routes/route.js'


const app = express()
app.use(cors());

const port = 9000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//routes declaration
app.use('/api', route)

app.listen(port, () => {
    console.log(`app is listening at post ${port}`)
})
