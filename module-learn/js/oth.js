/*
  Recursion_____________________________

  function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)){
        if (Array.isArray(course)){
          students += course.length;
          for (let i = 0; i < course.length; i++){
            total += course[i].progres;
          }
        } else {
          for (let subCourse of Object.values(course)){
            students += subCourse.length;
            for (let i = 0; i < subCourse.length; i++){
              total += subCourse[i].progres;
            }
          }
        }
    } 
    return total / students;
  }
  console.log(getTotalProgressByIteration(students));

  function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)){
      let total = 0;

      for (let i = 0; i < data.length; i++){
        total += data[i].progres;
      }
      return [total, data.length];
    } else {
      let total = [0, 0];

      for (let subData of Object.values(data)){
        const subArray = getTotalProgressByRecursion(subData);
        total[0] += subArray[0];
        total[1] += subArray[1];
      }

      return total;
    }
  }
  const result = getTotalProgressByRecursion(students);
  console.log(result[0]/result[1]);

*/
/* 
  REGULAR EXPRESSION________________

  str.match(regexp) ищет совпадения
  str.replace(regexp, replacement) заменяет совпадения с regexp на replacement: все, если у регулярного выражения есть флаг g, иначе только первое.
  regexp.test(str) true or false if these is even one much

*/

/* 
  ________________________________
  import $ from 'jquery';

  $(document).ready(function(){
    $('.list-item:first').hover(function(){
      $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function(){
      $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function(){
      $('image:odd').animate({
        opacity: 'toggle',
        height: 'toggle'
      }, 2000);
    });
  });

*/

 /*
    EXPORT-IMPORT______________________
    'use strict';

    function sayHi(){
      console.log('Hello #2');
    }

    export default function  sumNum(a,b) {
      return console.log(a + b);
    }

    export {sayHi};

    import {sayHi as hello} from './main';
    import sumNum from './main';


    hello();
    sumNum(10, 5);

  */