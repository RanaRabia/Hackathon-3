export const productSchema ={
    name:"product",
    type:"document",
    title:"product",
    fields:[
        {name:'productId', type:"string", title:"Product ID"}
        ,{name:'name', type:"string", title:"Product Name"},
            , {name:'price', type:"string", title:"Price"},
                 {name:'category', type:"string", title:"Category"}
    ]
}