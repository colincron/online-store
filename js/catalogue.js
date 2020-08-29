
// Global vars (array)
var catalogue=[]; //declare array

function fetchData(){
    // get data from server
    // use object literal
    /*catalogue = [
        {code:'001',
         title: 'Iphone 11',
         price: 1000.00,
         category: 'Phones',
         image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566960958082"
        },
        {code:'002',
         title: 'Samsung TV',
         price: 2000.00,
         category: 'Electronics',
         image: "https://images.idgesg.net/images/article/2019/07/ru8000_006_dynamic1_black_ns-small-100801235-large.jpg"
        },
        {code:'003',
         title: 'Speakers',
         price: 100.00,
         category: 'Sound',
         image: "https://www.adorama.com/images/Large/bo8344021100.jpg"
        }
    ] */

    $.ajax({
        url: 'http://restclass.azurewebsites.net/api/points',
        type: 'GET',
        success:function(allItems){
            console.log(allItems);
            for(var i = 0; i < allItems.length;i++){
                if(allItems[i].user === "Colin"){
                    let item = allItems[i];
                    catalogue.push(item);
                    console.log(catalogue);
                }
            }
            displayCatalogue();
            // travel the array
            // check my user
            // push my items into the array
        },
        error:function(details){
            console.log('Error getting data', details);
        }
    });
    // other instructions
}

function displayCatalogue(){
    //travel array of items with a for loop
    // get each item
    // display the item on the html
    for(var i = 0; i < catalogue.length;i++ ){
        var item = catalogue[i]; //this will get the item from the catologue
        var syntax=`
            <div class="item">
                <h3>${item.title}</h3>
                <img src="${item.image}">
                <p class="itemPrice"><strong>$${item.price}</strong></p>
                <p>Category: ${item.category}</p>
                <p><em>Code: ${item.code}</em></p>
            </div>
        `;
        $('#catalogueContainer').append(syntax);
    }
}

function init(){
    console.log("Catalogue page");
    fetchData();
    displayCatalogue();
}

window.onload=init;