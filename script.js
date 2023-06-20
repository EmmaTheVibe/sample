const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-hero');
        } else{
            entry.target.classList.remove('show-hero');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hero');
hiddenElements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-ft');
        } else{
            entry.target.classList.remove('show-ft');
        }
    })
})
const hiddenElements2 = document.querySelectorAll('.features');
hiddenElements2.forEach((el) => observer2.observe(el))

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-dt');
        } else{
            entry.target.classList.remove('show-dt');
        }
    })
})
const hiddenElements3 = document.querySelectorAll('.more-details');
hiddenElements3.forEach((el) => observer3.observe(el))

const buttons = document.querySelectorAll(".btn")
buttons.forEach(active => {
    active.addEventListener("click", () => {
        document.querySelector('.clicked')?.classList.remove('clicked')
        active.classList.add('clicked')
    })
})
function receive(){
    const img1 = document.querySelector(".iphone")
    img1.setAttribute('src', "images/receive.png") 
    
    const transferText = document.querySelector(".heading")
    transferText.innerText = "Receive Money"
    
    const transferPrg = document.querySelector(".prg")
    transferPrg.innerText = "Say goodbye to complicated payment methods and delays. Now, you can easily receive money instantly from anyone, anywhere. Simplify your payment collection with Parkway Wallet using a unique account ID created."
}

function transfer(){
    const img2 = document.querySelector(".iphone")
    img2.setAttribute('src', "images/transfer.png")

    const transferText = document.querySelector(".heading")
    transferText.innerText = "Transfer Money"
    
    const transferPrg = document.querySelector(".prg")
    transferPrg.innerText = "No more worries about delayed or failed transactions. Parkway Wallet enables you to send money effortlessly to any bank of your choice. With just a few taps, you can transfer funds quickly and safely, allowing you to fulfil your financial obligations without any hassles. Enjoy peace of mind knowing that your transactions are completed smoothly and promptly."
}

function fund(){
    const img3 = document.querySelector(".iphone")
    img3.setAttribute('src', "images/fund.png")

    const transferText = document.querySelector(".heading")
    transferText.innerText = "Fund Wallet"
    
    const transferPrg = document.querySelector(".prg")
    transferPrg.innerText = "Instantly top-up your wallet using your card, USSD codes, or a simple bank transfer. Parkway Wallet ensures that your funds are readily available whenever needed, enabling you to make seamless payments and enjoy uninterrupted services."
}