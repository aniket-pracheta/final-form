function goback(){
	//Ti.API.info("hii");
	$.window2.close();
}

$.simple.addEventListener('click', function(e) {
	//Ti.API.info(JSON.stringify(e));
});

function toggle(e){
	//Ti.API.info(JSON.stringify(e));
	if (e.source.text == "Male"||e.source.id=="male") {
		Ti.API.info("In Male");
		$.male.text="\uf111"; //Fill
		$.female.text="\uf1db"; //Unfill
	} else {
		Ti.API.info("In Female");
		$.male.text="\uf1db"; //Unfill
		$.female.text="\uf111"; //Fill
	}
}

///date-picker
function getpicker(){
	//alert("hi");
	var viewpicker = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'#283747',
   width:"80%",
   height:270,
    });

var set = Ti.UI.createButton({
        title : 'Set',
        top : 200,
        backgroundColor:"#283747",
        color:"#2980B9",
        borderRadius:10
   });
   
   var picker = Ti.UI.createPicker({
        type : Ti.UI.PICKER_TYPE_DATE,
        dateTimeColor:"black",        
        //useSpinner for Android Only
        //useSpinner : true,
        minDate : new Date(2009, 0, 1),
        maxDate : new Date(2030, 11, 31),
        value : new Date(2014, 3, 12),
        top : 0,        
    });
    viewpicker.add(picker);
    viewpicker.add(set);  
    $.window2.add(viewpicker);
	 
    set.addEventListener('click', function(e) {
    	    var date = picker.value;
            var day = date.getDate();
            var month = date.getMonth()+1;
            var year = date.getFullYear();
            var newdate = day + "-" + month + "-" + year;
            $.dob.setValue(newdate);
            $.window2.remove(viewpicker);
             });   
}




function popcountry(){
	// var country=[];
// country[0]=Ti.UI.createPickerRow({title:"india",val:"india"});
// country[1]=Ti.UI.createPickerRow({title:"africa",val:"afrca"});
// country[2]=Ti.UI.createPickerRow({title:"china",val:"china"});
	// var picker_country=Ti.UI.createPicker({selectionIndicator:true,});
	// picker_country.add(country);
	//$.country_pop.add();
//	$.country_pop.add(picker_country);
	$.window2.add(picker_country);
//	$.country_pop.open();
	// $.window2.open(); 
}

$.country.addEventListener('change', function(e){
	//alert($.country.title);
	//alert($.cont);
	Ti.API.info(JSON.stringify(e));
	//Ti.API.info(JSON.stringify(e));
});

function pop_africa(){
	alert("hi");
	var data = [];
data[0]=Ti.UI.createPickerRow({title:'Bananas'});
data[1]=Ti.UI.createPickerRow({title:'Strawberries'});
data[2]=Ti.UI.createPickerRow({title:'Mangos'});
data[3]=Ti.UI.createPickerRow({title:'Grapes'});

$.state.add(data);
$.window2.add($.state);
//$.window2.open();	
}

 $.window2.open();     
