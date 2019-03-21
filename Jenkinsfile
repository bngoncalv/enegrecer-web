pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Lint') {
      steps {
        sh 'yarn lint'
      }
    }
    stage('Unit Test') {
      steps {
        sh 'CI=true yarn test'
      }
    }
    stage('Functional Test') {
      steps {
        sh '''chmod +x ./src/tests/functional/runSmokeTest.sh
           ./src/tests/functional/runSmokeTest.sh'''
      }
    }
  }
}
