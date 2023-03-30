import { useInput } from "../../hooks/useInput.hook";
import { usePerson } from "../../hooks/usePerson.hook";

export default function ImcForm({onSubmit}) {
  const [person] = usePerson();

  const [height, heightProps, resetHeight] = useInput(0.0);
  const [weight, weightProps, resetWeight] = useInput(0.0);

  const submit = (evt) => {
    evt.preventDefault();

    onSubmit(height, weight);
    resetHeight();
    resetWeight();
  }

  return (
    <form onSubmit={submit}>
      <div className="row">
        <label>Altura</label>
        <input id="altura" {...heightProps} />
      </div>
      <div className="row">
        <label>Peso</label>
        <input id="peso" {...weightProps} />
      </div>
      <button type="submit" className="action">
        Calcular
      </button>
      <br /><br />
      <label>Altura:</label>&nbsp;<span>{person.height}</span>
      <br />
      <label>Peso:</label>&nbsp;<span>{person.weight}</span>
    </form>
  );
}
