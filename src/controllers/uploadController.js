exports.uploadfile=(req,res)=>{
 try{
    if(!req.file){
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.status(200).json({
        success: true,
            message: "File uploaded successfully",
            file: {
                originalName: req.file.originalname,
                filename: req.file.filename,
                size: req.file.size
            }
    });

 }
 catch(err){
    res.status(500).json({ 
            success: false, 
            message: "Internal Server Error", 
            error: err.message 
        });
 }
};