
import Checkbox from './CheckBox';

const List = (props) => {
  const { password, validate, setValidate } = props;
  

    return (
        <>
            <div className="Uppercase"> 
              <Checkbox  />
              <span> Include UpperCase Letter</span>    
            </div>
            <div>
              <Checkbox />
              <span> Include LowerCase Letter</span>
            </div>
            <div>
              <Checkbox />
              <span>  Include Numbers</span>
            </div>
            <div>
              <Checkbox />
              <span>  Include Symbols</span>
            </div>
        </>
    )
}

export default List;