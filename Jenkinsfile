pipeline {
    
    stages {
        stage('Build') {
            steps {
                sh "npm set strict-ssl false"
                sh "npm install"
                
            }
            
        }
        stage('Tests') {
            steps {
                sh "npm run test:ci"
            }
            post {
                always {
                    junit testDataPublishers:[[$class: 'AttachmentPublisher']], testResults: "tests_output/**/*.xml"
                }
            }
        }
    }
}

