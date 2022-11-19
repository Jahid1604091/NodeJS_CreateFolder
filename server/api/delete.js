const fs = require('fs');
const express = require('express');
const FolderModel = require('../FolderModel');
const router = express.Router();


router.delete('/delete/:id', async (req, res) => {

    var dir = './tmp';

    try {
        const folder = await FolderModel.findByIdAndRemove(req.params.id);
        // const folders = fs.readdirSync(dir);

        if (!folder) {
            res.status(201).json({ message: 'No Folder' })
        }
        else {
           
            return res.status(200).json({ message: 'Folder Deleted' })
        }
    } catch (err) {
        console.error(err);
    }
})
module.exports = router;
