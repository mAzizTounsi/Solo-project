// //slide-button
// $(document).on('click','.first-btn,.second-btn'),function(){
//     //(this) refers to first and second btn;
//     $(this).addClass('active-btn').siblings().removeClass('active-btn')
// };
// //
// //slide-text
//  $(document).on('click','.first-btn'),function(){
//      $('.text').addClass('active-text-slide').siblings('.text1').removeClass('active-text-slide')
//  };

//  $(document).on('click','.second-btn'),function(){
//     $('.text1').addClass('active-text-slide').siblings('.text').removeClass('active-text-slide')
// };

// $('image-container').click(function () {
//     $('image-container1').attr('src', 'bmw.png'); 
// });

console.log('Hi from JS.js')

var cars = [
    {
        car_type : 'LAMBORGHINI',
        car_model : 'HURACAN PERFORMANTE',
        car_img : 'lamb.png'
    },
    {
        car_type : 'BMW',
        car_model : 'M5 Competition',
        car_img : 'bmw1.png'
    },
    {
        car_type : 'AUDI',
        car_model : 'RS6 ABT',
        car_img : 'audi.png'
    }
];

 function changeCar(car) {
     $('#car-type'). text(car.car_type);
     $('#car-model').text(car.car_model);
     $('#img-1').attr('src',car.car_img);
 }
//  function changeCar2(car){
//     $('#car-type2').text(car[1].car_type2);
//     $('#car-model2').text(car[1].car_model2);
//     $('#img-2').attr('src',car[1].car_img2)
//  }


// $('#car-type'). text(cars[0].car_type);
// $('#car-model').text(cars[0].car_model);
// $('#img-1').attr('src',cars[0].car_img);

changeCar(cars[0])

//  $('#car-type2').text(cars[1].car_type2);
//  $('car-model2').text(cars[1].car_model2);
//  $('#img-2').attr('src',car[1].car_img2);

 /////////// invoking the functions /////////////
/////////////////FIRST BTN ///////////////

$('#first-btn').on('click',function(){ 
    changeCar(cars[0]);
  });


  $('#second-btn').on('click',function(){ 
    changeCar(cars[1]);
  });

  /////////////SECOND BTN/////////////////////////

  $('#third-btn').on('click',function(){
      changeCar(cars[2]);
  });

