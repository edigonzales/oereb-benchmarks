# oereb-gretljobs

Datenbank starten:
```
docker-compose up
```
Mit `docker-compose` damit ein Netzwerk angelegt wird.


Inject Env-Vars:
```
export ORG_GRADLE_PROJECT_dbUriOerebV2="jdbc:postgresql://oereb-db/oereb"
export ORG_GRADLE_PROJECT_dbUserOerebV2="gretl"
export ORG_GRADLE_PROJECT_dbPwdOerebV2="gretl"
export ORG_GRADLE_PROJECT_geoservicesUrl="http://localhost/wms"
```

Run Gretl Jobs:
```
./start-gretl.sh --docker-image sogis/gretl-local:latest --docker-network oereb-gretljobs_default --job-directory $PWD/oereb_av tasks --all

```