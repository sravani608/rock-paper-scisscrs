import {Button, ButtonImage} from '../styledComponents'

const Buttons = props => {
  const {data, changeYourId} = props
  const {id, image} = data
  let testId = ''
  if (id === 'ROCK') {
    testId = 'rockButton'
  } else if (id === 'PAPER') {
    testId = 'paperButton'
  } else {
    testId = 'scissorsButton'
  }

  const select = () => {
    changeYourId(id)
  }

  return (
    <li>
      <Button data-testid={`${testId}`} onClick={select}>
        <ButtonImage src={image} alt={id} />
      </Button>
    </li>
  )
}

export default Buttons
