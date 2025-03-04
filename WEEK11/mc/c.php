<?php
	require_once("m.php");
	class SumControl {
		public function proc() {
			//1. Kiem tra
			if (isset($_POST["x"]) && isset($_POST["y"]) 
				&& is_numeric($_POST["x"]) && is_numeric($_POST["y"])) {
				// Chuyen tham so nhan duoc sang kieu float			
				$x = floatval($_POST["x"]);
				$y = floatval($_POST["y"]);
				//2. Goi model
				$model = new SumModel($x, $y);
				$model->solve();
				$ret = $model->getResult();
				//3. Tra loi trinh khach
				header('Content-type: application/json');
				echo $ret;
			} else {
				header('Content-type: application/json');
				echo "{}";
			}
		}
	}


	$ctrl = new SumControl();
	$ctrl->proc();
