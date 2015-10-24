$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});


// IFTTT Slottt Machine by Jen Hamon
// jen@ifttt.com
// github.com/jhamon

// var triggers = [
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/13/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/42/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/83/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/54/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/50/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/47/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/61/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/24/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/36/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/1527317548/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/72/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/64/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/25/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/10/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/21/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/33/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/2107379463/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/28/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/1515512761/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/1646223231/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/34/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/37/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/2092498048/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/811416297/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/604978379/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/1523147690/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/23/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/8/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/38/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/1352860597/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/5/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/82/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/41/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/891279159/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/89/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/2/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/84/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/15/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/7/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/30/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/32/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/26/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/20588782/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/9/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/3/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/12/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/67/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/43/icons/large.png',
// ]

// var triggers = <%= @url_array %>
// var actions = <%= @url_array %>

// var triggers = JSON.parse( "<%= @url_array.to_json %>" );
// var actions = JSON.parse( "<%= @url_array.to_json %>" );

// var triggers = #{raw @url_array}

// var actions = #{raw @url_array}

// var actions = "<%= @url_array%>"
// var actions = "<%= @url_array%>"


// var actions = [
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/2/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/83/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/50/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/54/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/47/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/51/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/42/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/43/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/67/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/9/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/26/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/30/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/84/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/13/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/41/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/82/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/5/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/1352860597/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/477718320/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/25/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/10/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/21/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/36/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/33/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/2107379463/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/55/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/812943674/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/1646223231/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/34/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/811416297/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/604978379/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/71/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/23/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/8/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/24/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/38/icons/large.png',
//   'https://d3rnbxvnd0hlox.cloudfront.net/images/channels/1380041935/icons/large.png',
// ]

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

