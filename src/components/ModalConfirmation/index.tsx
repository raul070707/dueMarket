import { ModalConfirmation } from "./style";
import { Dispatch, SetStateAction } from "react";
import { HeaderModalComponent } from "../HeaderModal";
import { Button } from "../Button";

interface ModalConfirmationComponentProps {
  modalConfirmation: boolean;
  setModalConfirmation: Dispatch<SetStateAction<boolean>>;
}

interface TargetProps extends EventTarget {
  id: string;
}

// TESTAR COM O BOTÃO DE EXCLUIR PRODUTOS - TANTO PARA MERCADO TANTO PARA WISHLIST DO USUÁRIO

export const ModalConfirmationComponent = ({
  modalConfirmation,
  setModalConfirmation,
}: ModalConfirmationComponentProps) => {
  const handleEvent = (id: string) => {
    if (id === "modalConfirmation") {
      setModalConfirmation(false);
    }
  };

  return (
    <ModalConfirmation
      id="modalConfirmation"
      onClick={(e) => handleEvent((e.target as TargetProps).id)}
    >
      <div>
        <HeaderModalComponent setState={setModalConfirmation}>
          Deseja concluir a ação?
        </HeaderModalComponent>
        <div className="modalConfirmationButtons">
          <Button lightGreyForm onClick={() => console.log("SIM")}>
            Sim
          </Button>
          <Button blueForm onClick={() => setModalConfirmation(false)}>
            Não
          </Button>
        </div>
      </div>
    </ModalConfirmation>
  );
};
