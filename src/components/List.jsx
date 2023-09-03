
import Checkbox from './CheckBox';

const List = (props) => {
  const { validate} = props;

    return (
        <>
            <div className="Uppercase"> 
              <Checkbox selected = {validate.hasCap} />
              <span> Include UpperCase Letter</span>    
            </div>
            <div>
              <Checkbox selected = {validate.hasLow}/>
              <span> Include LowerCase Letter</span>
            </div>
            <div>
              <Checkbox selected = {validate.hasNumber}/>
              <span>  Include Numbers</span>
            </div>
            <div>
          <Checkbox selected={validate.has8dtgit} />
              <span>  Include Symbols</span>
            </div>
        </>
    )
}

export default List;