import { Button } from "@nextui-org/react";

const ButtonCompo = () => {
  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <Button style={{ padding: 20, margin: 50 }} size="55px" color="primary">
        Button
      </Button>
    </div>
  );
};

export default ButtonCompo;
