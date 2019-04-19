pipeline {
  agent any
  environment {
    BROWSERSTACK = credentials('browserstack-credentials')
  }
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
      agent {
        dockerfile {
          filename 'Dockerfile'
          args '-v ${PWD}/.cache/yarn:/.cache/yarn -v ${PWD}/.yarn:/.yarn'
          reuseNode true
        }
      }
      steps {
        sh 'yarn test:functional:ci'
      }
    }
  }
}
