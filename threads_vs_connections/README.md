```
docker-compose up --detach
```

```
docker logs -f b12094bc3260
```

```
docker-compose restart webservice
```

```
export ORG_GRADLE_PROJECT_dbUriOerebV2="jdbc:postgresql://db/oereb"
export ORG_GRADLE_PROJECT_dbUserOerebV2="gretl"
export ORG_GRADLE_PROJECT_dbPwdOerebV2="gretl"
export ORG_GRADLE_PROJECT_geoservicesUrl="http://localhost/wms"
```

```
./start-gretl.sh --docker-image sogis/gretl:latest --docker-network threads_vs_connections_default --job-directory $PWD tasks --all
```

```
./start-gretl.sh --docker-image sogis/gretl:latest --docker-network threads_vs_connections_default --job-directory $PWD motherOfAllTasks
```


```
http://localhost:8080/extract/xml?EGRID=CH955832730623
```

```
/Users/stefan/apps/apache-jmeter-5.1.1/bin/jmeter -n -t oereb-web-service.jmx  -l log-n1.jtl -e -o dashboard-n1
```