import '../App.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';

const Checkbox = (props) => {
    const { selected } = props;
    return (
        <>
            <div  className="checkbox">
            {selected
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