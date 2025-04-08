pipeline {
    agent any

    environment {
        IMAGE_NAME = 'pallavipc18/jenkins-task'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Pallavipanjla/jenkins-task.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'pallavi', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    sh 'docker push $IMAGE_NAME'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment step (e.g., docker run or deploy to Kubernetes)'
            }
        }
    }
}
