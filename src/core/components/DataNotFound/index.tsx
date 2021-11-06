import {Container} from './styles';

interface DataNotFoundProps {
  haveDate?: boolean;
}

export default function DataNotFound({haveDate = true}: DataNotFoundProps) {
  return (
    <Container>
      <p>
        <strong>Ops!</strong> Não foi encontrado nenhum dado 
        {haveDate && <span> para a data selecionada.</span>}
        {!haveDate && <span>!</span>}
      </p>
    </Container>
  )
}