// Variables:

var $content = $('#content');
var $logo = $('<div id="logo"></div>');
var $imagelogo = $('<img id="imagelogo" src="../IMAGES/Red-Diner-Logo-1.jpg" />');
var $tabs = $('<div id="tabs"></div>');
var $ul = $('<ul></ul>');
var $tab1 = $('<li id="tab1">Home</li>');
var $tab2 = $('<li id="tab2">Menu</li>');
var $tab3 = $('<li id="tab3">Contact</li>');
var $articles = $('<div id="articles"></div>');
var $dinfo = $('<div id="dinfo"></div>');
var $infoall = $('<div id="infoall"></div>');
var $welcome = $('<p id="welcome">Welcome to the Red Diner, Mesa Arizona\'s premier 1950\'s era eatery! Take a booth and relax with the famiy enjoying our fabulous burgers & ribs, or saunter up to the counter with your sweetie and share a malt & cheese fries.</p><p id="welcome">Click on the tabs above to see our wonderful food selections or to contact us for more information.</p>');


// Add HTML content:

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
$articles.append($dinfo);
$dinfo.append($infoall);
$infoall.append($welcome);


// Add CSS styles:

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
    'background-color': '#00f',
    'border': '2px solid #00f'
});

$articles.css({
    'position': 'fixed',
    'width': '100%',
    'height': '250px',
    'top': '296px',
    'left': '80px'
})

$dinfo.css({
    'width': '80%',
    'height': '570px'
});

$infoall.css({
    'display': 'inline-block',
    'position': 'relative',
    /*'top': '-142px',
    'left': '80px',*/
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