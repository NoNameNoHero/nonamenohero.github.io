$(function() {
    document.oncontextmenu = function () { return false; }; //отключение контекстного меню
    $('.field-size .small, .field-size .medium, .field-size .large').on('click', function(e){
        $(e.target).parent().hide();
        switch(e.target.className){
            case 'small': generateField(10); break;
            case 'medium': generateField(25); break;
            case 'large': generateField(40) ;break;
            default: generateField(10); break;
        }
    });

    $('#field').on('mousedown','div:not(.flag)', function (e) {
        if(e.button == 0){
            console.time("walkLength");
            let cell = $(e.target).attr('data-cell');
            if(!checkBomb(cell.split(',')[0], cell.split(',')[1])){
                checkNearFields(cell.split(',')[0], cell.split(',')[1], Math.sqrt($('#field div').length));
            }else{
                $(e.target).css('background-color', '#FF4040').css('background-image', 'url(bomb.png)');
                showBombs(Math.sqrt($('#field div').length));
            }
            console.timeEnd("walkLength");
            checkForWin(Math.sqrt($('#field div').length));
        }else if(e.button == 2){
            $(e.target).toggleClass('flag');
        }
    });
    $('#field').on('mousedown', '.flag', function (e) {
        $(e.target).toggleClass('flag');
    });
});


let fields = [], fieldsCheck = [];

function generateField(size = 10){
    let str = '';
    for(let i = 0; i < size; i++){
        for (let j = 0; j < size; j++) {
            str += '<div data-cell="'+ i +','+ j +'"></div>';
        }
        str += '<br>';
    }
    $('#field').append(str);
    initializeBombs(size);
}

function initializeBombs(size) {
    let count = size == 10 ? size : size == 25 ? size * 3 : size * 5;
    for (let i = 0; i < size; i++) {
        fields[i] = new Array(10);
        fieldsCheck[i] = new Array(10);
        for (let j = 0; j < size; j++) {
            fields[i][j] = 0;
            fieldsCheck[i][j] = false;
        }
    }
    for (let i = 0; i < count; i++) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);
        fields[x][y] == 1 ? i-- : fields[x][y] = 1;
    }
    $('.quantity').text('Бомб: '+ count); 
}

function checkBomb(x, y) {
    return fields[x][y];
}

