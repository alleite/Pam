<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

 
 $query_buscar = $pdo->query("SELECT * from cliente where telefone = '$postjson[telefone]' ");
 $dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);
 if(@count($dados_buscar) > 0){
 	 $result = json_encode(array('success'=>'Cliente já Cadastrado!'));
 	 echo $result;
 	 exit();
 }else{
 	$query = $pdo->prepare("INSERT INTO cliente SET nome = :nome, telefone = :telefone, procedimento = :procedimento, dia = :dia, horario = :horario, pagamento = :pagamento ");
  
       $query->bindValue(":nome", $postjson['nome']);
       $query->bindValue(":telefone", $postjson['telefone']);
       $query->bindValue(":procedimento", $postjson['procedimento']);
       $query->bindValue(":dia", $postjson['dia']);
       $query->bindValue(":horario", $postjson['horario']);
       $query->bindValue(":pagamento", $postjson['pagamento']);

      
       $query->execute();
  
             
  
      if($query){
        $result = json_encode(array('success'=>true));
  
        }else{
        $result = json_encode(array('success'=>false));
    
        }

        echo $result;
 }

 
     


?>