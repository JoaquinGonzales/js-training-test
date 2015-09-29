var SampleForm= function(name)
{
this.name=name;
}
/*var setFullname= function()
{
	$("input[name='fullname']").val("joaquin");
}*/
SampleForm.prototype.setFullname= function()
{
	$("input[name='fullname']").val("joaquin");
}
SampleForm.prototype.setEmail= function()
{
	$("input[name='email']").val("joaquin.jqn@gmail.com");
}

SampleForm.prototype.selectFemale= function()
{
	$("#genderF").click();
}
SampleForm.prototype.selectMale= function()
{
	$("#genderM").click();
}
SampleForm.prototype.checkHobbies= function()
{
	 for (i = 0; i < arguments.length; i++) {
		switch(arguments[i])
		{
			case 'Skiing': $("input[value='ski']").click();break;
			case 'Running': $("input[value='run']").click();break;
			case 'Eating': $("input[value='eat']").click();break;
			case 'Sleeping': $("input[value='sleep']").click();break;
			case 'Reading': $("input[value='read']").click();break;
			case 'Coding': $("input[value='code']").click();break;
			case '': throw 'error';
		}
		}
}
SampleForm.prototype.setMessage= function()
{
	$("textarea[name='message']").val("message!!!!");
}
SampleForm.prototype.Submit= function()
{
	$("input[type='submit']").click();
}


var sample= new SampleForm('form');