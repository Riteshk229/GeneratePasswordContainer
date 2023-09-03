import '../App.css'
import generate from '../assets';
import PasswordStrengthBar from 'react-password-strength-bar';

const displayStrength = (props) => {
  const { Password, setPassword , valid} = props;
  
  
  const handleClick = () => {
    const password = generate();
    setPassword(password);
  }
    return (
        <>
          <div>
            <span style={{ textTransform: "uppercase" }}> Strength</span>
            {
              valid
              ?
                <div className='strength'>
                  <PasswordStrengthBar
                    password={Password}
                    minLength={8}
                  />
                </div>
              : null
            }

            </div>
            <button className="submit" onClick={handleClick}>generate</button>
        </>
    )
}

export default displayStrength;