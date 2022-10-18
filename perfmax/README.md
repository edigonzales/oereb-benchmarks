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
docker compose up --detach
```

```
/home/oereb/apps/jmeter/apache-jmeter-5.1.1/bin/jmeter -n -t oereb-web-service.jmx  -l log-n1-c40-th12.jtl -e -o dashboard-n1-c40-th12

/home/oereb/apps/jmeter/apache-jmeter-5.1.1/bin/jmeter -n -t oereb-web-service.jmx  -l log-n8-c40-th12.jtl -e -o dashboard-n8-c40-th12

/home/oereb/apps/jmeter/apache-jmeter-5.1.1/bin/jmeter -n -t oereb-web-service.jmx  -l log-n12-c40-th12.jtl -e -o dashboard-n12-c40-th12

/home/oereb/apps/jmeter/apache-jmeter-5.1.1/bin/jmeter -n -t oereb-web-service.jmx  -l log-n16-c40-th12.jtl -e -o dashboard-n16-c40-th12 
(kann gemäss meiner Logik gar nicht gross anders sein, da jetzt th=12 limitiernd ist)

/home/oereb/apps/jmeter/apache-jmeter-5.1.1/bin/jmeter -n -t oereb-web-service.jmx  -l log-n16-c50-th16.jtl -e -o dashboard-n16-c50-th16 

/home/oereb/apps/jmeter/apache-jmeter-5.1.1/bin/jmeter -n -t oereb-web-service.jmx  -l log-n16-c50-th16-graaljdk-parallelgc.jtl -e -o dashboard-n16-c50-th16-graaljdk-parallelgc



/home/oereb/apps/jmeter/apache-jmeter-5.1.1/bin/jmeter -n -t oereb-web-service.jmx  -l log-n1-c50-th16-d16.jtl -e -o dashboard-n1-c50-th16-d16 



```


```
http://65.109.10.223:8080/extract/xml/?EGRID=CH955832730623
```