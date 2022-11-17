const fs = require('fs');
const express = require('express');
const router = express.Router();
router.post('/create', async (req, res) => {

    var dir = './tmp';
    const { folderName } = req.body
    try {
        const folders = fs.readdirSync(dir);
        const isExist = folders.includes(folderName.trim())
        if (!fs.existsSync(dir) || !isExist) {
            fs.mkdirSync(dir + '/' + folderName.trim())
            res.status(201).json({ message: 'New Folder Created' })
        }
        else {
            return res.json({ message: 'Folder Exist' })
        }
    } catch (err) {
        console.error(err);
    }
})
module.exports = router;
