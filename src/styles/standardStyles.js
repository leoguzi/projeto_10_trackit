import styled from "styled-components";

const Logo = styled.img`
  margin: 50px auto 0 auto;
  width: 300px;
`;

const FormField = styled.input`
  width: 100%;
  max-width: 310px;
  height: 45px;
  border-radius: 5px;
  margin: 3px 10px 3px 10px;
  border: 1px #d4d4d4 solid;
  background-color: ${(props) => (props.disabled ? "#d6d6d6" : "#FFFFFF")};
  padding-left: 10px;
  font-size: 20px;
`;

const FormButton = styled.button`
  width: 100%;
  max-width: 310px;
  height: 45px;
  border-radius: 5px;
  margin: 3px 10px 3px 10px;
  background-color: ${(props) => (props.disabled ? "#86ccff" : "#52b6ff")};
  color: #ffffff;
  font-size: 20px;
  border: none;
`;

const StandardLink = styled.a`
  margin-top: 20px;
  color: #52b6ff;
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 23px;
  color: #126ba5;
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
  margin-left: 5px;
`;

const WeekDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  margin-left: 5px;
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  background-color: ${(props) => (props.selected ? "#dbdbdb" : "#ffffff")};
`;

export {
  Logo,
  FormButton,
  FormField,
  StandardLink,
  Title,
  Container,
  WeekContainer,
  WeekDay,
};
