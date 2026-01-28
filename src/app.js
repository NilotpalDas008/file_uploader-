const express = require('express');
const path = require('path');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());


app.use('/api', uploadRoutes);

app.use((err, req, res, next) => {
    if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({ success: false, message: 'File is too large!' });
    }
    if (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
    next();
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});