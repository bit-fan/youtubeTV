var keyPress = {
    pressed: function () {
        $('window').on('keyup', function (e) {
            console.log(e, this);
            $('#keycode').text(e.which);
            if (e.which == 37) {
                $('window').trigger('BTN', 'LEFT');
            } else if (e.which == 39) {
                $('window').trigger('BTN', 'UP');
            } else if (e.which == 39) {
                $('window').trigger('BTN', 'RIGHT');
            } else if (e.which == 40) {
                $('window').trigger('BTN', 'DOWN');
            }
            return true;
        })
    }
}