<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "Post@Permakultur-Danmark.dk";
    $headers = "From: " . $mailFrom;
    $txt = "Du har fået mail fra " . $name . ".\n\n" . $message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.html?mailsent");
}
