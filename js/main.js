(function($) {
    $(window).on('load', function() {
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }
    });
    $('.humberger__open').on('click', function() {
        $('.humberger__menu__wrapper').addClass('show__humberger__menu__wrapper');
        $('.humberger__menu__overlay').addClass('active');
        $('body').addClass('over_hid');
    });

    $('.humberger__menu__overlay').on('click', function() {
        $('.humberger__menu__wrapper').removeClass(
            'show__humberger__menu__wrapper'
        );
        $('.humberger__menu__overlay').removeClass('active');
        $('body').removeClass('over_hid');
    });

    $('.mobile-menu').slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true,
    });
})(jQuery);