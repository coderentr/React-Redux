import Counter from './component/Counter';
import IncreaseCounter from './component/IncreaseCounter';
import DexreaseCounter from './component/DexreaseCounter';
import IncreaseByTwoCounter from './component/IncreaseByTwoCounter';
import { React } from "react";

function App() {
  return (
    <div>
     <Counter/>
     <IncreaseCounter/>
     <DexreaseCounter/>
     <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
