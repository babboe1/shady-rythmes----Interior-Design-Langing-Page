const BACKDROP = document.getElementById('backdrop');
const MENU_BTN = document.querySelector('.MenuBtn');
const CLOSE_BTN = document.getElementById('close-btn');

const BackDrop = () => {
   BACKDROP.classList.toggle('visible');
};
const StopScroll = () => {
	document.body.classList.toggle('StopScroll');
};

const backDropHandler = () => {
   BackDrop();
   StopScroll();
};
const menuBtnHandler = () => {
   backDropHandler();
}


MENU_BTN.addEventListener('click', menuBtnHandler);
CLOSE_BTN.addEventListener('click', closeBtnHandler);
