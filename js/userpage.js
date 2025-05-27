function updateNickname() {
    const nicknameInput = document.getElementById('nickname');
    const newNickname = nicknameInput.value.trim();

    if (!newNickname) {
        nicknameInput.style.borderColor = '#ff4444';
        return;
    }

    nicknameInput.style.borderColor = '#4CAF50';
    setTimeout(() => {
        nicknameInput.style.borderColor = '#ddd';
    }, 1000);


    localStorage.setItem('userNickname', newNickname);
}


document.addEventListener('DOMContentLoaded', () => {
    const savedNickname = localStorage.getItem('userNickname');
    if (savedNickname) {
        document.getElementById('nickname').value = savedNickname;
    }
});