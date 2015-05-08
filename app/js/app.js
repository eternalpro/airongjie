/**
 * Created by fangshuai on 2015-04-13-0013.
 */
var Page = (function () {

    var $navArrows = $('#nav-arrows').hide(),
        $shadow = $('#shadow').hide(),
        slicebox = $('#sb-slider').slicebox({
            onReady: function () {
                $navArrows.show();
                $shadow.show();
            },
            orientation: 'r',
            cuboidsRandom: true,
            disperseFactor: 30
        }),

        init = function () {

            initEvents();

        },
        initEvents = function () {

            // add navigation events
            $navArrows.children(':first').on('click', function () {
                slicebox.next();
                return false;
            });

            $navArrows.children(':last').on('click', function () {
                slicebox.previous();
                return false;
            });

        };

    return {init: init};
})();

Page.init();
var height = $(document).height();
$('div.bg-white').css('min-height', height - 260);

$('a.slide-click').parent().on('click', function(e){
    e.preventDefault();
    var $this = $(this).find('a');
    var target = $this.data('target');
    $('#'+target).slideToggle(400);
});

$('ul.nav-tabs-custom>li').on('click', function(){// tabs标签切换
    var $this = $(this);
    $this.addClass('active').siblings().removeClass('active');
    var $target = $('#' + $this.data('target'));
    $this.parent().siblings().hide();
    $target.show();
}).each(function(i, o){// 初始化标签内容
    if($(o).hasClass('active')){
        $('#' + $(o).data('target')).show();
    }else{
        $('#' + $(o).data('target')).hide();
    }
});

var cp = function (selector, value, size, p, gradient) {
    selector.circleProgress({
        value: value,
        size: size,
        fill: gradient? gradient : {gradient: ['#4B86DB', '#4B86DB']}
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(parseInt(p * progress) + '<i>%</i>');
    });
};