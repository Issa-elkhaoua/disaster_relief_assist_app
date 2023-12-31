package ma.fstt.authservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = "ma.fstt.user")
@ComponentScan(basePackages = {"ma.fstt.repo","ma.fstt.config","ma.fstt.demo","ma.fstt.auth"})
@SpringBootApplication
@EnableJpaRepositories(basePackages = "ma.fstt.repo")
@EnableDiscoveryClient
public class AuthServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthServiceApplication.class, args);
    }

}
