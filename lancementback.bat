@echo off
fonctiondelancementback(){
	echo "Lancement du back"
	cd ../back
	npm install
	node index.js
	cd ..
	}
    fonctiondelancementback