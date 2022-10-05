```
docker-compose up --detach
```

```
docker logs -f b12094bc3260
```

Ändern der ENV-Variable im yml-File, dann:

```
docker-compose up --detach
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



## Tests

### Auswirkung "server.tomcat.threads.max"

Jeweils 10 DB-Connections im Pool und 8 parallele Requests von jmeter. Pro Request werden von der Anwendung drei Connections beansprucht.

- server.tomcat.threads.max = 2
  * Es gibt immer freie DB-Connections: `Pool stats (total=10, active=6, idle=4, waiting=0)`
  * 19.5/s
  * 100% OK
- server.tomcat.threads.max = 4: 
  * Viele `Add connection elided, waiting 2, queue 3`-Meldungen von HikariPool.
  * 23.5/s
  * 100% OK
- server.tomcat.threads.max = 8:
  * Viele `Add connection elided, waiting 2, queue 6`-Meldungen von HikariPool. 
  * `java.sql.SQLTransientConnectionException: HikariPool-1 - Connection is not available, request timed out after 30003ms.`
  * 0.1/s -> 
  * Viele Requests können nicht beantwortet werden.
  * Übungsabbruch

Check mit 10 DB-Connections und 32 parallelen Requests:
- server.tomcat.threads.max = 2
  * Es gibt immer freie DB-Connections: `Pool stats (total=10, active=6, idle=4, waiting=0)`
  * 19.5/s
  * 100% OK
  * Etwas höhere Max-Time als bei 8 parallelen Requests
- server.tomcat.threads.max = 3
  * Es gibt immer freie DB-Connections: `Pool stats (total=10, active=6, idle=4, waiting=0)`
  * 26/s
  * 100% OK
- server.tomcat.threads.max = 4
  * Viele `Add connection elided, waiting 1, queue 2`-Meldungen von HikariPool.
  * 24.5/s
  * 100% OK






