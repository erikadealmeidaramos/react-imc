import { usePerson } from "../hooks/usePerson.hook";

export default function ImcView(props) {

    const {className} = props;
    const [person] = usePerson();

    return (
        <div className={className}>
            Seu IMC &eacute; <span>{person.imc}</span>
            <strong>({person.imcDescription})</strong>
        </div>
    )
}