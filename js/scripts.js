
//-------------------------------------------------
function openNav() {
    document.getElementById("navbarNavDropdown").style.width = "100%";
    document.getElementById("navbarNavDropdown").style.right = "0";
}

function closeNav() {
    document.getElementById("navbarNavDropdown").style.width = "0";
    document.getElementById("navbarNavDropdown").style.right = "-100%";
}

//-------------------------------------------------------
$(document).ready(function(){
    var submitIcon = $('.icon-search');
    var inputBox = $('.form-search');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function(){
        return false;
    });
    searchBox.mouseup(function(){
        return false;
    });
    $(document).mouseup(function(){
        if(isOpen == true){
            $('.icon-search').css('display','block');
            submitIcon.click();
        }
    });
});

function buttonUp(){
    var inputVal = $('.form-search').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
        $('.icon-search').css('display','none');
    } else {
        $('.form-search').val('');
        $('.icon-search').css('display','block');
    }
}

