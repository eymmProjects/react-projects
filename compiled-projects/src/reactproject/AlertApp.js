import Alert from "./components/Alert";
import React from "react";

function AlertApp() {
  return (
    <div className="container mx-auto">
      <Alert type={"success"} message={"Successful login"} />
      <Alert
        type={"info"}
        message={"Time triggered"}
        delay={true}
        delayTime={1000}
      />
    </div>
  );
}

export default AlertApp;
