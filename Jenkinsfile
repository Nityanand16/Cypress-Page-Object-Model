pipeline {
	agent any
	stages {
		stage('Clone Git Repo'){
				steps{
					git 'https://github.com/Nityanand16/Cypress-Page-Object-Model.git'
		    }
		}
		stage('Install Dependencies'){
				steps{
					bat 'npm install'
					sh returnStdout: true, script: 'npm install'
				}
		}
		stage('Run Tests'){
				steps{
					bat 'npx cypress run'
					sh returnStdout: true, script: 'npx cypress run'
				}
		}
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/results/mochawesome', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: ''])
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/results/mochawesome', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
}
