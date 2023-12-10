import React, { useEffect, useRef, useState} from 'react';
import './Header.css';
import computer from '../assets/computer.png';

const codeSnippet = `
    int main() {
        printf("Hello World");
        return 0;
    }
`;

const Header = () => {
    const textElementRef = useRef(null);
    const [animationInProgress, setAnimationInProgress] = useState(false);

    useEffect(() => {
        const textToType = codeSnippet;
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
    </div>
    )
}

export default Header