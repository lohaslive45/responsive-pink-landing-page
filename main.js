//====== menu show y hidden ======
const navMenu = document.getElementById('nav-menu')         //====== 菜單【內容】 ======
const toggleMenu = document.getElementById('nav-toggle')    //====== 菜單【展開 三 圖示】 ======
const closeMenu = document.getElementById('nav-close')      //====== 菜單【關閉 X 圖示】 ======

// SHOW 展開菜單
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN 關閉菜單
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

//====== mousemove home img 滑鼠滑過主頁 【圖片微動特效】  ===========
document.addEventListener('mousemove',move)

function move(e){
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed') 

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}

//====== gasp animation 向上浮出 動畫
//nav 導行列
gsap.from('.nav_logo, .nav_toggle', {opacity: 0, duration: 1, delay: 2, y:10})
gsap.from('.nav_item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stragger: 0.2})

//home 主頁
gsap.from('.home_title', {opacity: 0, duration: 1, delay: 1.6, y: 30})
gsap.from('.home_description', {opacity: 0, duration: 1, delay: 1.8, y: 30})
gsap.from('.home_button', {opacity: 0, duration: 1, delay: 2.1, y: 30})
gsap.from('.home_img', {opacity: 0, duration: 1, delay: 1.31, y: 30})