let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        //monitori//
        name: 'Gaming Monitor',
        image1: 'images/aqcia-monitorze.png',
        image2: 'images/aqcia-monitorze.png',
        old_price: 'GEL: 2200',
        curr_price: '1500'
    },
    {
        //yursasmenebi//
        name: 'Headphones',
        image1: './images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2: './images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        old_price: 'GEL: 350',
        curr_price: '200'
    },
    {
        //gaming pc//
        name: 'Gaming Pc',
        image1: './images/aqcia.png',
        image2: './images/aqcia.png',
        old_price: 'GEL: 4000',
        curr_price: '2000'
    },
    {
        //klaviatura//
        name: 'Gaming Keyboard',
        image1: './images/aqcia-klaviaturaze.png',
        image2: './images/aqcia-klaviaturaze.png',
        old_price: 'GEL: 400',
        curr_price: '300'
    },
    {
        //Bluetooth headset//
        name: 'Bluetooth headset',
        image1: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        old_price: 'GEL: 80',
        curr_price: '50'
    },
    {
        name: 'Bluetooth headset',
        image1: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        image2: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        old_price: 'GEL: 100',
        curr_price: '80'
    },
    {
        name: 'Gaming Headphones',
        image1: './images/JBL_QUANTUM ONE_Product Image_Angle.png',
        image2: './images/JBL_QUANTUM ONE_Product Image_Angle.png',
        old_price: 'GEL: 200',
        curr_price: '90'
    },
]



let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})

