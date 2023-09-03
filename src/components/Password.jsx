import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import '../App.css'

const Password = (props) => {
    const { Password, setPassword } = props;
    return (
        <>
            <div className="password">
                {/* <span>PS3&SVBlA</span> */}
                <input
                    onChange={(e)=>setPassword(e.target.value)}
                    value={Password}
                />
                <ContentCopyIcon
                    style={{color: "#707070"}}
                />
            </div>
        </>
    )
}

export default Password;