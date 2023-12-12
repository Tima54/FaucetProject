# Faucet Project

## Installation
1. Cloner le projet
2. Installer les dépendances :
```
npm i
```
3. Pour lancer le serveur :
```
npm run dev
```

## Description

### Etapes du développement

Pour ce projet, j'ai commencé par faire le smart contract du faucet (EtherFaucet) suivi de ses tests. Ensuite, la partie de déploiement du contrat et de son implémentation en React est selon la partie qui m'a le plus poser de problème.

### Description des fonctionnalités

La fonction requestEther est une fonction d'un contrat intelligent sur la blockchain Ethereum. Elle permet à un utilisateur de demander de l'Ether depuis un faucet sous certaines conditions. Ces conditions comprennent une limitation d'une demande par heure par utilisateur et une vérification de la balance du faucet. Si les conditions sont remplies, la fonction envoie 0.0001 Ether à l'utilisateur et enregistre le moment de la dernière demande.

La fonction withdrawEther permet au propriétaire du contrat intelligent de retirer l'ensemble du solde Ether du contrat. Elle est marquée comme étant exécutable uniquement par le propriétaire (onlyOwner). Lorsqu'elle est appelée, la totalité du solde Ether du contrat est transférée à l'adresse du propriétaire.

La fonction transferOwnership permet au propriétaire actuel du contrat intelligent de transférer la propriété à une nouvelle adresse spécifiée (newOwner). Cette opération change la variable "owner" pour refléter la nouvelle adresse du propriétaire. La fonction est conçue pour être exécutée uniquement par le propriétaire actuel, comme indiqué par le modificateur onlyOwner.



