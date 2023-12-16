import React, { useEffect, useRef, useState} from 'react';
import './Header.css';
import computer from '../assets/computer.png';
import textOptions from './textOptions.json';

/*const codeSnippet = `
    int main() {
        printf("Hello World");
        return 0;
    }
`;
*/

const randomIndex = Math.floor(Math.random() * textOptions.options.length);
const optionsArray = textOptions.options[randomIndex];

const Header = () => {
    const textElementRef = useRef(null);
    const [animationInProgress, setAnimationInProgress] = useState(false);

    useEffect(() => {
        const textToType = optionsArray; //changed this line
        const totalLength = textToType.length;

        function updateTextOnScroll() {
            const scrollPercentage =
                (document.documentElement.scrollTop + document.body.scrollTop) /
                ((document.documentElement.scrollHeight - document.documentElement.clientHeight)/4);

            const index = Math.floor(scrollPercentage * totalLength);

            const displayedText = textToType.substring(0, index);
            textElementRef.current.innerHTML = displayedText;

            if (index >= totalLength) {
                setAnimationInProgress(true);
                console.log(animationInProgress)
            }
        }

        window.addEventListener('scroll', updateTextOnScroll);

        return () => {
            window.removeEventListener('scroll', updateTextOnScroll);
        };
    }, []);


    return (
    <div className='home'>
        <div className='home-container'>
            <img src={computer} alt='computer'/>
            <div className='code-container' >
                <pre ref={textElementRef}></pre>
            </div>
        </div>
        <div className='h-wrapper'>
        <h1>
            Coding <br/>
            & <br />
            Cyber
        </h1>
        </div>
    </div>
    )
}

export default Header