import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const TopButton = () => {
    window.addEventListener('scroll', () => {
        const topBtn = document.querySelector('.top-btn');

        if (window.scrollY > 500) {
            topBtn.classList.add('top-btn-show');
        } else {
            topBtn.classList.remove('top-btn-show');
        }
    });

    return (
        <a className="top-btn" href="#home"><button><FontAwesomeIcon icon={faChevronUp} /></button></a>
    )
};

export default TopButton;