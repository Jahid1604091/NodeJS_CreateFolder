import styled from "styled-components"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../utils/constants';
import Folders from '../components/Folders'
const Homepage = () => {
    const [name, setName] = useState('');
    const [folders, setFolders] = useState([]);
    const [stateChange, setStateChange] = useState(false);


    const handleDelete = async(id) => {
        const { data } = await axios.delete(`/folder/delete/${id}`)
        setStateChange(prev=>!prev)
    }

    const handleAdd = async (parentId, depthLevel) => {
        const { data } = await axios.post(`/folder/create`, { parentId, folderName: 'Test', depthLevel }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setStateChange(prev=>!prev)
    }
    const fetchFolders = async () => {
        const { data } = await axios.get(`/folder/read`)
        setFolders(data?.folderList)
    }
    useEffect(() => {
        fetchFolders()
    }, [stateChange])
    return (
        <Wrapper className="page-100">
            <h2>Create Folder</h2>
            <Folders folders={folders} handleAdd={handleAdd} handleDelete={handleDelete} />
            {/* <form onSubmit={createFolder}>
                <input type="text" name='name'
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input type="submit" value='Create' />
            </form> */}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    
`
export default Homepage