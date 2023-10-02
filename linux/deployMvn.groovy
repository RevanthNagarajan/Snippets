node {
    stage 'Clone the project'
    git 'https://github.com/RevanthNagarajan/samplejv.git'
    
    dir('spring-jenkins-pipeline') {
        stage("Compilation and Analysis") {
        parallel 'Compilation': {
                sh "echo hello0"
                sh "./mvnw clean install -DskipTests"
            }, 'Static Analysis': {
                stage("Checkstyle") {
                    sh "echo hello1"
                    sh "echo checkstyle phase"
                    sh "./mvnw checkstyle:checkstyle"
                    
                    step([$class: 'CheckStylePublisher',
                        canRunOnFailed: true,
                        defaultEncoding: '',
                        healthy: '100',
                        pattern: '**/target/checkstyle-result.xml',
                        unHealthy: '90',
                        useStableBuildAsReference: true
                    ])
                }
            }
        }
    
        stage("Tests and Deployment") {
            stage("Staging") {
                sh "pid=\$(lsof -i:8989 -t); kill -TERM \$pid "
                + "|| kill -KILL \$pid"
            withEnv(['JENKINS_NODE_COOKIE=dontkill']) {
                    sh 'nohup ./mvnw spring-boot:run -Dserver.port=8989 &'
                }   
            }
        }
    }
}