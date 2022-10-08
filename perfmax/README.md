## todo
- Separates Repo für Daten, damit Tests immer gleich.


## run

```
docker compose up --detach
```
Detach, damit man in docker-compose Parameter ändern kann und alles restarten kann.

```
export ORG_GRADLE_PROJECT_dbUriOerebV2="jdbc:postgresql://db/oereb"
export ORG_GRADLE_PROJECT_dbUserOerebV2="gretl"
export ORG_GRADLE_PROJECT_dbPwdOerebV2="gretl"
export ORG_GRADLE_PROJECT_geoservicesUrl="http://localhost/wms"
```

```
./start-gretl.sh --docker-image sogis/gretl:latest --docker-network perfmax_default --job-directory $PWD tasks --all
```

```
./start-gretl.sh --docker-image sogis/gretl:latest --docker-network perfmax_default --job-directory $PWD motherOfAllTasks
```

```
docker logs -f b12094bc3260
```

Ändern der ENV-Variable im yml-File, dann:

```
docker-compose up --detach
```