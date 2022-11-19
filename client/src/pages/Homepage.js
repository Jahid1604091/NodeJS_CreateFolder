import styled from "styled-components"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../utils/constants';
import Folders from '../components/Folders'
const Homepage = () => {
    const [name, setName] = useState('');
    const [folders, setFolders] = useState([]);

    const createFolder = async (e) => {
        e.preventDefault();
        const { data } = await axios.post(`/folder/create`, { folderName: name }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(data)
    }

    useEffect(() => {
        const fetchFolders = async () => {
            const { data } = await axios.get(`/folder/read`)
            setFolders(data)
        }
        fetchFolders()
    }, [])
    return (
        <Wrapper className="page-100">
            <h2>Create Folder</h2>
            <Folders/>
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