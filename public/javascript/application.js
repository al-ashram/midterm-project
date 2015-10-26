$(document).ready(function() {      
   $('.carousel').carousel('pause');
});

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
  triggerIndex = randomSlotttIndex(triggers.length);
  actionIndex = randomSlotttIndex(actions.length);

  $trigger.animate({top: -triggerIndex*500}, 500, 'swing', function () {
     rotateContents($trigger, triggerIndex);
  });

  $action.animate({top: -actionIndex*500}, 700, 'swing', function () {
    rotateContents($action, actionIndex);
  });
}

$(function () {
  $trigger = $('#trigger_slot .slottt-machine-recipe__items_container');
  buildSlotContents($trigger, triggers);  
  $action = $('#action_slot .slottt-machine-recipe__items_container');
  buildSlotContents($action, actions);
  
  $( "#animatebtn" ).on( "click", function() {
    animate();
  });

  $('#picform').submit(function(event) {
    // get the form data
    var formData = {
        'picture_one_id'              : triggerIndex,
        'picture_two_id'             : actionIndex,
        'points'    : $('input[name=points]').val()
    };

    // process the form
    $.ajax({
        type        : 'POST', 
        url         : '/submit', 
        data        : formData, 
    })
    // using the done promise callback
    .done(function(data) {
        console.log(data); 
    });
    event.preventDefault();
  });

});

