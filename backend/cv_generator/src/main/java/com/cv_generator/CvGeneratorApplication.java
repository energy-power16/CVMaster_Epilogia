package com.cv_generator;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "API for CV Generator service", version = "1.0", description = "Using this API, you can generate CVs"))
public class CvGeneratorApplication {
    public static void main(String[] args) {
        SpringApplication.run(CvGeneratorApplication.class, args);
    }
}
