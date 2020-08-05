let pin = '';

function disableBtn(ID) {
    document.getElementById(ID).disabled = true;
    setTimeout(function(){document.getElementById(ID).disabled = false;},10000);
}

function Pin_Generator() {
    document.getElementById('counting_pin_try').innerText = "3 try left";
    let generated_pin = Math.floor(Math.random() * (10000 - 1000)) + 1000;
    document.getElementById('get_pin').value = generated_pin;
    pin = generated_pin.toString();
    document.getElementById('pin_generate_notice').innerText = "You cannot generate a new password next 10 seconds.";
    disableBtn('pin_gen');
    document.getElementById('btn-0').disabled = false;
    document.getElementById('btn-1').disabled = false;
    document.getElementById('btn-2').disabled = false;
    document.getElementById('btn-3').disabled = false;
    document.getElementById('btn-4').disabled = false;
    document.getElementById('btn-5').disabled = false;
    document.getElementById('btn-6').disabled = false;
    document.getElementById('btn-7').disabled = false;
    document.getElementById('btn-8').disabled = false;
    document.getElementById('btn-9').disabled = false;
    document.getElementById('user_submitted_pin').disabled = false;
    document.getElementById('pin_input_disable').innerText = "";
}

function Pin_submit_f() {
    let pin_try = document.getElementById('counting_pin_try').innerText[0];
    pin_try = parseInt(pin_try);
    let submittedPin = document.getElementById('user_submitted_pin').value;

    if (pin === "") {
        alert('Please generate a PIN first.');
    }
    else {
        if (submittedPin.length < 4 || submittedPin.length > 4) {
            alert('Please enter 4 digit PIN. Example: 1234');
        } else if (submittedPin.localeCompare(pin) !== 0) {
            pin_try -= 1;
            console.log(pin_try);
            document.getElementById('pin_unmatched').style.display = 'block';
            if (pin_try < 1) {
                document.getElementById('counting_pin_try').innerText = '0 try left, Please generate a new PIN.';
                document.getElementById('user_submitted_pin').disabled = true;
                // alert('PIN Input Disabled');
                document.getElementById('pin_input_disable').innerText = "PIN Input Disabled. Generate new PIN.";
            }
            else {
                pin_text = pin_try.toString();
                document.getElementById('counting_pin_try').innerText = pin_text + " try left";
            }
        } else if (submittedPin.localeCompare(pin) === 0) {
            document.getElementById('pin_unmatched').style.display = 'none';
            document.getElementById('pin_matched').style.display = 'block';
            document.getElementById('get_pin').value = '';
            // document.getElementById('user_submitted_pin').disabled = true;
            document.getElementById('btn-0').disabled = true;
            document.getElementById('btn-1').disabled = true;
            document.getElementById('btn-2').disabled = true;
            document.getElementById('btn-3').disabled = true;
            document.getElementById('btn-4').disabled = true;
            document.getElementById('btn-5').disabled = true;
            document.getElementById('btn-6').disabled = true;
            document.getElementById('btn-7').disabled = true;
            document.getElementById('btn-8').disabled = true;
            document.getElementById('btn-9').disabled = true;
        }
    }
    document.getElementById('user_submitted_pin').value = '';
    document.getElementById('pin_generate_notice').innerText = "";

}
