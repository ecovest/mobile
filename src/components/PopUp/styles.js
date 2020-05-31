import styled from 'styled-components/native';

export const Background = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  overflow: hidden;
  min-height: 100%;
  height: auto;
  padding: 30px;
`;

export const PopUpContainer = styled.View`
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;

  ${(props) => (props.center ? 'align-items: center' : '')};
`;

export const PopUpTitleText = styled.Text`
  font-size: 20px;
  color: #f58220;

  font-weight: bold;
`;
