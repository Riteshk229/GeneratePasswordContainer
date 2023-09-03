import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import '../App.css'

const Password = (props) => {
    const { Password, setPassword,isValid } = props;

    return (
        <>
            <div className="password">
                <input
                    onChange={(e)=>setPassword(e.target.value)}
                    value={Password}
                />
                <ContentCopyIcon
                    onClick={()=> navigator.clipboard.writeText(Password)}
                    style={{color: "#707070", cursor:"pointer"}}
                />
            </div>
        </>
    )
}

export default Password;