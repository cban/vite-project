import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Buttons";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San francisco", "Tokyo", "London", "Paris"];
  const handleSelectitem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  const onhandleOnCLick = () => {
    setAlertVisibility(true);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectitem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Dismissable alert{" "}
        </Alert>
      )}
      <Button onClick={onhandleOnCLick}>Click me</Button>
    </div>
  );
}
export default App;
