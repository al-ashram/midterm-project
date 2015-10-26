$(document).ready(function() {

// $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
//         $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
//     } );



// $('table.table').DataTable( {
//         scrollY:        200,
//         scrollCollapse: true,
//         paging:         false
 

  $('table').DataTable( {
    "scrollY":  "400px",
    "scrollCollapse": true,
    "paging": false,

//search by click!!
// "initComplete": function () {
//             var api = this.api();
//             api.$('td').click( function () {
//                 api.search( this.innerHTML ).draw();
//             } );
//         }



  });

  // var table = $('#example').DataTable();

  //sends popup notification on row selected
  //===============================
  // $('#example tbody').on('click', 'tr', function () {
  //       var data = table.row( this ).data();
  //       alert( 'You clicked on '+data[0]+'\'s row' );
  //   } );

  //select multiple lines
  //================================
    // $('#example tbody').on( 'click', 'tr', function () {
    //     $(this).toggleClass('selected');
    // } );
 
    // $('#button').click( function () {
    //     alert( table.rows('.selected').data().length +' row(s) selected' );
    // } );

      // Apply a search to the second table for the demo


  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

