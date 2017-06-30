var $content = $('#content');
    
var page1 = function(){
    
    var $logo = $('<div id="logo"></div>');
    var $imagelogo = $('<div id="imagelogo">This is the page 1 message.</div>');

    $content.append($logo);
    $logo.append($imagelogo);

    $content.css({
        'width': '100%',
        'height': '900px',
        'background-image': 'url(../IMAGES/diner23.jpg)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        'border-bottom': '3px solid #f00'
    });
    
    $logo.css({
        'position': 'relative',
        'width': '250px',
        'height': '182px',
        'float': 'left',
        'margin-top': '10px',
        'margin-left': '10px'
    });

    $imagelogo.css({
        'width': '240px',
        'height': '80px',
        'textAlign': 'center'
    });  
}

var page2 = function(){
    
    var $logo = $('<div id="logo"></div>');
    var $imagelogo2 = $('<div id="imagelogo2">This is the page 2 message.</div>');

    $content.append($logo);
    $logo.append($imagelogo2);

    $content.css({
        'width': '100%',
        'height': '900px',
        'background-image': 'url(../IMAGES/diner23.jpg)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        'border-bottom': '3px solid #f00'
    });
    
    $logo.css({
        'position': 'relative',
        'width': '450px',
        'height': '182px',
        'float': 'left',
        'margin-top': '10px',
        'margin-left': '10px'
    });

    $imagelogo2.css({
        'width': '440px',
        'height': '80px',
        'textAlign': 'right'
    });  
}

var reset = function(){
    $('div#logo').remove();
    //$('div#imagelogo2').remove();
}


page1();

$('#imagelogo').on('click',function(){
    reset();
    page2();
    alert('page1 did something');
});

/*$('#imagelogo2').on('click',function(){
    reset();
    page2();
    alert('page2 did something');
});*/