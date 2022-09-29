
$(document).ready(function () {

    $('.saveBtn').on('click', function () {

    const value = $(this).siblings('.description').val();
     const time = $(this).parent().attr('id');
  

      localStorage.setItem(time, value);
  
     
      $('.notification').addClass('show');
   
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);
    });
  
    function hourUpdater() {
   
     const currentHour = moment().hours();
  
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
    
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdater();
  
   
    var interval = setInterval(hourUpdater, 15000);
  
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11.description').val(localStorage.getItem('11'));
    $('#12.description').val(localStorage.getItem('12'));
    $('#1pm .description').val(localStorage.getItem('1pm'));
    $('#2pm .description').val(localStorage.getItem('2pm'));
    $('#3pm.description').val(localStorage.getItem('3pm'));
    $('#4pm.description').val(localStorage.getItem('4pm'));
    $('#5pm.description').val(localStorage.getItem('5pm'));
  
    
    $('#currentDay').text(moment().format('MMM Do YY'));
  });
  
