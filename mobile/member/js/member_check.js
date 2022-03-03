$(document).ready(function(){
        
    //    회원가입 개인정보 동의 ------------------------------------
    $('.check_agree').on('click',check_agree);

    function check_agree(e){
        e.preventDefault();

        var checkboxLength=$('input[type="checkbox"]').length;  // 체크박스의 총개수

        var checkedLength=$('input[type="checkbox"]:checked').length;   // 체크가 되어있는 체크박스 갯수
        //console.log(checkboxLength,$('input[type="checkbox"]:checked').length)

        if(checkboxLength != checkedLength){    // 총 갯수와 체크된 갯수가 같지않으면
            alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
        }else{
            location.href="member_form.php";   //회원가입 폼 입력 페이지로 이동
        }
    }

    // 모두선택, 해제
    $('.allcheck').toggle(function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',true);

    },function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',false);

    });

    
});

function join_cancel(){
    history.go(-1);
}