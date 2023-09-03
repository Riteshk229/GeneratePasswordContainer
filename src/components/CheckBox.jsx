import '../App.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';

const Checkbox = () => {

    return (
        <>
            <div  className="checkbox">
            {true
                    ? <CheckBoxIcon
                        style={{verticalAlign: "middle"}}
                    />
                    : <CheckBoxOutlineBlankIcon
                        style={{verticalAlign: "middle"}}
                    />
                }
            </div>
        </>
    )
}
export default Checkbox;