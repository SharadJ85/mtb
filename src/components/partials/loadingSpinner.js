import React, {useState} from 'react';
import "../../assets/loadingSpinner.sass"

const LoadingSpinner = () => {
  const [spinner, setSpinner] = useState(true);
  setTimeout(() => setSpinner(false), 15000);
  if (spinner) {
    return (<div className="spinner icon-spinner-5" aria-hidden="true" />)
  } else {
    return (
      <div>
        <h3 className="text-danger font-weight-bold">
          Network Error:
            <div>You have <strong>Slow</strong> or <strong>No</strong> Internet connection</div>
        </h3>
      </div>)
  }
};

export default LoadingSpinner;