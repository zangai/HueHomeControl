<?php
class Database {

	private $handle;

	public function __construct() {
		$this->handle = new PDO('sqlite:/var/www/db/hue.db'); // success
	}

	public function getSettingsData() {
		$settings;
		foreach ($this->handle->query('SELECT * FROM settings') as $row) { // prints invalid resource
			$settings[$row[0]] = $row[1];
		}
		return $settings;
	}
}

$db = new Database();
print_r($db->getSettingsData());
?>
