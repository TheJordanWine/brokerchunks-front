FROM openjdk:8-jdk-alpine
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
ARG DEPENDENCY=target/dependency
COPY ${DEPENDENCY}/BOOT-INF/lib /classes/lib
COPY ${DEPENDENCY}/META-INF /classes/META-INF
COPY ${DEPENDENCY}/BOOT-INF/classes /classes
ENTRYPOINT ["java","-cp","classes:classes/lib/*","com.drchunks.brokerchunks.frontend.BrokerchunksFrontApplication"]