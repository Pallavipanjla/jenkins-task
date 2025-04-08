pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
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
                withDockerRegistry(credentialsId: 'dockerhub-credentials') {
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
