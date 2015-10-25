


// $(document).ready(function() {

//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
// });


// IFTTT Slottt Machine by Jen Hamon
// jen@ifttt.com
// github.com/jhamon

function buildSlotItem (imgURL) {
    return $('<div>').addClass('slottt-machine-recipe__item')
                     .css({'background-image': 'url(' + imgURL + ')'})
}

function buildSlotContents ($container, imgURLArray) {
  $items = imgURLArray.map(buildSlotItem);
  $container.append($items);
}

function popPushNItems ($container, n) {
    $children = $container.find('.slottt-machine-recipe__item');
    $children.slice(0, n).insertAfter($children.last());

    if (n === $children.length) {
      popPushNItems($container, 1);
    }
}

// After the slide animation is complete, we want to pop some items off
// the front of the container and push them onto the end. This is
// so the animation can slide upward infinitely without adding
// inifinte div elements inside the container.
function rotateContents ($container, n) {
    setTimeout(function () {
      popPushNItems($container, n);
      $container.css({top: 0});
    }, 300);    
}

function randomSlotttIndex(max) {
  var randIndex = (Math.random() * max | 0);
  return (randIndex > 3) ? randIndex : randomSlotttIndex(max);
}


function animate() {
  // do loop for random
  triggerIndex = randomSlotttIndex(triggers.length);
  actionIndex = randomSlotttIndex(actions.length);


  $trigger.animate({top: -triggerIndex*150}, 500, 'swing', function () {
     rotateContents($trigger, triggerIndex);
  });

  $action.animate({top: -actionIndex*150}, 700, 'swing', function () {
    rotateContents($action, actionIndex);
  });
}

$(function () {
  $trigger = $('#trigger_slot .slottt-machine-recipe__items_container');
  buildSlotContents($trigger, triggers);  
  $action = $('#action_slot .slottt-machine-recipe__items_container');
  buildSlotContents($action, actions);
  
  // setInterval(animate, 3500);
  //animate();
  $( "#animatebtn" ).on( "click", function() {
  animate();
  });

  $('#picform').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'picture_one_id'              : triggerIndex,
            'picture_two_id'             : actionIndex,
            'points'    : $('input[name=points]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : '/submit', // the url where we want to POST
            data        : formData, // our data object
            //dataType    : 'json', // what type of data do we expect back from the server
            //encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});