function checkNearFields(x, y, size, cells) {
    x = +x; y = +y;
    let bombsAround = 0;
    if (typeof (cells) == 'undefined') { cells = []; } else { cells.shift();}
    fieldsCheck[x][y] = true;
    if (x - 1 >= 0 && y - 1 >= 0 && !fieldsCheck[x - 1][y - 1]) {
        if (checkBomb(x - 1, y - 1)) bombsAround++; 
    }
    if (x - 1 >= 0) {
        if (checkBomb(x - 1, y)) bombsAround++;
    }
    if (x - 1 >= 0 && y + 1 < size && !fieldsCheck[x - 1][y + 1]) {
        if (checkBomb(x - 1, y + 1)) bombsAround++;
    }
    
    if (y - 1 >= 0) {
        if (checkBomb(x, y - 1)) bombsAround++; 
    }
    if (y + 1 < size) {
        if (checkBomb(x, y + 1)) bombsAround++; 
    }

    if (x + 1 < size && y - 1 >= 0 && !fieldsCheck[+x + 1][y - 1]) {
        if (checkBomb(x + 1, y - 1)) bombsAround++; 
    }
    if (x + 1 < size) {
        if (checkBomb(x + 1, y)) bombsAround++;
    }
    if (x + 1 < size && y + 1 < size && !fieldsCheck[+x + 1][+y + 1]) {
        if (checkBomb(x + 1, y + 1)) bombsAround++; 
    }

    if (bombsAround == 1) {
        $('div[data-cell="' + x + ',' + y + '"]').html('<span>' + bombsAround + '</span>').css('pointer-events', 'none').css('box-shadow', 'none').css('color', 'green').removeClass('flag');
    } else if (bombsAround == 2) {
        $('div[data-cell="' + x + ',' + y + '"]').html('<span>' + bombsAround + '</span>').css('pointer-events', 'none').css('box-shadow', 'none').css('color', '#FF9340').removeClass('flag');
    } else if (bombsAround == 3) {
        $('div[data-cell="' + x + ',' + y + '"]').html('<span>' + bombsAround + '</span>').css('pointer-events', 'none').css('box-shadow', 'none').css('color', '#0969A2').removeClass('flag');
    } else if (bombsAround == 4) {
        $('div[data-cell="' + x + ',' + y + '"]').html('<span>' + bombsAround + '</span>').css('pointer-events', 'none').css('box-shadow', 'none').css('color', '#03436A').removeClass('flag');
    } else if (bombsAround == 5) {
        $('div[data-cell="' + x + ',' + y + '"]').html('<span>' + bombsAround + '</span>').css('pointer-events', 'none').css('box-shadow', 'none').css('color', '#A65B00').removeClass('flag');
    } else if (bombsAround >= 6) {
        $('div[data-cell="' + x + ',' + y + '"]').html('<span>' + bombsAround + '</span>').css('pointer-events', 'none').css('box-shadow', 'none').css('color', '#FF3D00').removeClass('flag');
    } else if (bombsAround >= 7) {
        $('div[data-cell="' + x + ',' + y + '"]').html('<span>' + bombsAround + '</span>').css('pointer-events', 'none').css('box-shadow', 'none').css('color', '##A62800').removeClass('flag');
    } else {

        if (x - 1 >= 0 && !fieldsCheck[x - 1][y]) {
            if (!~cells.indexOf((x - 1) + "," + y)) cells.push((x - 1)+","+ y); 
        }
        if (y - 1 >= 0 && !fieldsCheck[x][y - 1]) {
            if (!~cells.indexOf(x + "," + (y - 1))) cells.push(x + "," + (y - 1));
        }
        if (y + 1 < size && !fieldsCheck[x][+y + 1]) {
            if (!~cells.indexOf(x + "," + (y + 1))) cells.push(x + "," + (y + 1));
        }

        if (x + 1 < size && !fieldsCheck[+x + 1][y]) {
            if (!~cells.indexOf((x + 1) + "," + y)) cells.push((x + 1) + "," + y);
        }


//---------------
        if (x + 1 < size && y + 1 < size && !fieldsCheck[+x + 1][+y + 1]) {
            if (!~cells.indexOf((x + 1) + "," + (y + 1))) cells.push((x + 1) + "," + (y + 1));
        }
        if (x - 1 >= 0 && y + 1 < size && !fieldsCheck[+x - 1][+y + 1]) {
            if (!~cells.indexOf((x - 1) + "," + (y + 1))) cells.push((x - 1) + "," + (y + 1));
        }
        if (x + 1 < size && y - 1 >= 0 && !fieldsCheck[+x + 1][y - 1]) {
            if (!~cells.indexOf((x + 1) + "," + (y - 1))) cells.push((x + 1) + "," + (y - 1));
        }
        if (x - 1 >= 0 && y - 1 >= 0 && !fieldsCheck[+x - 1][y - 1]) {
            if (!~cells.indexOf((x - 1) + "," + (y - 1))) cells.push((x - 1) + "," + (y - 1));
        }
//---------------



        $('div[data-cell="' + x + ',' + y + '"]').css('box-shadow', 'none').css('pointer-events', 'none').removeClass('flag');
    }
    for (let i = 0; i < cells.length; i++) {
        checkNearFields(cells[i].split(",")[0], cells[i].split(",")[1], size, cells);
    }
}

function checkForWin(size){
    let c = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (fieldsCheck[i][j]) c++;
        }
    }
    if (size * size - c == $('.quantity').text().split(':')[1].trim()) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (fields[i][j] == 1) $('div[data-cell="' + i + ',' + j + '"]').css('background-color', '#67E46F').css('background-image', 'url(bomb.png)');
            }
        }
        $('#field').css('pointer-events', 'none');
        alert(':D You`re won! Press F5 to restart!')
    }
}

function showBombs(size){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (fields[i][j] == 1) $('div[data-cell="' + i + ',' + j + '"]').css('background-color', '#FF4040').css('background-image', 'url(bomb.png)');
        }
    }
    $('#field').css('pointer-events','none');
    alert('T_T You`re lost! Press F5 to restart!');
}