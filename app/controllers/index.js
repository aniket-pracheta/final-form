function register_page() {
    //alert("hii");
    var newpage=Alloy.createController('win2').getView();
    newpage.open();
}

function getpicker(){
	
	var viewpicker = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'#E74C3C',
   width:"80%",
   height:270,
    });

var set = Ti.UI.createButton({
        title : 'Set',
        top : 200,
        backgroundColor:"#7B241C",
        borderRadius:10
   });
   
   var picker = Ti.UI.createPicker({
        type : Ti.UI.PICKER_TYPE_DATE,
        dateTimeColor:"black",        
        //useSpinner for Android Only
        //useSpinner : true,
        minDate : new Date(2009, 0, 1),
        maxDate : new Date(2022, 11, 31),
        value : new Date(2014, 3, 12),
        top : 0,        
    });
    viewpicker.add(picker);
    viewpicker.add(set);  
    $.index.add(viewpicker);
	 
    set.addEventListener('click', function(e) {
    	    var date = picker.value;
            var day = date.getDate();
            var month = date.getMonth()+1;
            var year = date.getFullYear();
            var newdate = day + "-" + month + "-" + year;
            $.dob.setValue(newdate);
            $.index.remove(viewpicker);
             });          
}
	

// $.index.open();
var newpage=Alloy.createController('win2').getView();
    newpage.open();