import { faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MessageForm = ({props}) => {

    const [msjForm, statusMsj] = props;
  
    return (
      <>
          <div className={`contact__show_msj ${(statusMsj===200)?'ok':'error'}`}>
              <p className='contact__text'>
                  {msjForm}
              </p>
              {
                (statusMsj === 200) 
                ? <FontAwesomeIcon icon={faCheckCircle} />
                : <FontAwesomeIcon icon={faExclamationTriangle} />
              }
              
          </div>
      </>
  
    )
  }