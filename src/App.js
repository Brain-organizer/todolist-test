import {useRef, useState} from 'react';
import './App.css';
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent};
  margin:30px;
`;

const TitleElement = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const CardElement = styled.div`
  height: 150px;
  width: 150px;
  margin: 20px;
  border: solid 3px green;
  padding: 15px;
  border-radius: 10px;
  word-wrap: break-word;
`

const ListAdder = ({list, setList}) => {
  const newid = useRef(0);
  const [textinput,setTextinput] = useState('');

  const buttonOnClickHandler = () => {
    setList([...list, {id: newid.current++, content:textinput}]);
  }
  const inputOnChangeHandler = (event) => {
    setTextinput(event.target.value);
  }
  
  return (
    <FlexContainer justifyContent='center'>
      <input type='text' value={textinput} onChange={inputOnChangeHandler}></input>
      <button onClick={buttonOnClickHandler}>추가하기</button>
    </FlexContainer>
  )
};

const Title = ({name}) => {
  return (
    <FlexContainer justifyContent='center'>
      <TitleElement>{name}</TitleElement>
    </FlexContainer>
  )
};

const Card = ({content, id}) =>{
  return (
    <CardElement key={id}>{content}</CardElement>
  )
}

const Cards = ({list}) => {
  return (
    <FlexContainer justifyContent='flex-start'>
      {
        list.map((item) => <Card content={item.content} id={item.id}/>)
      }
    </FlexContainer>
  )
};

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <ListAdder list={todos} setList={setTodos}/>
      <Title name='Todo List'/>
      <Cards list={todos}/>
    </>
    
  );
}

export default App;
