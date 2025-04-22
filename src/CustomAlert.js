import React, { useState } from "react";

function CustomAlert() {
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState(null);

  function handleConfirm() {
    setResponse("Yes");
    setShow(false);
  }

  function handleCancel() {
    setResponse("No");
    setShow(false);
  }

  return (
    <div>
      <button onClick={() => setShow(true)}>Show Alert</button>

      {show && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3>Are you sure?</h3>
            <button onClick={handleConfirm}>Yes</button>
            <button onClick={handleCancel}>No</button>
          </div>
        </div>
      )}

      {response && <p>User clicked: {response}</p>}
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default CustomAlert;