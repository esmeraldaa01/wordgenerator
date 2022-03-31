import React, {useState} from "react";
import styled , {css} from "styled-components";

const Center = styled.div`
  position: absolute;
  top:35%;
  left: 37%;
  display: flex;
  flex-direction: column;
`;

const Choices = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Choice  = styled.p`
  border-radius: 50px;
  padding: 10px;
  background-color: orange;
  ${props => props.active && css`
    background: blueviolet;
  `}
`;
const Title  = styled.p`
  font-weight: bold;
  color: #07074d;
`;


const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Page = () => {
    const [text , setText] = useState('');
    const ref = React.useRef({})

    const [activeIndex, setActiveIndex] = React.useState(null);


    let str = text.split(/[,]/);
    if(str.length >= 1)  str.pop()
    // let random =  str[Math.floor(Math.random() * str.length)];


        // setInterval(() => {
        //     for(let j = 0; j < 4; j++) {
        //         setTimeout(() => {
        //             for (let i = 0; i < str.length; i++) {
        //                 setCurrentIndex(i);
        //             }
        //             return () => clearTimeout();
        //         }, 100);
        //         return () => clearTimeout();
        //         setCurrentIndex(2)
        //     }
        //     return () => clearInterval();
        //     setCurrentIndex(2);
        // }, 5000)

    const changeDirection = (index = 0, count) => {
        if (count > ref.current.maxCount) return

        if (index === str.length) index = 0;

        setTimeout(() => {
            setActiveIndex(index);
            changeDirection(index + 1, count + 1);
        }, 200);
    }

    const handleStartAnimation = () => {
        ref.current.maxCount = getRandomNumber(1, 10);
        changeDirection(0, activeIndex)
    }


    const handleChange = (e) => {
        if(e.target.value.endsWith(',')){
            setText(e.target.value)
        }
    }

const handleEnter = (e) => {
    const textarea = document.getElementById('output');
        if(e.key === 'Enter'){
            textarea.value = '';
            handleStartAnimation()
        }
}


    return (
        <Center>
            <Title>Insert your words , seperated with comma !</Title>
          <textarea id='output' onKeyUp={handleEnter}  onChange={handleChange} rows={5} cols={45}/>
           <Choices>{str.map((x, index) => {
         if(x === "") return null
               return (
              <Choice active={index === activeIndex} key={index}>{x}</Choice>
                   )
           })}</Choices>
        </Center>
    )
}
export default Page;

