function highlightButton() {
    const button = document.querySelector('.chat-btn');
    button.style.backgroundColor = '#d0d0d0';
    setTimeout(() => {
        button.style.backgroundColor = '#fff';
    }, 300);
}

