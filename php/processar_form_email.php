<?php

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$telefone = addslashes($_POST['telefone']);
$mensagem = addslashes($_POST['mensagem']);

$email_to = "ygorpacheco@devwebcriativo.com.br";
$email_subject = "Contato pelo site - DevCriativo";

$email_message = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telefone."\n"."Mensagem: ".$mensagem;

$headers = "From: ".$email."\r\n"."Reply-To: ".$email."\r\n"."X-Mailer: PHP/".phpversion();

if(mail($email_to, $email_subject, $email_message, $headers)){
    echo "Mensagem enviada com sucesso!";
}else{
    echo "Falha ao enviar mensagem!";
}

?>