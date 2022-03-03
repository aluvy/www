<?
    session_start();
    
    unset($_SESSION['userid']);
    unset($_SESSION['username']);
    unset($_SESSION['usernick']);
    unset($_SESSION['userlevel']);

    echo("
        <script>
            location.href = '../index.html'; 
        </script>
    ");
?>