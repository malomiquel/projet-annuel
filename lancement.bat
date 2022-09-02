
@echo off
--fonctiondelancementfront(){
	echo "Lancement du Front"
	cd ../angular-front
	npm install
	ng serve
	cd ..

	}
	

fonctiondelancementback(){
	echo "Lancement du back"
	cd ../back
	npm install
	node index.js
	cd ..
	}

fonctiondelancementfront
fonctiondelancementback