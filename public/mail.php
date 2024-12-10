<?php
// Function definition
function sendMail($name, $email, $request) {
  ini_set("SMTP", "smtp.yuliiapinchuk.com");
  ini_set("sendmail_from", "holosomatic.bodywork@yuliiapinchuk.com");

  $headers ='From: holosomatic.bodywork@yuliiapinchuk.com'."\n";
  $headers .='Reply-To: '.$email."\n";
  $headers .='Content-Type: text/plain; charset="iso-8859-1"'."\n";
  $headers .='Content-Transfer-Encoding: 8bit';

  if (
    mail(
      'holosomatic.bodywork@yuliiapinchuk.com, juliannapinchuk@gmail.com', 
      '[Holosomatic Bodywork] New request', 
      'From: '.$name."\r\n".'Email: '.$email."\r\n\r\n".'Request: '.$request, 
      $headers
    ) 
  ){
    echo 'ok';
  } else {
    echo 'error';
  }
}

// Check if the button was clicked
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = htmlspecialchars($_REQUEST['name']);
  $email = htmlspecialchars($_REQUEST['email']);
  $request = htmlspecialchars($_REQUEST['request']);

  ob_start();
  sendMail($name, $email, $request);
  $output = ob_get_clean(); // Store the captured output

  echo json_encode(['success' => true, 'msg' => $output, 'name' => $name, 'email' => $email, 'request' => $request]);
  exit; // End the script
}
?>
