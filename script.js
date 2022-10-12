const unread = document.getElementById('unread');
const unreadNatifications = document.querySelectorAll(".unreadNatification")
const points = document.querySelectorAll('.point');
const number = document.querySelector('.navNumber');
number.innerHTML = 3
unread.addEventListener("click",() =>{
    unreadNatifications.forEach(notification =>{
        notification.classList.remove('unreadNatification');
    })
    points.forEach(point =>{
        point.style.display = 'none'
    })
    number.innerHTML = 0;
})
