const fs = require('fs');
const express = require('express');
const FolderModel = require('../FolderModel');
const router = express.Router();


router.delete('/delete/:id', async (req, res) => {

    var dir = './root';

    try {
        const folder = await FolderModel.findById(req.params.id);

        if (!folder) {
            res.status(201).json({ message: 'No Folder' })
        }
        else {
            //check if it has subitems
            const subitems = await FolderModel.find({ parentId: req.params.id })
            // if (subitems.length > 0) {
            //     await FolderModel.deleteMany({ parentId: req.params.id })
            // }
            const folders = fs.readdirSync(`${dir}/${folder.folderName}`);
            console.log(folders)
            // const isExist = folders.includes(req.body.folderName.trim())
            // if (fs.existsSync(dir) || isExist) {
            //     fs.mkdirSync(dir + '/' + req.body.folderName.trim())
            // }
            // await folder.remove();
            return res.status(200).json({message:'Folder Deleted'})
        }
    } catch (err) {
        console.error(err);
    }
})
module.exports = router;
