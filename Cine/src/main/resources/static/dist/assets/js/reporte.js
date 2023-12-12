let ingreso = document.getElementById("ingreso-pie")
let vendido = document.getElementById("vendidos-pie")
new Chart(ingreso,{
    type : 'pie',
    data : {
        labels :['Hola', 'Como','Estas'],
        datasets:[{
            backgroundColor : ["#34ebdb","#e1eb34","#46eb34"],
            data : [70,20,10]
        }]
    },
    options : {
        title:{
            display : true,
        },
        responsive : true
    }
})

new Chart(vendido,{
    type : 'pie',
    data : {
        labels :['Hola', 'Como','Estas'],
        datasets:[{
            backgroundColor : ["#34ebdb","#e1eb34","#46eb34"],
            data : [70,20,10]
        }]
    },
    options : {
        title:{
            display : true,
        },
        responsive : true
    }
})