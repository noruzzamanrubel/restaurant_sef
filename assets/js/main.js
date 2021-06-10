(function($) {
    $(document).ready(function() {
        var today = moment().subtract(1, 'day');

        renderNextSevenDays(today);

        $('.availability_shedule_right_arrow').click(function() {
            renderNextSevenDays(today);
        });

        $('.availability_switch').click(function() {
            var items = $(this).closest('.availability_content').children('.availability_items');

            if ($(this).prop('checked')) {
                items.slideDown();
            } else {
                items.slideUp();
            }
        })
    });

    function renderNextSevenDays(today) {
        for (var i=1; i<=7; i++) {
            today.add(1, 'days');
            var day = today.format('dddd');
            var date = today.format('DD/MM/YYYY')

            $('#day_'+i+'_day').text(day);
            $('#day_'+i+'_date').text(date);
        }
    }
})(jQuery);