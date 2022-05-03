import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const titles = ['Coder', 'Gamer', 'Creator'];
        const cursor = document.querySelector('.home-header-cursor');

        let index = 0;
        let del = true;
        let pause = false;
        let pauseCounter = 0;
        let pauseMax = 15; // Pause typewriter for delay * pauseMax
        let delay = 200;
        let cursorInterval;
        let cursorDelay = 500;

        setInterval(() => {
            let title = document.querySelector('.home-header-title');

            if (del && title.innerHTML.length > 0) {
                title.innerHTML = title.innerHTML.slice(0, -1);

                // If all letters deleted, start typing
                if (title.innerHTML.length === 0) {
                    index++;
                    del = false;
                }
                // If last title finished, reset loop
                if (index === titles.length) {
                    index = 0;
                }
            }
            else if (!del) {
                if (!pause) {
                    title.innerHTML += titles[index][title.innerHTML.length];
                    // If last letter finished, pause interval
                    if (title.innerHTML.length === titles[index].length) {
                        pause = true;
                        // Set cursor interval
                        cursorInterval = setInterval(() => {
                            cursor.classList.toggle('cursor-hidden');
                        }, cursorDelay);
                    }
                } else if (pauseCounter < pauseMax) {
                    pauseCounter++;
                } else {
                    // If pauseMax is reached, unpause typewriter and start deleting
                    pause = false;
                    pauseCounter = 0;
                    del = true;
                    clearInterval(cursorInterval);
                }
            }
        }, delay);
    }, []);

    return (
        <section id="home">
            <div className="home-header">
                <h1>
                    <div className="home-header-text">I am a</div>
                    <div>
                        <span className="home-header-title">Coder</span>
                        <span className="home-header-cursor">|</span>
                    </div>
                </h1>
            </div>
        </section>
    )
};

export default Home;