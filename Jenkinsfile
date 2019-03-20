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
export DISPLAY=:99.0
sh -e /etc/init.d/xvfb start
sleep 3
yarn start --detach 2>&1 &
sleep 5
./src/tests/functional/runSmokeTest.sh
pkill node'''
      }
    }
  }
}