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
    
    var initialPoint;
    var finalPoint;
    document.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    initialPoint=event.changedTouches[0];
    }, false);
    document.addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();
    finalPoint=event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
    if (xAbs > yAbs) {
    if (finalPoint.pageX < initialPoint.pageX){
    /*СВАЙП ВЛЕВО*/}
    else{
    /*СВАЙП ВПРАВО*/}
    }
    else {
    if (finalPoint.pageY < initialPoint.pageY){
        scrollToSection('prev');}
    else{
        scrollToSection('next');}
    }
    }
    }, false);
})
