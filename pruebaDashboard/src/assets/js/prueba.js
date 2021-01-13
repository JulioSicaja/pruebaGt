function buscarRegistros(event){
        _this = event;
        // Show only matching TR, hide rest of them
        $.each($(".table tbody tr"), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                $(this).hide();
            else
                $(this).show();
        });
}
$(document).ready(function(){
});