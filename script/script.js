// SCROLL SUAVE
 function scrollSuave() {
    const linksMenu = document.querySelectorAll('.menu a[href^="#"]')
    console.log(linksMenu)

   function scrollLeve(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        console.log(href)

        section.scrollIntoView({
            behavior:'smooth',
            block: 'start'
        })
    }

    linksMenu.forEach(link => {
        link.addEventListener('click', scrollLeve)
    })
}

scrollSuave()

// slide

function slide() {
    const sections = document.querySelectorAll('section')
    console.log(sections)

    if(sections.length) {
        const windowMetade = window.innerHeight * 0.75
        console.log(windowMetade)
    

        function fade() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowMetade) < 0
            
            //    if(sectionTop < 300 ){
            //        section.classList.add('ativo')
            //    }
            
                //console.log(sectionTop)
                if(isSectionVisible) {
                    section.classList.add('ativo')
                }else{
                    section.classList.remove('ativo')
                }
            }) 
        
        }
        fade()

        window.addEventListener('scroll', fade)
    }
       
}

slide()

//menu

const menu = document.querySelector('.ativo1')
const img = document.querySelector('.hamburgue')

function esconderMenu() {
    menu.classList.toggle('menu-mobile')
}

img.addEventListener('click', esconderMenu)