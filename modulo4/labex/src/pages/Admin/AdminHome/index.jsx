import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";
import { goAdminCreateTrip, goBack, goTripDetails } from "../../../routes/coordinator";

export const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => goAdminCreateTrip(navigate)}>Criar Viagem</button>
      <button onClick={() => goTripDetails(navigate)}>Detalhes da viagem</button>
      <button onClick={() => goBack(navigate)}>Voltar página anterior</button>
    </>
  );
};
