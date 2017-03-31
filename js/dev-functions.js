// (function() {                                                                   // Anon-Function
//   var DOM = {                                                                   // Object Literal
//     init: function() {                                                          // Anon-Function (Method inside Person Object)
//       this.el = $('section');                                                   // Statement (this = Person)
//       this.bindEvents();                                                        // Statement (Call bindEvents
//     },

//     bindEvents: function() {                                                    // Anon-Function (Method inside Person Object)

//       this.el.on('click', $.collapse(this.showMarkup));
//         $( "#effect" ).show( selectedEffect, options, 500, callback );          // Run the effect
//       ));                                        // Statement
//     },

//     showName: function(event) {                                                 // Anon-Function (Method inside Person Object)
//       event.preventDefault();                                                   // Statement (event.preventDefault = Stop event(form) from 'submitting' on load)
//       alert(this.form.find('input[type=text]')).val());                         // Statement
//     }
//   }

//   Person.init();                                                                // Initialize (Immediately After Top-Level Anon-Function Executes)
// })();

// Additional Notes
// -------------------------------------------------------------------------------------------------

/**
 * $.collapse() {Method} jQuery: function that takes assigns the appropriate name (or namespace) for the method passed
 * @param {Object} context Object: to which the context of the function should be set
 * @param {String} name Name: of the function, whose context will be changed (should be a property of the “context” object)
 */

$(function() {
  // function runEffect() {                                                        // Run the currently selected effect
  //   var selectedEffect = $( "#effectTypes" ).val();                             // Get effect type from
  //   $( "section" ).show( selectedEffect, options, 500, callback );              // Run the effect
  // };

  // function callback() {                                                         // Callback function to bring a hidden box back
  //   setTimeout(function() {
  //     $( "section:visible" ).removeAttr( "style" ).fadeOut();
  //   }, 1000 );
  // };

  // $( "h1" ).on( "click", function() {                                      // Set effect from select menu value
  //   runEffect();
  // });

  $('section').hide();

  $('h1').hover(function() {
    $(this).slideDown('slow');
  });


  $('h1').click(function() {
    $(this).next().toggle(250);
  });

});