function contoh(p1,p2){
    var h ;
    var hasil ;
    h = ( p1 + p2 ) / 2;
    if ( h < 0 || h > 100.0){
        hasil = 'Error';
    }
    else if (h <= 40){
        hasil = 'E';
    }
    else if (h <= 55){
        hasil = 'D';
    }
    else if (h <= 70){
        hasil = 'C';
    }
    else if (h <= 80){
        hasil = 'B';
    }
    else{
        hasil = 'A';
    }
    document.getElementById('akhir').innerHTML = hasil;
}