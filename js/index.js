
const ctaBanner = document.querySelector('.cta-banner');
const ctaContent = document.querySelector('.cta-content');
const loginFormBox = document.querySelector('.form-box')


document.querySelectorAll('.toggle-form').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const formContainer = document.querySelector('.form-container');
        formContainer.querySelectorAll('.form-box').forEach(form => {
            form.classList.toggle('active');
        });
    });
});

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
    document.body.style.setProperty('--form-display', 'block');
    ctaBanner.style.display = 'none';
});

addEventListener('click', (event) => {
    if(!event.target.closest('.cta-banner') &&
        event.target !== ctaContent){
        ctaBanner.style.display = 'none'
    }

})

addEventListener('click', (event) => {
    if(!event.target.closest('.form-container') &&
        event.target !==loginFormBox && event.target !== loginBtn  ){
        document.body.style.setProperty('--form-display', 'none');
    }

})


const closeFormHandler = () => {
    document.body.style.setProperty('--form-display', 'none');
    ctaBanner.style.display = 'block';
};


const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', () => {
    document.body.style.setProperty('--form-display', 'none');
})

const closeBtn1 = document.getElementById('close1');
closeBtn1.addEventListener('click', () => {
    document.body.style.setProperty('--form-display', 'none');
})

const closeBtn2 = document.getElementById('close2');
closeBtn2.addEventListener('click', () => {
    document.body.style.setProperty('--form-display', 'none');
})

const closeBtn3 = document.getElementById('close3');
closeBtn3.addEventListener('click', () => {
    document.body.style.setProperty('--form-display', 'none');
})
