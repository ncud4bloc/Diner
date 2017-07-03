var $content = $('#content');
var $logo = $('<div id="logo"></div>');
var $imagelogo = $('<img id="imagelogo" src="../IMAGES/Red-Diner-Logo-1.jpg" />');
var $tabs = $('<div id="tabs"></div>');
var $ul = $('<ul></ul>');
var $tab1 = $('<li id="tab1">Home</li>');
var $tab2 = $('<li id="tab2">Menu</li>');
var $tab3 = $('<li id="tab3">Contact</li>');
var $articles = $('<div id="articles"></div>');

$content.append($logo);
$logo.append($imagelogo);

$content.append($tabs);
$tabs.append($ul);
$ul.append($tab1);
    $tab1.addClass('tabclass');
$ul.append($tab2);
    $tab2.addClass('tabclass');
$ul.append($tab3);
    $tab3.addClass('tabclass');

$content.append($articles);

$content.css({
    'width': '100%',
    'height': '900px',
    'background-image': 'url(../IMAGES/diner23.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
    'border-bottom': '3px solid #f00'
});

$imagelogo.css({
    'width': '250px',
    'height': '182px',
    'float': 'left',
    'margin-top': '10px',
    'margin-left': '10px',
    'border-radius': '100px'
});

$tabs.css({
    'position': 'fixed',
    'width': '100%',
    'height': '50px',
    'left': '220px',
    'top': '225px'
});

$ul.css({
    'width': '100%'
});

$('.tabclass').css({
    'display': 'inline-block',
    'position': 'relative',
    'left': '-180px',
    'font-size': '24px',
    'font-weight': '900',
    'padding-top': '15px',
    'padding-bottom': '3px',
    'padding-left': '15px',
    'padding-right': '15px',
    'margin-right': '-1%',
    'border-top-left-radius': '50px',
    'border-top-right-radius': '15px'
});

$tab1.css({
    'background-color': '#f00',
    'border': '2px solid #f00'
});

$tab2.css({
    'background-color': '#fff',
    'border': '2px solid #fff'
});

$tab3.css({
    'background-color': '#0f0f93',
    'border': '2px solid #0f0f93'
});

$articles.css({
    'position': 'fixed',
    'width': '100%',
    'height': '250px',
    'top': '296px',
    'left': '80px'
})

var page1 = function(){
    var $dinfo = $('<div id="dinfo"></div>');
    var $infoall = $('<div id="infoall"></div>');
    var $welcome = $('<p class="welcome">Welcome to the Red Diner, Mesa Arizona\'s premier 1950\'s era eatery! Take a booth and relax with the family enjoying our fabulous burgers & ribs, or saunter up to the counter with your sweetie and share a malt & chili-cheese fries.</p><p class="welcome">Click on the tabs above to see our wonderful food selections or to contact us for more information.</p>');

    $articles.append($dinfo);
    $dinfo.append($infoall);
    $infoall.append($welcome);

    $dinfo.css({
        'width': '80%',
        'height': '570px'
    });

    $infoall.css({
        'display': 'inline-block',
        'position': 'relative',
        'width': '100%',
        'height': '246px',
        'font-size': '18px',
        'font-weight': '600',
        'background-color': '#d3cbcb',
        'opacity': '.7',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        'border': '2px solid #f00',
        'border-top-right-radius': '35px',
        'border-bottom-right-radius': '35px',
        'border-bottom-left-radius': '35px'
    });

    $welcome.css({
        'margin-top': '25px',
        'padding-left': '25px',
        'font-family': '"Dancing Script", cursive',
        'color': '#f00',
        'font-size': '28px',
        'font-weight': '900'
    });  

    plot();
}


var page2 = function(){ 
    var $dinfo = $('<div id="dinfo"></div>');
    var $infoall = $('<div id="infoall"></div>');
    var $img1 = $('<img class="images" id="img1" src="../IMAGES/menu.jpg" />');
    
    $articles.append($dinfo);
    $dinfo.append($infoall);
    $infoall.append($img1);
    
    $dinfo.css({
        'width': '80%',
        'height': '570px'
    });

    $infoall.css({
        'display': 'inline-block',
        'position': 'relative',
        'width': '80%',
        'height': '246px',
        'font-size': '18px',
        'font-weight': '600',
        'background-color': '#d3cbcb',
        'opacity': '1.0',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        'border': '2px solid #fff'
    });
    
    $img1.css({
        'display': 'inline-block',
        'box-sizing': 'border-box',
        'float': 'left',
        'width': '280px',
        'width': '100%',
        'height': '100%',
        'border': '2px solid #fff',
        'float': 'left'
    });
    
    plot();

}

var page3 = function(){ 
    var $dinfo = $('<div id="dinfo"></div>');
    var $infoall = $('<div id="infoall"></div>');
    var $img1 = $('<img class="images" id="img1" src="../IMAGES/dorks.jpg" />');
    var $message = $('<div id="message"></div>');                                   
    var $form = $('<form id="form"></form>')                                        
    var $note = $('<p class="note">Talk to the professionals!!</p><p class="note"><textarea id="comments" cols="45" rows="4">Let us know what you think....</textarea></p><p class="note"><input id="send" type="submit"value="click to send" /></p>');                       
    
    $articles.append($dinfo);
    $dinfo.append($infoall);
    $infoall.append($img1);
    $infoall.append($message); 
    $message.append($form);    
    $form.append($note);       
    
    $dinfo.css({
        'width': '80%',
        'height': '570px'
    });

    $infoall.css({
        'display': 'inline-block',
        'position': 'relative',
        'width': '80%',
        'height': '246px',
        'font-size': '18px',
        'font-weight': '600',
        'background-color': '#d3cbcb',
        'opacity': '1.0',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        'border-top-right-radius': '35px',
        'border-bottom-right-radius': '35px',
        'border-bottom-left-radius': '35px',
        'border': '2px solid #0f0f93'
    });
    
    $img1.css({
        'display': 'inline-block',
        'box-sizing': 'border-box',
        'width': '30%',
        'height': '100%',
        'border-right': '2px solid #0f0f93',
        'border-bottom-left-radius': '35px',
        'float': 'left'
    });
    
    $message.css({
        'display': 'inline-block',
        'box-sizing': 'border-box',
        'float': 'left',
        'width': '60%',
        'height': '100%'
    });
    
    $note.css({
        'font-family': 'Pacifico',
        //'border': '1px solid #0f0f93',
        'font-size': '20px',
        'margin-left': '20px'
    });
    
    $('#comments').css({
        'font-family': 'cursive',
        'font-size': '16px',
        'font-weight': '200'
    });
    
    $('#send').css({
        'margin-left': '34%',
        'font-family': 'cursive',
        'font-size': '16px',
        'font-weight': '200'
    });
    
    plot();

}

var reset = function(){
    $articles.slideUp();
    $('div#dinfo').remove();
}

var plot = function(){
    $articles.delay(200).slideDown();
}

//********** Function Calls ***************

page1();

$('#tab1').on('click',function(){
    $articles.hide();
    reset();
    page1();
});

$('#tab2').on('click',function(){
    $articles.hide();
    reset();
    page2();
});

$('#tab3').on('click',function(){
    $articles.hide();
    reset();
    page3();
});