$(function() {
  $("form#sidesForm").submit(function(event) {
    $("#equ, #iso, #scal, #notTri").hide();
    var s1 = parseInt($("input#s1input").val());
    var s2 = parseInt($("input#s2input").val());
    var s3 = parseInt($("input#s3input").val());

        if (s1, s2, s3) {
        if (s1 >= s2 + s3 || s2 >= s3 + s1 || s3 >= s2 + s1) {
          $("#notTri").show();

        }
        else if (s1 === s2 && s2 === s3 && s3 === s1) {
          $("#equ").show();

        }
        else if (s1 === s2 || s2 === s3 || s3 === s1) {
          $("#iso").show();

        }
        else if (s1 != s2 && s2 != s3 && s3 != s1) {
          $("#scal").show();
        }
      }
        else {
          alert("Enter valid values");

        }





    event.preventDefault();

});

});

// $(document).ready(function() {
//   console.log("before function");
//
//
//   $("form#sidesForm").submit(function(event) {
//     $("#equ, #iso, #scal, #notTri").hide();
//     var s1 = parseInt($("input#s1input").val());
//     var s2 = parseInt($("input#s2input").val());
//     var s3 = parseInt($("input#s3input").val());
//
//     console.log("before if");
//     if (s1 > 0 && s2 > 0 && s3 > 0) {
//       if (s1 === s2 || s2 === s3 || s3 === s1) {
//         if (s1 === s2 && s2 === s3) {
//         $("#equ").show();
//         console.log("if");
//         }
//         else if (s1 != s2 && s2 != s3 && s3 != s1) {
//           $("#scal").show();
//           console.log("2nd else");
//         }
//         else if (s1 != s2 || s2 != s3 || s3 != s1) {
//           $("#iso").show();
//           console.log("1st else");
//         }
//
//       }
//         // else {
//         //   $("notTri").show();
//         //   console.log("last else");
//         // }
//     }
//     console.log("before prevent");
//     event.preventDefault();
//   });
//
// });
//
// // else if (s1 >= s2 + s3 || s2 >= s3 + s1 || s3 >= s2 + s1) {
// //   $("notTri").show();
// //   console.log("new else");
// // }
//
