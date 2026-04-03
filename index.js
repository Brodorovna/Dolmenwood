  <title>Интерактивная карта</title>
<script src="dist/oi.hexmap.js"></script>
  <style>/* Define the size of the hexmap area */
#hexmap1 { height: 300px; width: 100%; }
    </style>
  // Attach our hexmap to <div id="hexmap1"></div>
hex = new OI.hexmap(document.getElementById('hexmap1'),{
	// Define the HexJSON - https://open-innovations.org/projects/hexmaps/hexjson
	'hexjson':{
		"layout":"odd-r",
		"hexes": {
			"A":{"n":"0,1","q":0,"r":1},
			"B":{"n":"1,1","q":1,"r":1},
			"C":{"n":"2,1","q":2,"r":1},
			"D":{"n":"0,2","q":0,"r":2},
			"E":{"n":"1,2","q":1,"r":2},
			"F":{"n":"2,2","q":2,"r":2}
		}
	}
});
<div id="hexmap1"></div>

