// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')
const app = express()
const port = 8080
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
