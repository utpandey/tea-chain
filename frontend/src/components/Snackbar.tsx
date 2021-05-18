import { useEffect } from 'react'
import { AiOutlineWarning, AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'

interface IProps {
  message: string,
  status?: string,
  clearError: () => void
}

const Snackbar = ({message, status, clearError}: IProps) => {
  let snackbarStatus = ''
  if (status === 'success') {
    snackbarStatus = 'snackbar_success';
  } else if (status === 'info') {
    snackbarStatus = 'snackbar_info';
  } else if (status === 'warning') {
    snackbarStatus = 'snackbar_warning';
  } else if (status === 'error') {
    snackbarStatus = 'snackbar_error';
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      clearError();
    }, 5000)
    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <div className={"snackbar__cont " + snackbarStatus}>
      { status === 'success' && <AiOutlineCheckCircle className="info_icon" /> }
      { status === 'info' && <AiOutlineInfoCircle className="info_icon" /> }
      { status === 'warning' && <AiOutlineWarning className="info_icon" /> }
      { status === 'error' && <BiErrorCircle className="info_icon" /> }
      <p className="info_text">
        { message }
      </p>
      <AiOutlineClose className="close_icon" onClick={clearError} />
    </div>
  )
}

export default Snackbar;
