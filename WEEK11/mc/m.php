<?php
	class SumModel {
		private $x;
		private $y;
		private $sum;
		//Nhận dữ liệu vào
		public function __construct($x, $y) {
			$this->x = $x;
			$this->y = $y;
		}
		// Giải
		public function solve() {
			$this->sum = $this->x + $this->y;
		}
		// Trả kết quả
		public function getResult() { 
			$arr = array(
				"x" => $this->x,
				"y" => $this->y,
				"sum" => $this->sum
			);
			return json_encode($arr); 
		}		
	}
?>