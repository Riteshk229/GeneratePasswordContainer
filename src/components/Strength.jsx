import '../App.css'
import generate from '../assets';
import PasswordStrengthBar from 'react-password-strength-bar';

const Strength = (props) => {
  const { Password, setPassword } = props;
  
  
  const handleClick = () => {
    const password = generate();
    setPassword(password);
  }
    return (
        <>
            <div>
            <span style={{textTransform : "uppercase"}}> Strength</span>
            <div className='strength'>
              <PasswordStrengthBar
                password={Password}
                minLength={8}
              />
            </div>
            </div>
            <button className="submit" onClick={handleClick}>generate</button>
        </>
    )
}

export default Strength;