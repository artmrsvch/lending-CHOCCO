$(function(){

    const seactions = $('.section');
    const monitor = $('.main-slide');
    

    let inScroll = false;
    
    
    const switchDot = menuItemIndex => {
        $('.fixed-menu__item')
            .eq(menuItemIndex)
            .addClass('fixed-menu__item_active')
            .siblings()
            .removeClass('fixed-menu__item_active');
    }
    
    const onScroll = sectionEq => {
    const position = -sectionEq * 100 + "%";  
        
        if (inScroll) return;
    
            inScroll = true;
            
            seactions
            .eq(sectionEq)
            .addClass('active-sct')
            .siblings()
            .removeClass('active-sct');
    
        monitor.css({
            'top' : position
        });
        setTimeout(() => {
            inScroll = false;
            switchDot(sectionEq);
        }, 100 + 100);
    };
    
    const scrollToSection = direction => {
        const activeSection = seactions.filter('.active-sct');
        const nextSection = activeSection.next();
        const prevSection = activeSection.prev();
    
    
        if (direction == 'next' && nextSection.length) {
            onScroll(nextSection.index());
        }
        if (direction == 'prev' && prevSection.length) {
            onScroll(prevSection.index());
        }
    }
    
    
    $('.wrapper').on('wheel', e => {
        const delta = e.originalEvent.deltaY;
    
        if (delta > 0) {
            scrollToSection('next');
        }
        if (delta < 0) {
            scrollToSection('prev');
        }
    
    })
    
    $(document).on('keydown', e => {
    
        switch(e.keyCode) {
            case 40: scrollToSection('next'); break;
            case 38: scrollToSection('prev'); break;
    
        }
    })
    
    $('[data-scroll-to]').on('click', e => {
        e.preventDefault();
        const target = $(e.currentTarget).attr("data-scroll-to");
        onScroll(target);
    })

    var startPoint={};
    var nowPoint;
    var ldelay;
    document.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    startPoint.x=event.changedTouches[0].pageX;
    startPoint.y=event.changedTouches[0].pageY;
    ldelay=new Date();
    }, false);
    /*Ловим движение пальцем*/
    document.addEventListener('touchmove', function(event) {
    event.preventDefault();
    event.stopPropagation();
    var otk={};
    nowPoint=event.changedTouches[0];
    otk.x=nowPoint.pageX-startPoint.x;
    /*Обработайте данные*/
    /*Для примера*/
    if(Math.abs(otk.x)>200){
    if(otk.x<0){/*СВАЙП ВЛЕВО(ПРЕД.СТРАНИЦА)*/}
    if(otk.x>0){/*СВАЙП ВПРАВО(СЛЕД.СТРАНИЦА)*/}
    startPoint={x:nowPoint.pageX,y:nowPoint.pageY};
    }
    }, false);
    /*Ловим отпускание пальца*/
    document.addEventListener('touchend', function(event) {
    var pdelay=new Date();
    nowPoint=event.changedTouches[0];
    var xAbs = Math.abs(startPoint.x - nowPoint.pageX);
    var yAbs = Math.abs(startPoint.y - nowPoint.pageY);
    if ((xAbs > 20 || yAbs > 20) && (pdelay.getTime()-ldelay.getTime())<200) {
        if (xAbs > yAbs) {
            if (nowPoint.pageX < startPoint.x){/*СВАЙП ВЛЕВО*/}
            else{/*СВАЙП ВПРАВО*/}
        }
    else {
        if (nowPoint.pageY < startPoint.y || !$('body').css('overflow','hidden'))
        {scrollToSection('next');}
        else{scrollToSection('prev');}
    }
    }
    }, false);

})
