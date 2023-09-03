import '../App.css'

const Strength = (props) => {
    const { Password } = props;
    
    return (
        <>
            <div>
            <span style={{textTransform : "uppercase"}}> Strength</span>
            <div className='strength'>
              <span>Poor</span>
              <div className="barstength">
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
              </div>
            </div>
            </div>
            <button className="submit">generate</button>
        </>
    )
}

export default Strength;