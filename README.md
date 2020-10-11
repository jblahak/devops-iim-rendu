# devops-iim-rendu

Ce projet consiste à utiliser l'API Youtube et de pouvoir effectuer des recherches, et lire des vidéos. Un mini Youtube :D !

Dans ce projet j'ai effectué plusieurs choses.
J'initialise tout d'abord le déploiement sur Ubuntu, en lui précisant d'utiliser la dernière version possible. (Ceci n'est pas très opti, mais pour mon projet je ne devrais pas avoir de soucis.)
J'ai en effet ajouté un test ESlint, pour le code javascript me permettant de parser le code et détecté s'il y a des soucis ou non à propos de ce dernier. J'indique à celui-ci de s'installer avec Yarn, et d'utiliser la version 12 de node.js.

J'ai ensuite effectué un check des versions des packages, pour voir si ceux utilisés sont à jours, et que le projet ne tourne pas avec des packages dépréciés.

Ensuite, il y a le déploiement sur Heroku, me permettant de déployer mon app en Pré-prod, et en Prod.
