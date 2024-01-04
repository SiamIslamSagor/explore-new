import { NextUIProvider } from "@nextui-org/react";

import "./App.css";
import ButtonCompo from "./components/Button";
import CardCompo from "./components/CardCompo";
import ModalCompo from "./components/ModalCompo";

function App() {
  return (
    <NextUIProvider>
      <div className="m-20 border-8 min-h-screen">
        <h1 className="text-center font-bold text-6xl my-10">hello</h1>
        <div className="flex items-center justify-center">
          <div>
            <ButtonCompo />
            <CardCompo />
            <ModalCompo />
          </div>
        </div>
        {/*  */}
      </div>
    </NextUIProvider>
  );
}

export default App;
