const fs = require('fs');
const express = require('express');
const router = express.Router();
router.get('/read', async (req, res) => {

    var dir = './tmp';
    
    try {
        const folders = fs.readdirSync(dir);
        
        if (!fs.existsSync(dir) || folders.length === 0) {
            res.status(201).json({ message: 'No Folder' })
        }
        else {
            return res.status(200).json({ folders })
        }
    } catch (err) {
        console.error(err);
    }
})
module.exports = router;
