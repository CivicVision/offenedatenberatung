---
title: Was ist RDF?
image: "offenedatenberatung/resources/content/wasistrdf.png"
categories: ["Linked Open Data"]
---
Das Web ist voll von Informationen und es werden täglich mehr. Eine große Herausforderung im aktuellen Web ist es die Interoperabilität zwischen heterogenen Applikationen und Daten herzustellen und zu erhalten. 

RDF hat das Ziel es möglich zu machen effektiv Informationen aus verschiedenen Quellen automatisch zu verknüpfen um daraus eine größere Menge an zusammenhängenden und nützlichen Informationen zu erstellen und die Interoperabilität zu verbessern. 

<!--more-->

## Wofür steht RDF?
RDF steht für Resource Desricption Framework und wurde 1997 vom World Wide Web Consortium (W3C) standardisiert. Es ist eine Methode zur Beschreibung von Daten in dem man die Beziehungen von Objekten definiert. 



RDF selbst ist nur eine Anleitung wie man die Beziehungen von Objekten beschreibt. 

Die Umsetzungen erfolgen über verschiedene Implmentierungen. Eine davon ist RDF/XML welches häufig gleichgesetzt wird mit RDF. Aber es ist nur eine von mehreren Implmentierungen auch wenn es die erste war. 



## Das nächste Internet
Die vielen Informationen die im Internet erstellt wurden und werden sind häufig unorganisiert und nicht immer zugänglich. 

Der nächste Schritt in unserem Internetzeitalter ist wegzukommen von diesem unorganisierten und nicht immer zugänglichen Informationen hin zu einem Internet das Informationen zu Wissen organisieren kann. Das sogenannte Semantic Web (Web 3.0 vor der Web3 Blase).



Mit dem Semantic Web können wir nicht nur Informationen über etwas finden, wir können auch noch zusätzliche Informationen aus anderen Quellen, die nicht über Stichwortsuche erreichbar wären, finden. 



RDF ist die Grundlage vom Semantic Web und kann und wird das Semantic Web so voranbringen wie HTML das für das initiale Web getan hat. HTML ist für uns Menschen da um Informationen für uns aufzubereiten. RDF ist hauptsächlich für die Maschinen da um Informationen zu erklären, organisieren und anzureichern. 

## Woraus besteht RDF?
RDF erlaubt uns Aussagen über Ressourcen/Daten zu machen. Eine Aussage definiert die Beziehung zwischen Ressourcen. Diese Aussagen haben immer folgende Struktur: Subjekt, Prädikat, Objekt.



### Subjekt, Prädikat, Objekt
Subjekt und Objekt sind die Ressourcen, die wir in Beziehung setzen. Die Art der Beziehung definieren wir mit dem Prädikat. 

Die Beziehung ist immer vom Subjekt zum Objekt. Deswegen sprechen wir auch von Graphen in RDF. 

![Graph](https://res.cloudinary.com/civicvision/image/upload/v1715870686/offenedatenberatung/resources/content/maier-subjekt_praedikat-objekt.png)

Herr Stefan Maier lebt in Berlin.

Herr Maier ist Beamter.

Herr Stefan Maier arbeitet in der Senatsverwaltung für Stadtentwicklung.


![Subjekt Prädikat Objekt](https://res.cloudinary.com/civicvision/image/upload/v1680336639/offenedatenberatung/resources/content/subjekt-praedikat-objekt-uebersicht.png)

Das Subjekt beschreibt die Informtion über die wir Aussagen treffen wollen. In unserem Fall Herr Maier.

Das Prädikat beschreibt die Art der Beziehung zwischen Subjekt und Objekt. In unserem Fall zum Beispiel lebt in.

Das Objekt ist das Wissen in unserem Fall zum Beispiel Berlin.

![Die Darstellung als Graph](https://res.cloudinary.com/civicvision/image/upload/v1680336639/offenedatenberatung/resources/content/herr-maier-full.png)

Mehr über wie RDF Graphen erstellt werden in einem anderen technischeren Post. 

### URIs
Wer sich mit Linked Open Data, Semantic Web oder RDF beschäftigt kommt zwangsläufig mit dem Begriff URI in Kontakt. 

Das schreckt viele erstmal ab, aber eine URI ist simpel gesprochen ein eindeutiger Identifier. 

Man kann diese auch als URL sehen, auch wenn technisch gesehen, die URL eine Unterform einer URI ist. 



Nur durch die Verwendung von URIs können wir die Informationen zusammenführen. Und nur durch die Verwendung der gleichen URI werden diese Informationen gefunden. Es gibt aber auch wie immer Ausnahmen die wir mit owl:sameAs adressieren können. Aber das Ziel sollte es sein, die gleichen URIs für die gleichen Daten zu verwenden. (Dafür ist es natürlich wichtig diese URIs auch zu finden)

Herr Maier sollte also über eine URI definiert werden.


Z.b. könnte die URI sein:

https://lod.berlin.de/mitarbeiter/olaf_maier

Für die Senatsverwaltung:

https://lod.berlin.de/sen/sbw


Über diese Informationen und wenn für alle Resourcen URIs verwendet werden, kann eine Maschine weitere Informationen z.b. über die Stadt Berlin, über Beamte und natürlich auch über die Senatsverwaltung bekommen und verarbeiten, in dem sie den Links (UIRs) folgt. 

![URI Graph](https://res.cloudinary.com/civicvision/image/upload/v1715870178/offenedatenberatung/resources/content/graph_maier_uri.jpg)

## Ziele von RDF
Eines der Ziele von RDF ist es diese Art von automatischer Informationsverknüpfung von mehreren Quellen zu erlauben und trotzdem sinnvolle und coherent Informationen zu erhalten. 

Außerdem könne durch die Semantic von RDF Maschinen logische Schlussfolgerungen machen. Zum Beispiel wenn wir wissen Herr Maier arbeitet für die Senatsverlwatung und wir haben einen anderen Datensatz und dort steht das Frau Schulz auch für die Senatsverwaltung arbeitet, können wir ableiten, dass die beiden Kollegen sind. 

Ein weiterer wichtiger Baustein in RDF ist, dass zwei Graphen, die das gleiche Objekt beschreiben, aber aus verschiedenen Quellen stammen, automatisch von einer Maschine zusammengeführt werden können und daraus ein größerer Graph mit mehr Informationen entstehen kann. 



Dies ist ein Überblick über die nicht so technische Seite von RDF und warum es wichtig ist. 

Ein weiterer Artikel über die technische Seite folgt demnächst. 
