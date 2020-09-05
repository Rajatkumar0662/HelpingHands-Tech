function validation(){
	var name = document.getElementById('name').value;
	
	var email = document.getElementById('email').value;
	var msg = document.getElementById('msg').value;
	var response = ''.concat('Thank You for your valueable interest ', name.split(" ")[0], ' !');
	if (name.length > 0 && email.includes('@') && msg.length > 10) {
		alert(response);
		// response = ''.concat(name,'\t\t', email,'\t\t', msg,'\n');
		// window.location.href='myweb.html'+response;
	} else {
		alert('Incomplete Feed!!');
	}
	

}