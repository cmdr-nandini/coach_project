export function ashya() {
    document.addEventListener('DOMContentLoaded', () => {
        const btns = document.querySelectorAll('button');

        btns.forEach(e => {
            e.addEventListener('click', () => {
                e.classList.toggle('red')
            })
        })

        btns[btns.length - 1].addEventListener('click', (e) => {
            e.classList.add('blue')
        })
    });
}