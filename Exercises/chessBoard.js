
function chessBoard (size) {
    var hash = '#', space = ' ', result = '';
   
    for (var i = 0; i < size; i++) {        

        result += '\n';

        for (var j = 0; j < size; j++) {
        
            if((i + j) % 2 == 0) {
                result  += space;
            }
            else {
                result  += hash;
            };
        };

    };

    console.log(result);
};

chessBoard(8);