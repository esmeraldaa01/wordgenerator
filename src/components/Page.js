import React, {useState} from "react";
import styled from "styled-components";

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
`;
const Title  = styled.p`
  font-weight: bold;
  color: #07074d;
`;

const Page = () => {
    const [text , setText] = useState('');
    const [showAnimation ,setShowAnimation] = useState(false)
    const [currentIndex, setCurrentIndex] = useState()


    let str = text.split(/[,]/);
    if(str.length >= 1)  str.pop()
    let random =  str[Math.floor(Math.random() * str.length)];


        setInterval(() => {
            for(let j = 0; j < 4; j++) {
                setTimeout(() => {
                    for (let i = 0; i < str.length; i++) {
                        setCurrentIndex(i);
                    }
                    return () => clearTimeout();
                }, 100);
                return () => clearTimeout();
                setCurrentIndex(2)
            }
            return () => clearInterval();
            setCurrentIndex(2)
        }, 5000)

    // Math.floor(Math.random())

    const handleChange = (e) => {
        if(e.target.value.endsWith(',')){
            setText(e.target.value)
        }
    }

const handleEnter = (e) => {
    const textarea = document.getElementById('output');
        if(e.key === 'Enter'){
            textarea.value = '';
            setShowAnimation(true);
        }
}

console.log(currentIndex , 'c')
    return (
        <Center>
            <Title>Insert your words , seperated with comma !</Title>
          <textarea id='output' onKeyUp={handleEnter}  onChange={handleChange} rows={5} cols={45}/>
           <Choices>{str.map((x, index) => {
         if(x === "") return null
               return (
              <Choice key={index} style={{ backgroundColor:  (index === currentIndex || showAnimation && (currentIndex === x))  ? 'blue': ''}}>{x}</Choice>
                   )
           })}</Choices>
        </Center>
    )
}
export default Page;

