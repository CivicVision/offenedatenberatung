---
title: "Was ist Turtle?"
image: "offenedatenberatung/resources/content/wasistturtle.png"
categories: ["Linked Open Data"]
---
Turtle ist eine menschenlesbare Syntax zur Darstellung von RDF (Resource Description Framework) Daten. RDF ist ein standardisiertes Format für die Beschreibung und Verknüpfung von Linked Data.  

Die Turtle-Syntax ist einfach und leicht zu erlernen und ermöglicht es, RDF-Daten darzustellen. Im Vergleich zu RDF/XML ist die Turtle-Syntax kürzer und einfacher zu lesen.  
<!--more-->

Sie verwendet Präfixe, um URI-Referenzen abzukürzen, und benutzt Symbole wie `;` und `,`, um die Struktur der Daten zu beschreiben. RDF/XML hingegen verwendet XML-Tags und Attribute, um die gleichen Informationen darzustellen.  

Ein einfaches Beispiel:  
```ttl
prefix gc: <http://example.com/ontology/garbagecollection#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<http://example.com/garbagecollection/1>
    a gc:GarbageCollection ;
    gc:street "Main St" ;
    gc:dayOfWeek "Monday" ;
    gc:startTime "08:00:00"^^xsd:time ;
    gc:endTime "12:00:00"^^xsd:time .

<http://example.com/garbagecollection/2>
    a gc:GarbageCollection ;
    gc:street "Maple Ave" ;
    gc:dayOfWeek "Wednesday" ;
    gc:startTime "09:00:00"^^xsd:time ;
    gc:endTime "11:00:00"^^xsd:time .
```
Zum Vergleich das gleiche als RDF/XML

```xml
<rdf:RDF
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:gc="http://example.com/ontology/garbagecollection#"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <rdf:Description rdf:about="http://example.com/garbagecollection/1">
    <rdf:type rdf:resource="http://example.com/ontology/garbagecollection#GarbageCollection"/>
    <gc:street>Main St</gc:street>
    <gc:dayOfWeek>Monday</gc:dayOfWeek>
    <gc:startTime rdf:datatype="http://www.w3.org/2001/XMLSchema#time">08:00:00</gc:startTime>
    <gc:endTime rdf:datatype="http://www.w3.org/2001/XMLSchema#time">12:00:00</gc:endTime>
  </rdf:Description>
  <rdf:Description rdf:about="http://example.com/garbagecollection/2">
    <rdf:type rdf:resource="http://example.com/ontology/garbagecollection#GarbageCollection"/>
    <gc:street>Maple Ave</gc:street>
    <gc:dayOfWeek>Wednesday</gc:dayOfWeek>
    <gc:startTime rdf:datatype="http://www.w3.org/2001/XMLSchema#time">09:00:00</gc:startTime>
    <gc:endTime rdf:datatype="http://www.w3.org/2001/XMLSchema#time">11:00:00</gc:endTime>
  </rdf:Description>
</rdf:RDF>
```

Z.b. schreiben wir in Turtle:

```ttl
gc:startTime "08:00:00"^^xsd:time ;
```

im Vergleich dazu das RFD/XML:

```xml
<gc:startTime rdf:datatype="http://www.w3.org/2001/XMLSchema#time">08:00:00</gc:startTime>
```

Durch die Definition des Präfixes am Begin der Datei benutzen wir direkt xsd:time anstelle der kompletten URI http://www.w3.org/2001/XMLSchema#time
Beide Formate können verwendet werden, um RDF-Daten zu speichern und zu übertragen, aber Turtle wird häufig als leichtere Alternative betrachtet.
Das Turtle ist deutlich einfacher zu lesen auch ohne Syntax Highlighting.
