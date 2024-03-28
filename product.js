let productdata = [
    {
        name: "Plain",
        price: 40,
        qty: 1,
        image: './images/97.jpg',
        id: 21212
    },
    {
        name: "Paper Roast",
        price: 65,
        qty: 1,
        image: './images/98.jpg',
        id: 12134
    },
    {
        name: "Onion Roast",
        price: 80,
        qty: 1,
        image: './images/99.jpg',
        id: 1
    },
    {
        name: "Egg Parotta",
        price: 55,
        qty: 1,
        image: './images/100.jpg',
        id: 2
    },


]

const viewProduct = () => {
    let tbl = "";
    productdata.map((val) => {
        tbl += `
        <div class="col-md-3 pb-5">
            <div class="card">
                <img style="height:199px;object-fit:contain"  src="${val.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${val.name}</h5>
                <h5 class="card-title">Rs :- ${val.price}</h5>
        
                <a  onclick="AddCart(${val.id})" class="btn btn-primary" style="width : 100%">Add to cart</a>
            </div>
            </div>
        </div>
     `
    })
    document.getElementById('productdata').innerHTML = tbl
}
viewProduct();

let cart = [];
const AddCart = (id) => {

    let allproduct = productdata.find((item) => {
        return item.id == id
    })

    if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
        cart.push(allproduct);
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        let allcart = JSON.parse(localStorage.getItem('cart'));
        allcart.push(allproduct);
        localStorage.setItem('cart', JSON.stringify(allcart));
    }
    alert("Cart successfully add");



}