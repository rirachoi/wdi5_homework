
$(document).ready(function(){

  var lines = {
       N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
       L: ['8th','6th','Union Square','3rd','1st'],
       Six: ['Grand Cen;tral','33rd','28th','23rd','Union Square','Astor Place']
      }; // end lines define

  // var $select = $('<select/>');
  //     $select.attr({'for': 'line'})
  // var $option = $('<option/>');
  //     $option.attr({ 'value': 'N' }).text('N line');
  //     $('#select').append($option);
  //$('#userOptions').append($select);

    var sLines = Object.keys(lines)
      for (var i = 0; i < sLines.length; i++){
        var $option = $('<option/>');
        var $line = sLines[i];
        console.log($line);
        $option.attr({ 'value': $line }).text($line + ' line');
        $('#startLine').append($option);
      }; // end for loop

    var sLinesKeys = Object.keys(lines);
      for (var l = 0; l < sLinesKeys.length; l++){
        var $stops = lines[sLinesKeys[l]];
        console.log($stops);
          for (var i = 0; i < $stops.length; i++){
            var $option = $('<option/>');
            var $stop = $stops[i];
            console.log($stop);
            $option.attr({ 'value': $stop }).text($stop);
            $('#startStop').append($option);
          };//end for stops loop
      }; // end for sartStop loop

    var eLines = Object.keys(lines);
      for (var i = 0; i < eLines.length; i++){
        var $option = $('<option/>');
        var $line = eLines[i];
        $option.attr({ 'value': $line }).text( $line + ' line');
        $('#endLine').append($option);
      }; // end for eLine loop

    var eLinesKeys = Object.keys(lines);
      for (var n = 0; n < eLinesKeys.length; n++){
        var $stops = lines[eLinesKeys[n]];
        console.log($stops);
          for (var i = 0; i < $stops.length; i++){
            var $option = $('<option/>');
            var $stop = $stops[i];
            console.log($stop);
            $option.attr({ 'value': $stop }).text($stop);
            $('#endStop').append($option);
          };//end for stops loop
      }; // end for sartStop loop


  var tracker = function(startLine, startStop, endLine, endStop){
    if (startLine == endLine){
      var startIndex = lines[startLine].indexOf(startStop);
      var endIndex = lines[endLine].indexOf(endStop);
      var singleTotal = Math.abs(endIndex - startIndex);
      console.log("There are total " + singleTotal + " stops! ");
      $('#button').after("<h2>There are <span>total " + singleTotal + "</span> stops! </h2>");
    } else {
      var startIndex = lines[startLine].indexOf(startStop);
      var endIndex = lines[endLine].indexOf(endStop);
      var startIntersectIndex = lines[startLine].indexOf("Union Square");
      var endIntersectIndex = lines[endLine].indexOf("Union Square");
      var totalStops = Math.abs(startIntersectIndex - startIndex) + Math.abs(endIntersectIndex - endIndex);
      console.log("There are total " + totalStops + " stops! ");
      $('#button').after("<h2>There are total " + totalStops + " stops! </h2>");
    }
  }; //end stops calcurate

  $('#button').click(function(){
    var sl = $('#startLine').val();
    var el = $('#endLine').val();
    var ss = $('#startStop').val();
    var es = $('#endStop').val();
    tracker(sl, ss, el, es);
  });//end button Click!

}); //end document



