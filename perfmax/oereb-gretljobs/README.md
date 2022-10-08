# oereb-gretljobs

Datenbank starten:
```
docker-compose up
```
Mit `docker-compose` damit ein Netzwerk angelegt wird.


Inject Env-Vars:
```
export ORG_GRADLE_PROJECT_dbUriOerebV2="jdbc:postgresql://db/oereb"
export ORG_GRADLE_PROJECT_dbUserOerebV2="gretl"
export ORG_GRADLE_PROJECT_dbPwdOerebV2="gretl"
export ORG_GRADLE_PROJECT_geoservicesUrl="http://host.docker.internal:8083/wms/oereb"
```

TODO: CSV nochmals herstellen, da Solothurn und Grenchen nicht mehr vorhanden.

Run Gretl Jobs:
```
./start-gretl.sh --docker-image sogis/gretl:latest --docker-network threads_vs_connections_default --job-directory $PWD/ motherOfAllTasks
```