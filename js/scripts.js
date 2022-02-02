//STEP ONE
const stepOneSection = document.querySelector('.step__one');
const stepTwoSection = document.querySelector('.step__two');
const stepThreeSection = document.querySelector('.step__three');
const verifyCodeBtn = document.querySelector('.btn__verify');

function showSteps() {
	stepOneSection.classList.add('step--checked', 'step--active');
	stepTwoSection.classList.replace('step--disabled', 'step--active');
	stepTwoSection.classList.remove('step--hiden');
	stepThreeSection.classList.replace('step--hiden', 'step--disabled');
};

function checkFormCompletion() {
	if (stepThreeSection.classList.contains('step--active')) {
		stepThreeSection.classList.remove('step--disabled');
		verifyCodeBtn.removeAttribute('disabled');
	}
}

function noConsent() {
	stepOneSection.classList.remove('step--checked', 'step--active');
	stepOneSection.classList.replace('step--checked', 'step--active');
	stepTwoSection.classList.add('step--hiden');
	stepThreeSection.classList.add('step--hiden');
	verifyCodeBtn.setAttribute('disabled', true);
};

function consent() {
 	showSteps();
	checkFormCompletion();
}

const inputNoConsent = stepOneSection.querySelector('#no-consent');
const inputConsent = stepOneSection.querySelector('#consent');
inputConsent.addEventListener('click', consent);
inputNoConsent.addEventListener('click', noConsent);

//STEP TWO
const allRadios = document.querySelectorAll('.step__two__radio');
allRadios.forEach(radio => radio.addEventListener('click', () => sendCodeBtn.removeAttribute('disabled')));

function createMessage() {
	const stepContent = stepThreeSection.querySelector('.step__content');
	const div = document.createElement('div');
	const p = document.createElement('p');
	div.setAttribute('class', 'step__content__message');
	stepContent.appendChild(div);
	div.appendChild(p);
} 

function showMessage() {
	const messageContainer = document.querySelector('.step__content__message');
	const messages = {
		text: 'An SMS has been sent to your mobile phone. Please check your messages ( *** *** 3456 ) to obtain the validation code.' ,
		voice: 'A voice message has been sent. Please check your voice mail at ( *** *** 3456 ) to obtain the validation code.' ,
		email: 'An email has been sent. Please check your mail box at f****@iqvia.com to obtain the validation code.' 
	};

	!messageContainer && createMessage();
	const message = document.querySelector('.step__content__message p');
	allRadios.forEach(radio => message.textContent = radio.checked ? messages[radio.id] : message.textContent);
}

function continueToStepThree() {
	stepTwoSection.classList.add('step--checked');
	stepThreeSection.classList.replace('step--disabled', 'step--active');
	showMessage();
};

const sendCodeBtn = stepTwoSection.querySelector('button.btn__send');
sendCodeBtn.addEventListener('click', continueToStepThree);

//STEP THREE
const stepThreeInput = stepThreeSection.querySelector('input#code');
const regex = /^[0-9]*$/;
const stepThreeSpan = stepThreeSection.querySelector('span');
const stepThreeError = stepThreeSection.querySelector('.step__content');
stepThreeInput.addEventListener('input', e => {
	const value = e.target.value;
	if (value && regex.test(value)) {
		stepThreeSpan.textContent = '';
		stepThreeSection.classList.add('step--checked');
		stepThreeError.classList.remove('step__content--error');
		verifyCodeBtn.removeAttribute('disabled')
	} else {
		stepThreeSpan.textContent = 'Only numbers are accepted';
		stepThreeSection.classList.remove('step--checked');
		stepThreeError.classList.add('step__content--error');
		verifyCodeBtn.setAttribute('disabled', true);
	}
});