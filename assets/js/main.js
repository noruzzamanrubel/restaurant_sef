(function ($) {
    $(document).ready(function () {

        for (i = 0; i < 7; i++) {
            var today = moment();
            var startdate = today.format("DD-MM-YY");
            var new_date = moment(startdate, "DD-MM-YY").add('days', i);

            var dayName = new_date.format('dddd');
            var day = new_date.format('DD');
            var month = new_date.format('MM');
            var year = new_date.format('YY');
            var newdate = (day + '/' + month + '/' + year);

            $('.food_delivery_schedule_inner_wrapp').append(`
            <div class="col">
                    <div class="food_delivery_column">
                        <div class="food_header text-center">
                            <div class="delivery_day">
                                <p>${dayName}</p>
                            </div>
                            <div class="delivery_date">
                                <p>${newdate}</p>
                            </div>
                        </div>
                        <div class="food_delivery_content text-center">
                            <div class="onoffswitch">
                                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox"
                                    id="myonoffswitch" tabindex="0" checked>
                                <label class="onoffswitch-label" for="myonoffswitch">
                                    <span class="onoffswitch-inner"></span>
                                    <!-- <span class="onoffswitch-switch"></span> -->
                                </label>
                            </div>
                            <div class="food_delivery_items">
                                <div class="food_delivery_item">
                                    <input type="checkbox">
                                    <span>Lunch</span>
                                </div>
                                <div class="food_delivery_item">
                                    <input type="checkbox">
                                    <span>Dinner</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        }

        $('.onoffswitch input[type="checkbox"').on('click', (function () {
            if ($(this).prop("checked") == true) {
                var parentel = $(this).parents(".food_delivery_content");
                parentel.find('.food_delivery_items').addClass('active');
            } else {
                var parentel = $(this).parents(".food_delivery_content");
                parentel.find('.food_delivery_items').removeClass('active');
            }
        }));



    })
})(jQuery);