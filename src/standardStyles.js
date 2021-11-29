import styled from 'styled-components';
import { colors } from './globalStyles';

const Logo = styled.img`
  display: inline-block;
  width: 300px;
  margin-top: 50px;
`;

const StyledForm = styled.form`
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FormField = styled.input`
  width: 100%;
  max-width: 310px;
  height: 45px;
  border-radius: 5px;
  margin: 3px 0;
  border: 1px ${colors.color0} solid;
  background-color: ${(props) =>
    props.disabled ? `${colors.color0}` : `${colors.color4}`};
  padding-left: 10px;
  font-size: 20px;
`;

const FormButton = styled.button`
  width: 100%;
  max-width: 310px;
  height: 45px;
  border-radius: 5px;
  margin: 3px 0;
  background-color: ${(props) =>
    props.disabled ? `${colors.color1}` : `${colors.color2}`};
  color: ${colors.color4};
  font-size: 20px;
  border: none;
`;

const StandardLink = styled.a`
  margin-top: 20px;
  color: ${colors.color2};
  font-size: 14px;
`;
const FormWarning = styled.span`
  font-size: 16px;
  margin: 5px 0;
  color: ${colors.color8};
`;
const Title = styled.h1`
  font-size: 23px;
  color: ${colors.color3};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 15px 100px 15px;
`;

const WeekContainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 10px;
`;

const WeekDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid ${colors.color0};
  border-radius: 3px;
  margin-right: 5px;
  color: ${(props) =>
    props.selected ? `${colors.color4}` : `${colors.color0}`};
  background-color: ${(props) =>
    props.selected ? `${colors.color0}` : `${colors.color4}`};
`;

export {
  Logo,
  StyledForm,
  FormButton,
  FormField,
  FormWarning,
  StandardLink,
  Title,
  Container,
  WeekContainer,
  WeekDay,
};
