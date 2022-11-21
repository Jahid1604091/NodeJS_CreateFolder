const fs = require('fs');
const express = require('express');
const FolderModel = require('../FolderModel');
const router = express.Router();


function createPath(folders, parentId) {
    const folderList = [];
    function checkParent(parentId = null) {
        if (parentId == null) {
            return 0;
        }
        else {
            let parentFolder = folders.filter(f => f._id == parentId)
            folderList.unshift(parentFolder[0].folderName)
            checkParent(parentFolder[0].parentId)
        }
    }

    checkParent(parentId)
    return folderList;

}

router.post('/create', async (req, res) => {
    try {

        const isExist = await FolderModel.find({
            $and: [
                { folderName: req.body.folderName },
                { depthLevel: req.body.depthLevel }
            ]
        })

        if (isExist.length > 0) {
            res.status(400).json({ message: "Folder Exist" })
        }
        else {
            const folderObj = { ...req.body }
            if (req.body.parentId) {
                folderObj.parentId = req.body.parentId
            }

            const folder = new FolderModel(folderObj);
            //call recursion
            const folders = await FolderModel.find({});
            const path = createPath(folders, folder.parentId);

            let pathDir = './';
            for (let i = 0; i < Object.values(path).length; i++) {
                pathDir = pathDir + path[i] + '/'
            }



            const dirFolders = fs.readdirSync(pathDir);
            let existInDir = Object.values(dirFolders).filter(f => f === folder.folderName)
         
            if (!existInDir.length > 0) {
                fs.mkdirSync(pathDir + folder.folderName.trim())
            }
            else {
                res.status(400).json({ message: "Folder Exist" })
            }
            await folder.save();
            return res.json({ message: "Folder Created" })
        }
    } catch (err) {
        console.error(err);
        return res.status(400).json(err)
    }
})
module.exports = router;
