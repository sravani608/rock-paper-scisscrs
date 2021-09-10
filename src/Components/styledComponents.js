import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  font-family: 'Roboto';
  height: 100vh;
`
export const Header = styled.div`
  border: 2px solid #ffffff;
  border-radius: 15px;
  padding: 15px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`
export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.h1`
  font-size: 15px;
  color: #ffffff;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding: 10px;
`
export const ScoreTitle = styled.p`
  color: #223a5f;
  font-size: 15px;
`
export const Score = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-family: 'Roboto';
`
export const ButtonContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`
export const Button = styled.button`
  padding: 0;
  margin: 15px;
  border: none;
  outline: none;
  background-color: transparent;
`
export const ButtonImage = styled.img`
  width: 150px;
  height: 150px;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ParticipantContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 30px;
  margin-top: 20px;
`
export const Result = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: #ffffff;
`
export const PlayAgain = styled.button`
  padding: 15px;
  border-radius: 15px;
  border: none;
  background-color: #ffffff;
  color: #223a5f;
  width: 250px;
  margin-bottom: 30px;
`
export const ModalContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
export const ImageContainer = styled.div`
  padding: 20px;
`
export const PopupImage = styled.img`
  height: 400px;
  width: 400px;
`
export const CloseButton = styled.button`
  height: 20px;
  width: 20px;
  background-color: #000000;
  color: #ffffff;
  margin-left: 20px;
  margin-bottom: 420px;
  border: none;
`
export const PopupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
