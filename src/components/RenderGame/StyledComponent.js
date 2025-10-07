import styled from 'styled-components'

// Import Google Fonts
const GlobalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Bree+Serif:wght@400&family=Roboto:wght@400;500;600;700&display=swap');
`

export const GameContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Bree Serif', serif;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 20px 40px;
  margin-bottom: 50px;
`

export const Title = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif', serif;
  font-size: 24px;
  margin: 0;
  line-height: 1.2;
`

export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px 30px;
  text-align: center;
  min-width: 100px;
`

export const ScoreLabel = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif', serif;
  font-size: 16px;
  margin: 0 0 10px 0;
  font-weight: 600;
`

export const ScoreText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  color: #223a5f;
  margin: 0;
  font-weight: bold;
`

export const GameChoices = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  list-style: none;
  padding: 0;
  margin: 0 0 50px 0;
  max-width: 500px;
`

export const ChoiceButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

export const ChoiceImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`

export const GameResultContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`

export const PlayerChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const PlayerLabel = styled.p`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;
`

export const ResultImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`

export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0;
  text-align: center;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: 'Bree Serif', serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`

export const RulesButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: 'Bree Serif', serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RulesImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #223a5f;

  &:hover {
    color: #000;
  }
`
