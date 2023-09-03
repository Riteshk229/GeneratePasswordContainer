import Slider from "@mui/material/Slider"

import '../App.css'

const Charlength = (props) => {
    const { Password } = props;
    const PassLength = Password.length;
    return (
        <>
            <div className='charlength'>
              <span>Character Length</span>
                <div className='count'> {PassLength}</div>
            </div>
            <div className="slider">
            <Slider value={PassLength} aria-label="Default" max={50}/>
            </div>
        </>
    )
}

export default Charlength;