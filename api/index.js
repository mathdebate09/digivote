const express = require('express')
require('dotenv').config()
const authRouter = require('./routers/auth.router')
const voterProfileRouter = require('./routers/voterProfile.router')
const locationRouter = require('./routers/location.router')
const voteRoutes = require('./routers/vote.router')
const cookieParser = require('cookie-parser')
const path = require('path')
const cors = require('cors')
const app = express();


app.listen(3000 , () => {
    console.log("listening to this server")
})

const __location = path.resolve();

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded())
app.use(cors())
app.use("/api/auth",authRouter) 
app.use("/api/voters", voterProfileRouter)
app.use("/api/locations", locationRouter)
app.use('/api/votes', voteRoutes);

app.use(express.static(path.join(__location,'/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__location,'client','dist','index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
