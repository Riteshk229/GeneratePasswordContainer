import '../App.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';

const Checkbox = () => {
    const [selected, SetSelected] = useState(false);

    const handleClick = () => {
        SetSelected(!selected);
    }
    return (
        <>
            <div  className="checkbox">
            {selected
                    ? <CheckBoxIcon
                        onClick={handleClick}
                        style={{verticalAlign: "middle"}}
                    />
                    : <CheckBoxOutlineBlankIcon
                        onClick={handleClick}
                        style={{verticalAlign: "middle"}}
                    />
                }
            </div>
        </>
    )
}
export default Checkbox;