const viewCart = () => {
    let allcart = JSON.parse(localStorage.getItem('cart'));
    let tbl = "";
    let finaltotal = 0;
    allcart.map((val)=>{
        finaltotal += val.price * val.qty
        tbl += `
                    <tr>
                        <td>
                            <img src="${val.image}" width="100"/>
                        </td>
                        <td>${val.name}</td>
                        <td>${val.price}</td>
                        <td>
                            <input value="${val.qty}" type="number" onchange="liveEditCart(${val.id})" id="qty_${val.id}" class="form-control w-25"/>
                        </td>
                        <td>
                            ${val.price * val.qty}
                        </td>
                        <td>
                            <button onclick="cartDelete(${val.id})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                            <button onclick="editCart(${val.id})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                        </td>
                    </tr>
                `
    })
    document.getElementById('cart').innerHTML = tbl;
    document.getElementById('finaltotal').innerHTML = `Final Total :- ${finaltotal}`
}

viewCart();

const cartDelete = (id) => {
    let allcart = JSON.parse(localStorage.getItem('cart'));
    let ans = allcart.filter((item)=>{
        return item.id != id;
    })
    localStorage.setItem('cart',JSON.stringify(ans));
    alert("Cart is delete")
    viewCart();
}
const editCart = (id) => {
    let qty = parseInt(document.getElementById(`qty_${id}`).value);
    let allcart = JSON.parse(localStorage.getItem('cart')); 
    let update = allcart.map((item)=>{
        if(item.id == id){
            item.qty = qty
        }
        return item
    })
    localStorage.setItem('cart',JSON.stringify(update));
    alert("cart successfully update")
    viewCart();
}

const liveEditCart = (id) => {
    let qty = parseInt(document.getElementById(`qty_${id}`).value);
    let allcart = JSON.parse(localStorage.getItem('cart'));
    let update = allcart.map((item)=>{
        if(item.id == id){
            item.qty = qty
        }
        return item
    })
    localStorage.setItem('cart',JSON.stringify(update));
    viewCart(); 

}


//bhakti