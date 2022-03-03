$(document).ready(function(){
    $.ajax({
        url:'./js/donation.json',
        dataType: 'json',
        success: function(data){
            var useData = data.donation;

            function dataPrint(){

                var txt = '';

                txt += '<table>';
                txt += '<caption class="hidden">기부금 현황 테이블</caption>';
                txt += '<tr>';
                txt += '<th scope="col">구분</th>';
                
                for(var i in useData){
                    txt += '<td>' + useData[i].year  + '</td>';
                }
                txt += '</tr>';
                txt += '<tr>';
                txt += '<th scope="col">기부금(원)</th>';

                for(var i in useData){
                    var money = useData[i].money;
                    money = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    txt += '<td>'+ money +'</td>';
                }
                txt += '</tr></table>';

                $('.donation').html(txt);

            }
            dataPrint();
        }
    });
});