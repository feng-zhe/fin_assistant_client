node {
    stage "prerequisites"
    git url: "/home/git/projects/fin_assistant_client.git"
    def nodeHome = tool 'node-lts'

    stage "build"
    sh "${nodeHome}/bin/npm install"
    sh "${nodeHome}/bin/gulp build"

    stage "smoke-test"
    echo "TODO"

    stage "deploy"
    echo "TODO"
}
