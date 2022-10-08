SELECT
    DISTINCT ON (av.egris_egrid) 
    av.egris_egrid
FROM 
(
    SELECT 
        geometrie
    FROM 
        live_wms.so_g_rb0220222wms_nutzungsplanung_grundnutzung 
    UNION ALL
    SELECT 
        geometrie
    FROM 
        live_wms.so_g_rb0220222wms_grundwasserschutzzonen 
    UNION ALL
    SELECT 
        geometrie
    FROM 
        live_wms.so_g_rb0220222wms_belastete_standorte 
) AS foo,
(
    SELECT 
        g.egris_egrid, l.geometrie
    FROM 
        live.dm01vch24lv95dliegenschaften_grundstueck AS g
        RIGHT JOIN live.dm01vch24lv95dliegenschaften_liegenschaft AS l 
        ON l.liegenschaft_von = g.t_id 
) AS av
WHERE 
    ST_Intersects(foo.geometrie,av.geometrie)
