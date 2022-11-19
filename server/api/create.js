const fs = require('fs');
const express = require('express');
const FolderModel = require('../FolderModel');
const router = express.Router();
router.post('/create', async (req, res) => {

    var dir = './tmp';
    try {
        const folderObj = {...req.body}
        if(req.body.parentId){
            folderObj.parentId = req.body.parentId
        }

        const folder = new FolderModel(folderObj);
        const createdFolder = await folder.save();
        res.json(createdFolder)


       

      
        
        // const createdFolder = await newFolder.save()
        // const folders = fs.readdirSync(dir);
        // const isExist = folders.includes(folderName.trim())
        // if (!fs.existsSync(dir) || !isExist) {
        //     fs.mkdirSync(dir + '/' + folderName.trim())
        //     res.status(201).json({ message: 'New Folder Created' })
        // }
        // else {
        //     return res.json({ message: 'Folder Exist' })
        // }
    } catch (err) {
        console.error(err);
        return res.status(400).json(err)
    }
})
module.exports = router;
