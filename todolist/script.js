/* javascript */

window.onload  = function() {

    var input = document.querySelector(".enter_area input"); // input
    var submit = document.querySelector(".enter_area button"); // button
    var todolist = document.querySelector(".list_area dl"); // list

    var del_chk = document.querySelector('.delchk');
    var del_chk_box = document.querySelector('.delchk_bg');
    
    var addcnt = 10;


    submit.addEventListener('click', submit_function); // 버튼 클릭

    
    function submit_function(e){
        e.preventDefault();

        var newvalue = input.value; // value값을 저장

        if (input.value !== ""){ // value가 비어있지 않으면
            document.querySelector("form").style.borderColor = "";
            document.querySelector('.warning').innerText = "";
            document.querySelector('.warning').style.display = "none";
            addText(newvalue);
            input.value = ""; // 실제 value 비움

        } else { // 비어있으면 경고
            document.querySelector("form").style.borderColor = "rgba(255,0,0,.6)";
            document.querySelector('.warning').style.display = "block";
            document.querySelector('.warning').innerText = "내용을 입력하세요";
        }
        input.focus(); // input에 포커스
    };

    

    function addText(newvalue){ // 리스트 추가하기
        addcnt++;

        var newlist = document.createElement("dd"); // dd 엘리먼트 생성

        newlist.innerHTML = "<span class='chk'><input type='checkbox' id='cb-"+ addcnt +"'><label for='cb-"+ addcnt +"'></label></span>";
        newlist.innerHTML += "<span class='cont'>" + newvalue + "</span>";
        newlist.innerHTML += "<span class='fuct'><button class='btn_modify' type='button'><i class='fas fa-pen'></i></button><button class='btn_del' type='button'><i class='fas fa-trash-alt'></i></button></span>";

        todolist.append(newlist); // dl에 넣어준다

        newlist.querySelector('.chk input').addEventListener('click', check_function);// check
        newlist.querySelector('.btn_del').addEventListener('click', del_function);// delete
        newlist.querySelector('.btn_modify').addEventListener('click', modify_function);// modify
        //수정하기

    };



    function check_function(){
        var dd = this.parentElement.parentElement; // dd 선택

        if(this.checked){
            dd.classList = ' chked';
        } else {
            dd.classList.remove('chked');
        }
    }

    
    function del_function(){
        
        var btn_del = this;

        del_chk.style.display = "block";
        del_chk_box.style.display = "block";

        del_chk.querySelector('button').onclick = function(){
            btn_del.parentElement.parentElement.remove();
            del_chk.style.display="none";
            del_chk_box.style.display="none";
        }

        // 아니오 클릭 시
        del_chk.querySelector('a').onclick = function(e){
            e.preventDefault();
            
            del_chk.style.display="none";
            del_chk_box.style.display="none";
        }
    }


    //수정하기
    function modify_function(){

        var modi_value = this.parentElement.parentElement.querySelector('.cont');

            
        // modify class 없으면 실행
        if(modi_value.parentElement.classList == !' modify'){
            
            //console.log('hi2');
            modi_value.parentElement.classList += ' modify'; //클래스 추가
        
            var modify_input = "<input type='text' value='"+ modi_value.innerText +"'><button type='button'>ok</button>";

            modi_value.innerHTML = modify_input;
            
            
            modi_value.querySelector('button').onclick = function() {
                
                var mody_input = modi_value.querySelector('input').value;
                modi_value.parentElement.classList.remove('modify'); // 클래스 삭제
                modi_value.innerText = mody_input;

            }


        }
    

    }

};