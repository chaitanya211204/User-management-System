//package com.example.crud_app.config;
//
//import jakarta.persistence.EntityManagerFactory;
//import org.hibernate.jpa.boot.spi.EntityManagerFactoryBuilder;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.boot.jdbc.DataSourceBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import javax.sql.DataSource;
//
//@Configuration
//@EnableTransactionManagement
//@EnableJpaRepositories(
//        basePackages = "com.example.crud.repository",
//        entityManagerFactoryRef = "crudEntityManagerFactory",
//        transactionManagerRef = "crudTransactionManager"
//)
//public class CrudDataSourceConfig {
//
//    @Bean
//    @ConfigurationProperties(prefix = "crud.datasource")
//    public DataSource crudDataSource() {
//        return DataSourceBuilder
//                .create()
//                .url("jdbc:mysql://localhost:3306/crud_db")
//                .username("root")
//                .password("chaitanya")
//                .driverClassName("com.mysql.cj.jdbc.Driver")
//                .build();
//    }
//
//    @Bean
//    public LocalContainerEntityManagerFactoryBean crudEntityManagerFactory(
//            @Qualifier("crudDataSource") DataSource crudDataSource,
//            EntityManagerFactoryBuilder builder) {
//        return builder
//                .dataSource(crudDataSource)
//                .packages("com.example.crud.model") // your entity package
//                .persistenceUnit("crud")
//                .build();
//    }
//
//    @Bean
//    public PlatformTransactionManager crudTransactionManager(
//            @Qualifier("crudEntityManagerFactory") EntityManagerFactory factory) {
//        return new JpaTransactionManager(factory);
//    }
//}
