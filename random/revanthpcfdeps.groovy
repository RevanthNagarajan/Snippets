#!/usr/bin/env groovy
import groovy.json.JsonSlurper

def appList = ['msm', 'msproducts', 'msusers']
def appNameList = appList.sort()


properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '200')), [$class: 'JobRestrictionProperty'],
            parameters([choice(choices: appNameChoices, description: 'Name of the <b>application</b> to deploy.', name: 'applicationName'),
                        string(defaultValue: 'PROVIDE_VALUE', description: 'Provide a version', name: 'appVersion'),
                        choice(choices: envChoices, description: '', name: 'deploymentEnvironment')
            ])])

node('revanthpivotalcfbuild'){
    stage('Choose app') {
        userInput = input(
            id: 'userInput',    
            message: 'Choose an application',    
            parameters: [
                [$class: 'ChoiceParameterDefinition', choices: "'msm'\'msproducts'\'msusers'", name: 'App']
            ]
        )
    }
    stage('Deploy app') {
        sh 'echo pushing msm app to revanthpivotalcf'
        sh """
            cf login revanthpivotalcf"${userInput}" -a https://api/run/pivotal.io -u revanthnagarajan536@gmail.com -p "Revkm95@"
            cf push -f manifest.yml --vars-file "${userInput}"/"${userInput}"-manifest.yml -p target/demo-0.0.1-SNAPSHOT.jar
            cf logout
        """
    }
}