<?php 

include_once('conexao.php');

$busca = '%' .$_GET['busca']. '%';

$query = $pdo->query("SELECT * from cliente where nome LIKE '$busca'");

 $res = $query->fetchAll(PDO::FETCH_ASSOC);

 	for ($i=0; $i < count($res); $i++) { 
      foreach ($res[$i] as $key => $value) {
      }
 		$dados[] = array(
 			'id' => $res[$i]['id'],
 			'nome' => $res[$i]['nome'],
			'telefone' => $res[$i]['telefone'],
            'procedimento' => $res[$i]['procedimento'],
 			'dia' => $res[$i]['dia'],
 			'horario' => $res[$i]['horario'],
			'pagamento' => $res[$i]['pagamento'],
                              
 		);

 		}

        if(count($res) > 0){
                $result = json_encode(array('success'=>true, 'result'=>$dados));

            }else{
                $result = json_encode(array('success'=>false, 'result'=>'0'));

            }
            echo $result;

 ?>