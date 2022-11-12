import { useState } from 'react';
import Form from "./components/Form";
import ThanksWindow from './components/ThanksWindow';
import Video from './components/Video';
import Tittle from './components/Tittle';

function App() {
  const [isRegister, setIsRegister] = useState(false);

  let leftWindow;

  if (isRegister) {
    leftWindow =  <ThanksWindow/>
  } else {
    leftWindow = <Form setIsRegister={setIsRegister}/>
  }

  return (
    <div className="container">
      <Tittle />
      {leftWindow}
      <Video />
    </div>
  )
}

export default App;